# Handoff Packet 006 — Visual Designer (Place / Overview Mode)

> **Destination in repo:** `projects/project-crux/handoff/006-visual-designer.md`
> Drafted by the Creative Director (Claude) for David to commit. This acts on the Creative Director's interpretation of the Critic (Grok) advisory in `critic/005-review.md`. It is a targeted extension, not a re-generation and not a selection.

Task:
- Handoff 006 (project-crux, Visual Design track) — design the curriculum-scale **"place" / overview mode** for the front-running directions, expressed natively in each direction's existing visual system. This closes the one set-level gap the Critic surfaced that blocks a UX Done Decider item regardless of which direction ultimately wins.

Prompts Included:
- [x] Visual Designer (cross-lab specialist — `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`)
- [ ] Brand Strategist  - [ ] Critic  - [ ] Chaos Agent

## Why 006 exists (CD interpretation of the Critic advisory)

The Critic (Grok, free-tier) returned a full advisory on the six frozen directions. Per-option nits are noted but are directional given the model tier; the CD is **not** asking Sol to chase all of them. One finding is high-signal, verifiable against the charter, and decision-independent:

> **The charter requires an overview/navigation ("place") mode — curriculum-as-terrain and mastery legibility — but almost everything in 004 lives inside the single-question "working" mode (Open Hand). The place mode is under-specified across the set.**

This maps directly to an **unmet UX Done Decider item**. It will remain unmet no matter which direction David selects, so it is worth solving now, in each candidate's own visual language, rather than after selection. This is the CD's read of Grok's closing suggestion ("pair any advancing direction with a concrete proposal for how the same system expresses the curriculum-scale place mode"), promoted to the primary task.

Everything else in the Critic advisory (density/spectacle risk on 3, tone risk on 5, character-variance on 6, etc.) is deferred to David's selection review — do NOT redesign the working mode of any direction in this packet.

## Scope — which directions get a place mode

Design the place mode for the **four directions the Critic read as most likely to advance while protecting constraints**:

1. **Draw the Door — Influence Lab**
2. **Soft Landing**
4. **Lantern Fold**
5. **Say It Bright** (text-only baseline)

Skip for now: **Pocket Universe (3)** and **Say It Bright — Three Guide Registers (6)** — the higher-variance options. If a place mode is trivially implied by an existing direction's system, a one-paragraph note is fine; the four above get full treatment. (David may widen or trim this list on review.)

## What the place mode must do (requirements — from the charter, not invented)

Each place-mode proposal must, in that direction's own palette/type/motif/interaction language:
- **Show the curriculum as a navigable whole** — the "terrain": units/topics for AP Statistics AND AP Biology, and how a learner moves among them. Not a flat list dressed up; a genuine sense of *place*.
- **Make mastery legible at a glance** — where the learner is strong, shaky, unstarted — WITHOUT gamification, streaks, points-as-score, leaderboards, or coercion. Progress as orientation and encouragement, not a scoreboard.
- **Provide a calm, low-decision default entry** (Learner B: "where should I go next?" answered gently) while letting a higher-confidence learner (Learner A) pull more detail/challenge from the SAME view — one adaptive system, not two modes.
- **Connect cleanly to the working mode** — show the transition from place → a single Open Hand and back, so the two modes are one coherent product.
- **Preserve every hard constraint:** the two exclusive scoring anchors keep their one meaning (do not repurpose them for map/nav status); action/interactive colors never double as scoring anchors; help-not-vend; laptop-first; no gamification/paywall/parent surfaces; clean-room/blind (do not infer real product name/identity).

## Approval State

- Approved: charter "approved to generate"; Visual Design + UX tracks in scope; this extension is Standing-Approval work.
- Not approved / out of scope: any Done call, any selection among directions, and any redesign of the six working modes. Track Done is Hard-Gate — David only. This packet closes a gap; it does not choose a winner.

## Files / Systems Affected

- Create: `projects/project-crux/visual/006-place-mode.md` (+ optional comps/assets under `projects/project-crux/visual/assets/`).
- Do not modify `001–004-directions.md`, `critic/005-review.md`, `charter.md`, `config/`, `docs/`, or other `projects/`. Additive only.

## Open Risks / Blockers

- **P1 — Gamification creep.** Mastery legibility is the fastest path to accidental streaks/scores/badges. Keep progress as orientation and gentle accountability, not a game. This is the single biggest risk in this packet.
- **P2 — Anchor collision.** Do not reuse the earned/lost scoring anchors to signal map/mastery status — they must keep one meaning each. Introduce a distinct, non-conflicting mastery treatment per direction.
- **P3 — Two-product drift.** The place mode must feel like the same product as the working mode (shared system), and Learner A/B must be one adaptive view, not two modes.
- **P4 — Scope creep back into the working mode.** Only the place mode is in scope here; do not re-open the six working-mode designs.
- **Clean-room/blind:** real product name/identity and prior exploration remain withheld; do not infer or reconstruct.

## Do Not Touch

- The six working-mode designs in 004; the Critic's file; charter/config/docs; other projects; the withheld product identity.
- Pocket Universe (3) and Three Guide Registers (6) place modes beyond an optional one-paragraph note.

## Next Expected Output

- `projects/project-crux/visual/006-place-mode.md` — for EACH of the four in-scope directions:
  - the place/overview mode in that direction's own visual system (palette hex, type, motif, interaction) — terrain, mastery legibility, calm default entry, Learner A pull;
  - the place ↔ working-mode transition;
  - explicit note of the distinct mastery treatment used and confirmation it does not collide with the scoring anchors or use gamification;
  - real AP Stats + Bio curriculum structure represented;
  - "advisory / not final" label.
- After David reviews, the CD will decide whether the set is ready for a selection/Done review or another round.
- If Sol lacks repo write access, output clearly delimited blocks labeled with the exact destination path for a human to commit.

## Recommended Prompt for Visual Designer

"""
Use `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`. Project slug: project-crux. You are the Visual Designer (ARCHITECTURE.md §3). Read `projects/project-crux/handoff/006-visual-designer.md`, then `projects/project-crux/charter.md` (the place/overview mode requirement + Done Decider), then `projects/project-crux/visual/004-directions.md` for the visual systems you're extending, and `projects/project-crux/critic/005-review.md` for context on the gap. TASK: design the curriculum-scale PLACE / OVERVIEW mode — missing across the set — for four directions only: (1) Draw the Door — Influence Lab, (2) Soft Landing, (4) Lantern Fold, (5) Say It Bright text-only. Each place mode must, in that direction's OWN palette/type/motif/interaction: show the curriculum as navigable terrain for AP Stats AND Bio; make mastery legible at a glance WITHOUT gamification/streaks/scores/leaderboards; give a calm low-decision default entry for Learner B while letting Learner A pull more from the same view (one adaptive system); and show the place↔working-mode transition. Keep all hard constraints — do NOT reuse the earned/lost scoring anchors for map status, and action/interactive colors never score. Do NOT redesign the six working modes; this is additive. Skip Pocket Universe (3) and Three Guide Registers (6) beyond an optional one-paragraph note. Clean-room/blind — do not infer the real product name/category. Write to `projects/project-crux/visual/006-place-mode.md`. Advisory only; David alone decides done.
"""
