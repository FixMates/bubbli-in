const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff'
};
const MAX_BODY_BYTES = 2 * 1024 * 1024;
const MAX_CREATES_PER_HOUR = 20;

function json(data, status = 200, request = null) {
  const headers = new Headers(JSON_HEADERS);
  const origin = request && request.headers.get('Origin');
  if (origin && isAllowedOrigin(request)) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type');
    headers.set('Vary', 'Origin');
  }
  return new Response(JSON.stringify(data), { status, headers });
}

function isAllowedOrigin(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;
  try {
    const url = new URL(origin);
    return url.hostname === 'bubbli.in' || url.hostname === 'www.bubbli.in' ||
      url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  } catch (_) {
    return false;
  }
}

export default {
  async fetch(request, env) {
    if (!isAllowedOrigin(request)) return json({ error: 'Origin not allowed' }, 403, request);
    if (request.method === 'OPTIONS') {
      const origin = request.headers.get('Origin');
      return new Response(null, { status: 204, headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin'
      } });
    }
    if (!env.INVITATIONS) return json({ error: 'Invitation storage is not configured' }, 503, request);

    const url = new URL(request.url);
    if (url.pathname === '/api/invitations' && request.method === 'POST') {
      const declaredLength = Number(request.headers.get('Content-Length') || 0);
      if (declaredLength > MAX_BODY_BYTES) return json({ error: 'Invitation is too large' }, 413, request);

      let invitation;
      try {
        const body = await request.text();
        if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
          return json({ error: 'Invitation is too large' }, 413, request);
        }
        invitation = JSON.parse(body);
      } catch (_) {
        return json({ error: 'Invalid JSON body' }, 400, request);
      }

      if (!invitation || typeof invitation !== 'object' ||
          typeof invitation.id !== 'string' || !/^[a-z0-9-]{1,100}$/.test(invitation.id) ||
          typeof invitation.templateId !== 'string' ||
          !invitation.eventData || typeof invitation.eventData !== 'object' || Array.isArray(invitation.eventData)) {
        return json({ error: 'Invalid invitation data' }, 400, request);
      }

      const key = `invite:${invitation.id}`;
      const now = Date.now();
      const record = {
        id: invitation.id,
        templateId: invitation.templateId,
        eventData: invitation.eventData,
        aspectRatio: invitation.aspectRatio || '4:5',
        publishedAt: Number(invitation.publishedAt) || now
      };

      // A retry after a dropped response should finish cleanly without creating
      // a duplicate or overwriting an unrelated invitation with the same ID.
      const existing = await env.INVITATIONS.get(key, 'json');
      if (existing) {
        const sameInvitation = existing.templateId === record.templateId &&
          existing.aspectRatio === record.aspectRatio &&
          JSON.stringify(existing.eventData) === JSON.stringify(record.eventData) &&
          existing.publishedAt === record.publishedAt;
        return sameInvitation
          ? json({ id: invitation.id, alreadyExists: true }, 200, request)
          : json({ error: 'This invitation link already exists' }, 409, request);
      }

      const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown';
      const rateKey = `rate:${clientIp}`;
      const rate = await env.INVITATIONS.get(rateKey, 'json');
      const currentRate = rate && now - rate.startedAt < 3600000 ? rate : { startedAt: now, count: 0 };
      if (currentRate.count >= MAX_CREATES_PER_HOUR) return json({ error: 'Too many invitations. Try again later.' }, 429, request);

      await Promise.all([
        env.INVITATIONS.put(key, JSON.stringify(record)),
        env.INVITATIONS.put(rateKey, JSON.stringify({ startedAt: currentRate.startedAt, count: currentRate.count + 1 }), {
          expirationTtl: 3600
        })
      ]);
      return json({ id: invitation.id }, 201, request);
    }

    const match = url.pathname.match(/^\/api\/invitations\/([a-z0-9-]{1,100})$/);
    if (match && request.method === 'GET') {
      const record = await env.INVITATIONS.get(`invite:${match[1]}`, 'json');
      return record ? json(record, 200, request) : json({ error: 'Invitation not found' }, 404, request);
    }

    return json({ error: 'Not found' }, 404, request);
  }
};
