---
handoff: project-crux/007
role: visual-designer
status: accepted
lane: divergence
actor: codex
model: unspecified
source_sha:
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/004-directions.md
  - projects/project-crux/visual/006-place-mode.md
outputs:
  - projects/project-crux/visual/007-working-mode-challenger.md
  - projects/project-crux/visual/mocks/option-07-challenger/working-stats.html
  - projects/project-crux/visual/mocks/option-07-challenger/working-stats.png
  - projects/project-crux/visual/mocks/option-07-challenger/working-bio.html
  - projects/project-crux/visual/mocks/option-07-challenger/working-bio.png
supersedes: none
legacy: true
---

# Handoff Packet 007 — Visual Designer (Working-Mode Challenger)

> **Destination in repo:** `projects/project-crux/handoff/007-visual-designer.md`
> Drafted by the Creative Director (Claude) for David to commit. This packet asks for a *challenger* to an in-house synthesis, not a re-generation of the six directions. Advisory/generative only — David alone decides Done.

Task:
- Handoff 007 (project-crux, Visual Design track) — design a **challenger working-mode** that keeps the validated three-column architecture but recovers the two qualities the current synthesis is missing: **the whimsy and comfort of children's literature**, and **a distinctive, recognizable visual signature** on the order of Soft Landing's. Draw freely from the existing six directions and the charter's picture-book soul, but you are **not restricted to remixing them** — invent past them where invention serves the goal.

Prompts Included:
- [x] Visual Designer (see `prompts/UNIVERSAL_SESSION_PROMPT.md` — triggered by "SESSION START: project-crux"; role self-detected)
- [ ] Brand Strategist  - [ ] Critic  - [ ] Chaos Agent

## Why 007 exists

David and the CD synthesized a working-mode direction in-house (three columns, calm register): a chunked, collapsible rubric on the left; the question with a live interactive model + controls underneath in the center (the Option 1 "manipulate, then explain" beat, generalized to any subject); and a persistent glossary — equations, vocabulary, study tip — on the right. That synthesis **validated the information architecture**: the three-column layout carries real utility, the interactive-center slot generalizes across subjects, and scoring-anchor discipline holds.

But on David's review it **failed on emotional register**: "I still don't see the whimsy and comfort of children's literature… while the colors are soft and warm, they lack the Soft Landing distinctiveness." It reads warm-generic, not like a place a nervous student *wants* to open. That is the charter's oldest and most load-bearing requirement (the "safe haven" / "an app a student wants to open" job), and it is still unmet.

So 007 is a **register-and-soul challenge, not an architecture challenge.** The bones are the incumbent to beat; the skin and the soul are what you are competing on.

## What stays fixed (the incumbent bones — do not redesign these)

The challenger must still deliver, in its own visual language:
- **The three-column working shell:** chunked/collapsible rubric · interactive question-model with controls · persistent glossary/reference. (You may make *one* bounded structural deviation if it materially serves whimsy — label it clearly and keep it optional; do not throw out the three-column utility wholesale.)
- **The interactive-center + controls beat**, and evidence it **generalizes across subjects** (see deliverables: one Stats, one Bio).
- **All hard constraints:** the two scoring anchors keep one exclusive meaning each and never double as action/interactive color or as mastery/nav status; help-not-vend assistance ladder; laptop-first; no gamification, streaks, points-as-score, paywall, or parent surfaces; clean-room/blind — do not infer or reconstruct the withheld product identity or any prior exploration outside this repo.

## What you are competing on (the brief)

1. **Whimsy and comfort of children's literature** — warmth, wonder, tactility, a hand-made feeling; the sense that hard ideas can open gently. This is **emotional register and craft** (illustration quality, texture, type personality, micro-motion, voice), **not** childishness, not mascots (the guide/character track is tabled), and **not** gamification or reward loops. Whimsy that a 17-year-old taking AP Bio finds reassuring, not juvenile.
2. **A distinctive, recognizable signature** — someone should be able to describe this direction in one sentence and pick it out of a lineup, the way Soft Landing's card-islands or Lantern Fold's atlas are instantly nameable. Warm-and-soft is not a signature; commit to a specific world.

## Draw-from, not bound-to

