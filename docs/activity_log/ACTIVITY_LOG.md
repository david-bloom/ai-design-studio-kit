# Activity Log

This log records meaningful operating activity, approvals, closeouts, blockers, and handoffs — including a **Session Close** entry at the end of any work session that changed durable state (see `AI_COLLABORATION_RULES.md`, Session Close Rule).

## Index

Most recent entries (full chronological list follows below). Once this log grows past a few dozen entries, keep this index to the last ~10 and add a rotation rule: once the log exceeds ~400 lines, archive older entries to `docs/activity_log/archive/ACTIVITY_LOG-<range>.md` and update this index to point at the archive.

## Entry Format

```markdown
## [Task or Session Title] — YYYY-MM-DD

**Task:** what this entry covers — a task ID/title, or a session-level summary label if the session touched multiple projects/tasks
**Status:** Initialized / In Progress / Blocked / Done / etc. — or N/A for a pure session-close summary that isn't itself one task
**Summary:** what happened, in enough detail that a fresh reader doesn't need the prior conversation

**Pending Decisions:** anything raised but not yet decided, and who decides it — state `None` explicitly rather than omitting the field
**Open Risks / Blockers:** anything that could derail the next session if not flagged — `None` explicitly if there aren't any
**Next Owner:** who picks this up next
**Next Required Action:** the concrete next step, not "continue work"
```

Every entry — task-level or session-close — uses this shape.

- Session Close — 2026-09-16 (2)
- Session Close — 2026-09-16
- Critic Role Consolidation — 2026-09-15
- Operating Kit Installed — 2026-09-15

---

## Session Close — 2026-09-16 (2)

