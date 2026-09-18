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
