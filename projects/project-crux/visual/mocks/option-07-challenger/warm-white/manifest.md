# Option 07 — The Blue Hour Cabinet, Grade 4a

Source: `../../../007-working-mode-challenger.md` and `../../../007b-color-resolution.md`.

- `blue-hour-stats-warmwhite.html` / `blue-hour-stats-warmwhite.png`: AP Statistics working-mode plate; the PNG was rendered from `blue-hour-stats-warmwhite.html`.
- `blue-hour-bio-warmwhite.html` / `blue-hour-bio-warmwhite.png`: AP Biology working-mode plate; the PNG was rendered from `blue-hour-bio-warmwhite.html`.
- Surround: warm paper-white.
- Chrome: dark.
- Center field: cool Prussian to warm lamplight.
- Drawers: sand.
- Scoring only: blue won-flower / fired-clay lost-filament.
- Interactive/action only: mineral cyan thread, never a scoring anchor.
- Bio readout repair: in the existing template `<helmet>` stylesheet, `.bhp-math` now sets `display: block !important`, overriding that element's inline `display: flex`; this restores ordinary inline flow for its `<sub>` elements without changing content or any other visual property.
- Resolved font stack (`document.fonts`): Fraunces normal 500 (3 subset entries, unloaded/unused) and 600 (2 unloaded subsets, 1 loaded); IBM Plex Sans Condensed normal 400 (3 unloaded subsets, 1 loaded), 500 (4 unloaded/unused subset entries), 600 (3 unloaded subsets, 1 loaded), and 700 (3 unloaded subsets, 1 loaded); STIX Two Math normal 400 (1 loaded). All faces used by the plate passed `document.fonts.check`; no fallback substituted for a used specified face.
- Confirmed: the water-potential readout renders on three lines with subscripts inline.
- Confirmed: the prediction bar sits fully inside the 1440 × 900 frame.
- Confirmed: the footer caption sits clear of the readout panel and does not overlap it.
- Render command: `/Users/davidbloom/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node /private/tmp/render-project-crux-013.mjs` (Chromium headless; `waitUntil: 'load'`; awaited `document.fonts.ready`; `fullPage: false`).
- Viewport: 1440 × 900, `deviceScaleFactor: 1`; Chromium headless, `waitUntil: 'load'`, `fullPage: false`.

Status: advisory review material. David alone decides done.
