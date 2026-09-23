# Activity Log

The one operational activity log (Policy-Version 2.0). Entries are appended by `scripts/publish` only, one per `output-landed`, `governance`, or `recovery` event. Do not edit by hand. Current state is `docs/STATE.md`, not this file. The pre-cutover log is preserved at `docs/activity_log/archive/ACTIVITY_LOG-v1.md`.

Entry shape:

```
## <UTC time> — <event> — <handoff or kit> — <actor>
- Landed @ <sha>: <paths>
- Status: <from> → <to>
- Next: <derived next action>
- Note: <message, if any>
```

## 2026-09-17T19:22Z — governance — kit — claude-code
- Landed @ 65bda0d: docs/activity_log/DECISIONS_LOG.md
- Note: Cutover to Policy 2.0: DECISION-0006 approved, state regenerated

## 2026-09-17T19:32Z — output-landed — project-crux/009 — claude-code
- Landed @ 3090784: projects/project-crux/critic/009-decision-brief.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-17T19:41Z — recovery — kit — claude-code
- Landed @ 10d72f8: projects/project-crux/visual/guide-concepts/GUIDE_BRIEF.md; projects/project-crux/visual/guide-concepts/README.md; projects/project-crux/visual/guide-concepts/comparisons/register-comparison-001.md; projects/project-crux/visual/guide-concepts/comparisons/register-comparison-001.png; projects/project-crux/visual/guide-concepts/concepts/GC-001-fizzbit/concept.md; projects/project-crux/visual/guide-concepts/concepts/GC-001-fizzbit/contact-sheet.png; projects/project-crux/visual/guide-concepts/concepts/GC-002-moxie-quill/concept.md; projects/project-crux/visual/guide-concepts/concepts/GC-002-moxie-quill/contact-sheet.png … (42 files)
- Note: Recovery: land PR #3 mock library and guide-concept library (Codex, 2026-09-16)

## 2026-09-17T19:42Z — recovery — kit — claude-code
- Landed @ 6469853: projects/project-crux/visual/001-directions.md
- Note: Recovery: land visual/001-directions.md from stranded branch (Codex, 2026-09-15) with historical note

## 2026-09-17T19:43Z — recovery — kit — claude-code
- Landed @ e7c0048: projects/project-crux/visual/mocks/README.md; projects/project-crux/visual/mocks/review-board.md
- Note: Recovery: index Option 07 (Blue Hour Cabinet challenger, incl. warm-white grade-4a renders) in mocks README and review board

## 2026-09-17T19:43Z — recovery — kit — claude-code
- Landed @ 3c36729: projects/project-crux/handoff/007-visual-designer.md
- Note: Recovery: amend handoff 007 — resolve guide-concepts/ path, note mocks now on main, record that the in-house synthesis has no file

## 2026-09-17T19:44Z — recovery — kit — claude-code
- Landed @ 63f7be7: projects/project-crux/handoff/008-critic.md
- Note: Recovery: amend handoff 008 — record provenance of critic/008-divergence-gate.md

## 2026-09-17T19:49Z — recovery — kit — claude-code
- Landed @ f4ae2fc: 
- Note: Recovery: seven merged or superseded branches deleted; STATE regenerated

## 2026-09-17T19:50Z — recovery — kit — claude-code
- Landed @ 78988ee: projects/project-crux/visual/mocks/README.md; projects/project-crux/visual/mocks/review-board.md
- Note: Recovery: update mock library counts from six to seven for Option 07

## 2026-09-17T19:53Z — recovery — kit — claude-code
- Landed @ feb0150: projects/project-crux/visual/mocks/README.md; projects/project-crux/visual/mocks/review-board.md
- Note: Recovery: correct mock index wording (six frozen directions plus the 007 challenger)

## 2026-09-17T20:05Z — output-landed — project-crux/010 — claude-code
- Landed @ efa6f8b: projects/project-crux/critic/010-review-board-check.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-17T20:37Z — output-landed — project-crux/011 — claude-code
- Landed @ 0c26287: projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-stats-warmwhite.png; projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.png; projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-17T20:52Z — governance — kit — claude-code
- Landed @ 795872b: 
- Note: records for merged PR #6: pilot script fixes (re-delivery, whole-return raw files, receipt wording)

