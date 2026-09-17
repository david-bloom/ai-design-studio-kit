---
handoff: project-crux/009
role: critic
status: dispatched
lane: routine
actor: claude-code
model: unspecified
source_sha: 899c3c2
frozen_hash: fdb8ee352d097dc80e9e4e0e4846fc7b9f190357012c71ec6cd7406a7821373c
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/critic/005-review.md
  - projects/project-crux/critic/008-divergence-gate.md
  - projects/project-crux/visual/007b-color-resolution.md
outputs:
  - projects/project-crux/critic/009-decision-brief.md
supersedes: none
---

# Handoff Packet 009 — Critic (Open-Findings Decision Brief)

Task:
- Handoff 009 (project-crux, Visual Design track) — consolidate the two landed Critic advisories into a one-page decision brief for David. This is a **consolidation and routing task, not a new review**: no new criticism, no new findings, no winner.

## Why 009 exists

Critic advisories 005 (six frozen directions) and 008 (the Blue Hour Cabinet divergence gate) are both accepted. Their findings are severity-tagged but scattered across two files written weeks and roles apart, and some have since been closed by later work — 006 closed the place-mode gap, and 007b settled the color grade. David needs one page that says what is *still open*, what decision each open item forces, and what evidence would settle it, so that the next move is a decision rather than another read-through.

This is the `routine` lane: the judgment was already made in 005 and 008. This packet transcribes and routes it.

## What to produce

`projects/project-crux/critic/009-decision-brief.md` — one page, for David, containing:

1. **Every Blocking and Notable finding from 005 and 008 that is still open.** Source only from those two files. A finding is *closed* if later landed work (006 place-mode, 007b color-resolution) demonstrably resolved it; closed findings are listed once in a short "already closed" section with the file that closed them, then dropped. Minor findings are out of scope.
2. **The one decision each open finding implies** — stated as a decision David could actually make, not as a restatement of the finding.
3. **What evidence would settle it** — the specific artifact, test, or comparison that would let that decision be made with confidence.

Format: a table or per-finding block, whichever reads faster on one page. Cite the source file and severity for every row.

## Hard constraints on your own conduct

- **Advisory only. No recommendation of a winner.** Do not rank the directions, do not pick between the synthesis and the challenger, do not mark anything Done. Every Done decision is David's (`ARCHITECTURE.md` §5).
- **No new findings.** If something looks wrong that 005 and 008 did not raise, it does not go in this brief. Source strictly from those two files.
- **Do not re-litigate the color grade.** 007b settled it; it is an input here only so you can tell which 005/008 findings it closed.
- **Clean-room / blind-start still applies.** The real product name/identity and any exploration outside this repo stay withheld; do not infer or reconstruct them.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; consolidation of existing advisories is Standing-Approval work.
- Not approved: any Done call, any selection among directions, any new critique. Track Done is Hard-Gate — David only.

## Files / Systems Affected

- Create: `projects/project-crux/critic/009-decision-brief.md`. Additive only.

## Do Not Touch

Anything not in `outputs` above — in particular `critic/005-review.md`, `critic/008-divergence-gate.md`, `visual/007b-color-resolution.md`, `visual/004-directions.md`, `visual/006-place-mode.md`, `visual/007-working-mode-challenger.md`, the `option-07-challenger/` plates, `charter.md`, `config/`, `docs/`, and other `projects/`.

## Open Risks / Blockers

- **P1 — Drift into new critique.** The failure mode of a consolidation task is quietly becoming a third review. Every row must trace to a sentence in 005 or 008.
- **P2 — False closure.** Calling a finding closed because later work *mentions* the topic, rather than resolving it. When in doubt, leave it open and say what is unresolved.
- **P3 — Implied selection.** Ordering, emphasis, or framing can recommend a winner without saying so. Order by severity then source, not by preference.

## Next Expected Output

- `projects/project-crux/critic/009-decision-brief.md`, labeled advisory / not final / not a Done decision, one page, every row traceable to 005 or 008.
