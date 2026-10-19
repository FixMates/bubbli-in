const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function main() {
  const outDir = path.join(__dirname, '..', 'qa_screenshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // 1. Static file server
  const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, '..', req.url.split('?')[0]);
    if (filePath.endsWith(path.sep)) filePath += 'index.html';
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath);
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.webp': 'image/webp',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
    fs.createReadStream(filePath).pipe(res);
  });

  await new Promise(r => server.listen(8082, r));
  console.log('Local QA Server running at http://127.0.0.1:8082');

  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const port = 9444;
  const p = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    '--disable-gpu',
    'about:blank'
  ]);

  try {
    let wsUrl = null;
    for (let i = 0; i < 25; i++) {
      await new Promise(r => setTimeout(r, 150));
      try {
        const res = await new Promise((resolve, reject) => {
          const req = http.request({
            hostname: '127.0.0.1',
            port: port,
            path: '/json/new?about:blank',
            method: 'PUT'
          }, resp => {
            let d = '';
            resp.on('data', c => d += c);
            resp.on('end', () => resolve(JSON.parse(d)));
          });
          req.on('error', reject);
          req.end();
        });
        if (res && res.webSocketDebuggerUrl) {
          wsUrl = res.webSocketDebuggerUrl;
          break;
        }
      } catch (_) {}
    }

    if (!wsUrl) throw new Error('Could not connect to Chrome CDP');

    const ws = new WebSocket(wsUrl);
    await new Promise(r => ws.onopen = r);

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === id) {
            ws.removeEventListener('message', handler);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send('Page.enable');
    // Keep visual QA self-contained: publication calls are handled locally so
    // screenshots never create test invitations in production KV.
    let mockId = 1;
    ws.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.method !== 'Fetch.requestPaused') return;
      const request = message.params.request;
      const isPreflight = request.method === 'OPTIONS';
      const isCreate = request.method === 'POST' && request.url.endsWith('/api/invitations');
      const payload = isCreate ? JSON.parse(request.postData || '{}') : {};
      const responseBody = isCreate ? JSON.stringify({ id: payload.id }) : '';
      ws.send(JSON.stringify({
        id: mockId++,
        method: 'Fetch.fulfillRequest',
        params: {
          requestId: message.params.requestId,
          responseCode: isPreflight ? 204 : (isCreate ? 201 : 404),
          responseHeaders: [
            { name: 'Access-Control-Allow-Origin', value: 'http://127.0.0.1:8082' },
            { name: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
            { name: 'Access-Control-Allow-Headers', value: 'Content-Type' },
            { name: 'Content-Type', value: 'application/json' }
          ],
          body: Buffer.from(responseBody).toString('base64')
        }
      }));
    });
    await send('Fetch.enable', { patterns: [{ urlPattern: '*bubbli-invitation-api.ubbli.workers.dev/api/invitations*', requestStage: 'Request' }] });

    async function screenshot(name, url, width, height, fullPage = false) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: width,
        height: height,
        deviceScaleFactor: 2,
        mobile: width < 1024
      });

      await send('Page.navigate', { url });
      await new Promise(r => setTimeout(r, 1600));

      const shot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: fullPage
      });

      const outFile = path.join(outDir, `${name}.png`);
      fs.writeFileSync(outFile, Buffer.from(shot.data, 'base64'));
      console.log(`[QA Screenshot] Saved: ${name}.png (${width}x${height})`);
    }

    // A. Viewport Testing for Homepage (All required viewports)
    console.log('\n--- 1. Testing Homepage Across Required Viewports ---');
    await screenshot('home_mobile_320', 'http://127.0.0.1:8082/index.html', 320, 680);
    await screenshot('home_mobile_360', 'http://127.0.0.1:8082/index.html', 360, 740);
    await screenshot('home_mobile_375', 'http://127.0.0.1:8082/index.html', 375, 812);
    await screenshot('home_mobile_390', 'http://127.0.0.1:8082/index.html', 390, 844);
    await screenshot('home_mobile_430', 'http://127.0.0.1:8082/index.html', 430, 932);
    await screenshot('home_tablet_768', 'http://127.0.0.1:8082/index.html', 768, 1024);
    await screenshot('home_desktop_1024', 'http://127.0.0.1:8082/index.html', 1024, 768);
    await screenshot('home_desktop_1280', 'http://127.0.0.1:8082/index.html', 1280, 800);
    await screenshot('home_desktop_1440', 'http://127.0.0.1:8082/index.html', 1440, 900);

    // B. Studio Step-by-Step Flow Testing
    console.log('\n--- 2. Testing Studio Guided Flow at Mobile 375px ---');
    await screenshot('studio_step1_occasion_375', 'http://127.0.0.1:8082/studio.html?step=1', 375, 812);
    await screenshot('studio_step2_wedding_templates_375', 'http://127.0.0.1:8082/studio.html?category=wedding&event=wedding&step=2', 375, 812);
    await screenshot('studio_step2_birthday_templates_375', 'http://127.0.0.1:8082/studio.html?category=birthday&event=first-birthday&step=2', 375, 812);
    await screenshot('studio_step2_housewarming_templates_375', 'http://127.0.0.1:8082/studio.html?category=housewarming&event=housewarming&step=2', 375, 812);
    await screenshot('studio_step2_corporate_templates_375', 'http://127.0.0.1:8082/studio.html?category=corporate&event=corporate-launch&step=2', 375, 812);
    await screenshot('studio_step3_personalise_375', 'http://127.0.0.1:8082/studio.html?step=3', 375, 812);
    await screenshot('studio_step3_personalise_desktop_1280', 'http://127.0.0.1:8082/studio.html?step=3', 1280, 850);
    await screenshot('studio_step4_preview_375', 'http://127.0.0.1:8082/studio.html?step=4', 375, 812);
    await screenshot('studio_step5_share_375', 'http://127.0.0.1:8082/studio.html?step=5', 375, 812);
    const publishedLink = await send('Runtime.evaluate', {
      expression: `({link: document.getElementById('publish-link-input')?.value, status: document.getElementById('publish-link-status')?.textContent})`,
      returnByValue: true
    });
    const shareState = publishedLink.result.value;
    if (!shareState.link || !shareState.link.startsWith('http://127.0.0.1:8082/invite/?id=') || shareState.link.includes('&d=')) {
      throw new Error(`Short-link creation QA failed: ${JSON.stringify(shareState)}`);
    }
    console.log(`[QA] Invitation created with a clean short link: ${shareState.link}`);

    // Pricing Modal
    await send('Page.navigate', { url: 'http://127.0.0.1:8082/studio.html?step=3' });
    await new Promise(r => setTimeout(r, 1200));
    await send('Runtime.evaluate', { expression: "document.getElementById('modal-pricing')?.classList.remove('hidden')" });
    await new Promise(r => setTimeout(r, 400));
    const pricingShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'studio_pricing_modal_375.png'), Buffer.from(pricingShot.data, 'base64'));
    console.log('[QA Screenshot] Saved: studio_pricing_modal_375.png');

    // C. Public Invitation Page & Envelope Reveal
    console.log('\n--- 3. Testing Public Guest Invitation Page at 375px ---');
    await screenshot('public_invite_view_375', 'http://127.0.0.1:8082/invite/index.html', 375, 812);

    // Click envelope to reveal main card and timeline
    await send('Runtime.evaluate', { expression: "document.getElementById('interactive-envelope-btn')?.click()" });
    await new Promise(r => setTimeout(r, 800));
    const openedShot = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(outDir, 'public_invite_opened_375.png'), Buffer.from(openedShot.data, 'base64'));
    console.log('[QA Screenshot] Saved: public_invite_opened_375.png');

    ws.close();
    console.log('\nAll QA Screenshots successfully captured in qa_screenshots/ folder!');
  } finally {
    p.kill();
    server.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