**Task:** Session summary — project folder conventions documented, session triggers made project-scoped, Codex/GPT-Sol promoted to global default, Handoff 002 issued and resolved
**Status:** N/A (session-level entry, spans several changes)
**Summary:** Answered David's question on what belongs in `projects/<slug>/` vs. the repo root by adding `docs/ARCHITECTURE.md` §8 ("Project folder contents") — kit-level `docs/`, `tasks/`, `team_charter/` are never duplicated per project. That surfaced a real bug: Handoff 001 had labeled itself `TASK-0002` with no actual task file behind it; fixed across the handoff packet, charter Stage log, and ACTIVITY_LOG, and documented the `TASK-NNNN`-is-kit-level-only convention in `HANDOFF_PACKET_TEMPLATE.md` and `CLAUDE.md`. Parameterized `SESSION START`/`SESSION CLOSE` with an optional project slug (`SESSION START: project-crux`) per David's request for a per-project initiation phrase, avoiding a new phrase per project (DECISION-0004/APPROVAL-0004). Wrote self-teach onboarding prompts for `/design`, Codex, and Grok covering the full framework; corrected the Codex role note after David clarified Codex/GPT-Sol plays both Brand Strategist and Visual Designer, not an undefined role — first as a project-crux override, then (per David's explicit instruction) promoted to the **global default** in `config/agent-models.yaml` (DECISION-0005/APPROVAL-0005), with the resulting decorrelation tradeoff (Brand Strategist and Visual Designer no longer on different labs from each other) recorded in the rationale text, not left implicit. `/design` (Creative Director) reviewed Handoff 001's output, found it converged (same emotional register, same 2-column structure, inspiration set unused), and drafted Handoff 002 as a corrective re-brief; committed to the repo with one flag added on commit (its model recommendation referenced the pre-DECISION-0005 default). David resolved that flag by choosing to run 002 on Sol anyway, accepting that no model switch would help decorrelate it from 001's convergence. Handoff 002's output (5 directions, `projects/project-crux/visual/002-directions.md`) was then committed **directly by David outside this session** (commits `0a4c312`, `55de244`) — not authored or reviewed here.

**Pending Decisions:**
- Whether Handoff 002's output actually satisfies the divergence mandate (emotional temperature, palette, structure, interactivity spread) and the inspiration-cluster requirement — not yet reviewed by this session or by the Critic. David or a future session to assess.
- Whether the Codex/GPT-Sol decorrelation tradeoff (DECISION-0005) needs revisiting if Brand Strategist and Visual Designer output starts reading as too similar across future projects — flagged as a thing to watch, not an open question requiring action now.

**Open Risks / Blockers:**
- 002's output has not been checked against Handoff 002's own requirements or routed to the Critic (Grok) yet — the next concrete step before any Done consideration for the Visual Design track.
- Two open items native to the project-crux brief itself, carried forward from the prior Session Close entry: app name/final brand (deferred), and whether the two learner profiles become explicit modes or one adaptive interface (non-blocking).

**Next Owner:** David Bloom
**Next Required Action:** Review `projects/project-crux/visual/002-directions.md` against Handoff 002's divergence axes and inspiration-cluster requirement; if it holds up, hand off to the Critic (Grok) for independent review.

## Session Close — 2026-09-16

**Task:** Session summary — project-crux progressed to handoff; Session Close Rule added to both kits
**Status:** N/A (session-level entry, spans several tasks)
**Summary:** `/design` (Claude Design, Creative Director role) completed brief development for project-crux and returned an Origin brief and Expanded understanding for a laptop-first, two-learner AP Statistics/Biology study tool ("Open Hand" concept). Charter completed here with Active tracks (Visual Design/Brand Identity/UX in, Marketing Templates out), a draft Done Decider checklist per track, a Constraint ledger, and Model assignment (Visual Designer → GPT-Sol project-level override; Critic stays on its global default, Grok, for cross-lab independence). David reviewed the full `/design` transcript and found no reference to Cramapple, resolving the earlier contamination concern in practice (not a formal guarantee the session's GitHub connector, if any, was pointed away from Cramapple). Handoff Packet 001 (Visual Designer) committed to `projects/project-crux/handoff/`, and `projects/project-crux/visual/` created as its output destination. A full onboarding prompt for GPT-Sol was drafted (chat only, not committed — it's a one-time kickoff message, not durable project state). Separately: this Session Close Rule itself was added to both `ai-project-operating-kit` (the source) and this repo's adapted copy, closing a real gap — the kits previously had a Startup Rule but nothing telling an ending session what to record, and `ACTIVITY_LOG.md` had no defined entry format at all.

**Pending Decisions:**
- Whether to formally close out the category-anonymization question further (currently resolved pragmatically — category exposed, name/identity withheld — but not revisited since).
- Two open items native to the brief itself, not this kit: app name/final brand (deferred), and whether the two learner profiles become explicit modes or one adaptive interface (flagged in charter.md as non-blocking).

**Open Risks / Blockers:**
- GPT-Sol's Visual Design output (Handoff 001) has not yet been produced or reviewed — nothing to evaluate yet.
- The `/design` session's GitHub connector target was never directly confirmed (only inferred safe via a clean transcript review) — low residual risk, noted in charter.md's Stage log rather than re-flagged here.

**Next Owner:** David Bloom  
**Next Required Action:** Run the GPT-Sol onboarding prompt to produce `projects/project-crux/visual/001-directions.md`; bring the output back for commit and, when ready, a Critic (Grok) pass.

## Critic Role Consolidation — 2026-09-15

**Task:** Merge UX Critic and Usability Tester into a single Critic role  
**Status:** Done  
**Summary:** Per David's request, merged the two advisory-review roles into one Critic role (assigned Grok in `config/agent-models.yaml`). Updated `docs/ARCHITECTURE.md` (§1, §3, §6), `config/agent-models.yaml`, `docs/team_charter/AI_COLLABORATION_RULES.md` and `STANDING_APPROVAL_LANES.md` role references, `CLAUDE.md`, `README.md`, `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`, and `projects/project-crux/charter.md`'s Model assignment table and Stage log. Logged as DECISION-0001 / APPROVAL-0001 (Hard Gate: material change to `ARCHITECTURE.md`/`agent-models.yaml`) and cross-referenced in `docs/team_charter/CHANGELOG.md`.

**Next Owner:** David Bloom  
**Next Required Action:** None — confirm it reads correctly whenever convenient.

## Operating Kit Installed — 2026-09-15

**Task:** Install AI Project Operating Kit into ai-design-studio-kit  
**Status:** Initialized  
**Summary:** Copied `docs/team_charter/`, `docs/activity_log/`, `docs/tasks/`, `prompts/`, and `scripts/verify-sync.sh` from `ai-project-operating-kit`. Placeholders filled (`AI Design Studio Kit` / `David Bloom`). Added design-kit-specific hard gates to `STANDING_APPROVAL_LANES.md`, a role-mapping note (Main Conductor = Creative Director; QA Agent = UX Critic/Usability Tester/Chaos Agent collectively) to `AI_COLLABORATION_RULES.md`, and an explicit reconciliation of this kit's "David is sole Done Decider" rule (`ARCHITECTURE.md`) with the operating kit's Done-transition mechanics — enforced via always-Hard-Gate classification for track Done decisions, not a special-case override. Repurposed `TOOL_AND_INTEGRATION_GUIDE.md`'s payments/deployment sections to cover cross-lab model integrations and deliverable handoff. Gemini and Grok new-session prompts still needed — this kit ships Claude and Codex only.

**Next Owner:** David Bloom  
**Next Required Action:** Confirm the design-specific hard gates and role mapping read correctly; then this kit is ready to use for `projects/project-crux/`.
