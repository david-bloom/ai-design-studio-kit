---
handoff: project-crux/013
role: visual-designer
status: accepted
lane: routine
actor: codex
model: unspecified
source_sha: 49f4af4
frozen_hash: a05ee2fba05b7fbd79db7776f54fc61e56e1b7748639bb3376f138addf555421
inputs:
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.html
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-stats-warmwhite.html
  - projects/project-crux/handoff/012-visual-designer.md
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
outputs:
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.html
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.png
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
supersedes: project-crux/012
revises: project-crux/007
---

# Handoff Packet 013 — Visual Designer (Fix the Bio Readout at Source, Then Re-render)

Task:
- Handoff 013 (project-crux, Visual Design track) — fix the AP Biology grade-4a plate's readout **in the plate's own markup/CSS**, then re-render its PNG. This supersedes Handoff 012 (blocked) and revises Handoff 007, whose accepted deliverable set includes the warm-white HTML plates.

## Why 013 exists — the root cause

Handoff 011 rendered both warm-white plates; the Bio plate was returned because its water-potential readout wrapped across roughly eight lines. Handoff 012 assumed a render-environment cause and asked for a font-timing fix. **That diagnosis was wrong, and 012 is blocked.** Codex's investigation found the fault in the plate itself:

> The readout's runtime container is `display: flex` with `flex-direction: column`, so each `<sub>` becomes a 178 px block-level flex item rather than inline text. The water-potential equation therefore breaks at every subscript and wraps to eight lines. The inflated panel pushes the prediction bar to y = 896.9–959.3 — past the 900 px frame — and drives the footer (y = 881–894) into the panel.

Fonts were verified loaded; font timing was never the problem. This is why the Stats plate renders correctly from the same run: its readout has no subscripts, so the column flex container never splits it.

The fix therefore belongs in the plate, not in the renderer. That is why this packet declares the Bio HTML plate as an output and carries `revises: project-crux/007` — the warm-white plates are 007's accepted deliverables, and 007's header now names them.

## What to produce

Exactly the three files in `outputs`:

1. `blue-hour-bio-warmwhite.html` — the plate, with the **smallest** change that fixes the readout.
2. `blue-hour-bio-warmwhite.png` — a corrected 1440 × 900 render of that fixed plate.
3. `manifest.md` — updated as described below.

## The fix — smallest possible, source-level

Make the **smallest change to the plate's markup or inline CSS** that renders the readout on **three lines with subscripts inline**. Two examples of the shape of an acceptable fix, either of which is fine if it is minimal:

- keep the container's column layout, but render the equation line as inline content so subscripts stay in flow; or
- scope a rule so `sub` is `display: inline` within the readout.

Whichever you choose, it must be surgical. **Nothing else in the plate may change visually.** Grade 4a is untouched: the warm paper-white surround, dark chrome, Prussian → lamplight centre field, and sand drawers stay exactly as they are. The scoring anchors (blue won-flower earned, fired-clay lost-filament), the mineral cyan thread as action colour, and the three-column cabinet structure are all untouched. Do not reformat, re-minify, or reflow the rest of the file — the diff should be small enough to read.

This is a **defect repair, not a redesign.** You are not restyling the readout, improving it, or changing its content.

## Then re-render

Render the corrected plate: Chromium headless, `viewport: { width: 1440, height: 900 }`, `deviceScaleFactor: 1`, `waitUntil: 'load'`, `fullPage: false`, and await `document.fonts.ready` before screenshotting.

Verify all three of these on the rendered PNG before committing, and state each in `manifest.md`:
- the water-potential readout renders on **three lines**, subscripts inline;
- the prediction bar sits **fully inside** the 1440 × 900 frame;
- the footer caption sits **clear of** the readout panel, not overlapping it.

The Stats plate (`blue-hour-stats-warmwhite.png`, an input here) is the reference for what a correctly rendering readout looks like: three clean lines.

**Size:** under 500 KB (policy §7). The Stats plate is 354 KB and the previous Bio render was 372 KB at this viewport, so this should fit. If not, optimize with `pngquant` / `oxipng` / `zopflipng` rather than requesting `--allow-large`; do not reduce the viewport or change format.

## Stop condition

