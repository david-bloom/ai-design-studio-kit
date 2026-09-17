---
handoff: project-crux/004
role: visual-designer
status: accepted
lane: routine
actor: codex
model: unspecified
source_sha:
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/002-directions.md
  - projects/project-crux/visual/003-directions.md
outputs:
  - projects/project-crux/visual/004-directions.md
supersedes: none
legacy: true
---

# Handoff Packet 004 — Visual Designer (consolidation for Critic review)

> **Destination in repo:** `projects/project-crux/handoff/004-visual-designer.md`
> Drafted by the Creative Director (Claude) for David to commit. This is a **consolidation/assembly** task, not new generation. It produces the single canonical six-direction set that will go to the Critic (Grok). Do not invent new directions or re-open the ones marked unchanged.

Task:
- Handoff 004 (project-crux, Visual Design track) — assemble one consolidated directions file containing **exactly six** options, drawn from the existing 002 and 003 work, so the Critic can review a stable, self-contained set.

Prompts Included:
- [x] Visual Designer (see `prompts/UNIVERSAL_SESSION_PROMPT.md` — triggered by `SESSION START: project-crux`)
- [ ] Brand Strategist  - [ ] Critic  - [ ] Chaos Agent

## Why 004 exists

David has reviewed the 003 probe and decided the set that goes to Critic review is six options. The interactive treatment of Draw the Door **replaces** the earlier static version; the character-led Say It Bright is different enough to stand as its **own new option** alongside the original. The other three 002 directions carry forward unchanged. This packet freezes that set into one file.

## The six directions — exact composition

Assemble in this order. Each entry keeps its full 002/003 spec (palette hex, type pairing, scoring anchors, structure) verbatim — do not restyle, re-average, or "improve" anything.

1. **Draw the Door — Influence Lab** *(REPLACES the old static Direction 01)*
   - Source: `003-directions.md` Move A. Carry the full interactive spec — the two linked phases (Phase 1: drag candidate line → equation, residual strip, SSR update live while **r stays fixed**; Phase 2: scrub the influential observation → least-squares line, slope b, r, and residual all recompute, with before/after ghost line), the accessibility-equivalent keyboard/numeric controls, the rubric-teaching links to the yellow closed loops + guava open loop, and the "your move" transfer instance.
   - The old static Draw the Door from 002 is superseded and must NOT appear in the six.

2. **Soft Landing** — carry unchanged from `002-directions.md` Direction 02.

3. **Pocket Universe** — carry unchanged from `002-directions.md` Direction 03.

4. **Lantern Fold** — carry unchanged from `002-directions.md` Direction 04.

5. **Say It Bright** *(original, text-only)* — carry unchanged from `002-directions.md` Direction 05. This is the no-character version and stays in the set as the baseline.

6. **Say It Bright — Three Guide Registers** *(NEW separate option)*
   - Source: `003-directions.md` Move B. Carry the full spec: identical Open Hand scene, identical support line, three original guide characters as the single variable — **Fizzbit** (Seuss register), **Moxie Quill** (comic-ink register), **Bramblekin** (wild-things register) — plus the per-character design, pose, voice treatment, emotional shift, risk, alt text, the side-by-side register-comparison table, and every character-system guardrail.
   - **Carry forward the intent-change flag prominently:** the charter/002 no-character rule is suspended for THIS option only, by David's explicit instruction, as a controlled experiment; not a permanent charter change. Grok must review it knowing the constraint status.

## Hard constraints (unchanged, still binding on the whole set)

- Two exclusive scoring anchors per direction, one meaning each; never reused for nav/subjects/status.
- Interactive/action accent colors never double as scoring anchors.
- Help-not-vend assistance ladder (least → most revealing, states what it reveals).
- One adaptive system (Learner A/B progressive disclosure), not two branded modes.
- Laptop-first; real AP Statistics AND Biology content legible (equations, accessible graphs/data tables, extended written responses).
- No gamification/streaks/leaderboards/paywall-nag/parent surfaces.
- Clean-room/blind: real product name/identity and prior exploration remain withheld; do not infer or reconstruct.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; consolidation is Standing-Approval work; the no-character suspension applies to option 6 only, by David's instruction.
- Not approved / required before Done: nothing here is final. Track Done is Hard-Gate — David's sign-off only. This file is the input to Critic review, not an approval.

## Files / Systems Affected

- Create: `projects/project-crux/visual/004-directions.md` (the consolidated six).
- Do not modify `001-`, `002-`, `003-directions.md`, `charter.md`, `config/`, `docs/`, or other `projects/`. This is additive.

## Open Risks / Blockers

- **P1 — Drift during consolidation.** The temptation is to "tidy" or harmonize the six. Do not — the value to the Critic is that each option is exactly what David reviewed. Copy specs faithfully.
- **P2 — Losing the interactive detail.** Option 1's teaching payload lives in the Phase 1 / Phase 2 distinction and the accessibility equivalents; preserve them fully, not as a summary.
- **P3 — Constraint-status ambiguity on option 6.** The suspension flag must be unmissable so Grok evaluates the character option in the right frame.

## Do Not Touch

- The old static Draw the Door (superseded — omit from the six).
- Product real name/identity/category beyond the charter; any prior/parallel exploration.
- `charter.md`, `config/`, `docs/`, other `projects/`, and the existing 001–003 files.

## Next Expected Output

- `projects/project-crux/visual/004-directions.md` — the six directions above, in order, each with its faithful spec and an "advisory / not final" label; option 6 carrying the constraint-suspension flag; a short header noting this is the frozen set for Critic review.
- After David commits it, the CD prepares **handoff 005 — Critic (Grok)** to review these six. Do not perform the Critic role in this packet.

## Recommended Prompt for Visual Designer

As of 2026-09-16, this project no longer uses a hand-written per-handoff "Recommended Prompt" block. Instead:

1. `prompts/UNIVERSAL_SESSION_PROMPT.md` is pasted into GPT-Sol's persistent project instructions (one-time setup, done outside this repo).
2. David sends `SESSION START: project-crux`.
3. The universal prompt's own logic has Sol determine it is the Visual Designer (via `config/agent-models.yaml`), read `ARCHITECTURE.md` and this project's `charter.md`, then find this file as the highest-numbered handoff addressed to its role, and act on it directly — the "Why 004 exists" and "The six directions — exact composition" sections above are the actual instructions; no separate prompt text is needed. This is a CONSOLIDATION task, not new generation — Sol must not invent directions or restyle existing ones, only assemble the faithful specs from `002-directions.md` and `003-directions.md` as directed above.

(Historical note: handoffs 001–003 each included, or originally included, a bespoke "Recommended Prompt" block referencing `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`, now superseded — see the notes preserved in those files.)
