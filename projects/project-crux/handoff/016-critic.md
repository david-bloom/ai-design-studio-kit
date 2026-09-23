---
handoff: project-crux/016
role: critic
status: blocked
lane: judgment
actor: grok
model: grok (xAI)
source_sha: 28ffe71
frozen_hash: 854ab25b4bd630d5e12d960a4a849873740b81f8156cac7f96e77eef0f3305b7
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/014-register-directions.md
  - projects/project-crux/visual/mocks/head-to-head-014/signal-proof/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/daybreak-relay/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/open-window/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/midnight-standard-control/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-014/manifest.md
  - projects/project-crux/critic/009-decision-brief.md
outputs:
  - projects/project-crux/critic/016-review.md
supersedes: none
revises: none
---

# Handoff Packet 016 — Critic (Assess the 014/015 Head-to-Head Register Set)

Task:
- Handoff 016 (project-crux) — independent, advisory Critic review of the four register directions from Handoff 014, as rendered in the Handoff 015 head-to-head plates. Assess each against the charter, deliver severity-tagged findings and scenario walkthroughs, and give an explicitly advisory read. **You select nothing, approve nothing, and mark nothing Done — David alone decides Done.**

## What you are reviewing

Four directions, each authored in `014-register-directions.md` and rendered as one Open Hand plate on an identical AP Statistics sample in `015` (`mocks/head-to-head-014/<dir>/openhand-stats.html`, with a matching `.png` at the same path as the visual render):

1. **Signal / Proof** — teen-register A (asymmetric editorial proof-board).
2. **Daybreak Relay** — teen-register B (three-beat horizontal relay).
3. **Open Window** — teen-register C (two-deck aperture stage).
4. **Midnight Standard** — the **control**, which deliberately defends the cool/mature register.

All four render the *same* sample so that **visual register is the only variable**. Read the written direction and the rendered HTML together; treat the `.png` as the visual reference if you can view it.

## Context you must connect to (do not re-derive)

- The **updated register brief** is in the charter (Expanded understanding, 2026-09-18) and is a **Soft constraint**: teen-resonant register (high contrast, generous white space, warm accents, black sans-serif headers), deliberately **testable against a control**. It is not a settled verdict.
- `009-decision-brief.md` holds the still-open findings from prior review. Two matter most here: **N4** (the "register hit" — whether a given register actually resonates with the real, lukewarm cohort, which 009 says only real student reaction can settle) and **N1/N2** (whether Learner B can complete a 10–20 minute session). Tie your findings to these where they apply rather than inventing new numbering.

## What to assess (per direction)

1. **Charter Done Decider checklist** (Visual Design + UX items) and **hard constraints**: exclusive scoring anchors (one meaning each, action color never scores), help-not-vend assistance ladder, laptop-first legibility of real AP Statistics content, no gamification/paywall/parent UI, clean-room.
2. **Register-brief delivery** (for the three teen directions): does the plate actually deliver high contrast, generous white space, warm accents, and black sans headers — or is the register asserted more than rendered? Does the warmth/energy stay out of the scoring anchors?
3. **The control, assessed fairly on its own terms:** is Midnight Standard a credible cool/mature proposition, and does its stated falsification logic hold (what result would weaken vs. support the teen-register brief)?
4. **Anti-convergence integrity:** do the three teen directions genuinely diverge on the (register + palette temperature + structure) triple, or do any two collapse into each other once you look past the palette? Verify the 014 divergence-audit claim rather than trusting it.
5. **Scenario walkthroughs (your scenario-testing job):** walk **Learner B** (mild ADHD, 10–20 min, low-decision default, needs visible momentum) and **Learner A** (strong executive function, wants density/control pulled in) through the Open Hand on each direction. For Learner B, judge realistic session completion (ties to N1/N2). For Learner A, judge whether density is available without a second mode.
6. **Register-hit read (N4):** for each teen direction, does the register plausibly resonate with a cohort that found the live product "bleh," or does it risk reading as trend-cosplay (Signal/Proof's own "fashion surface" risk; Daybreak's "sports-brand cosplay" risk)?

