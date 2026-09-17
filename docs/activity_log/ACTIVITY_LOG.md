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
