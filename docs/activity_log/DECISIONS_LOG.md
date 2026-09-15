# Decisions Log

This log records product, architecture, operating, security, design, and workflow decisions.

## Index

Most recent entries (full chronological list follows below). Once this log grows past a few dozen entries, keep this index to the last ~10 and add a rotation rule: once the log exceeds ~600 lines, archive older entries to `docs/activity_log/archive/DECISIONS_LOG-<range>.md` and update this index to point at the archive. Don't let this slip — an unrotated decisions log becomes too expensive to read in full at session start, which is exactly when it matters most.

## Decision Format

```markdown
## DECISION-0000 — Decision Title

**Date:** YYYY-MM-DD
**Decision Owner:** David Bloom
**Status:** Proposed / Approved / Superseded
**Related Task:** TASK-0000 / N/A
**Area:** Product / Architecture / Security / Design / Operations / Integration

### Context

### Decision

### Rationale

### Consequences

### Risks / Follow-ups
```

## DECISION-0001 — Consolidate UX Critic and Usability Tester into a single Critic role

**Date:** 2026-09-15
**Decision Owner:** David Bloom
**Status:** Approved
**Related Task:** N/A
**Area:** Architecture

### Context

`docs/ARCHITECTURE.md` originally defined UX Critic (heuristic evaluation) and Usability Tester (scenario-based simulated-user testing) as two separate roles. Both were advisory-only, both typically assigned to the same or adjacent models, and having two roles for one function was adding coordination overhead without a corresponding independence benefit.

### Decision

Merge the two into a single **Critic** role: advisory second-opinion review of any track's output, covering both heuristic critique and scenario-driven testing. Assigned to Grok in `config/agent-models.yaml`.

### Rationale

Fewer roles, less ceremony, no loss of real capability — both prior roles were advisory and non-gating, so consolidating doesn't remove a check, it removes a redundant label. The Critic's actual value (independence from whichever model generated the work under review) is preserved by keeping it on a distinct lab from the generative roles, per `ARCHITECTURE.md` §4.

### Consequences

Updated: `docs/ARCHITECTURE.md` §1, §3, §6; `config/agent-models.yaml` (ux_critic + usability_tester rows merged into `critic`); `docs/team_charter/AI_COLLABORATION_RULES.md` and `STANDING_APPROVAL_LANES.md` role references; `CLAUDE.md`, `README.md`, `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`; `projects/project-crux/charter.md` Model assignment table.

### Risks / Follow-ups

None currently identified — if a future project genuinely needs heuristic critique and live-scenario testing run independently of each other (e.g. by two different models for extra decorrelation), that's a project-level override in that project's charter, not a reason to re-split the default role.
