# Head-to-Head 017 — manifest

Plain record of the blind rebuild of the frozen head-to-head spec (handoff project-crux/017). Selects nothing, ranks nothing. Builder: Fable (Claude Design session), built without opening `head-to-head-014/` or `014-register-directions.md`.

## Shared dataset (A4) — identical bytes in all four plates

Axis domain: x 0–10 (Practice time, hours/week), y 0–12 (Free-response score).

| # | Practice time (h/wk) | Free-response score | Role |
|---|---|---|---|
| 1 | 2 | 3.5 | cloud |
| 2 | 3 | 4.8 | cloud |
| 3 | 4 | 5.4 | cloud |
| 4 | 5 | 6.9 | cloud |
| 5 | 6 | 7.1 | cloud |
| 6 | 7 | 8.6 | cloud |
| 7 | 8 | 9.0 | cloud |
| 8 | 9 | 10.4 | cloud |
| 9 | 1.5 | 6.7 | **influential point** |

As JS in every plate: `PTS=[[2,3.5],[3,4.8],[4,5.4],[5,6.9],[6,7.1],[7,8.6],[8,9.0],[9,10.4]]`, `INF=[1.5,6.7]`.

Least-squares line on all 9 points: ŷ = 3.29 + 0.72x (slope matches the frozen A6 value 0.72). Refit without the influential point: ŷ = 1.78 + 0.94x — the point pulls the line down and flattens the slope, as A4/A6 require. Signal/Proof and Midnight Standard draw the refit as a dashed comparison line.

Influential point singled out in every plate: rendered as an open (hollow) marker with a crosshair/bar, every other point a solid filled dot, plus a text label in three of four plates (Midnight Standard labels it in the figure caption and as `influential (1.5, 6.7)`).

## Plates

