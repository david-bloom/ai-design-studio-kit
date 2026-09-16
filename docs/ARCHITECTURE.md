# Architecture

## 1. Design principles

1. **The brief is a starting point, never a spec.** No generation happens against a brief that hasn't been through exploration first.
2. **Roles, not a fixed pipeline.** Every project uses only the roles/tracks it needs. A marketing-campaign project may never touch the Critic.
3. **Critique is advisory.** Every agent that evaluates another agent's work produces a recommendation, never a gate. David is the Done Decider for every track, every time.
4. **Model assignment is a config, not code.** Which LLM plays which role is declared in `config/agent-models.yaml` and is expected to change as models improve. Nothing about the process should depend on a specific model being available.
5. **Sessions are disposable; the Project Charter is not.** Any stage can be re-entered in a new session, days or weeks later, because the Charter and prior stage outputs carry all the state.
6. **Chaos is a tool you pull, not ambient noise.** It is invoked deliberately, produces a labeled alternative branch, and never silently merges into the primary output.

## 2. The Project Charter

The Charter is the one artifact every project produces first and every later stage reads. It lives at `projects/<slug>/charter.md` (template in `PROJECT_CHARTER_TEMPLATE.md`) and captures:

- **Origin brief** — verbatim, for the record.
- **Expanded understanding** — what the Creative Director's exploration surfaced that the original brief didn't say (real audience, real constraints, unstated assumptions, competitive/reference context).
- **Active tracks** — which of Visual Design / Brand Identity / Marketing Templates / UX are in scope for this project, and which are explicitly out.
- **Done Decider checklist, per active track** — the specific, concrete conditions David will use to call each track finished. Written *before* generation starts, revisable later.
- **Constraint ledger** — the constraints that are real (must survive) vs. soft (fair game for the Chaos Agent to strip).
- **Model assignment for this project** — a copy of the relevant rows from `agent-models.yaml` at project start, so a later global model swap doesn't retroactively confuse what a past decision was reasoned with.

The Charter is a living document. Re-running the brief-development stage mid-project (because priorities shifted) updates it in place, with a dated changelog at the bottom.

## 3. Agent roles

| Role | Job | Typically produces |
|---|---|---|
| **Creative Director** | Runs brief development, owns the Charter, decides which specialist agents to invoke and in what order, synthesizes their outputs into a coherent recommendation. Does not generate final creative itself. | Project Charter, stage plans, synthesis memos |
| **Brand Strategist** | Positioning, narrative, voice, values, differentiation. The "why" layer everything else has to be consistent with. | Brand strategy doc, messaging pillars, voice guide |
| **Visual Designer** | Visual identity and UI-level design: color, type, layout systems, component look-and-feel. | Mockups/comps, style tiles, design-token proposals |
| **Marketing Creative Designer** | Campaign and template-level creative that *applies* an existing brand/visual system to specific channels (social, email, landing pages, ads). | Campaign concepts, template sets |
| **Critic** | The single second-opinion role: advisory review of any track's output — heuristic evaluation (usability, accessibility, information architecture, visual/brand consistency) *and* scenario-driven "walk through it as a user" testing, both from one role rather than split across two. Reviews whatever it's pointed at — UX flows, Visual Design, Brand Identity, Marketing Templates — not just UX. Independent from whichever agent generated the work under review (see §4). | Advisory critique memos, severity-tagged findings, scenario walkthroughs |
| **Chaos Agent** | On-demand forced divergence. Never runs as part of the default path. | Labeled alternative branches (see §5) |

Roles are invoked individually, in whatever order the Creative Director's stage plan calls for — this is not a waterfall. A project might run Brand Strategist → Visual Designer → Critic → back to Visual Designer, skipping Marketing Creative Designer entirely.

**History note.** Earlier versions of this kit split heuristic UX critique and scenario-based usability testing into two separate roles (UX Critic, Usability Tester). Consolidated into one Critic role on 2026-09-15 — the split added ceremony without adding a real independence benefit, since both roles were advisory-only and typically assigned to the same model anyway.

## 4. Model assignment

See `config/agent-models.yaml` for the live mapping. Philosophy:

- Assign by **demonstrated lab strength for that specific kind of work**, not by defaulting everything to one provider.
- The **Creative Director** should be a model strong at long-context coordination, tool use, and holding a lot of project state coherently — this is the role most exposed if the model is weak at sustained reasoning across a multi-session project.
- Roles that **critique or test** benefit from a *different* lab than the role that *generated* the work being critiqued — same-model critique tends to under-flag the biases that model itself has.
- The **Chaos Agent** should, where practical, run on a different lab entirely from the primary generative agents, for the same decorrelation reason — plus it's a natural place to use a model with a distinct "voice" or a lighter safety/blandness posture.
- Revisit the mapping at the start of each new project rather than assuming it's still current — label with a last-reviewed date.

## 5. Chaos mechanisms

Three concrete, invokable techniques (not a vague "be creative" instruction):