**If the smallest fix cannot achieve three lines without a visible change elsewhere in the plate, stop and report** — do not commit a plate that trades one visual defect for another, and do not widen the fix on your own authority. A change that alters the plate's appearance beyond the readout is a decision for David, not a silent trade.

Likewise, do not commit a second degraded render. 011's render completed without error and still had to be returned; completing without error is not the test. The three visual checks are.

## What to record in `manifest.md`

Keep the established format and existing colour-role bullets; this is an edit, not a rewrite. Add:
- **the exact change made** — the element and the property, precisely enough that the diff can be checked against the description;
- **the resolved font stack** (`document.fonts` entries and whether any fallback substituted for a specified face);
- **the three confirmations** above, stated explicitly;
- the re-render command and viewport.

## Hard constraints on your own conduct

- **Do not touch `blue-hour-stats-warmwhite.html` or `blue-hour-stats-warmwhite.png`.** Both are correct. The Stats plate is a reference input only. Do not "fix" it for symmetry and do not re-render it.
- **Same P2 trap as 011 and 012: do not edit `render-mocks.mjs`,** whose fixed `pages` array does not fit this folder, and **do not commit your one-off render script.** Only the three declared outputs are landed. Record the command in `manifest.md` instead.
- **Do not edit `review-board.md`, `mocks/README.md`, or `warm-white/README.md`.** Indexing remains a later packet.
- **Do not edit `007b-color-resolution.md` or `007-working-mode-challenger.md`.** This packet revises 007's *rendered artifact*, not its written direction.
- **Advisory. Selects nothing.** This does not advance Option 07, rank it, or mark anything Done. Track Done is Hard-Gate — David only.
- **Clean-room / blind-start still applies.** The real product name and identity stay withheld.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; repairing a defect in an accepted deliverable, with `revises:` declared, is Standing-Approval work.
- Not approved: any selection, any restyle beyond the defect, any Done call.

## Files / Systems Affected

- Overwrite: `blue-hour-bio-warmwhite.html` (revision of a `project-crux/007` output), `blue-hour-bio-warmwhite.png` and `manifest.md` (re-delivery of `project-crux/012`'s outputs).

## Do Not Touch

Anything not in `outputs` above — in particular `blue-hour-stats-warmwhite.html`, `blue-hour-stats-warmwhite.png`, `warm-white/README.md`, `mocks/README.md`, `mocks/review-board.md`, `mocks/shared/render-mocks.mjs` and the rest of `shared/`, every other `option-0*/` folder, `004-directions.md`, `006-place-mode.md`, `007-working-mode-challenger.md`, `007b-color-resolution.md`, `charter.md`, `config/`, `docs/`, and other `projects/`.

## Open Risks / Blockers

- **P1 — Fix creep.** The readout is easy to "improve" while fixing it. The only sanctioned change is the one that puts subscripts back inline. Everything else is a visual regression, however small.
- **P2 — Renderer edit / stray script.** See above. A file outside `outputs` in your diff will not be landed.
- **P3 — Minified source.** The plate is a ~1 MB self-contained file and its readout is built at runtime, so the change may sit in an inline script or a style string rather than in static markup. Find the actual rule; do not append an overriding block at the end of the file if a targeted edit is available.
- **P4 — Declaring success without looking.** Open the rendered PNG and confirm the three checks visually.

## Return path — branch intake

You can push a branch but not `main`. Commit **only your three declared outputs** on `codex/project-crux-013-visual-designer` and report the branch name and SHA. Do not update this packet, do not edit `docs/STATE.md`, and do not report the work as complete on your own authority: the steward (`claude-code`) checks those exact paths out of your branch and lands them with `scripts/publish`, and the DELIVERY RECEIPT is the completion. If your integration insists on opening a PR, leave it as a draft and say so.

## Next Expected Output

- `blue-hour-bio-warmwhite.html` with a minimal, readable diff confined to the readout's layout.
- `blue-hour-bio-warmwhite.png` at 1440 × 900, under 500 KB, readout on three lines, prediction bar and footer inside the frame.
- `manifest.md` recording the exact change (element and property), the font stack, the three confirmations, and the render command.
- In your return: branch and SHA, the diff summary, the final byte size, and confirmation of the three checks.
