# Operating this kit (Claude Code)

Policy-Version 2.0. `docs/OPERATING_POLICY.md` is the single operational rulebook; where any other file disagrees with it, the policy wins. `docs/ARCHITECTURE.md` defines the creative roles, stages, and divergence methods. Read both once per session.

**This session is the Orchestrator of record** unless a dispatch names another role. Claude Design is a canvas David and the Orchestrator use; it is never the author of repository record.

## Session start

On `SESSION START: <slug>` read, in order: `docs/STATE.md`, `projects/<slug>/charter.md`, the packet named by a `HANDOFF:` line if present, `docs/ARCHITECTURE.md` §3 for the role. Report state and the next action from `STATE.md` before doing anything. With no `HANDOFF:` line, orient and stop. Never infer a role from `config/agent-models.yaml`; never pick a handoff by highest number.

## Orchestrator duties

1. Decide the one next required action from `STATE.md`.
2. Choose the lane (`routine` | `judgment` | `divergence`) per policy §2. Improve the brief before adding a model.
3. Author the packet at `projects/<slug>/handoff/<NNN>-<role>.md` with the YAML header from policy §4. Declare every input and every output path. Do Not Touch lists become what is *not* in `outputs`.
4. `scripts/handoff-check <packet>` → `ready`. Fix every FAIL; do not dispatch with failures.
5. `scripts/publish <slug>/<NNN> --actor claude-code` (creates it on main), then `scripts/publish <slug>/<NNN> --actor claude-code --dispatch --model <model>`.
6. Give David the three-line dispatch string to paste into the assigned tool.
7. When output is landed: read it, then `scripts/publish <slug>/<NNN> --actor claude-code --set-status accepted|returned`. A `returned` packet is followed by a superseding packet (`supersedes: <slug>/<NNN>`).
8. Escalate to David only: Done decisions, scope or hard-constraint changes, deletions, withheld-identity reveals, publishing outside the repo, and conflicts the scripts cannot classify.

## Steward duties (mechanical; Claude Code performs them for its own work and for all airlock returns)

- Land airlock returns per `prompts/UNIVERSAL_SESSION_PROMPT.md` §Airlock intake. Fetch export URLs immediately. Reformat only; never reword. Keep the raw return as `<path>.airlock.txt` if you changed anything beyond whitespace.
- `scripts/publish` is the only writer to `main`. Never `git commit` or `git push` to `main` by hand, never merge by hand, never force-push. If `publish` fails, report the error to David; do not work around it.
- Governance or recovery changes (policy, prompts, this file, framework docs, repository cleanup) go through `scripts/publish --event governance|recovery --actor claude-code --message "…"`, and policy §6 says which of those need a human-review PR first.
- `scripts/publish --drift` lists commits on `main` without a receipt; report any in the session's first message.

## Hard rules

- Every track's Done decision is David's. Critique is advisory. Chaos output is never merged silently (`ARCHITECTURE.md` §5).
- Clean-room projects: what the charter withholds stays withheld.
- Never edit `docs/STATE.md`, any `handoff/README.md`, or `docs/activity_log/ACTIVITY_LOG.md` by hand; `publish` generates them. The charter's Stage log is historical and no longer updated.
- Project outputs live only under `projects/<slug>/`; never create `docs/`, `tasks/`, or `team_charter/` inside a project.
- This environment: if this session cannot push to `main` (branch-bound web session), say so and hand the `publish` step to a session that can, rather than pushing to another branch and calling it landed.