## 2026-09-17T21:29Z — governance — kit — claude-code
- Landed @ 6d9d032: 
- Note: records for merged PR #7: revises field, superseding blocked handoffs

## 2026-09-17T21:44Z — output-landed — project-crux/013 — claude-code
- Landed @ 6d930fd: projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.html; projects/project-crux/visual/mocks/option-07-challenger/warm-white/blue-hour-bio-warmwhite.png; projects/project-crux/visual/mocks/option-07-challenger/warm-white/manifest.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-17T21:53Z — governance — kit — claude-code
- Landed @ 67092b5: 
- Note: records for merged PR #8: v1 machinery retired; Policy 2.0 migration complete

## 2026-09-18T00:46Z — governance — kit — claude-code
- Landed @ a493b02: projects/project-crux/charter.md
- Note: charter (project-crux): teen-register intelligence + Nike/IG/Depop/Hollister inspiration + soft register constraint (expert brand review)

## 2026-09-18T01:37Z — output-landed — project-crux/014 — claude-code
- Landed @ 45258bf: projects/project-crux/visual/014-register-directions.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-18T20:56Z — output-landed — project-crux/015 — claude-code
- Landed @ 76e72f3: projects/project-crux/visual/mocks/head-to-head-014/signal-proof/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-014/signal-proof/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-014/daybreak-relay/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-014/daybreak-relay/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-014/open-window/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-014/open-window/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-014/midnight-standard-control/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-014/midnight-standard-control/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-014/manifest.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-19T17:32Z — output-landed — project-crux/017 — claude-code
- Landed @ bc8c5dc: projects/project-crux/visual/mocks/head-to-head-017/signal-proof/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-017/signal-proof/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-017/daybreak-relay/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-017/daybreak-relay/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-017/open-window/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-017/open-window/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-017/midnight-standard-control/openhand-stats.html; projects/project-crux/visual/mocks/head-to-head-017/midnight-standard-control/openhand-stats.png; projects/project-crux/visual/mocks/head-to-head-017/manifest.md
- Status: dispatched → landed
- Next: orchestrator: accept or return

## 2026-09-23T22:38Z — recovery — kit — claude-code
- Landed @ 990d932: projects/project-frontdoor/charter.md; projects/project-frontdoor/design-system/SOURCE.md; projects/project-frontdoor/design-system/TOKENS.md; projects/project-frontdoor/design-system/VISUAL_IDENTITY.md; projects/project-frontdoor/design-system/styles.css; projects/project-frontdoor/design-system/tokens/colors.css; projects/project-frontdoor/design-system/tokens/elevation.css; projects/project-frontdoor/design-system/tokens/fonts.css … (11 files)
- Note: Land project-frontdoor scaffolding (charter + pinned design-system mirror cramapple@5341d4d) stranded on branch claude/sharp-faraday-ap5xoj / PR #9

## 2026-09-23T23:06Z — governance — kit — claude-code
- Landed @ a707b32: docs/activity_log/DECISIONS_LOG.md
- Note: DECISION-0007 Approved: Cramapple design system Done (orange-masthead Project-Crux direction, internally BlueHour Cabinet); David's 2026-09-23 in-session selection is the approval of record

## 2026-09-23T23:56Z — recovery — kit — claude-code
- Landed @ b334869: projects/project-crux/charter.md; projects/project-crux/plan/CHARTER_UPDATE_2026-09-21.md; projects/project-crux/plan/DATA_CONTRACT_AUDIT.md; projects/project-crux/plan/DATA_ISSUES.md; projects/project-crux/plan/PHASE1_SURFACE_MAP.md; projects/project-crux/plan/WORK_ORDER_empty_cells.md
- Note: Land project-crux Phase 2 build-out work stranded on branch claude/optimistic-bell-b8bxwn: charter refresh + plan/ set (charter update, data-contract audit, data issues, Phase-1 surface map, empty-cells work order)
