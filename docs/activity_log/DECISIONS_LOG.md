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

## DECISION-0004 — Parameterize SESSION START / SESSION CLOSE with a project slug

**Date:** 2026-09-16
**Decision Owner:** David Bloom
**Status:** Approved
**Related Task:** N/A
**Area:** Operations

### Context

David asked for an initiation phrase specific to each project, so a session follows both this kit's shared rules and that project's own guidance. A unique phrase per project would need new documentation every time a project is created and would grow without bound.

### Decision

Extend the existing `SESSION START` / `SESSION CLOSE` triggers (DECISION-0003) with an optional project-slug parameter: `SESSION START: <project-slug>` and `SESSION CLOSE: <project-slug>` (e.g. `SESSION START: project-crux`). The plain form stays kit-level only; the scoped form additionally reads/updates that project's `charter.md` and `handoff/` folder.

### Rationale

One consistent phrase pattern, not a new word per project. Scales to any future project with zero additional documentation — only the slug changes.

### Consequences

Updated: `docs/team_charter/AI_COLLABORATION_RULES.md` (both trigger definitions), `README.md`, `CLAUDE.md`, `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`. Not mirrored upstream in `ai-project-operating-kit` — that kit doesn't have this kit's multi-project-per-repo structure, so the parameterized form doesn't apply there.

### Risks / Follow-ups

None identified.

## DECISION-0005 — Promote Codex/GPT-Sol to the global default for Brand Strategist and Visual Designer

**Date:** 2026-09-16
**Decision Owner:** David Bloom
**Status:** Approved
**Related Task:** N/A
**Area:** Architecture

### Context

Codex/GPT-Sol was assigned as a project-crux-level override for both Brand Strategist and Visual Designer (the latter originally, the former corrected in afterward). David decided this should be the default for all future projects, not a project-specific choice.

### Decision

`config/agent-models.yaml`: `brand_strategist.primary` and `visual_designer.primary` both changed to "Codex / GPT-Sol (OpenAI)". Former defaults (`gpt-5.1`, `gemini-3-pro`) moved to `alternates`.

### Rationale

David trusts this tool directly for both roles. Recorded explicitly in the rationale text: this means the two generative roles are no longer decorrelated from each other by lab choice — only the Critic (Grok, a different lab from both) provides independent review now. That's a real tradeoff, not a null one, so a note was added instructing a future project that needs Brand Strategist and Visual Designer decorrelated from each other specifically (not just critiqued by a third lab) to override one of them at the project level.

### Consequences

Updated: `config/agent-models.yaml` (both rows' `primary`, `alternates`, and the `critic` row's example text, which referenced the old defaults). `projects/project-crux/charter.md`'s Model assignment table updated to drop "project-level override" framing — these are now the project inheriting the current global default, not an exception to it.

### Risks / Follow-ups

Watch whether Brand Strategist and Visual Designer output starts converging on similar ideas across projects specifically because they share a tool — that's the risk this decision explicitly accepted, not an unknown one.

## DECISION-0006 — Adopt Operating Policy 2.0 (main-only availability, explicit dispatch, scripted steward)

**Date:** 2026-09-17
**Decision Owner:** David Bloom
**Status:** Proposed
**Related Task:** N/A
**Area:** Operations

### Context

An independent architecture review (2026-09-17) of this repo's history found three structural defects behind every observed operating failure: "durable" and "available" were defined as the same thing (a pushed branch counted as source of truth, so `visual/001-directions.md` on an unmerged branch and the PR #3 mock library were invisible to every reader of `main`); state was narrated in three places and never recorded (the Activity Log's own next action was stale nine minutes after it was written); and the integrating role had no definition while the conducting role (Claude Design) had no write access. The imported engineering task machinery (tiers, seven statuses, task template, separate approvals log and changelog) was never used by project work and could not have caught any of these failures.

### Decision

Adopt `docs/OPERATING_POLICY.md` (Policy-Version 2.0) as the single operational rulebook. Availability means on `main` at a recorded SHA. Handoffs carry a YAML header with an explicit lifecycle and stated authority per transition; sessions are dispatched with an explicit handoff ID and role and never infer either. The Repository Steward is a scripted capability (`scripts/handoff-check`, `scripts/publish`) run by whichever repository-capable actor owns a landing; `publish` is the only writer to `main` and every workflow commit carries receipt trailers. `docs/STATE.md`, each project's handoff index, and the Activity Log are generated. Claude Code is the Orchestrator of record; Claude Design is a canvas whose output enters through the airlock. The unused operating-kit machinery is superseded in this kit (banners added now; files deleted after the migration pilots). The upstream `ai-project-operating-kit` is unchanged.

### Rationale

Each safeguard maps to an observed failure: main-only availability to the stranded 001 and PR #3; explicit dispatch to the universal prompt's self-contradictory role detection; the receipt and generated state to the stale log; trailers to the loss of commit provenance (all actors committing as one author); the freeze rule to packets edited after dispatch.

### Consequences

Governance PR introduces the policy, scripts, prompt, `CLAUDE.md`, legacy headers on handoffs 001–008, the archived v1 Activity Log, and this entry. Separate recovery task afterwards for PR #3, `001-directions.md`, option 07 in the mock index, the `guide-concepts/` path, and stale branches. Two-handoff pilot before retired files are deleted or CI is added.

### Risks / Follow-ups

Codex's ability to run the scripts is unverified until the Codex pilot. Read access to `main` for Grok and Claude Design must be confirmed at preflight. Binary growth is bounded by policy §7 limits, not LFS, until every tool is confirmed to resolve LFS pointers.

**Approval:** recorded by David merging the governance PR; this entry's Status is set to Approved in the cutover governance commit.
