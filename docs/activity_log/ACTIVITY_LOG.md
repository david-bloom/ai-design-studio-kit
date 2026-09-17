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