## Be explicit about the limit of review

Separate, in your findings, **what a Critic review can settle** (constraint compliance, anchor discipline, divergence integrity, information legibility, scenario feasibility) from **what only real learner reaction can settle** (actual desirability/resonance of a register — N4/N5, the "bleh" question). Do not assert that a register "wins" with teens on heuristic grounds; that is the learner test's call, not yours. Flag which of your findings are review-settleable and which are hypotheses for the learner test.

## Output format

Write `projects/project-crux/critic/016-review.md`, advisory only:
- A short frame (what you reviewed, what you could and could not settle).
- Per direction: severity-tagged findings — **Blocking / Notable / Minor** — each traceable to a specific element of the plate or written direction, plus the Learner A and Learner B scenario walkthrough for that direction.
- A cross-cutting section: anti-convergence integrity across the three teen directions, and the control's falsification logic.
- You **may** give an explicitly advisory comparative read or recommendation, clearly labeled as advisory input to David's decision — but you must **not** select a winner, rank as a gate, approve, or mark anything Done, and you must not fold the directions together into a new design.

## Hard constraints on your own conduct

- **Advisory only. You are not a gate** (`ARCHITECTURE.md` §3). Critique goes to your own file; never edit the directions, the plates, the charter, or any other work under review.
- **You set no state.** Do not edit the packet header, `docs/STATE.md`, any handoff README, the Activity Log, the charter, `config/`, or `docs/`. Do not choose your own output path.
- **Clean-room / blind-start.** The real product name/identity stays withheld — do not infer or reconstruct it. **Blue Hour Cabinet's hand-tuned state is not on `main` and is not in your inputs** — do not assess, guess, or reconstruct it; it enters David's decision from a separate track, not this review.
- Assess only what is in your declared inputs. Anything not there is withheld or out of scope, not missing.

## Model assignment for this run

- Critic default per `config/agent-models.yaml`: **grok (xAI)** — a different lab from the Visual Designer (Codex/GPT-Sol) that produced this work, which is the decorrelation the architecture wants for critique (§4). Judgment lane requires a model at dispatch (`--model`).

## Files / Systems Affected

- Create: `projects/project-crux/critic/016-review.md`.
- Modify nothing else.

## Do Not Touch

- Anything not in `outputs` — in particular `014-register-directions.md`, the `head-to-head-014/` plates, `charter.md`, `009-decision-brief.md`, every `option-0*/` and Blue Hour file, `config/`, `docs/`, and other `projects/`.
- The product's real name/identity/category beyond the charter; any excluded prior art; Blue Hour's hand-tuned state (not on main).

## Open Risks / Blockers

- **P1 — Overreach into selection.** The pull to crown a winner is strong in a head-to-head. Stay advisory; deliver findings and scenarios, not a verdict.
- **P2 — Heuristic resonance claims.** Do not decide teen resonance from taste; that is N4, the learner test's call. Mark it as a hypothesis, not a finding.
- **P3 — Register asserted vs. rendered.** Check the plate against the written register claim (a prior review found craft "asserted in prose more strongly than rendered"); apply the same scrutiny here.
- **Clean-room:** withheld identity stays withheld; Blue Hour's latest state is deliberately absent.

## Return path — airlock (no repository write access)

You cannot write the repository. Return exactly one AIRLOCK RETURN in the format in `prompts/UNIVERSAL_SESSION_PROMPT.md`, with one FILE block for `projects/project-crux/critic/016-review.md` and nothing outside the return. The steward (`claude-code`) lands it unchanged; the DELIVERY RECEIPT is the completion. Do not report the work as complete on your own authority.

## Next Expected Output

- `projects/project-crux/critic/016-review.md`: per-direction severity-tagged findings and Learner A / Learner B scenario walkthroughs; a cross-cutting anti-convergence and control-logic section; an explicit split between review-settleable findings and learner-test hypotheses; an optional, clearly-advisory comparative read that selects nothing and marks nothing Done.

## Blocked
2026-09-23 — claude-code: mooted by DECISION-0007 (Cramapple design system Done decided without the Grok critic review; advisory, no successor handoff)
