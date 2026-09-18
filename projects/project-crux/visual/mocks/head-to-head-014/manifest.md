# Handoff 015 — Head-to-Head 014 Render Manifest

> Advisory comparison set. This manifest records rendering facts only; it selects and ranks nothing.

## Shared sample

All four plates render this identical AP Statistics Open Hand sample:

> A school compares nightly sleep (hours) and next-day reaction time (ms) for 28 students. Describe the association, then explain how the highlighted high-leverage observation affects the least-squares regression line.

`mocks/shared/content-fixtures.md` contains a comparable regression fixture but not this exact sleep/reaction-time dataset, so the data were defined for this set. The same literal 28-pair array is repeated byte-for-byte in each HTML source:

`[[4.1,348],[4.3,341],[4.5,337],[4.7,332],[4.9,329],[5.0,323],[5.2,319],[5.3,317],[5.5,313],[5.6,309],[5.8,305],[5.9,302],[6.1,298],[6.2,295],[6.4,291],[6.5,288],[6.7,283],[6.8,280],[7.0,276],[7.1,273],[7.3,269],[7.4,266],[7.6,261],[7.7,259],[7.9,254],[8.1,249],[8.3,246],[9.1,338]]`

Every plate also uses the same sample-response substance, the same highlighted observation at 9.1 hours / 338 ms, the same common-loss example, and a fresh study-break/error-rate question in the default Learner-B `Your move` state.

## Plate records

### Signal / Proof

- **Font stack:** Archivo Black → Arial Black / Impact fallback for display; Inter → Arial fallback for interface and academic reading; STIX Two Math → Times fallback for math.
- **Scoring anchors:** Earned Cobalt bracket around credit-bearing evidence; Lost Plum missing-corner frame around the common-loss statement.
- **Action separation:** Persimmon renders the `Test the point` action and is not used by either scoring anchor.
- **Frame check:** 1440×900; frame filled; no clipped elements; no horizontal or vertical overflow.

### Daybreak Relay

- **Font stack:** Druk Condensed → Anton / Impact fallback for relay headers; Atkinson Hyperlegible Next → Arial fallback for interface and academic reading; STIX Two Math → Times fallback for math.
- **Scoring anchors:** Earned Marine split-tick; Lost Oxblood dropped tick.
- **Action separation:** Solar Orange renders the active relay node and `Test the point` action and is not used by either scoring anchor.
- **Frame check:** 1440×900; frame filled; no clipped elements; no horizontal or vertical overflow.

### Open Window

- **Font stack:** Sora ExtraBold → Arial Black fallback for headers; Public Sans → Arial fallback for interface and academic reading; STIX Two Math → Times fallback for math.
- **Scoring anchors:** Earned Teal lens-ring with square registration notch; Lost Violet open lens.
- **Action separation:** Mango renders the aperture and `Test the point` action and is not used by either scoring anchor.
- **Frame check:** 1440×900; frame filled; no clipped elements; no horizontal or vertical overflow.

### Midnight Standard — control

- **Font stack:** IBM Plex Sans Condensed Semibold → Arial Narrow fallback for headers and instrument labels; IBM Plex Sans → Arial fallback for interface and academic reading; STIX Two Math → Times fallback for math.
- **Scoring anchors:** Earned Ice registration corners; Lost Rust broken rule.
- **Action separation:** Signal Cyan renders focus/action controls and is not used by either scoring anchor.
- **Frame check:** 1440×900; frame filled; no clipped elements; no horizontal or vertical overflow.

## Literal readings of 014 ambiguities

- **Signal / Proof chart size:** 014 names a 620×390 chart while also requiring the sample response inside a 7-column proof field at 1440×900. The plate preserves the authored asymmetric proof-board, 96px mast, side-by-side evidence/response relationship, rubric strip, and large unoccupied white field; the chart scales to the proof field rather than forcing the response off-frame.
- **Daybreak Relay default:** 014 says `Read the score` owns the fluid region while also gives a `420 / 280 / fluid` order. The literal render keeps the three named regions in that order and emphasizes `Read the score` with the warm active field; `Your move` receives the remaining fluid width.
- **Open Window aperture:** the aperture is rendered at the authored 176×112 size in the evidence deck. It is shown at the evidence preset while the response deck exposes only the one-sentence Learner-B default.
- **Midnight Standard control:** the plate borrows only the fixed `272 / fluid / 304px` rubric/model/reference workspace. It introduces none of Blue Hour's cyanotype, thread, specimen, photogram, or glass-negative craft language.

## Render and verification

- **Renderer:** bundled Playwright Chromium, headless.
- **Runtime:** `/Users/davidbloom/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node` with bundled `playwright`.
- **Settings:** `viewport: { width: 1440, height: 900 }`, `deviceScaleFactor: 1`, `waitUntil: 'load'`, `fullPage: false`; each page awaited `document.fonts.ready` before capture.
- **Command form:** one-off Node invocation using `chromium.launch({headless:true})`, `browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1})`, then `page.goto(...,{waitUntil:'load'})` and `page.screenshot({path,fullPage:false})` for each of the four HTML files.
- **Verification:** each final PNG was opened and visually inspected after the final render. DOM geometry checks reported `1440×900` document bounds, no overflow, and no element outside the frame for all four plates.
