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

## DECISION-0002 — Add a Session Close Rule to both ai-project-operating-kit and this kit

**Date:** 2026-09-16
**Decision Owner:** David Bloom
**Status:** Approved
**Related Task:** N/A
**Area:** Operations

### Context

Both kits had a Startup Rule (what a new session should read) but no counterpart telling an ending session what to record. The Push cadence rule said "push at end of session" without saying what to write, and `ACTIVITY_LOG.md` had no defined entry format at all (unlike `APPROVALS_LOG.md`/`DECISIONS_LOG.md`, which both do). David's stated goal: capture activity and let a new session start seamlessly from where the previous one left off — next steps, pending decisions, and risks included.

### Decision

Add a Session Close Rule to `AI_COLLABORATION_RULES.md` in both `ai-project-operating-kit` (the source) and this kit's adapted copy, paired with the existing Startup Rule. Mandatory whenever a session changed durable state. Add a defined Entry Format to `ACTIVITY_LOG.md` in both, requiring Pending Decisions and Open Risks/Blockers as explicit fields (state `None` rather than omit).

### Rationale

Symmetry with the Startup Rule; closes an actual gap rather than adding ceremony for its own sake — the rule only fires when something durable changed, so a pure discussion/exploration session is unaffected.

### Consequences

Updated in this repo: `docs/team_charter/AI_COLLABORATION_RULES.md`, `docs/activity_log/ACTIVITY_LOG.md` (Entry Format added, first Session Close entry written for 2026-09-16), `CLAUDE.md`. Mirrored upstream in `ai-project-operating-kit`: `AI_COLLABORATION_RULES.md`, `ACTIVITY_LOG.md`, `README.md`, `PROJECT_SETUP.md`.

### Risks / Follow-ups

Watch for the rule becoming rote ("Pending Decisions: None" copy-pasted without genuinely checking) — the value is in someone actually looking, not in the field being present.

## DECISION-0003 — Add SESSION START / SESSION CLOSE trigger phrases, for every tool

**Date:** 2026-09-16
**Decision Owner:** David Bloom
**Status:** Approved
**Related Task:** N/A
**Area:** Operations

### Context

The Startup Rule and Session Close Rule (DECISION-0002) exist, but nothing gave a human a short, consistent phrase to invoke them on demand — especially in tools without Claude Code's automatic session orientation (GPT-Sol, Grok). David asked for this explicitly for `/design` "and all AI involved," and separately flagged that GitHub must remain the source of truth for every tool, not just Claude.

### Decision

Add `SESSION START` and `SESSION CLOSE` as trigger phrases, matching the existing `SYNC` handshake's convention (full word, uppercase, standalone). Documented in `AI_COLLABORATION_RULES.md`, `README.md`, `CLAUDE.md`, and `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`, each with an explicit statement that GitHub is authoritative over any tool's own chat history. Mirrored upstream in `ai-project-operating-kit` (its two new-session prompts too).

### Rationale

One consistent phrase per action, usable in any tool, removes the need for David to re-explain the startup/close-out process differently to Claude, GPT-Sol, and Grok. Stating "GitHub wins over chat" explicitly, not just implicitly via the Source-of-Truth Rule, matters most for tools with no built-in habit of checking the repo first.

### Consequences

Updated in this repo: `docs/team_charter/AI_COLLABORATION_RULES.md`, `README.md`, `CLAUDE.md`, `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`. Mirrored upstream in `ai-project-operating-kit`: `AI_COLLABORATION_RULES.md`, `README.md`, `prompts/CLAUDE_NEW_SESSION_PROMPT.md`, `prompts/CODEX_NEW_SESSION_PROMPT.md`.

### Risks / Follow-ups

A tool without repo read access can't actually act on `SESSION START` beyond acknowledging it — worth confirming each cross-lab tool David uses can at least read `ai-design-studio-kit` before relying on the trigger there.
