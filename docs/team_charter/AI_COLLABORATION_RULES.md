# AI Design Studio Kit AI Collaboration Rules (core)

**Status:** Approved (Policy-Version 2.0, 2026-09-17). Operational mechanics live in `docs/OPERATING_POLICY.md`, which wins on any conflict. This file keeps only the principles the kit inherits from `ai-project-operating-kit`; everything else that used to be here (branch/PR/sync rules, task tiers, status vocabularies, session diaries, SYNC) is retired and preserved in git history and `docs/activity_log/archive/`.

## Principles retained

1. **Source of truth.** If it is not on `main` in this repository, it does not exist for operating purposes. Chat history never overrides the repo. "Available" is defined mechanically in the policy §1.
2. **Owner authority.** David is Owner and sole Done Decider for every track, every time. Hard gates are listed in the policy §10.
3. **Advisory critique.** Critic and Chaos Agent propose; they never gate, approve, close, or overwrite the work under review.
4. **Verification over narration.** A claim of completion is not completion. `scripts/publish` prints the delivery receipt; the receipt is the record.
5. **Startup discipline.** A session reads `docs/STATE.md`, the charter, and its named packet before acting (policy §9). It never infers its assignment.
6. **Minimal decision log.** Real decisions go in `docs/activity_log/DECISIONS_LOG.md` with the approval recorded inside the entry. No separate approvals log or changelog.
7. **One activity log, generated.** `docs/activity_log/ACTIVITY_LOG.md` receives one entry per landing from `scripts/publish`. No session-close diaries; the charter's Stage log is historical.

## Roles

See the policy §3. Vocabulary mapping from the operating kit: Main Conductor = Orchestrator; Implementation Agent = Specialist; QA Agent = Critic / Chaos Agent (advisory); Owner = David. The Repository Steward is a scripted capability, not a model.
