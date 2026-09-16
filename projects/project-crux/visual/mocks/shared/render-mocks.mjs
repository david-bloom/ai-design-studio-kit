import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { createRequire } from 'node:module';

const moduleRoot = process.env.CODEX_NODE_MODULES || process.env.NODE_PATH;
const require = moduleRoot
  ? createRequire(path.join(moduleRoot, '__project_crux_renderer__.js'))
  : createRequire(import.meta.url);
const { chromium } = require('playwright');

const here = path.dirname(fileURLToPath(import.meta.url));
const pages = [
  ['option-01-draw-the-door', 'overview'],
  ['option-01-draw-the-door', 'working'],
  ['option-02-soft-landing', 'overview'],
  ['option-02-soft-landing', 'working'],
  ['option-03-pocket-universe', 'working'],
  ['option-04-lantern-fold', 'overview'],
  ['option-04-lantern-fold', 'working'],
  ['option-05-say-it-bright', 'overview'],
  ['option-05-say-it-bright', 'working'],
  ['option-06-three-guide-registers', 'working'],
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
for (const [folder, name] of pages) {
  const source = path.resolve(here, '..', folder, `${name}.html`);
  const output = path.resolve(here, '..', folder, `${name}.png`);
  const pageErrors = [];
  const onPageError = (error) => pageErrors.push(error.message);
  page.on('pageerror', onPageError);
  await page.goto(pathToFileURL(source).href, { waitUntil: 'load' });
  const brokenImages = await page.locator('img').evaluateAll((images) => images
    .filter((image) => !image.complete || image.naturalWidth === 0)
    .map((image) => image.getAttribute('src')));
  if (pageErrors.length || brokenImages.length) {
    throw new Error(`${folder}/${name}: page errors=${pageErrors.join(' | ') || 'none'}; broken images=${brokenImages.join(', ') || 'none'}`);
  }
  await page.screenshot({ path: output, fullPage: false });
  page.off('pageerror', onPageError);
  console.log(path.relative(path.resolve(here, '..'), output));
}
await browser.close();
