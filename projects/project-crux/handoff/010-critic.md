---
handoff: project-crux/010
role: critic
status: ready
lane: judgment
actor: grok
model: unspecified
source_sha: 20bff2b
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/mocks/review-board.md
  - projects/project-crux/visual/004-directions.md
  - projects/project-crux/visual/006-place-mode.md
  - projects/project-crux/visual/007-working-mode-challenger.md
outputs:
  - projects/project-crux/critic/010-review-board-check.md
supersedes: none
---

# Handoff Packet 010 — Critic (Review-Board Consistency Check)

Task:
- Handoff 010 (project-crux, Visual Design track) — the full mock library is now on `main`. Check whether each rendered plate on the review board actually matches the written direction it claims to render, and report every contradiction.

## Why 010 exists

Until 2026-09-17 the mock library lived on an unmerged branch, so no reviewer could compare the plates against the written directions. Every judgment made so far — including Critic 005 and the 008 divergence gate — was made against prose, or against a handful of plates in isolation. The plates are now on `main` and indexed in `visual/mocks/review-board.md`.

This packet asks one question that could not be asked before: **does each plate render what its written direction says it renders?** A plate that quietly drifts from its spec on palette, scoring anchors, or structure corrupts every later comparison, because David would be choosing between images while the record describes something else.

## What to check

For each of the seven plates indexed in `visual/mocks/review-board.md` — the six frozen directions from `004-directions.md` plus the Option 07 challenger from `007-working-mode-challenger.md` — open the plate and compare it against its written specification.

The review board indexes these plate directories under `projects/project-crux/visual/mocks/`:

- `option-01-draw-the-door/` — `working.png` / `.html`, `overview.png` / `.html`
- `option-02-soft-landing/` — `working.png` / `.html`, `overview.png` / `.html`
- `option-03-pocket-universe/` — `working.png` / `.html` (no place mode; deferred by Handoff 006)
- `option-04-lantern-fold/` — `working.png` / `.html`, `overview.png` / `.html`
- `option-05-say-it-bright/` — `working.png` / `.html`, `overview.png` / `.html`
- `option-06-three-guide-registers/` — `working.png` / `.html`
- `option-07-challenger/` — `working-stats.png` / `.html`, `working-bio.png` / `.html`, and the canonical grade-4a renders in `warm-white/`

Working modes are specified in `004-directions.md` (Options 01–06) and `007-working-mode-challenger.md` (Option 07). Place/overview modes are specified in `006-place-mode.md` (Options 01, 02, 04, 05 only).

Check exactly three axes, and only these three:

1. **Palette** — do the colours in the plate match the hex values and colour roles the written direction names?
2. **Scoring anchors** — are the two exclusive anchors present, the correct shapes, used with their one declared meaning, and kept out of any role the spec forbids (place mode, action/interaction colour, guide characters)?
3. **Structure** — does the plate's layout, panel arrangement, and named components match what the direction describes?

## What to produce

`projects/project-crux/critic/010-review-board-check.md`, listing **every plate that contradicts its written spec**. For each contradiction:

- the **plate file** (exact path);
- the **contradicting sentence** from the written direction, quoted;
- what the plate shows instead;
- a severity tag — **Blocking / Notable / Minor**, used the same way `critic/005-review.md` used them.

A plate that matches its spec needs one line saying so; do not pad it. If an axis cannot be judged from the artifacts available, say so plainly rather than guessing.

## Hard constraints on your own conduct

- **Advisory only. Select nothing.** Do not rank the directions, do not pick a winner, do not mark anything Done. Every Done decision is David's.
- **Do not re-litigate the Option 07 colour grade.** `007b-color-resolution.md` settled it at grade 4a. The `option-07-challenger/working-stats.png` and `working-bio.png` plates show the superseded dark surround; the canonical renders are in `warm-white/`. Surround lightness and colour grade are out of scope — judge Option 07's palette on the anchor and interaction colours, not the surround.
- **This is a consistency check, not a redesign.** Do not propose fixes, restyles, or new directions. Report the contradiction; the fix is a later packet.
- **Never modify the work under review.** Your output is a separate file. Do not edit any plate, any direction file, `review-board.md`, `charter.md`, `config/`, or `docs/`.
- **Clean-room / blind-start still applies.** The real product name and identity, and any exploration outside this repo, stay withheld. Do not infer, request, or reconstruct them.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; this consistency check is Standing-Approval work.
- Not approved: any Done call, any selection, any redesign. Track Done is Hard-Gate — David only.

## Files / Systems Affected

- Create: `projects/project-crux/critic/010-review-board-check.md`. Additive only.

## Do Not Touch

Anything not in `outputs` above — in particular every file under `projects/project-crux/visual/mocks/`, `004-directions.md`, `006-place-mode.md`, `007-working-mode-challenger.md`, `007b-color-resolution.md`, `charter.md`, `config/`, `docs/`, and other `projects/`.

## Open Risks / Blockers

- **P1 — Colour/structure conflation on Option 07.** The known trap from Handoff 008: marking the challenger down for its surround when that variable is settled and the dark PNGs are superseded. State your understanding of this before judging Option 07.
- **P2 — Drift into critique of the design itself.** "This plate is worse than that one" is out of scope. The only question is whether the plate matches its own written spec.
- **P3 — Unjudgeable axes.** Some palette values may not be verifiable from a PNG at 1440 × 900. Where the `.html` source settles it, use the `.html`; where nothing settles it, record the axis as not judgeable rather than inferring.

## Return path — airlock

You do not have repository write access. Return exactly one **AIRLOCK RETURN** in the format given in `prompts/UNIVERSAL_SESSION_PROMPT.md`, with one `=== FILE: ===` block for `projects/project-crux/critic/010-review-board-check.md` and nothing outside the blocks. Do not summarise the content outside the block. The steward (`claude-code`) lands it unchanged; the DELIVERY RECEIPT is the completion, not your own report.

## Next Expected Output

- `projects/project-crux/critic/010-review-board-check.md` — every contradicting plate with file path, quoted contradicting sentence, what the plate shows instead, and a Blocking / Notable / Minor tag; matching plates noted in one line each. Explicitly labelled advisory / not final / not a Done decision.