- You may borrow and recombine motifs, palettes, type, linework, or interaction ideas from **any** of the six directions in `004-directions.md` (Soft Landing's calm and distinctiveness and Draw the Door's hand-drawn line are the most relevant reference points; Lantern Fold's editorial warmth is another) **and** from the charter's crayon/picture-book origins.
- But this is a **springboard, not a remix constraint** — invent new form where it serves the two goals above. The challenger should feel like its own thing, not a collage of the others.
- Use **String Seed of Thought** (ARCHITECTURE.md §5c): generate a random seed first and derive the challenger's world from it, so it diverges genuinely rather than settling back toward the safe warm-generic middle.

## How this packet forces a real challenge (anti-convergence protocol — mandatory)

The default failure mode is regression to the safe warm-generic middle. These are hard requirements, not suggestions; a submission that skips them is non-conforming and will be returned:

1. **Three worlds, one survivor.** Using String Seed of Thought, generate **three genuinely different seeds** and derive **three distinct candidate worlds** (named metaphor + palette + medium) *before* touching UI. Then **down-select to the single world most distant** from both the existing six directions and the in-house synthesis, and render only that one to full plates. In `007-working-mode-challenger.md`, list the two you killed in one line each **with the reason each was too close to something that already exists.** Committing to the first idea is not permitted.

2. **Disqualifiers — self-check before submitting (any hit = auto-reject).** Do not submit the survivor if any of these are true:
   - it could fairly be described as "soft and warm" and little else (that is the incumbent — it is already taken);
   - its world palette sits in the same family as the synthesis (warm cream / muted violet-coral / soft-serif paper);
   - a reviewer could mistake it for one of the six directions or for the synthesis in a lineup;
   - its "whimsy" is carried by mascots, bright toy colors, rounded-everything, reward/celebration motion, or emoji rather than by craft, medium, and voice.
   State in the write-up, in one line each, how the survivor clears all four.

3. **A mandatory net-new signature.** The survivor must include **at least one motif, illustration medium, or interaction that appears in none of the six directions** — and it must **name a specific tactile craft** for its imagery (e.g. gouache, cut-paper collage, risograph, colored-pencil, linocut), because "children's-literature whimsy" only becomes real as a concrete medium decision. Generic vector-flat or soft-gradient imagery does not satisfy this.

4. **A falsifiable distinctiveness claim.** Include one paragraph titled "Why this could not be mistaken for the synthesis or any of the six" — a specific, checkable claim, not a mood statement.

(CD note, not Sol's task: the challenger will be routed through the Critic (Grok) with the single question "genuinely divergent, or a reskin?" before David sees it head-to-head with the synthesis.)

## Deliverables (Next Expected Output)

- `projects/project-crux/visual/007-working-mode-challenger.md` — the written direction: named world/signature, palette (hex), type, motif, interaction language, how the three columns are expressed, how whimsy + distinctiveness are achieved, and an explicit "borrowed vs. invented" note. "Advisory / not final" label.
- Two rendered 1440×900 plates in the shared mock format under `projects/project-crux/visual/mocks/` (e.g. `option-07-challenger/`):
  - **working-stats.png/.html** — an AP Statistics example reusing the interactive-model center (the influence/least-squares beat is fine).
  - **working-bio.png/.html** — an AP Biology example with a *different* center diagram, proving the center slot generalizes across subjects.
- A one-paragraph statement of what the challenger recovers that the incumbent synthesis lacked (whimsy + signature), written so the CD can put it head-to-head with the synthesis for David.

## Approval State

- Approved: charter "approved to generate"; Visual Design track in scope; this is Standing-Approval generative work.
- Not approved / out of scope: any Done call, any selection, marking the challenger or the synthesis "the winner," reopening the guide/character track (tabled by David until visual lock), or building the place mode for this challenger yet (working mode first).

## Files / Systems Affected

- Create: `projects/project-crux/visual/007-working-mode-challenger.md` and `projects/project-crux/visual/mocks/option-07-challenger/` (+ assets). Reuse `mocks/shared/` fixtures/tokens where useful.
- Do not modify `004-directions.md`, `006-place-mode.md`, the existing option mocks, `guide-concepts/`, the Critic's file, `charter.md`, `config/`, or `docs/`. Additive only.

## Open Risks / Blockers

- **P1 — Whimsy → childish/gamified.** The fastest failure mode. Recover warmth through craft and voice, not cartoon mascots, rewards, or bright toy palettes. AP-credible at all times.
- **P2 — Regression to warm-generic.** The incumbent already occupies "soft and warm." A challenger that lands in the same undistinguished middle has failed the brief. Commit to a specific, nameable world (this is what SSoT is for).
- **P3 — Architecture drift.** Don't discard the validated three-column utility while chasing register; skin and soul are the variables, bones are (mostly) fixed.
- **P4 — Anchor collision / content credibility.** Keep the two scoring anchors exclusive; keep AP Stats + Bio substance real and primary.

## Do Not Touch

- The six working-mode designs and four place modes already in `mocks/`; the guide-concept library; charter/config/docs; other projects; the withheld product identity and any excluded prior exploration.

## Next Expected Output

- The files listed under **Deliverables**, committed, with path + commit reference reported. If Sol lacks repo write access, output clearly delimited blocks labeled with the exact destination paths for a human to commit.
- After David reviews the challenger head-to-head with the synthesis, the CD will recommend which working-mode direction to carry into place↔session transition prototyping.

## Session start

Dispatch by opening the tool with **"SESSION START: project-crux"**. The universal session prompt self-detects the Visual Designer role and reads this packet — **the body of this packet IS the instruction set**; no bespoke per-handoff prompt is needed.
