// Browser tests at 390px (phone) and 1440px (desktop) with real Chromium.
// Every test must fail on a console error or a request that leaves the page's origin.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { createAppServer } from '../../server.mjs';

let server, origin, browser;
before(async () => {
  server = createAppServer();
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  origin = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch();
});
after(async () => { await browser?.close(); await new Promise((r) => server.close(r)); });

for (const width of [390, 1440]) {
  test(`${width}px: page loads with no console errors or off-origin requests`, async () => {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const problems = [];
    page.on('console', (m) => { if (m.type() === 'error') problems.push(m.text()); });
    page.on('pageerror', (e) => problems.push(e.message));
    page.on('request', (r) => { if (!r.url().startsWith(origin + '/')) problems.push(r.url()); });
    await page.goto(origin + '/');
    // TODO exercise the app with its sample data here.
    assert.deepEqual(problems, []);
    await page.close();
  });
}
