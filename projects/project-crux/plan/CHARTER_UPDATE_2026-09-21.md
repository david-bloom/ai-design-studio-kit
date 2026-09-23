# Charter update — applied 2026-09-21 (build-out phase)

Status: **The edits below are already applied to `projects/project-crux/charter.md` on branch `claude/optimistic-bell-b8bxwn`.** This doc is the summary + the landing instructions for a main-capable `publish` session. Supersedes the 2026-09-19 draft.

Clean-room: identity still withheld in repo content ("the product" / project-crux). See the **open flag** at the end.

## What was folded into charter.md

- **Status** → build-out phase (Phase 2); provocation locked.
- **New "Build-out phase" section** (before Active tracks) recording every current decision: one adaptive interface; Cram/Course/Homework → one "Learn" mode with BYOQ as default entry; Open Hand teach-first (BYOQ teaches on a parallel problem, returns the real question unsolved); BYOQ hint-scaffolding (Open Hand components as tracked hints → feedback + adaptive fade; reference rail = the exposable set); mastery = multiple cold/no-hint questions; student home + progress combined; parent-pay reinstated as **net-new**; Marketing reactivated (partial); no subscription reaffirmed; diagnostic deprioritized; build against production `app.*`; seeded on Biology.
- **Clean-room retired** at direction-lock (design-artifact exclusion lifted; **identity still withheld** — separate §10 gate).
- **Active tracks** → Marketing "Yes — partial."
- **Constraint ledger** → parent-UI reversed (net-new); cognitive-profiles resolved (one adaptive interface); the two clean-room design-exclusion rows marked retired (identity row kept Hard).
- **Done Decider** → added Working/Study-template and Student-home+progress checklists.
- **Data readiness** section points to `plan/DATA_ISSUES.md` (topic-tagging backfill, difficulty backfill, `subject_key` → `ap-<slug>`).
- **Changelog** → 2026-09-21 entry.

## How to land (main-capable clone)

1. Bring the updated charter into your `main` checkout, e.g. after `git fetch origin claude/optimistic-bell-b8bxwn`:
   `git checkout origin/claude/optimistic-bell-b8bxwn -- projects/project-crux/charter.md projects/project-crux/plan/`
2. Land the charter content change via `scripts/publish`. **Caveat:** charter.md is project content but not a "new text file," so confirm how `publish` classifies a charter *modification* (it may route to an auto-merge branch or want a `governance` event) — you know the script; follow its receipt.
3. **Close handoff 016:**
   `scripts/publish project-crux/016 --actor claude-code --set-status blocked --reason "grok 016 delivered off-repo; read; unhelpful; not landing/re-briefing; project pivoted to build-out"`

## Open flag (needs David) — pre-existing identity leak

`charter.md` Stage log (2026-09-15 entry, ~line 152) names the real product twice. It predates this work and sits in the "preserved verbatim / historical" Stage log, and identity handling is a §10 gate — so it's your call, not an automatic scrub. Options: (a) I replace those two mentions with "the product"/"the source product" to match the withholding rule; (b) leave as-is; (c) since clean-room is retiring, decide to reveal identity in-repo deliberately (a distinct decision). Recommend (a) for consistency with the identity-withheld line just added, unless you're ready for (c).