**a. Monkey-wrench (constraint removal/injection).**
Modeled on Netflix's Chaos Monkey. Pick a *soft* constraint from the Charter's constraint ledger (never a hard one) and force-flip it — remove it entirely, or replace it with its opposite — then regenerate against the modified brief. Produces a labeled "what if we didn't assume X" branch.

**b. Transplant (unrelated reference domain).**
Impose a deliberately unrelated aesthetic or structural reference (a domain with no obvious connection to the project) as a lens and regenerate through it. The goal is lateral transfer, not literal application — the output should translate a *principle* from the reference domain, not just re-skin it.

**c. String Seed of Thought (entropy-forced variation).**
Based on [Kanaya et al., "String Seed of Thought" (arXiv:2510.21150)](https://arxiv.org/html/2510.21150v3): LLMs asked to produce non-deterministic output tend to collapse onto a narrow, statistically "safe" set of answers even when explicitly asked for variety. SSoT counters this by having the model first generate a random string purely for entropy, then derive its actual answer by manipulating that string, rather than sampling its answer directly. In this kit, use it whenever an agent is asked to produce *n* meaningfully distinct variants (e.g., "give me 5 genuinely different visual directions") — prompt the agent to emit a random seed string per variant first, then derive that variant's direction from it, instead of just asking for "5 different options" and getting 5 minor rewordings of the same idea.

**When to reach for which:** monkey-wrench when you suspect a *stated* constraint is the thing making everything generic; transplant when the work is technically fine but aesthetically predictable; SSoT whenever you're asking for multiple options and worried they'll converge.

All Chaos Agent output is clearly labeled as a chaos branch in the project folder (`projects/<slug>/chaos/`) and never overwrites or is silently folded into the primary track output. You decide whether it survives.

## 6. Stages (independent, resumable)

1. **Charter** — Creative Director + you. Produces/updates `charter.md`.
2. **Strategy** — Brand Strategist (if Brand Identity track active). Can run in parallel with early Visual Design exploration.
3. **Generate** — the relevant specialist agent(s) per active track, producing first-pass creative.
4. **Chaos (optional, any time after Generate has something to react to)** — invoked explicitly, produces labeled alternative branches.
5. **Advisory critique** — the Critic, pointed at whichever track's output needs a second opinion (UX flows, Visual Design, Brand Identity, or Marketing Creative).
6. **Review & Done-decision** — you, against the Charter's Done Decider checklist, per track.

Any stage can be re-entered independently. There is no requirement to run tracks in lockstep — Brand Identity might be "done" while Visual Design is still iterating.

## 7. AI-to-AI handoff

The repo is the exchange mechanism between agents on different labs, not David relaying context by hand between chat windows. Before any stage that hands off to a different tool/lab (Gemini, Grok, GPT outside Claude), the current agent (typically the Creative Director) writes a **handoff packet** to `projects/<slug>/handoff/<NNN>-<role>.md`, using `docs/team_charter/HANDOFF_PACKET_TEMPLATE.md`, numbered sequentially so the next agent can find the latest by picking the highest `NNN`. The packet must be self-contained: what to read, what the role is, what NOT to touch, and exactly where output goes — so David only has to say "check the repo," not re-brief each tool by hand.

The receiving agent's prompt (`prompts/CROSS_LAB_SPECIALIST_PROMPT.md` for Gemini/Grok/other cross-lab specialists) is written to look for this file first. Log every handoff in the project's charter Stage log, same as any other stage.

## 8. Project folder contents

`projects/<slug>/` holds only what's specific to that project. Everything else — roles, approval lanes, the charter template, model defaults, prompts, scripts — lives once at the repo root and is shared by every project. **Do not create a `docs/`, `tasks/`, or `team_charter/` folder inside a project folder.** Duplicating kit-level governance per project would let one project drift onto different approval rules than another, which is exactly what `docs/team_charter/`'s single-source model exists to prevent.

A project folder should contain:

- **`charter.md`** — required. Carries what a separate per-project "tasks" folder would otherwise duplicate: a Stage log, Done Decider checklist, Constraint ledger, and a Model assignment *snapshot* (including any project-level overrides).
- **`handoff/`** — handoff packets for this project's stage handoffs, numbered `NNN-role.md`.
- **Track output folders**, created as tracks actually produce something — e.g. `visual/`, and eventually `brand/`, `chaos/`. Don't pre-create folders for tracks with nothing in them yet.

**Task numbering.** The kit-level `docs/tasks/TASK_TEMPLATE.md` and `TASK-NNNN` IDs (imported from `ai-project-operating-kit`) are for kit-level, engineering-flavored work — installing the operating kit, a role consolidation, a framework change — tracked centrally in `docs/activity_log/`. They are **not** for routine project generative stages. A project's handoff packets and Stage log entries reference each other by the handoff's own number (`001`, `002`, ...) scoped to that project, not a global `TASK-NNNN`. Labeling project work `TASK-NNNN` with no actual task file behind it is a labeling error, not a lighter-weight convention — see the corrected entry in `projects/project-crux/charter.md`'s Stage log for a real example of the mistake and its fix.
