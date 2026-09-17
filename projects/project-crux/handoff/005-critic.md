---
handoff: project-crux/005
role: critic
status: accepted
lane: judgment
actor: grok
model: unspecified
source_sha:
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/004-directions.md
outputs:
  - projects/project-crux/critic/005-review.md
supersedes: none
legacy: true
---

# Handoff Packet 005 — Critic

> **Destination in repo:** `projects/project-crux/handoff/005-critic.md`
> Drafted by Claude Code (David asked directly for this packet; not authored by a Creative Director session this time — see the charter's Stage log note on Claude Code's non-role status on this project). This is the first Critic handoff for project-crux.

Task:
- Handoff 005 (project-crux, Visual Design + UX tracks) — independent advisory review of the frozen six-option set in `projects/project-crux/visual/004-directions.md`.

Prompts Included:
- [ ] Visual Designer  - [ ] Brand Strategist
- [x] Critic (see `prompts/UNIVERSAL_SESSION_PROMPT.md` — triggered by `SESSION START: project-crux`)
- [ ] Chaos Agent

## Why 005 exists

004 froze the six options David wants evaluated: four carried unchanged from 002 (Soft Landing, Pocket Universe, Lantern Fold, Say It Bright original), one upgraded with real interactivity (Draw the Door — Influence Lab, replacing the old static version), and one new character-led variant testing a charter constraint David deliberately suspended for this option only (Say It Bright — Three Guide Registers). This is the first time any of this project's Visual Design output gets an independent second opinion from a different lab (ARCHITECTURE.md §4's decorrelation rationale) — nothing so far has been Critic-reviewed.

**Context worth knowing before you evaluate:** this whole redesign push exists because real student reaction to the current live product's design/UX was decidedly lukewarm. David is not asking whether these six are pretty — he's asking which ones would actually move that needle, including directions that push past the charter's original instincts (interactivity, character, warmth) to find out what does.

## What to evaluate

Read `projects/project-crux/visual/004-directions.md` in full — all six options, verbatim, faithfully carried from `002-directions.md` and `003-directions.md` per handoff 004's mandate. Do not treat any option as more "finished" than another because of its position in the list.

For **each** of the six options, per your role definition (`docs/ARCHITECTURE.md` §3 — heuristic evaluation *and* scenario-driven "walk through it as a user" testing, both from one role):

1. **Heuristic pass against the charter's Done Decider checklist** (`projects/project-crux/charter.md`), Visual Design and UX tracks specifically:
   - Reads as calm/optimistic/empowering — not gamified, not pandering, not worksheet-like — and is legibly not a re-skin of its cited inspiration references.
   - Has a single, consistent visual anchor system for "points earned" vs. "points commonly lost," used nowhere else.
   - The same system visibly supports both Learner A's dense/high-control mode and Learner B's low-decision/single-focus mode without looking like two products.
   - Survives a side-by-side gut check against the anti-references (Kaplan/Fiveable-style drill prep, heavy-gamification edtech).
   - The overview/navigation ("place") mode and the focused single-topic ("working") mode are each concretely expressed, not just named.
   - The "Open Hand" concept has a specific, usable UX expression.
   - A 10–20 minute session is completable by Learner B (low text, low decisions, visible momentum) without feeling stripped-down or patronizing to Learner A.
   - Progressive disclosure is evident: minimal defaults, complexity pulled rather than pushed.
