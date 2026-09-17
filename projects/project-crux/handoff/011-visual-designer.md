---
handoff: project-crux/011
role: visual-designer
status: ready
lane: routine
actor: codex
model: unspecified
source_sha: 8bf0481
frozen_hash:
inputs:
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-stats-warmwhite.html
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.html
  - projects/project-crux/visual/mocks/shared/render-mocks.mjs
  - projects/project-crux/visual/mocks/README.md
outputs:
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-stats-warmwhite.png
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.png
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
supersedes: none
---

# Handoff Packet 011 — Visual Designer (Render the Grade-4a Warm-White Plates)

Task:
- Handoff 011 (project-crux, Visual Design track) — render the two canonical grade-4a warm-white HTML plates to 1440 × 900 PNGs, and write a manifest for them. This is a **rendering task, not a design task**: nothing about the plates changes.

## Why 011 exists

Critic 010 (`critic/010-review-board-check.md`) checked every plate on the review board against its written direction. It could complete that check for every option except one. For Option 07's canonical grade-4a renders it recorded:

> Axis status: **not fully judgeable from available PNG plates** (HTML would settle it).

The cause is mechanical: `option-07-challenger/warm-white/` contains only `.html` files. Every other plate in the library has a PNG, so every other plate can be judged on the review board or in a GitHub diff without opening a browser. The warm-white plates — which are the *canonical* register for Option 07, superseding the dark-surround PNGs beside them — cannot.

This packet closes that gap so the next Critic pass, and David's eventual head-to-head, can judge Option 07's canonical state the same way every other option is judged.

## What to produce

Exactly the three files in `outputs`, and nothing else:

1. `blue-hour-stats-warmwhite.png` — a 1440 × 900 render of `blue-hour-stats-warmwhite.html`.
2. `blue-hour-bio-warmwhite.png` — a 1440 × 900 render of `blue-hour-bio-warmwhite.html`.
3. `manifest.md` — in the same folder, following the format of the other option manifests (see `../../option-04-lantern-fold/manifest.md` and siblings): a title, a `Source:` line, a short bullet list of what each file is, the colour-role bullets already established for this direction, and the closing advisory status line. In addition, this manifest must record **the source HTML file for each PNG, the exact render command used, and the viewport** (1440 × 900, `deviceScaleFactor: 1`).

## How to render

`projects/project-crux/visual/mocks/shared/render-mocks.mjs` is provided as an **input, for reference — do not modify it.** Its `pages` array is a fixed list of `[folder, name]` pairs that assumes a `<folder>/<name>.html` → `<folder>/<name>.png` layout. The warm-white plates do not fit that shape: they live in a nested subfolder with different filenames. Adding them to that array would be an edit to a file that is not in `outputs`.

So: use an equivalent one-off Playwright screenshot with the same settings the shared renderer uses — Chromium headless, `viewport: { width: 1440, height: 900 }`, `deviceScaleFactor: 1`, `waitUntil: 'load'`, `fullPage: false`. **Do not commit that one-off script**; only the three declared outputs are landed. Record the command you actually ran in `manifest.md`.

Each plate is a self-contained ~1 MB HTML with everything inlined, so it needs no network and no sibling files.

## Size limit — hard

Policy §7 enforces **500 KB per PNG**, checked by `publish`. Both PNGs must land under that limit. For comparison, the existing plates in this library run roughly 84 KB to 438 KB at the same viewport.

If a raw screenshot exceeds 500 KB, **optimize the PNG** — `pngquant`, `oxipng`, `zopflipng`, or equivalent — until it fits. Do **not** request `--allow-large`, do not drop to a smaller viewport, and do not switch format. If you cannot get under 500 KB without visible quality loss that would compromise the judgement this render exists to enable, stop and report that in your return rather than landing a degraded plate; that is a decision for David, not a silent trade.

## Hard constraints on your own conduct

- **Do not modify the HTML plates.** `blue-hour-stats-warmwhite.html` and `blue-hour-bio-warmwhite.html` are inputs. The PNGs must be renders of exactly what is on `main`.
- **Do not restyle anything.** No colour, type, spacing, or layout changes. If the render looks wrong to you, that is a finding to report, not to fix.
- **Do not edit `review-board.md`, `README.md`, `render-mocks.mjs`, or the `warm-white/README.md`.** Indexing the new PNGs on the review board is a later packet; this one only produces them.
- **Advisory. Selects nothing.** This packet does not advance Option 07, rank it, or mark anything Done. Track Done is Hard-Gate — David only.
- **Clean-room / blind-start still applies.** The real product name and identity stay withheld; do not infer or reconstruct them.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; rendering an existing committed plate is Standing-Approval work.
- Not approved: any selection, any restyle, any Done call.

## Files / Systems Affected

- Create: the three files in `outputs`, all inside `projects/project-crux/visual/mocks/option-07-challenger/warm-white/`. Additive only.

## Do Not Touch

Anything not in `outputs` above — in particular both warm-white `.html` plates, `warm-white/README.md`, `mocks/README.md`, `mocks/review-board.md`, `mocks/shared/render-mocks.mjs` and the rest of `shared/`, every other `option-0*/` folder, `004-directions.md`, `006-place-mode.md`, `007-working-mode-challenger.md`, `007b-color-resolution.md`, `charter.md`, `config/`, `docs/`, and other `projects/`.

## Open Risks / Blockers

- **P1 — PNG size.** These plates are large inline HTML with a graduated centre field; a naive screenshot may exceed 500 KB. Optimization is expected, not exceptional. See the size section above.
- **P2 — Renderer edit.** The natural instinct is to add two entries to `render-mocks.mjs`. That file is an input, not an output; editing it puts a file outside your declared outputs into the diff and the steward will not land it.
- **P3 — Font and render fidelity.** If a font, gradient, or inline asset resolves differently in your environment than intended, the PNG silently misrepresents the plate. Verify no page errors and no broken images before screenshotting — the shared renderer's error check is a good model — and report any substitution in your return.

## Return path — branch intake

You can push a branch but not `main`. Commit **only your three declared outputs** on `codex/project-crux-011-visual-designer` and report the branch name and SHA. Do not update this packet, do not edit `docs/STATE.md`, and do not report the work as complete on your own authority: the steward (`claude-code`) checks those exact paths out of your branch and lands them with `scripts/publish`, and the DELIVERY RECEIPT is the completion. If your integration insists on opening a PR, leave it as a draft and say so.

## Next Expected Output

- The two PNGs at 1440 × 900, each under 500 KB, byte-faithful renders of the committed HTML.
- `manifest.md` in the established format, additionally recording source HTML per PNG, exact render command, and viewport.
- In your return: the branch and SHA, the final byte size of each PNG, whether optimization was applied and with what tool, and any font or asset substitution you observed.