### signal-proof/openhand-stats.html
- **SSoT seed:** `k7Q-vantablack-92-tilt-hexen`
- **Derived structure:** claim-then-evidence. Each model-response paragraph (the claim) is paired in one bordered row with the rubric criterion that warrants it; hovering or clicking a row lights its proof in the graph (cloud → points enlarge; slope → line thickens + equation; influence → refit line appears dashed with annotation). Reference card and Deep Dive open as right-hand sheets; the study map drops from the location button in the top bar.
- **Palette temperature:** neutral — pure white ground (#ffffff), near-black ink (#0b0b0c), one warm action colour.
- **Action colour:** #ff5a1f, used only on the selected state of the credit toggle.
- **Fonts:** Archivo Black (headlines) + Archivo (text), Google Fonts; fallback Helvetica Neue / Helvetica / Arial.
- **Anchors:** earned = filled black circle; lost = hollow rotated square (diamond outline). Action colour not used on any anchor.
- **Frame:** 1440×900, deepest content bottom at 886px, no horizontal overflow (scrollWidth 1440).

### daybreak-relay/openhand-stats.html
- **SSoT seed:** `p3L-saffron-stairs-04-relay-riverbed`
- **Derived structure:** baton-pass sequence. Six stations on a horizontal relay track (Where you are → The question → The graph → How points move → Model response → For this question); one station is active at a time; a "Pass the baton →" button advances; each completed station leaves a compact "carried" artifact in a left rail (location, question text, mini-graph, rubric anchors, tally). Initial state: station 5, Model response. Rubric rendered as +2/+1/+1 stair steps at station 4; Reference card + Deep Dive accordion at station 6.
- **Palette temperature:** warm — warm white ground (#fffbf4, not cream), dark warm-brown ink (#1a1410), saffron action.
- **Action colour:** #f5a200, used only on the "Pass the baton →" button. The credit toggle is ink-on-paper.
- **Fonts:** Syne 700/800 (headlines) + Manrope (text), Google Fonts; fallback Helvetica Neue / Arial.
- **Anchors:** earned = filled circle; lost = hollow triangle. Action colour not used on any anchor.
- **Frame:** 1440×900, deepest content bottom at 868px in the initial state; every station fits without scroll.

### open-window/openhand-stats.html
- **SSoT seed:** `z9W-glass-noon-float-72-rosewater`
- **Derived structure:** layered overlay. The scatterplot is the full-bleed ground (axes and faint grid span the plate); every other element is a frosted-glass window floating over it — Question, How points move, Model response open by default; Map, For this question, Deep dive closed. A bottom dock toggles windows (filled dot = open); windows close from their title bar and can be dragged.
- **Palette temperature:** high-key neutral — off-white ground (#fdfdfb), black ink (#111), translucent white glass, one warm-pink action.
- **Action colour:** #e8365d, used only on the selected state of the credit toggle.
- **Fonts:** Bricolage Grotesque 800 (headlines) + Figtree (text), Google Fonts; fallback Helvetica Neue / Arial.
- **Anchors:** earned = filled rounded square; lost = hollow circle with a horizontal bar. Action colour not used on any anchor.
- **Frame:** 1440×900; open windows bottom out at 796px, dock at 874px, right edge 1392px.

### midnight-standard-control/openhand-stats.html
- **Control — no SSoT seed (the register is prescribed: formal, dense, near-print).**
- **Structure:** three-column ledger. Left: the whole 13-topic study map as a ruled ledger with the current row inverted. Centre: question in serif, Figure 1 with caption, model response with credit toggle and tally. Right: rubric table, reference card, Deep Dive accordion.
- **Palette temperature:** cool — cool grey-white paper (#f3f4f6), navy-black ink (#101828), grey rules.
- **Action colour:** #2457c5, used only on the selected state of the credit toggle.
- **Fonts:** Newsreader 500/600 (headlines) + IBM Plex Sans (text) + IBM Plex Mono (figures), Google Fonts; fallback Georgia / Helvetica Neue / Menlo.
- **Anchors:** earned = filled square; lost = struck circle (hollow circle with a diagonal). Action colour not used on any anchor.
- **Frame:** 1440×900; right column fits all four Deep Dive headers with section 1 open; no clipping.

## Frozen-content confirmations (all four plates)
- A1–A8 strings copied verbatim, including the three ✦ tags and the three −1 deduction notes; practice-time / free-response-score sample only.
- Earned vs lost is shape-distinguishable without hue in every plate (C1). One reserved action colour per plate, never on anchors or decoration (C2). Model response framed as diagnosis → reasoning → move, not an answer key (C3). No streaks, badges, XP, confetti, or leaderboards (C5).
- No plate inherits Blue Hour Cabinet's red top bar, cream ground, or Bungee / Passion One type. Grounds are white / warm-white / off-white / cool grey-white; type is Archivo, Syne+Manrope, Bricolage Grotesque+Figtree, Newsreader+IBM Plex.

## Render
Builder's surface could not produce a Chromium-headless 1440×900 viewport PNG at the 015 settings; the plates were verified in-browser at 1440×900 (each `html,body` is fixed to 1440×900 with `overflow:hidden`; deepest-content measurements above). PNGs to be rendered by the steward from the HTML with:

```
Chromium headless · viewport { width: 1440, height: 900 } · deviceScaleFactor: 1 · waitUntil: 'load' · await document.fonts.ready · fullPage: false
```

e.g. (Playwright)
```js
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
for(const r of ['signal-proof','daybreak-relay','open-window','midnight-standard-control']){
  await p.goto('file://'+path.resolve(`projects/project-crux/visual/mocks/head-to-head-017/${r}/openhand-stats.html`),{waitUntil:'load'});
  await p.evaluate(()=>document.fonts.ready);
  await p.screenshot({path:`projects/project-crux/visual/mocks/head-to-head-017/${r}/openhand-stats.png`,fullPage:false});
}
```
Fonts load from Google Fonts; render with network access or fallbacks substitute as listed per plate.
