# Approvals Log

> **Superseded (Policy-Version 2.0, 2026-09-17).** This file is retained for history only and is no longer operative in this kit; `docs/OPERATING_POLICY.md` governs. It will be deleted after the migration pilots (see `docs/activity_log/DECISIONS_LOG.md` DECISION-0006). Do not follow it.

This log records approvals, rejections, Done decisions, and risk acceptances.

## Index

Most recent entries (full chronological list follows below). Once this log grows past a few dozen entries, keep this index to the last ~10 and add a rotation rule: once the log exceeds ~400 lines, archive older entries to `docs/activity_log/archive/APPROVALS_LOG-<range>.md` and update this index to point at the archive.

## Approval Format

```markdown
## APPROVAL-0000 — Approval Title

**Date:** YYYY-MM-DD
**Approved By:** David Bloom / [Delegated Domain Approver name]
**Related Task:** TASK-0000 / N/A
**Decision:** Approved / Rejected / Approved with Notes / Done / Not Done / Do Not Do / Approved (Batch) / Approved (Domain)
**Decided By:** (required when Decision is Approved (Domain) — names the domain approver)
**Applies To:** (required when Decision is Approved (Batch) or Approved (Domain) — agents/roles/tasks the approval covers)
**Expires / Review Trigger:** (required when Decision is Approved (Batch) or Approved (Domain); state the operating timezone explicitly, or use a named condition)
**Status:** Active / Expired / Superseded (required when Decision is Approved (Batch) or Approved (Domain))

### Summary

What was approved or rejected?

### Notes

-
```

**Conflict rule:** if `Expires` has passed but `Status` still reads `Active`, the approval is treated as expired regardless of the recorded status — the date wins. `Status: Superseded` overrides date-based validity even before expiration.

## APPROVAL-0001 — Consolidate UX Critic and Usability Tester into a single Critic role

**Date:** 2026-09-15
**Approved By:** David Bloom
**Related Task:** N/A
**Decision:** Approved

### Summary

David requested this consolidation directly in conversation. Approves DECISION-0001 and the resulting edits to `docs/ARCHITECTURE.md`, `config/agent-models.yaml`, and the `docs/team_charter/` role-mapping references — a Hard Gate under `STANDING_APPROVAL_LANES.md` ("material changes to docs/ARCHITECTURE.md ... or config/agent-models.yaml").

### Notes

- Owner-initiated request stands as the sign-off for this Hard Gate; no separate review step was needed beyond the Owner's own instruction.

## APPROVAL-0002 — Add a Session Close Rule to both kits

**Date:** 2026-09-16
**Approved By:** David Bloom
**Related Task:** N/A
**Decision:** Approved

### Summary

David requested this directly in conversation. Approves DECISION-0002 and the resulting edits to `docs/team_charter/AI_COLLABORATION_RULES.md` and `docs/activity_log/ACTIVITY_LOG.md` in this repo, and the mirrored changes in `ai-project-operating-kit` — a Hard Gate under `STANDING_APPROVAL_LANES.md` ("material changes to `docs/team_charter/` documents").

### Notes

- Owner-initiated request stands as the sign-off for this Hard Gate.

## APPROVAL-0003 — Add SESSION START / SESSION CLOSE trigger phrases

**Date:** 2026-09-16
**Approved By:** David Bloom
**Related Task:** N/A
**Decision:** Approved

### Summary

David requested this directly in conversation, for `/design` and all AI involved. Approves DECISION-0003 and the resulting edits to `docs/team_charter/AI_COLLABORATION_RULES.md`, `README.md`, `CLAUDE.md`, and `prompts/CROSS_LAB_SPECIALIST_PROMPT.md` in this repo, and the mirrored changes in `ai-project-operating-kit` — a Hard Gate under `STANDING_APPROVAL_LANES.md` ("material changes to `docs/team_charter/` documents").

### Notes

- Owner-initiated request stands as the sign-off for this Hard Gate.

## APPROVAL-0004 — Parameterize SESSION START / SESSION CLOSE with a project slug

**Date:** 2026-09-16
**Approved By:** David Bloom
**Related Task:** N/A
**Decision:** Approved

### Summary

David requested a per-project initiation phrase directly in conversation. Approves DECISION-0004 and the resulting edits to `docs/team_charter/AI_COLLABORATION_RULES.md`, `README.md`, `CLAUDE.md`, and `prompts/CROSS_LAB_SPECIALIST_PROMPT.md` — a Hard Gate under `STANDING_APPROVAL_LANES.md` ("material changes to `docs/team_charter/` documents").

### Notes

- Owner-initiated request stands as the sign-off for this Hard Gate.

## APPROVAL-0005 — Promote Codex/GPT-Sol to the global default for Brand Strategist and Visual Designer

**Date:** 2026-09-16
**Approved By:** David Bloom
**Related Task:** N/A
**Decision:** Approved

### Summary

David requested this directly in conversation. Approves DECISION-0005 and the resulting edit to `config/agent-models.yaml` — a Hard Gate under `STANDING_APPROVAL_LANES.md` ("material changes to ... `config/agent-models.yaml`").

### Notes

- Owner-initiated request stands as the sign-off for this Hard Gate. Note the accepted tradeoff recorded in DECISION-0005: Brand Strategist and Visual Designer no longer decorrelated from each other by lab choice.
