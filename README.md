# AI Design Studio Kit

A multi-agent harness for visual design, brand identity, marketing templates, and UX work — the design counterpart to [davids-autonomous-qa-harness](https://github.com/david-bloom/davids-autonomous-qa-harness) (QA), [ai-project-operating-kit](https://github.com/david-bloom/ai-project-operating-kit) (multi-agent orchestration), and [content-discovery-creation-kit](https://github.com/david-bloom/content-discovery-creation-kit) (content).

This is **not** a redesign of any single product. It's a reusable engine: point it at a new project (a feature, a campaign, a brand from scratch, a full product redesign) and it runs that project through a structured, multi-agent creative process, ending wherever *you* decide it's done.

## Why this exists

Generic AI creative output collapses toward the median — the safest, most statistically likely answer. This kit exists to counteract that specifically, not just to "have AI help with design." It does that with:

- **A brief-development stage that never skips exploration.** Whatever brief you bring in is interrogated and expanded before any generation starts — the engine does not assume your starting brief is complete.
- **Role-based agents**, each with a documented, swappable model assignment — not one model wearing different hats.
- **A Chaos Agent** that deliberately fights mode-collapse using techniques like forced constraint removal and [String Seed of Thought](https://arxiv.org/html/2510.21150v3) style entropy injection — see `docs/ARCHITECTURE.md`.
- **You as the sole "Done Decider."** Every critique in this system is advisory. Nothing is gated except by your judgment.

## How it works, in one paragraph

Every project starts as a raw brief. The **Creative Director** agent runs a brief-development conversation with you, producing a **Project Charter** — the seed document that says which output tracks apply (visual design / brand identity / marketing templates / UX), who the audience is, what constraints are real vs. assumed, and what "done" looks like for this specific project. From there, the Creative Director coordinates the relevant specialist agents (Brand Strategist, Visual Designer, Marketing Creative Designer, Critic) across independent, resumable stages — you can walk away and pick a project back up days later. The Chaos Agent can be invoked at any point between stages to force a divergent branch. You review outputs and decide what's done, track by track.

## Structure

```
docs/
  ARCHITECTURE.md              full framework spec: roles, stages, chaos mechanisms, model assignment philosophy
  PROJECT_CHARTER_TEMPLATE.md  the seed document every project starts from
  OPERATING_POLICY.md          the operational rulebook (Policy-Version 2.0): availability, roles, handoff lifecycle, git policy
  STATE.md                     generated current state — what a new session reads first
  team_charter/                retained principles from ai-project-operating-kit (core only; the rest is superseded)
  activity_log/                generated activity log, decisions log, archive of the v1 log
config/
  agent-models.yaml            role → model mapping, with rationale, reviewed as models evolve
projects/
  <project-slug>/              one folder per project you run through the kit; charter + outputs live here
prompts/
  UNIVERSAL_SESSION_PROMPT.md  the one prompt pasted into Codex, Grok, and Claude Design (includes the airlock format)
scripts/
  handoff-check                validates a packet: header, inputs on main, path policy, freeze
  publish                      the only writer to main: lands outputs, merges, regenerates STATE/index/log, prints the receipt
CLAUDE.md                      how Claude Code operates this kit as Orchestrator and steward
```

## Operating model

`docs/OPERATING_POLICY.md` (Policy-Version 2.0) is the single operational rulebook: main-only availability, explicit handoff dispatch, a scripted Repository Steward (`scripts/handoff-check`, `scripts/publish`), a generated `docs/STATE.md`, and one generated Activity Log. **David is the Owner and sole Done Decider on every track, every time.** Claude Code is the Orchestrator of record; Codex, Grok, and Claude Design are specialists, the latter two returning work through the airlock format in `prompts/UNIVERSAL_SESSION_PROMPT.md`. `docs/team_charter/AI_COLLABORATION_RULES.md` keeps the principles inherited from [ai-project-operating-kit](https://github.com/david-bloom/ai-project-operating-kit); the engineering task machinery that used to be copied from it is retired here.

A session is dispatched with three lines and nothing else:

```text
SESSION START: project-crux
HANDOFF: project-crux/009
ROLE: visual-designer
```

## Status

v0.1 — architecture, conventions, and operating rules defined. First real project underway: `projects/project-crux/` (charter in progress — a clean-room design run for an existing product, without inheriting its existing visual/UX decisions; deliberately unnamed in this repo — see the note at the top of `projects/project-crux/charter.md`).
