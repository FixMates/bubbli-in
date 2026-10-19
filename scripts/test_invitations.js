const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

async function testWorker() {
  let source = fs.readFileSync(path.join(__dirname, '..', 'workers', 'invitations.js'), 'utf8');
  source = source.replace(/export default \{/, 'const worker = {') + '\nreturn worker;';
  const worker = new Function(source)();
  const records = new Map();
  const kv = {
    async get(key, type) {
      const value = records.get(key);
      if (value === undefined) return null;
      return type === 'json' ? JSON.parse(value) : value;
    },
    async put(key, value) { records.set(key, value); }
  };
  const env = { INVITATIONS: kv };
  const invitation = {
    id: 'testlove123',
    templateId: 'wedding-south-indian-temple',
    eventData: { eventType: 'wedding', coupleNames: 'Test Couple', date: '15 November 2026' },
    aspectRatio: '4:5',
    publishedAt: 1760890000000
  };

  const post = (data, origin = 'https://bubbli.in') => worker.fetch(new Request(
    'https://api.example.test/api/invitations',
    { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
  ), env);
  const created = await post(invitation);
  assert.equal(created.status, 201, 'new invitation should publish');
  assert.equal((await created.json()).id, invitation.id);

  const retry = await post(invitation);
  assert.equal(retry.status, 200, 'a network retry should be idempotent');
  assert.equal((await retry.json()).alreadyExists, true);

  const read = await worker.fetch(new Request(
    `https://api.example.test/api/invitations/${invitation.id}`,
    { headers: { Origin: 'https://bubbli.in' } }
  ), env);
  assert.equal(read.status, 200, 'guest page should load the saved invitation');
  assert.deepEqual((await read.json()).eventData, invitation.eventData);

  const conflict = await post({ ...invitation, eventData: { coupleNames: 'Someone Else' } });
  assert.equal(conflict.status, 409, 'an ID collision must not overwrite an invitation');
  assert.equal((await post(invitation, 'https://evil.example')).status, 403, 'untrusted origins must be rejected');
}

async function testShortLinkCreation() {
  const saved = new Map();
  global.crypto = crypto.webcrypto;
  global.window = {
    BUBBLI_INVITATION_API_BASE: 'https://api.example.test',
    location: { href: 'https://bubbli.in/studio.html' }
  };
  global.localStorage = {
    getItem: key => saved.has(key) ? saved.get(key) : null,
    setItem: (key, value) => saved.set(key, String(value)),
    removeItem: key => saved.delete(key)
  };
  const storagePath = require.resolve('../js/invitations/storage.js');
  delete require.cache[storagePath];
  const storage = require(storagePath);
  const result = storage.publishInvitation('wedding-south-indian-temple', {
    eventType: 'wedding', coupleNames: 'Test Couple', date: '15 November 2026'
  });
  const url = new URL(result.shareUrl);
  assert.equal(url.origin, 'https://bubbli.in');
  assert.equal(url.pathname, '/invite/');
  assert.match(url.searchParams.get('id'), /^[a-z0-9]{10}$/);
  assert.equal(url.searchParams.has('d'), false, 'invitation contents must never be embedded in the URL');
  assert.ok(result.shareUrl.length < 55, 'the guest link should remain short');

  let requestBody;
  global.fetch = async (_url, options) => {
    requestBody = JSON.parse(options.body);
    return new Response(JSON.stringify({ id: requestBody.id }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  };
  await storage.saveInvitationOnline(result.record);
  assert.equal(requestBody.id, result.id, 'creation must persist the same ID included in the guest link');
  assert.equal(requestBody.eventData.coupleNames, 'Test Couple');
}

(async () => {
  await testWorker();
  await testShortLinkCreation();
  console.log('Invitation checks passed: short URL, online create/read, retry, collision protection, and CORS.');
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
