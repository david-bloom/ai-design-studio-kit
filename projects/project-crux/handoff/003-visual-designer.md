---
handoff: project-crux/003
role: visual-designer
status: accepted
lane: divergence
actor: codex
model: unspecified
source_sha:
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/002-directions.md
outputs:
  - projects/project-crux/visual/003-directions.md
supersedes: none
legacy: true
---

# Handoff Packet 003 — Visual Designer

> **Destination in repo:** `projects/project-crux/handoff/003-visual-designer.md`
> Drafted by the Creative Director (Claude) for David to commit. This is a **focused probe**, not a re-generation. It narrows 002's five directions to two and pushes each in a deliberately contrasting way. Do not touch the other three 002 directions.

Task:
- Handoff 003 (project-crux, Visual Design track) — take **two** directions from `002-directions.md` and extend each with one targeted move, so David can feel how interactivity and character presence change his read before any Critic pass.

Prompts Included:
- [x] Visual Designer (see `prompts/UNIVERSAL_SESSION_PROMPT.md` — triggered by `SESSION START: project-crux`)
- [ ] Brand Strategist  - [ ] Critic  - [ ] Chaos Agent

## Why 003 exists (read before generating)

002 succeeded at widening the field. This packet is David deliberately steering the exploration **away from his own original direction**, on evidence:

- **Student feedback on the original vibe was universally unenthusiastic.** The earlier, quieter/more-composed register did not land with learners. David is intentionally pushing toward warmth, energy, interactivity, and character to find what *does* connect — even where that contrasts with the charter's initial instincts.
- Two of 002's directions are the right vehicles to test this: **01 Draw the Door** (already the most kinetic) and **05 Say It Bright** (already the most expressive/graphic). Push each one step further along its own axis.

## Explicit soft-constraint probe — read carefully

**This packet deliberately relaxes a stated charter constraint.** 002 (and the charter) excluded mascots/characters/faces ("warmth from motion and color, not mascots"; "without characters pasted onto schoolwork"). David is **consciously suspending that rule for direction 05 only, as an experiment** — to feel whether character presence helps or hurts. This is a monkey-wrench-style probe owned by David, not a permanent change to the constraint. After review, David decides whether the no-character rule is re-affirmed or dropped. Treat this as intentional and traceable, not as license to add mascots everywhere.

All other hard constraints still hold everywhere: two exclusive scoring anchors (one meaning each), help-not-vend assistance ladder, one adaptive system (Learner A/B), laptop-first real AP content, no gamification/streaks/paywall/parent surfaces, interactive accent colors never double as scoring anchors.

## The two moves

### Move A — Direction 01 "Draw the Door": add real interactivity

Keep the direction's visual system exactly as specified in 002 (Night Ink / Canvas / World Purple palette; Bricolage Grotesque + Literata + STIX Two Math; yellow closed loop = earned, guava open loop = commonly lost; purple is the drawing/action color and never scores).

Add **one genuinely interactive beat**, built enough to feel — not described:
- The learner manipulates the sample (e.g. drag the purple regression line / scrub the outlier on the Statistics scatter), and a consequence updates live (contextual interpretation text, or correlation/fit indicator).
- Every manipulation must have a keyboard + numeric-input equivalent (accessibility is a hard constraint).
- The interaction must *teach the relationship the rubric rewards* — not be motion for its own sake. Tie the drawn/dragged result back to a scoring anchor.
- Show the "your move" step where the learner then acts on a fresh instance, not just the sample.

### Move B — Direction 05 "Say It Bright": add three contrasting avatars

Keep the direction's visual system as specified in 002 (Punch Red / Ultramarine / Hot Pink / Butter / Soft White / Aubergine; Archivo Black + Atkinson Hyperlegible Next + STIX Two Math; ultramarine double-underline = earned, aubergine strike-gap = commonly lost; Punch Red is the action color and never scores).

