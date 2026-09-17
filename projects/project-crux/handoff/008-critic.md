---
handoff: project-crux/008
role: critic
status: landed
lane: judgment
actor: grok
model: unspecified
source_sha:
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/007-working-mode-challenger.md
  - projects/project-crux/handoff/007-visual-designer.md
  - projects/project-crux/visual/004-directions.md
  - projects/project-crux/visual/007b-color-resolution.md
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-stats-warmwhite.html
  - projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.html
outputs:
  - projects/project-crux/critic/008-divergence-gate.md
supersedes: none
legacy: true
---

# Handoff Packet 008 — Critic (Divergence Gate)

> **Destination in repo:** `projects/project-crux/handoff/008-critic.md`
> Drafted by Claude Code from David's session brief (executor/committer role — see `charter.md`'s Stage log note on Claude Code's non-generative function on this project). This is not a Creative Director packet in the usual sense: it lands a specific, narrow gate question David asked for, verbatim.

Task:
- Handoff 008 (project-crux, Visual Design track) — independent Critic review of Handoff 007's output (`visual/007-working-mode-challenger.md`, "The Blue Hour Cabinet"), answering one specific gate question before this challenger goes head-to-head with the in-house synthesis.

Prompts Included:
- [ ] Visual Designer  - [ ] Brand Strategist
- [x] Critic (see `prompts/UNIVERSAL_SESSION_PROMPT.md` — triggered by `SESSION START: project-crux`)
- [ ] Chaos Agent

## Why 008 exists

Handoff 007 asked Sol for a challenger working-mode that recovers whimsy/comfort and a distinctive signature without abandoning the validated three-column architecture. Sol returned "The Blue Hour Cabinet" — a cyanotype/photogram-specimen-drawer system. Before David reviews it against the synthesis, this packet asks Grok for one specific, narrow judgment: **is it genuinely divergent, or a reskin?** — a check on whether 007's anti-convergence protocol (three-seeds-down-to-one, the four disqualifiers, the named tactile-craft requirement, the falsifiable distinctiveness paragraph) actually held, before anyone invests further review time in it.

## The CD color-resolution context note — read before evaluating

**This is a settled surface variable, not the thing under review.** Since Handoff 007's plates were committed, David and the CD ran a separate color study (outside this repo, in a Claude Design canvas session) and locked the register at **grade 4a**: a warm paper-white surround, dark chrome, a center field graduating cool Prussian → warm lamplight, and sand drawers — keeping the blue signature and full anchor discipline (blue won-flower = earned, fired-clay lost-filament = commonly lost, cyan = action/thread, never scoring). Green was tested and rejected (loses drama without warming); red was tested and rejected (reads "error," collides with the fired-clay lost-anchor). This resolved a specific fatigue doubt: a concentrated blue center on a white frame outperforms a full dark field for 20-minute sessions. Full record: `projects/project-crux/visual/007b-color-resolution.md`, committed alongside this packet.

**The practical consequence for your review, stated plainly so you don't have to guess:** the original plates (`mocks/option-07-challenger/working-stats.png` and `working-bio.png`) show the **dark "Blue Hour" surround from before this color study**. The canonical grade-4a warm-white renders are committed at `projects/project-crux/visual/mocks/option-07-challenger/warm-white/` as two self-contained files — `blue-hour-stats-warmwhite.html` and `blue-hour-bio-warmwhite.html` — each a standalone ~1MB HTML that opens directly with no other files needed (an earlier five-file dependency-chain plan was superseded before anything was committed under it). **Open those two files as your visual reference and disregard the original dark PNGs' surround color.** Either way: **do not judge or re-litigate the surround lightness/color grade** — that variable is settled. Focus your divergence judgment on what the color study did NOT touch: the cabinet/drawer structural system, the cyanotype/photogram medium, the anchor shapes, the interaction language, and the overall signature — i.e., everything `007-working-mode-challenger.md`'s written direction describes.

## What to evaluate

Read `projects/project-crux/visual/007-working-mode-challenger.md` in full, plus the two committed plates for structural reference (`mocks/option-07-challenger/working-stats.png`, `working-bio.png`). Read `projects/project-crux/handoff/007-visual-designer.md` (the governing brief) so you know what "divergent" was actually being asked to mean, and `projects/project-crux/visual/004-directions.md` (the six directions) plus the in-house synthesis description embedded in Handoff 007's "Why 007 exists" section (the synthesis itself has no separate file in this repo — treat that section as the record of it).