2. **Hard-constraint compliance** (all six, non-negotiable, listed in `004-directions.md`'s "Shared hard constraints"): two exclusive scoring anchors, interactive accent colors never doubling as scoring anchors, help-not-vend assistance ladder, one adaptive system rather than two branded modes, laptop-first legibility for real AP Statistics and Biology content, no gamification/streaks/paywall-nag/parent surfaces.
3. **Scenario walkthrough** on at least the two most-changed options (Option 1 — Draw the Door: Influence Lab, and Option 6 — Say It Bright: Three Guide Registers): walk through each as Learner A (senior, strong executive function, wants density) and separately as Learner B (sophomore, mild ADHD, needs low-decision single-focus) working a real AP Statistics or Biology question. Note where each learner would actually get stuck, confused, or disengaged — not just where the spec reads well.
4. **Option 6's suspended constraint, evaluated in the right frame.** The no-character rule is suspended for this option only, by David's explicit instruction, as a controlled experiment — evaluate it as a real candidate, not as an automatic violation. But also give your honest read on whether character presence is doing real work here (making the "bleh" problem better) or is a stylistic risk (patronizing, gimmicky, drifting off-brand) — that judgment is exactly why this option exists.
5. **Comparative read.** Given the actual motivation (students found the current product's design "bleh"), which of the six feel most likely to change that reaction, and why? You do not pick a winner — that's David's Done decision — but a ranked or clustered comparative read is exactly the kind of second opinion this handoff is for.

## Hard constraints on your own conduct

- **Advisory only.** You do not select, combine, approve, or finalize an option. Nothing you write may be phrased as final, approved, or ready to ship.
- **Never overwrite the work under review.** Do not modify `004-directions.md`, `003-directions.md`, `002-directions.md`, or `charter.md`. Your output is a separate file.
- **Clean-room / blind-start still applies.** The real product name/identity and any prior/parallel design exploration outside this repo are deliberately withheld. Do not infer, request, or reconstruct them.
- Severity-tag your findings (e.g. blocking / notable / minor) so David can triage quickly rather than reading a flat list.

## Approval State

- Approved: charter "approved to generate"; Visual Design and UX tracks in scope; independent Critic review is Standing-Approval work.
- Not approved / required before Done: nothing here is final. Every track's Done decision is Hard-Gate — David's sign-off only, per `STANDING_APPROVAL_LANES.md` and `AI_COLLABORATION_RULES.md`'s Main Conductor exception for this kit.

## Files / Systems Affected

- Create: `projects/project-crux/critic/005-review.md`.
- Do not modify `visual/002-`, `003-`, `004-directions.md`, `charter.md`, `config/`, `docs/`, `handoff/`, or other `projects/`.

## Open Risks / Blockers

- **P1 — Same-lab bias is not a risk here** (Grok is decorrelated from Sol/GPT-Sol, which generated all six options) — but reviewing your own prior output would be, if you are ever asked to Critic something Grok generated as Chaos Agent. Not applicable to this handoff; noted for future ones.
- **P2 — Treating a comparative ranking as a decision.** Your comparative read (item 5 above) is input to David's Done decision, not a recommendation he's expected to just adopt.
- **P3 — Option 6 either over-penalized or rubber-stamped.** Give it a real, honest evaluation in both directions — neither "characters are inherently off-brand" nor "David suspended the rule so it's exempt from scrutiny" is the right frame.

## Do Not Touch

- `visual/002-`, `003-`, `004-directions.md` (review only, never edit).
- The product's real name/identity/category beyond the charter; any prior/parallel design exploration.
- `charter.md`, `config/`, `docs/`, `handoff/`, other `projects/`.

## Next Expected Output

- `projects/project-crux/critic/005-review.md` — per-option findings (heuristic + hard-constraint + scenario walkthrough where required), severity-tagged; the Option 6 constraint-suspension evaluation; the comparative read across all six; explicitly labeled advisory / not final / not a Done decision.

## Recommended Prompt for Critic

As of 2026-09-16, this project uses `prompts/UNIVERSAL_SESSION_PROMPT.md`, pasted into Grok's persistent project instructions, triggered by `SESSION START: project-crux`. The universal prompt's own logic has Grok determine it is the Critic (via `config/agent-models.yaml`), read `ARCHITECTURE.md` and this project's `charter.md`, then find this file as the highest-numbered handoff addressed to its role, and act on it directly — the sections above are the actual instructions; no separate prompt text is needed.
