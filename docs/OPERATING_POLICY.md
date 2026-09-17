# Operating Policy

Policy-Version: 2.0
Effective: on merge of the governance PR that introduces this file (cutover date recorded in `docs/activity_log/ACTIVITY_LOG.md`).
Owner: David Bloom. Material changes to this file are a Hard Gate (human-review PR, David's approval).

This file is the single operational rulebook for `ai-design-studio-kit`. Where any other file in this repo disagrees with it, this file wins. `docs/ARCHITECTURE.md` still defines the creative roles, stages, and divergence methods; this file defines how work moves through GitHub.

## 1. Source of truth and availability

GitHub's default branch, `main`, is the operational source of truth. Chat history never is.

Three states, defined mechanically:

- **local** — exists only in a tool's filesystem or chat. Not real for operating purposes.
- **durable** — pushed to a remote feature branch. Safe from loss; **not** visible to other participants.
- **available** — on `main` at a recorded commit SHA, with every declared path present at that SHA, verified by `scripts/publish`.

A handoff's output is complete only when it is **available**. A pushed branch, an open PR, a chat paste, a local file, or a serve URL is never completion. A pinned commit on a branch may be named as a *read input* for a bounded experiment; it can never be a handoff's final state.

## 2. Actors, roles, lanes

**Actors** (tool surfaces; use these slugs everywhere: header `actor:`, branch names, `publish --actor`, commit trailers):
`claude-code`, `claude-design`, `codex`, `grok`, `david`.

**Roles** (use these slugs in packet filenames, headers, and dispatch):
`orchestrator`, `brand-strategist`, `visual-designer`, `marketing-creative-designer`, `critic`, `chaos-agent`, `steward`.

**Lanes** (set per handoff by the Orchestrator):
- `routine` — one model. Consolidation, formatting, corrective re-briefs, landing.
- `judgment` — two independent contexts before either sees the other. Critic passes, Done-adjacent selection input, constraint changes. Cross-lab preferred; a fresh same-lab context is acceptable for compliance/audit critique.
- `divergence` — generating options where convergence is the known risk. Improve the brief first; then a second lab or a Chaos mechanism (`ARCHITECTURE.md` §5); never automatic.

**Model** is recorded separately from actor (`model:` in the header). In the `judgment` and `divergence` lanes `publish --dispatch` refuses to dispatch with `model: unspecified`; `unspecified` is permitted in `routine`.

## 3. Authority

- **David** — Done decisions for every track; scope and constraint changes; deleting project content; revealing deliberately withheld information; publishing outside the repo; anything the scripts cannot classify. Never routine merges.
- **Orchestrator** (a Claude Code session with write access; Claude Design is a canvas, never the author of record) — owns the charter; picks the next handoff and its lane; writes the packet; runs `handoff-check`; dispatches; sets `accepted` or `returned`; decides brief-vs-lab-vs-Chaos; accountable for repository hygiene outcomes. Never hand-edits generated files. Never commits to `main` except through `scripts/publish`.
- **Steward** — a scripted capability (`scripts/handoff-check`, `scripts/publish`), not a tool. Run by whichever repository-capable actor owns the landing: `codex` for Codex-produced work, `claude-code` for its own work and for all airlock returns. The steward may normalize filenames, encoding, formatting, and paths. It may not rewrite substantive content; any substantive change is a new version with its own provenance.
- **Specialists** — produce exactly the declared outputs of the named handoff. Set no lifecycle state. Edit no logs, state, index, charter, config, or governance. Choose no output location.
- **Critic / Chaos Agent** — advisory only, always. Output goes to its own file. Never overwrites the work under review.

## 4. Handoff packets

Path: `projects/<slug>/handoff/<NNN>-<role>.md`. Handoff ID: `<slug>/<NNN>` (e.g. `project-crux/009`). The ID, the filename, and the branch name all agree; `handoff-check` enforces this.

Every packet begins with a YAML header:

```yaml
---
handoff: project-crux/009
role: visual-designer
status: draft
lane: divergence
actor: codex
model: unspecified
source_sha:            # written by handoff-check at ready
frozen_hash:           # written by publish at dispatched (sha256 of role/lane/inputs/outputs + body)
inputs:
  - projects/project-crux/charter.md
outputs:
  - projects/project-crux/visual/009-example.md
supersedes: none
---
```

Everything else (branch policy, validation, approval boundaries) defaults from this file. A packet records only deviations.

**Lifecycle and who sets each state:**

| Status | Set by | Meaning |
|---|---|---|
| `draft` | Orchestrator | being written |
| `ready` | `handoff-check` | header valid, every input available, `source_sha` stamped |
| `dispatched` | Orchestrator (via `publish`) | `handoff-check` passes again at that moment; sent to the actor; body frozen; `frozen_hash` stamped |
| `landed` | `publish` | `handoff-check` (including the freeze check) passes, then outputs verified on `main` |
| `accepted` / `returned` | Orchestrator | evaluated; `returned` means a superseding handoff follows |
| `blocked` | Orchestrator, or a script with a reason | cannot proceed |
| `superseded` | Orchestrator | replaced by a later handoff named in its `supersedes:` |

A specialist sets no state. A Critic review is its own handoff; there is no `reviewed` state.

**Freeze.** From `dispatched` onward the body above `## Amendments` is frozen at `frozen_hash`. Amendments may not change `role`, `lane`, `inputs`, or `outputs`; a change to any of those is a superseding handoff. Amendment format:

```markdown
## Amendments
### 2026-09-17 — claude-code
Reason:
Change:
Specialist notified: yes | no
```

**Dispatch string** (the only way a session learns its assignment; roles are never inferred from `config/agent-models.yaml`):

```text
SESSION START: project-crux
HANDOFF: project-crux/009
ROLE: visual-designer
```

A session with no `HANDOFF:` line is an orientation session: it reads state and reports; it produces nothing.

## 5. Airlock (actors without repository write access)

The specialist returns exactly one block per declared file, plus an asset block per binary, in the format given in `prompts/UNIVERSAL_SESSION_PROMPT.md` §Airlock. The steward (`claude-code`) fetches any export URL immediately, lands the files at the declared paths, and records provenance trailers (`Generated-By`, `Integrated-By`, `Integration-Type: airlock`, `Source-Artifact`, `Content-Modified`). Modification is verified by the script, not asserted: `--content-modified none` means the landed file is byte-identical to the return (a raw copy, if present, must match); `formatting-only` requires the raw return at `<output>.airlock.txt` for every landed text output and passes only if the two are identical after removing all whitespace; `substantive` is exceptional, requires the raw copy and a `--reason`, and is recorded in the commit trailers. A normal airlock landing is `none` or `formatting-only`.

## 6. Git policy

- `main` is the only long-lived branch. Never force-push `main`.
- **`scripts/publish` is the only writer to `main` after cutover.** Every workflow commit carries trailers (`Workflow-Event`, `Handoff`, `Actor`, `Policy-Version`). A commit on `main` without them is drift; `publish --drift` lists such commits. Merge commits of human-review PRs (`Merge pull request #`) are exempt.
- **Direct to `main`** (derived by `publish` from the diff, never chosen by an agent): a single new packet; a packet header/amendment change; a single new text file under `projects/<slug>/{handoff,critic,chaos,visual,brand,ux,marketing}/`; generated `STATE.md`, index, and log.
- **Short-lived branch, auto-merged** (`<slug>/<NNN>-<role>`): anything else — multiple output files, any binary, mock libraries, asset collections. `publish` creates the branch, commits, merges with `--no-ff`, pushes, deletes the branch. No one is asked.
- **Human-review PR** (David views the diff): changes to this file, `docs/ARCHITECTURE.md`, `docs/PROJECT_CHARTER_TEMPLATE.md`, `config/agent-models.yaml`, `CLAUDE.md`, or `prompts/`; deleting or replacing accepted design files; destructive restructuring; a conflict the scripts cannot classify. A Done decision is a `DECISIONS_LOG.md` entry, not a PR.
- **Every branch ends** merged-and-deleted, superseded-and-deleted, or `blocked`; a blocked branch's owner and next action are recorded in the `## Blocked` section of the handoff that owns it. Unmerged 48h after last push = stale, listed in `STATE.md`. Deleting a branch with unmerged content requires David.
- **Human-review changes are never auto-merged.** When a `governance` or `recovery` diff touches a protected path (this file, `docs/ARCHITECTURE.md`, the charter template, `config/agent-models.yaml`, `CLAUDE.md`, `prompts/`, `scripts/`), deletes anything under `projects/`, or modifies a file that is a declared output of a `landed` or `accepted` handoff, `publish` commits it to a `review/…` branch, pushes that branch, and stops. David merges the PR in GitHub; the records are written afterwards with `publish --regen` and a `governance` event.
- **Workflow events** (commit trailer `Workflow-Event:`): `handoff-created`, `status-changed`, `output-landed`, `governance`, `recovery`. Only `output-landed`, `governance`, and `recovery` write an Activity Log entry.

## 7. Binaries

Keep canonical review assets in git; no LFS until every participating tool is confirmed to resolve LFS pointers. Limits enforced by `publish`: 500 KB per PNG/JPG, 2 MB per other file, 10 MB per handoff commit. Store source plus one canonical render per plate, not every variation. `--allow-large` overrides with a reason recorded in the receipt.

## 8. Records

- `docs/STATE.md` — **generated** by `publish`; never hand-edited. The workflow commit it was generated through (the records commit carrying the file follows it on `main`, so the file cannot name its own SHA), per-project open handoffs with derived next action, proposed decisions awaiting David, unmerged and stale branches.
- `projects/<slug>/handoff/README.md` — **generated** index of that project's handoffs (ID, role, status, lane, actor, output @ SHA).
- `docs/activity_log/ACTIVITY_LOG.md` — the one operational log. One compact entry per `output-landed`, `governance`, or `recovery` event, written by `publish`. No session diaries.
- `docs/activity_log/DECISIONS_LOG.md` — real decisions only, with the approval recorded inside the entry. `Status: Proposed` entries appear in `STATE.md` as pending David.
- The charter's Stage log is historical as of cutover and is no longer updated; the handoff index replaces it. The charter's changelog remains for charter content changes.

## 9. Session start

A session reads, in order, and nothing else unless the packet names it:
1. `docs/STATE.md`
2. `projects/<slug>/charter.md`
3. the packet named in the dispatch
4. `docs/ARCHITECTURE.md` §3 for its role (§5 if generating variants or acting as Chaos Agent)
5. the packet's declared inputs

## 10. Hard gates (unchanged in substance from v1)

Any track's Done decision; revealing a blind project's withheld identity; merging Chaos output into a primary deliverable; material changes to `ARCHITECTURE.md`, the charter template, `agent-models.yaml`, or this file; sending any deliverable outside the repo; deploying a prototype beyond a private preview; deleting project content; risk acceptance. Ambiguous and reversible → ask one question and proceed; ambiguous and irreversible → Hard Gate.

## 11. Delivery receipt

`publish` ends every run by printing: repository; handoff; event; integration (direct | branch); `main` SHA after push; each verified path; branch disposition; validation result; and the line `Available to other agents: yes | no`. If that line is not `yes`, the handoff is not complete.