Answer the single mandatory gate question, verbatim as asked — do not soften or reframe it:

> **Genuinely divergent, or a reskin?**

Support your answer against 007's own anti-convergence protocol, specifically:
1. Does the survivor ("The Blue Hour Cabinet") actually clear all four disqualifiers 007 listed (not just "soft and warm," not in the synthesis's palette family, not mistakable for one of the six or the synthesis, whimsy carried by craft/medium/voice rather than mascots/toy-colors/rounded-everything/reward-motion/emoji)?
2. Does it deliver the mandatory net-new signature — a motif, medium, or interaction absent from all six directions, with a genuinely named tactile craft (the packet's own answer is a cyanotype/photogram/specimen-drawer system — assess whether that's real medium specificity or dressed-up vector-flat)?
3. Is its own "Why this could not be mistaken for the synthesis or any of the six" paragraph a falsifiable, checkable claim, or a mood statement?

## Hard constraints on your own conduct

- **Advisory only.** You are answering one gate question, not selecting a winner, not marking anything Done, not approving the challenger or the synthesis.
- **Never overwrite the work under review.** Do not modify `007-working-mode-challenger.md`, the `option-07-challenger/` plates, `004-directions.md`, `006-place-mode.md`, prior option mocks, `007b-color-resolution.md`, `charter.md`, `config/`, or `docs/`. Your output is a separate file.
- **Do not re-litigate the color grade** per the context note above — it is out of scope for this specific gate question.
- **Clean-room / blind-start still applies.** The real product name/identity and any prior/parallel design exploration outside this repo are deliberately withheld. Do not infer, request, or reconstruct them.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; this narrow Critic gate is Standing-Approval work.
- Not approved / required before Done: nothing here is final. Every track's Done decision is Hard-Gate — David's sign-off only. This gate answers one question; it does not clear the challenger for a Done call.

## Files / Systems Affected

- Create: `projects/project-crux/critic/008-divergence-gate.md`.
- Do not modify anything under `visual/`, `handoff/`, `charter.md`, `config/`, or `docs/`. Additive only.

## Open Risks / Blockers

- **P1 — Color/structure conflation.** The single biggest risk to this review is Grok mistaking the unrendered color grade for a structural signal (e.g. marking it down as "too dark/moody" when that's a known, already-superseded state). The context note above exists specifically to prevent this — restate your understanding of it before answering, so the misread is catchable if it happens anyway.
- **P2 — (Resolved before dispatch) grade-4a artifacts are now committed.** `warm-white/blue-hour-stats-warmwhite.html` and `blue-hour-bio-warmwhite.html` are real, openable files in this repo as of 2026-09-16 — open them directly rather than inferring the register from the text description in `007b-color-resolution.md` alone.
- **P3 — Scope creep into selection.** This is a divergence check, not a synthesis-vs-challenger recommendation. Stay on the one question.

## Do Not Touch

- `007-working-mode-challenger.md`, the `option-07-challenger/` plates, prior option mocks (`002`–`004-directions.md`, `006-place-mode.md`), `007b-color-resolution.md`, `charter.md`, `config/`, `docs/`, other `projects/`.

## Next Expected Output

- `projects/project-crux/critic/008-divergence-gate.md` — a direct answer to "Genuinely divergent, or a reskin?", reasoned against the three support points above, explicitly noting your understanding of the color-resolution context note and confirming you did not use the unrendered plates' surround color as evidence either way. Severity-tag any concerns the way `critic/005-review.md` did (Blocking / Notable / Minor). Explicitly labeled advisory / not final / not a Done decision.

## Recommended Prompt for Critic

As of 2026-09-16, this project uses `prompts/UNIVERSAL_SESSION_PROMPT.md`, pasted into Grok's persistent project instructions, triggered by `SESSION START: project-crux`. The universal prompt's own logic has Grok determine it is the Critic (via `config/agent-models.yaml`), read `ARCHITECTURE.md` and this project's `charter.md`, then find this file as the highest-numbered handoff addressed to its role, and act on it directly — the sections above are the actual instructions; no separate prompt text is needed.
