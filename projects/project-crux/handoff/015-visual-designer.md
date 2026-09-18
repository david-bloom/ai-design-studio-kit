---
handoff: project-crux/015
role: visual-designer
status: dispatched
lane: routine
actor: codex
model: Codex / GPT-Sol (OpenAI)
source_sha: 72f0d59
frozen_hash: e9c32f26161c0238922c1ffbc0de40d0834704d952f7e48277945e04f8c49423
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/014-register-directions.md
  - projects/project-crux/visual/mocks/review-board.md
  - projects/project-crux/visual/mocks/shared/content-fixtures.md
outputs:
  - projects/project-crux/visual/mocks/head-to-head-014/signal-proof/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/signal-proof/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-014/daybreak-relay/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/daybreak-relay/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-014/open-window/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/open-window/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-014/midnight-standard-control/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/midnight-standard-control/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-014/manifest.md
supersedes: none
revises: none
---

# Handoff Packet 015 — Visual Designer (Render the 014 Head-to-Head, One Shared Sample, Four Registers)

Task:
- Handoff 015 (project-crux, Visual Design track) — **render the four directions from `014-register-directions.md` as comparable Open Hand mock plates.** This is a faithful rendering of already-authored directions so David can run a head-to-head with register as the only variable. It is **not** a redesign, a re-divergence, or a selection.

## Why 015 exists

`014-register-directions.md` produced four *written* directions (three teen-register + one cool/mature control). A head-to-head can't run off prose — David needs to see the registers rendered, and to see them fairly, they must render **the same content on the same screen**, so the only thing that differs between plates is the visual register itself.

## What to produce

Exactly the nine files in `outputs`: one `openhand-stats.html` + `openhand-stats.png` for each of the four directions, plus one `manifest.md`.

- **Signal / Proof** → `head-to-head-014/signal-proof/`
- **Daybreak Relay** → `head-to-head-014/daybreak-relay/`
- **Open Window** → `head-to-head-014/open-window/`
- **Midnight Standard (control)** → `head-to-head-014/midnight-standard-control/`

## The one shared sample (identical across all four)

Render the **same AP Statistics Open Hand sample in every plate**, with the same data, so register is the only variable:

> A school compares nightly sleep (hours) and next-day reaction time (ms) for 28 students. Describe the association, then explain how the highlighted high-leverage observation affects the least-squares regression line.

- Same scatterplot data, same highlighted high-leverage point, same axis units, in all four.
- Face-up sample with scoring mechanics visible → the student's move, per each direction's own Open Hand description in 014.
- Each plate shows: the sample prompt, the scatterplot (with an accessible data-table equivalent indicated), a sample response with that direction's **earned** and **commonly-lost** scoring anchors placed on the response, the direction's primary action, and the "Your move" affordance in its default (Learner-B) state.
- Use `mocks/shared/content-fixtures.md` if it already carries this or a comparable regression fixture; otherwise define the data once and reuse it byte-for-byte across all four plates. Record which you did in the manifest.

## Faithful to 014 — render, don't redesign

For each plate, implement **exactly** that direction's authored register from `014-register-directions.md`:
- its palette (the declared hex tokens and their assigned roles),
- its type pairing (headline / interface / math),
- its two **exclusive scoring anchors** (earned + commonly-lost), used nowhere else, with the action color separate from both,
- its structural model (Signal/Proof's asymmetric proof-board; Daybreak Relay's three-beat horizontal relay; Open Window's two-deck aperture stage; Midnight Standard's fixed three-column reference workspace).

Do **not** invent new register, "improve" a direction, harmonize the four toward each other, or blend them. If a direction's 014 spec is ambiguous at render time, render the most faithful literal reading and note the ambiguity in the manifest — do not resolve it by redesigning.

## Render settings

Chromium headless, `viewport: { width: 1440, height: 900 }`, `deviceScaleFactor: 1`, `waitUntil: 'load'`, `fullPage: false`, awaiting `document.fonts.ready` before screenshot. Verify on each rendered PNG before committing that the plate fills the 1440×900 frame with no clipped content and no overflow past the frame.

**Size:** each PNG under 500 KB (policy §7); total commit under 10 MB. If a PNG exceeds 500 KB, optimize with `pngquant` / `oxipng` / `zopflipng` — do not reduce the viewport, change format, or request `--allow-large`.

## What to record in `manifest.md`

- the shared sample and dataset used, and whether it came from `content-fixtures.md` or was defined here;
- per plate: the resolved font stack (and any fallback that substituted), and confirmation the frame is filled with no clipping;
- per plate: the two scoring-anchor shapes as rendered and confirmation the action color is not reused as an anchor;
- any 014 ambiguity encountered and the literal reading chosen;
- the render command and viewport.

Keep the manifest to a plain record. It selects nothing and ranks nothing.

## Hard constraints

- **Advisory. Selects nothing.** This renders all four for comparison; it does not choose a winner, rank them, or mark any track Done. Track Done is Hard-Gate — David only.
- **Exclusive scoring anchors** and **help-not-vend** hold in every plate. Real AP Statistics content stays legible and its data-table equivalent is indicated.
- **Clean-room / blind-start.** The real product name/identity stays withheld; do not infer or reconstruct it.
- Render **only** what 014 authored. No new palettes, structures, or content beyond making the shared sample concrete.

## Files / Systems Affected

- Create: the nine files in `outputs` under `projects/project-crux/visual/mocks/head-to-head-014/`.
- Modify nothing else.

## Do Not Touch

- Anything not in `outputs` — in particular `014-register-directions.md` (render *from* it; do not edit it), the entire `option-07-challenger/` tree and any Blue Hour files (that direction is David's parallel `/design` track), all other `option-0*/` mocks, `review-board.md` and `mocks/README.md` (indexing is a later packet), `mocks/shared/render-mocks.mjs` (its fixed `pages` array does not fit this folder — run your own one-off render and record the command; do not commit the script), `charter.md`, `config/`, `docs/`, and other `projects/`.
- The product's real name/identity/category beyond the charter; any excluded prior art.

## Open Risks / Blockers

- **P1 — Drift from 014.** The plates must match the written directions; a "nicer" render that departs from the authored register defeats the head-to-head. Faithful over polished.
- **P2 — Non-comparable plates.** If the four don't share identical sample content and layout unit, register isn't isolated. Same data, same screen, same sample, every plate.
- **P3 — Anchor discipline.** It is easy to let a warm identity accent drift onto a scoring anchor. Keep earned/lost anchors exclusive and the action color separate, in every plate.
- **P4 — Success without looking.** Open each rendered PNG and confirm the frame is filled and nothing is clipped before committing.
- **Clean-room:** withheld identity stays withheld.

## Return path — branch intake

You can push a branch but not `main`. Commit **only your nine declared outputs** on `codex/project-crux-015-visual-designer` and report the branch name and SHA. Do not update this packet, do not edit `docs/STATE.md`, and do not report the work as complete on your own authority: the steward (`claude-code`) checks those exact paths out of your branch and lands them with `scripts/publish`, and the DELIVERY RECEIPT is the completion. If your integration insists on opening a PR, leave it as a draft and say so.

## Next Expected Output

- Eight plate files (four `openhand-stats.html` + four `openhand-stats.png`), each 1440×900, each faithful to its 014 direction's register, all rendering the same shared AP Statistics sample.
- `manifest.md` recording the shared sample source, per-plate font stacks and frame confirmations, the anchor shapes, any 014 ambiguities and the literal readings chosen, and the render command.
- In your return: branch and SHA, the file list, and each PNG's byte size.