Introduce **three distinct guide/companion characters** so David can compare illustration registers side by side. Each is an **original character in the spirit of** the reference style — **do not copy or reproduce any existing published character, name, or artwork; these are stylistic influences only:**
1. **Seuss-inspired** — whimsical, springy, exaggerated linework and improbable forms; playful energy.
2. **"Bad Guys"-inspired** — Aaron Blabey's loose, comedic, high-contrast cartoon ink style; expressive, funny, a little irreverent (reference cover: https://images.booksense.com/images/402/912/9780545912402.jpg — for *style* read only).
3. **"Where the Wild Things"-inspired** — Sendak-esque textured crosshatch, warm, slightly wild but tender.

For each avatar:
- Show it in the same Open Hand scene doing the same *job* (a warm, non-judgmental guide that frames the scoring truth and encourages the move) so the three are directly comparable.
- The character must **not** carry scoring meaning, vend answers, or add nagging/gamification. It supports emotional legibility only.
- Keep real AP content primary; the character cannot crowd out the question, figure, or response space.

## Model assignment

- Continue with **GPT-Sol** for continuity with 001/002 (this is an extension of its own directions, not a decorrelation pass). David to confirm.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; this focused probe is Standing-Approval work; the character constraint is suspended **for this probe only, by David's explicit instruction.**
- Not approved / required before Done: nothing here is final. Track Done is Hard-Gate — David's sign-off only. Sequence after this: David reviews 003 → *then* route finalist(s) to Critic (Grok).

## Files / Systems Affected

- Create: `projects/project-crux/visual/003-directions.md` (+ optional comps/assets under `projects/project-crux/visual/assets/`).
- Do not modify `001-directions.md`, `002-directions.md`, `charter.md`, `config/`, `docs/`, or other `projects/`.

## Open Risks / Blockers

- **P1 — Character work drifts into gimmick or copies published IP.** Original characters only, style-inspired; must stay a supportive guide, never a reward/streak device, never carrying scoring meaning.
- **P2 — Interactivity becomes spectacle.** Move A must teach a rubric-linked relationship and keep keyboard/numeric equivalents.
- **P3 — Scope creep.** This is two moves on two directions. Do not re-open or re-skin the other three 002 directions, and do not average everything back toward the rejected quiet register.
- **Clean-room:** real product name/identity and prior exploration remain withheld; do not infer or reconstruct.

## Do Not Touch

- 002 directions 02 (Soft Landing), 03 (Pocket Universe), 04 (Lantern Fold) — leave as-is.
- The product's real name/identity/category beyond the charter; any prior/parallel design exploration.
- `charter.md`, `config/`, `docs/`, other `projects/`.

## Next Expected Output

- `projects/project-crux/visual/003-directions.md`:
  - **Move A (Draw the Door):** the interactive beat specified concretely enough to build — what the learner manipulates, what updates live, the keyboard/numeric equivalent, and which scoring anchor it ties to; plus the "your move" follow-through. AP Statistics content.
  - **Move B (Say It Bright):** the three avatars described (and/or drawn as comps) in the same scene doing the same guide job, each labeled with its style influence, with a note on how each shifts the emotional read. AP Biology content.
  - Each labeled "advisory / not final."
  - A short note flagging that the character constraint was suspended for this probe by David's instruction.
- If you lack repo write access, output clearly delimited blocks labeled with exact destination paths for a human to commit.

## Recommended Prompt for Visual Designer

As of 2026-09-16, this project no longer uses a hand-written per-handoff "Recommended Prompt" block. Instead:

1. `prompts/UNIVERSAL_SESSION_PROMPT.md` is pasted into GPT-Sol's persistent project instructions (one-time setup, done outside this repo).
2. David sends `SESSION START: project-crux`.
3. The universal prompt's own logic has Sol determine it is the Visual Designer (via `config/agent-models.yaml`), read `ARCHITECTURE.md` and this project's `charter.md`, then find this file as the highest-numbered handoff addressed to its role, and act on it directly — the "Why 003 exists," "Explicit soft-constraint probe," and "The two moves" sections above are the actual instructions; no separate prompt text is needed.

(Historical note: handoffs 001 and 002 each included a bespoke "Recommended Prompt" block referencing `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`, now superseded — see the note preserved in those files.)
