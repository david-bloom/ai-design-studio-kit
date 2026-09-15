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

Every project starts as a raw brief. The **Creative Director** agent runs a brief-development conversation with you, producing a **Project Charter** — the seed document that says which output tracks apply (visual design / brand identity / marketing templates / UX), who the audience is, what constraints are real vs. assumed, and what "done" looks like for this specific project. From there, the Creative Director coordinates the relevant specialist agents (Brand Strategist, Visual Designer, Marketing Creative Designer, UX Critic, Usability Tester) across independent, resumable stages — you can walk away and pick a project back up days later. The Chaos Agent can be invoked at any point between stages to force a divergent branch. You review outputs and decide what's done, track by track.

## Structure

```
docs/
  ARCHITECTURE.md              full framework spec: roles, stages, chaos mechanisms, model assignment philosophy
  PROJECT_CHARTER_TEMPLATE.md  the seed document every project starts from
  team_charter/                operating rules imported from ai-project-operating-kit: roles, approval lanes, Done criteria — adapted for a design kit
  activity_log/                append-only logs: activity, approvals, decisions
  tasks/                       task template for tracking work at Standard/Hard-Gate tier
config/
  agent-models.yaml            role → model mapping, with rationale, reviewed as models evolve
projects/
  <project-slug>/              one folder per project you run through the kit; charter + outputs live here
prompts/                       new-session prompts for Claude, Codex, and cross-lab specialist agents (Gemini, Grok, etc.)
scripts/
  verify-sync.sh               checks a branch is actually pushed before reporting "synced"
CLAUDE.md                      how Claude Code should operate this kit day to day
```

## Operating model

This kit's day-to-day operating rules — roles, approval lanes, task tiers, Done criteria — are imported from [ai-project-operating-kit](https://github.com/david-bloom/ai-project-operating-kit) and adapted in `docs/team_charter/`. The short version: **David is the Owner and sole Done Decider on every track, every time** — enforced through that kit's own Hard-Gate mechanism, not as a special case. See `docs/team_charter/AI_COLLABORATION_RULES.md` for the full role mapping (Main Conductor = Creative Director; QA Agent = UX Critic/Usability Tester/Chaos Agent).

For cross-lab roles (Brand Strategist on GPT, Visual Designer on Gemini, Chaos Agent on Grok — see `config/agent-models.yaml`), open that lab's own tool with repo access and hand it `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`; there is no single tool that fans a task out to all labs automatically.

## Status

v0.1 — architecture, conventions, and operating rules defined. First real project underway: `projects/design-agency/` (charter in progress — a clean-room design run for what is currently Cramapple, without inheriting its existing visual/UX decisions; kept deliberately unnamed as such while in progress).
