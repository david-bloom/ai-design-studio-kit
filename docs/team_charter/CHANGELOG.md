# Team Charter Changelog

> **Superseded (Policy-Version 2.0, 2026-09-17).** This file is retained for history only and is no longer operative in this kit; `docs/OPERATING_POLICY.md` governs. It will be deleted after the migration pilots (see `docs/activity_log/DECISIONS_LOG.md` DECISION-0006). Do not follow it.

Append-only chronological log, one entry per material change to `docs/team_charter/`. Checked on every `SYNC`. Per-doc `Version`/`Last Updated` headers are not used — git history plus the `APPROVAL-NNNN` / `DECISION-NNNN` references below are sufficient.

## YYYY-MM-DD — [Doc Name(s)]

**Approval:** APPROVAL-NNNN
**Decision:** DECISION-NNNN
**Change (one or two lines):**
- …

## 2026-09-15 — AI_COLLABORATION_RULES.md, STANDING_APPROVAL_LANES.md

**Approval:** APPROVAL-0001
**Decision:** DECISION-0001
**Change (one or two lines):**
- Role-mapping note and hard-gate list updated for the UX Critic/Usability Tester → Critic role consolidation. See `docs/ARCHITECTURE.md` §3 and `config/agent-models.yaml` for the underlying role/model change.

## 2026-09-16 — AI_COLLABORATION_RULES.md

**Approval:** APPROVAL-0002
**Decision:** DECISION-0002
**Change (one or two lines):**
- Added the Session Close Rule, paired with the existing Startup Rule: write an `ACTIVITY_LOG.md` entry before ending any session that changed durable state. Mirrored upstream in `ai-project-operating-kit`.

## 2026-09-16 — AI_COLLABORATION_RULES.md

**Approval:** APPROVAL-0003
**Decision:** DECISION-0003
**Change (one or two lines):**
- Added `SESSION START` / `SESSION CLOSE` trigger phrases (matching the existing `SYNC` convention), explicit that GitHub is authoritative over any tool's chat history. Mirrored upstream in `ai-project-operating-kit`.

## 2026-09-16 — AI_COLLABORATION_RULES.md

**Approval:** APPROVAL-0004
**Decision:** DECISION-0004
**Change (one or two lines):**
- Parameterized `SESSION START` / `SESSION CLOSE` with an optional project slug (`SESSION START: project-crux`) so one phrase pattern scales to any project without new documentation per project. Not mirrored upstream — `ai-project-operating-kit` has no equivalent multi-project structure.
