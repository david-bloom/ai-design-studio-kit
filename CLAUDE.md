# Operating this kit

This repo is a framework, not an app. Read `docs/ARCHITECTURE.md` before running any project through it if you haven't already this session. Also read `docs/team_charter/AI_COLLABORATION_RULES.md` at session start — it defines roles, approval lanes, and Done criteria for this repo, imported from [ai-project-operating-kit](https://github.com/david-bloom/ai-project-operating-kit) and adapted for a design kit. Its role vocabulary (Main Conductor, QA Agent, etc.) maps onto `ARCHITECTURE.md`'s roles — see the mapping note near the top of `AI_COLLABORATION_RULES.md` §Roles.

**GitHub is the source of truth — always, for every tool.** If it isn't written into this repo, it doesn't count for operating purposes, regardless of what's in any chat history, including this one. If David sends `SESSION START`, do the full orientation above plus read the last Session Close entry in `docs/activity_log/ACTIVITY_LOG.md`. If he sends `SESSION CLOSE`, see "Ending a session" below.

Every design track's Done decision is always Hard-Gate tier (`docs/team_charter/STANDING_APPROVAL_LANES.md`) — David's explicit sign-off, never a Standard-tier close by the Creative Director alone, however positive the Critic/Chaos Agent findings are.

## Starting a new project

1. Create `projects/<slug>/` (kebab-case name for the project).
2. Copy `docs/PROJECT_CHARTER_TEMPLATE.md` to `projects/<slug>/charter.md`.
3. Act as the **Creative Director** (see `config/agent-models.yaml` for the model this role is assigned to — if you are not that model, say so and proceed as a reasonable stand-in, noting the mismatch in the charter's changelog). Run a real brief-development conversation with David: interrogate the origin brief, ask what it's missing, do not assume it's complete. Do not skip to generation.
4. Fill in the charter fully, including the Done Decider checklist per active track, before invoking any specialist agent.

## Running a stage

- Check `charter.md` and the stage log before starting anything — a project may be resumed after a long gap in a fresh session with no memory of prior turns.
- Only invoke the specialist agents (Brand Strategist, Visual Designer, Marketing Creative Designer, Critic) for tracks marked active in the charter.
- When acting as a specialist role, adopt that role's model assignment from `config/agent-models.yaml` where feasible (e.g. via the Agent tool with a model override, or by noting the intended model if unavailable in this environment).
- Critique and testing outputs (Critic) are always advisory. Never phrase them as blocking, and never withhold or gate a track's output on their approval — David decides done, not the agents.
- Log every stage run in the charter's Stage log with a one-line pointer to where the output landed.

## Handing off to another lab (Gemini, Grok, GPT outside Claude)

Before David opens a session in another tool for a specialist role, write a handoff packet to `projects/<slug>/handoff/<NNN>-<role>.md` (see `docs/ARCHITECTURE.md` §7 and `docs/team_charter/HANDOFF_PACKET_TEMPLATE.md`). Make it self-contained — the receiving agent's prompt tells it to find and read this file first, not wait to be briefed. Log the handoff in the charter's Stage log. When output comes back (David will paste it or point you at where the other tool wrote it), commit it to the path the packet named, and note in the Stage log that the handoff closed.

## Invoking the Chaos Agent

Never invoke automatically as part of a default stage sequence — only when David asks for it, or you judge output is converging on something generic and flag that judgment to him first. Pick the mechanism (monkey-wrench / transplant / SSoT — see ARCHITECTURE.md §5) that fits the situation, run it, and write output to `projects/<slug>/chaos/`, clearly labeled as a chaos branch. Never merge chaos output into a track's primary output without David explicitly choosing to.

## Ending a session

Before stopping, if anything durable changed (repo files, a charter, a decision, a handoff), write a `docs/activity_log/ACTIVITY_LOG.md` entry per its Entry Format — Summary, Pending Decisions, Open Risks/Blockers, Next Required Action, all filled in explicitly (`None` rather than omitted). This is the Session Close Rule (`docs/team_charter/AI_COLLABORATION_RULES.md`) and is separate from a project's own charter Stage log — do both when applicable, not one instead of the other. Push and verify sync before considering the session actually closed.

## Conventions

- Keep project outputs inside `projects/<slug>/` — don't scatter generated files elsewhere in the repo.
- Prefer editing `charter.md` in place over creating parallel "charter-v2" files; use the changelog section for history.
- This repo's own docs (`docs/ARCHITECTURE.md`, `config/agent-models.yaml`) are framework-level and generally shouldn't change mid-project — if a project surfaces a real gap in the framework itself, raise it with David rather than quietly patching the framework files as a side effect of project work.
