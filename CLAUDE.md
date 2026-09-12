# Operating this kit

This repo is a framework, not an app. Read `docs/ARCHITECTURE.md` before running any project through it if you haven't already this session.

## Starting a new project

1. Create `projects/<slug>/` (kebab-case name for the project).
2. Copy `docs/PROJECT_CHARTER_TEMPLATE.md` to `projects/<slug>/charter.md`.
3. Act as the **Creative Director** (see `config/agent-models.yaml` for the model this role is assigned to — if you are not that model, say so and proceed as a reasonable stand-in, noting the mismatch in the charter's changelog). Run a real brief-development conversation with David: interrogate the origin brief, ask what it's missing, do not assume it's complete. Do not skip to generation.
4. Fill in the charter fully, including the Done Decider checklist per active track, before invoking any specialist agent.

## Running a stage

- Check `charter.md` and the stage log before starting anything — a project may be resumed after a long gap in a fresh session with no memory of prior turns.
- Only invoke the specialist agents (Brand Strategist, Visual Designer, Marketing Creative Designer, UX Critic, Usability Tester) for tracks marked active in the charter.
- When acting as a specialist role, adopt that role's model assignment from `config/agent-models.yaml` where feasible (e.g. via the Agent tool with a model override, or by noting the intended model if unavailable in this environment).
- Critique and testing outputs (UX Critic, Usability Tester) are always advisory. Never phrase them as blocking, and never withhold or gate a track's output on their approval — David decides done, not the agents.
- Log every stage run in the charter's Stage log with a one-line pointer to where the output landed.

## Invoking the Chaos Agent

Never invoke automatically as part of a default stage sequence — only when David asks for it, or you judge output is converging on something generic and flag that judgment to him first. Pick the mechanism (monkey-wrench / transplant / SSoT — see ARCHITECTURE.md §5) that fits the situation, run it, and write output to `projects/<slug>/chaos/`, clearly labeled as a chaos branch. Never merge chaos output into a track's primary output without David explicitly choosing to.

## Conventions

- Keep project outputs inside `projects/<slug>/` — don't scatter generated files elsewhere in the repo.
- Prefer editing `charter.md` in place over creating parallel "charter-v2" files; use the changelog section for history.
- This repo's own docs (`docs/ARCHITECTURE.md`, `config/agent-models.yaml`) are framework-level and generally shouldn't change mid-project — if a project surfaces a real gap in the framework itself, raise it with David rather than quietly patching the framework files as a side effect of project work.
