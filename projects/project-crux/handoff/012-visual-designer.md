---
handoff: project-crux/012
role: visual-designer
status: dispatched
lane: routine
actor: codex
model: unspecified
source_sha: 065a8d5
frozen_hash: 398d1f28964082f6c9bba660284fa148e6c40b07fe168758c0a7378b54675590
inputs:
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.html
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-stats-warmwhite.png
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
  - projects/project-crux/handoff/011-visual-designer.md
outputs:
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.png
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
supersedes: project-crux/011
---

# Handoff Packet 012 — Visual Designer (Bio Plate Re-render)

Task:
- Handoff 012 (project-crux, Visual Design track) — re-render **only** the AP Biology grade-4a warm-white plate, and update the manifest. This supersedes Handoff 011, which was returned. Nothing about the plate's design changes; this is still a rendering task.

## Why 012 exists — what went wrong in 011

Handoff 011 asked for both warm-white plates as 1440 × 900 PNGs. The Statistics plate came back correct and is **not** re-declared here: `blue-hour-stats-warmwhite.png` on `main` is good, it is an input to this packet for reference, and you must not touch it.

The Biology plate was returned. In `blue-hour-bio-warmwhite.png` as landed, the water-potential readout panel wraps across roughly eight lines, with each subscript falling onto its own line:

```
Ψ = Ψ
s
+ Ψ
p

Ψ
out
= −1.4 bar
net flow: out
```

The correct rendering is three lines, matching how the Statistics plate's readout renders (`ŷ = 3.1 + 0.72x` / `r = 0.61` / `residual = −3.4`).

Three consequences follow from that wrap, and all three must be gone in your re-render:

1. The readout panel inflates vertically to roughly three times its intended height.
2. The "Before you move it" prediction bar is pushed past the 900 px frame and is clipped to a sliver at the bottom edge.
3. The footer caption ("ADVISORY EXPLORATION · SCORING ANCHORS APPEAR ONLY IN THE RUBRIC DRAWER") overlaps the dark readout panel instead of sitting clear of it.

`007b-color-resolution.md` records the two plates as graded to 4a together and symmetric, and the Statistics plate rendered correctly from the same run. That asymmetry is why this was judged a **render-environment defect rather than a defect in the plate**. The plate builds that panel in JavaScript at runtime — there are no `<sub>` tags in the source and the string "1.4 bar" does not appear in the static HTML — so the fault could not be confirmed or excluded by reading the file. The most likely cause is a font that did not load or resolve, leaving the panel to lay out against a fallback face with different metrics.

## What to produce

Exactly the two files in `outputs`:

1. `blue-hour-bio-warmwhite.png` — a corrected 1440 × 900 render of `blue-hour-bio-warmwhite.html`, overwriting the returned version.
2. `manifest.md` — the existing manifest, updated as described below. Keep its established format and its existing colour-role bullets; this is an edit, not a rewrite.

## Requirements

**Before rendering, report the resolved font stack.** In the page context, enumerate `document.fonts` — for each entry, its family, style, weight, and `status` — and determine whether any face specified by the plate failed to load and was replaced by a fallback. Include this in your return, and record a summary of it in `manifest.md`. This is the diagnostic that 011 was missing: `manifest.md` recorded no font or asset substitution, so there was no way to tell from the record whether a substitution had occurred.

**Wait for `document.fonts.ready`** before screenshotting, in addition to `waitUntil: 'load'`. A screenshot taken before webfonts settle is the most likely cause of the 011 defect.

**Render settings**, matching the shared renderer exactly: Chromium headless, `viewport: { width: 1440, height: 900 }`, `deviceScaleFactor: 1`, `waitUntil: 'load'`, `fullPage: false`.

**Verify the three failure modes are gone before you commit**, and state each explicitly in `manifest.md`:
- the water-potential readout renders on **three lines**;
- the prediction bar sits **fully inside** the 1440 × 900 frame;
- the footer caption sits **clear of** the readout panel, not overlapping it.

If any of the three is still wrong after the font fix, **stop and report it** rather than committing the plate. A second degraded render is worse than none, because it looks finished.

**Size:** under 500 KB (policy §7), as with 011. The Statistics plate is 354 KB and the returned Bio plate was 372 KB at this viewport, so this should fit without optimization. If it does not, optimize with `pngquant` / `oxipng` / `zopflipng` rather than requesting `--allow-large`, and do not reduce the viewport or change format.

## Hard constraints on your own conduct

- **Do not modify `blue-hour-bio-warmwhite.html` or any other HTML plate.** The PNG must be a render of exactly what is on `main`. If the plate itself looks wrong to you, that is a finding to report, not to fix.
- **Do not touch `blue-hour-stats-warmwhite.png`.** It is correct and is not re-declared as an output. Do not re-render it "for consistency."
- **Same P2 trap as 011: do not edit `render-mocks.mjs`,** whose fixed `pages` array does not fit this folder's layout, and **do not commit your one-off render script.** Only the two declared outputs are landed. Record the command you ran in `manifest.md` instead.
- **Do not edit `review-board.md`, `mocks/README.md`, or `warm-white/README.md`.** Indexing the PNGs on the review board remains a later packet.
- **Advisory. Selects nothing.** This packet does not advance Option 07, rank it, or mark anything Done. Track Done is Hard-Gate — David only.
- **Clean-room / blind-start still applies.** The real product name and identity stay withheld.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; re-rendering a returned plate is Standing-Approval work.
- Not approved: any selection, any restyle, any Done call.

## Files / Systems Affected

- Overwrite: `blue-hour-bio-warmwhite.png` (re-delivery of a returned output of `project-crux/011`).
- Edit: `manifest.md` (re-delivery of a returned output of `project-crux/011`).

## Do Not Touch

Anything not in `outputs` above — in particular `blue-hour-stats-warmwhite.png`, both warm-white `.html` plates, `warm-white/README.md`, `mocks/README.md`, `mocks/review-board.md`, `mocks/shared/render-mocks.mjs` and the rest of `shared/`, every other `option-0*/` folder, `004-directions.md`, `006-place-mode.md`, `007-working-mode-challenger.md`, `007b-color-resolution.md`, `charter.md`, `config/`, `docs/`, and other `projects/`.

## Open Risks / Blockers

- **P1 — Fonts resolving differently again.** This is the defect under repair. Enumerating `document.fonts` and awaiting `document.fonts.ready` is the mitigation; reporting the stack is what makes a repeat diagnosable instead of invisible.
- **P2 — Renderer edit / stray script.** See above. A file outside `outputs` in your diff will not be landed.
- **P3 — Declaring success without looking.** The three checks are visual. Open the PNG and confirm them; do not infer them from the fact that the render completed without error. 011's render also completed without error.

## Return path — branch intake

You can push a branch but not `main`. Commit **only your two declared outputs** on `codex/project-crux-012-visual-designer` and report the branch name and SHA. Do not update this packet, do not edit `docs/STATE.md`, and do not report the work as complete on your own authority: the steward (`claude-code`) checks those exact paths out of your branch and lands them with `scripts/publish`, and the DELIVERY RECEIPT is the completion. If your integration insists on opening a PR, leave it as a draft and say so.

## Next Expected Output

- `blue-hour-bio-warmwhite.png` at 1440 × 900, under 500 KB, with the readout on three lines and the prediction bar and footer inside the frame.
- `manifest.md` updated to record the resolved font stack, any substitution found, the re-render and its command, and the three explicit confirmations.
- In your return: the branch and SHA, the font-stack report, the final byte size, whether optimization was applied, and confirmation of the three checks.
