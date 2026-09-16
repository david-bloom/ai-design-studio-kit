# Project Charter — project-crux

Status: **Brief development complete. Charter complete — approved to generate.** Filled per `docs/ARCHITECTURE.md` §2 and `docs/PROJECT_CHARTER_TEMPLATE.md`. Living document — update in place; history in the changelog.

**A note on what this file deliberately does not say.** This project runs as a clean-room, blind-start exercise (see constraints). Generative agents (Brand Strategist, Visual Designer, Marketing Creative Designer, Critic, and anyone else pointed at this repo) are expected to read this charter in full. **Category-level information is included below deliberately** (David's call, 2026-09-15 — see "Why this project exists" for the resolved open question). What remains withheld from this repo entirely, known only to David and the originating Creative Director session: the product's **real name/brand identity**, the identity and content of any **existing design work already produced for it** (this project's own or the source product's), and **any prior visual/UX design exploration already produced for this brief in another session**. Do not add any of that to this file, `README.md`, the logs, or any handoff packet. If you are a generative agent reading this and were not shown that material, that is intentional — do not infer, guess, or reconstruct it.

## Why this project exists (process note, not part of the eventual product brief)

Deliberately unnamed after any existing product — the slug and every file here are category-neutral on purpose. Created to run a from-scratch visual/UX/brand exploration for a real, existing product without inheriting that product's existing design decisions, and to be reusable later without implying which product it maps to.

Process constraints, agreed before any brief was written:

1. **Clean-room from the source product's existing design artifacts.** Any existing visual identity brief, UI prototypes, or color/type/layout decisions already made for the real product — **and any prior design exploration produced for this brief in another session** — are **excluded prior art**, not seed material. They exist only for later comparison/audit, outside this repo. The source product's underlying *product/business* facts (what it does, who it's for, the business model) are separately in-scope as ground truth — this exclusion is about design decisions only.
2. **Session isolation.** The originating Creative Director session had already seen excluded design artifacts. Generative stages (Brand Strategist, Visual Designer) must run in a **fresh session** whose only input is this charter — never a continuation of a session that has seen the source product's existing visual brief, prototypes, or the prior exploration.

**Resolved:** whether to anonymize the product category shown to generative agents. David decided **no** — the Origin brief below states the real category (AP Statistics/Biology test-prep, score optimization) because there was no way to develop a workable brief without it. What stays anonymized is the product's actual name/brand and any existing design work — category-level exposure was the smaller, accepted tradeoff, not an oversight.

## Origin brief

> The brief as developed with David (product/business ground truth; verbatim substance).

- **The ask:** two ambitious high-school students, aggressive course loads. A laptop-first web app to make study time maximally efficient and focus on the information that yields maximum scores. One learner (senior) has strong executive function; the other (sophomore) is mildly ADHD. Needs a UX, brand, and visual identity that lets them parse information quickly and get exactly what they need from short study sessions — about **focus, retention, and recall** that deliver the test scores they want. They have good teachers; this augments, not replaces, instruction.
- **Kickoff subjects:** Statistics and Biology (both AP; the app is **not** AP-only and extends to more subjects).
- **Engine / feature ground truth (already built — design presents it, never alters it):** curriculum maps, unit/topic descriptions, required skills, validated practice-question libraries, and "how points are earned / where they're commonly lost" content load from a database. A subject-aware grading/feedback engine applies rubrics with confidence to **written/open-ended** answers (not just MCQ), returning specific, minimal, actionable next-improvement feedback. Students upload their own questions (typed or photographed). Formats: MCQ, quantitative/numeric-entry, data/graph interpretation, extended written response, and captured hand-drawn/photographed work. Assistance modes per question: full walkthrough / a single hint / check-my-work / worked solution. Principle: **help them learn efficiently; do not do the work for them.**
- **Signature product concept — "Open Hand":** a sample question laid **face-up** with its scoring mechanics visible (what earns points, where they're commonly lost), after which the student attacks provided or self-uploaded questions.
- **Feel:** an app a student *wants* to use — empowering, optimistic, helpful, a calm safe-haven with gentle accountability. **Not** pandering, **not** heavily gamified, **not** worksheet-like.
- **Inspiration set (David's, as brief input — not design decisions):** children's books that made them love reading pre-phones (Harold and the Purple Crayon, Where the Wild Things Are, Raina Telgemeier, Madeleine L'Engle); crisp tactile minimalism (Brilliant.org, distill.pub, Readwise); rich interactivity (Explorabl.es, CellWalk, Photomath); wellness/safe-haven apps (Headspace, Gentler Streak, Fabulous, Balance); gentle accountability (habithuddle.com).
- **Access model:** multiple subjects at launch, extensible; one-time purchase (not subscription), tiers by subjects unlocked, under consideration — no paywall/subscription-nag patterns in the UI.
- **v1 exclusions:** no parent-facing UI; app name deferred (project name only).

## Expanded understanding

- **Real audience:** two specific, named end users, not a segment. Learner A (senior, strong executive function) — benefits from density and control. Learner B (sophomore, mild ADHD) — needs single-focus, low-decision surfaces, short sessions, visible momentum, minimal text. The parent is the builder, not a daily user; no parent UI in v1.
- **Real vs. assumed constraints:** *Real/fixed* — existing engine (rubric grading, written + photo-uploaded questions), laptop-first, two cognitive profiles, score-raising via focus/retention/recall in short sessions, "help not do," not-AP-only, no paywall/parent UI, clean-room from excluded design. *Assumed-then-retired in brief dev* — phone-first (→ laptop), a parent accountability presence (→ cut for v1), a locked app name (→ deferred).
- **Unstated goals:** sustained *voluntary* use across a semester; real progress from 10–20 min sessions; accountability without nagging or guilt; two genuinely different-feeling experiences from one coherent brand.
- **Reference/competitive context:** differentiate from worksheet/LMS edtech, heavy-gamification apps (points/streak coercion), and drill-heavy test prep (Kaplan/Fiveable-style). These are the "generic median" the kit exists to counteract; the inspiration set above is the intended counterweight.
- **Retention/UX principles (David's research — requirements, not design solutions):** (1) spatial memory — curriculum navigable as a place, mastery legible as terrain, recommendation as destination (navigation only, never inside a session); (2) progressive disclosure/chunking — minimal defaults, pull complexity; (3) contextual pop-overs / persistent glossary — in-place term definitions with tiny visuals; (4) interactive simulation / kinetic feedback — per-topic simulation *slots* plus rubric-lit grading as the primary kinetic payoff; (5) visual anchors / high-contrast typography (Von Restorff) — one consistent meaning per anchor (points won vs. lost). Implied architecture: an overview/navigation mode and a focused single-topic working mode. *(How these are visually expressed is for the Visual Designer to originate — no prior solution is carried into this repo.)*
- **Open questions (non-blocking):** exact app name and final brand; which additional subjects at launch; whether the two cognitive profiles become explicit modes or one adaptive interface.

## Active tracks

| Track | In scope? | Notes |
|---|---|---|
| Visual Design | **Yes** | Core of the ask — color, type, layout system, visual anchor system, component look-and-feel serving both cognitive profiles. |
| Brand Identity | **Yes** | The ask explicitly names "brand" alongside UX and visual identity. Runs without a locked app name — produce a brand system that will carry a name once one exists, not one that depends on it. |
| Marketing Templates | **No — not this pass** | Nothing in the brief addresses go-to-market, campaigns, or channels; v1 explicitly excludes any parent-facing surface. Revisit as a separate charter update if/when marketing work is actually needed. |
| UX | **Yes** | Core of the ask. Primary UX problem: express the overview/navigation "place" mode vs. focused single-topic "working" mode, and the "Open Hand" concept, in a way that serves Learner A's density needs and Learner B's low-decision, short-session needs from one coherent system. |

## Done Decider checklist (per active track)

Drafted here as a starting point — David is the Done Decider and should edit these before or during review, not treat them as fixed.

**Visual Design:**
- A distinct visual language (color, type, iconography) exists that reads as calm/optimistic/empowering — not gamified, not pandering, not worksheet-like — and is legibly *not* a re-skin of the inspiration references.
- A single, consistent visual anchor system exists for "points earned" vs. "points commonly lost" (Von Restorff-style — one meaning per anchor, used nowhere else).
- The same visual system visibly supports both a dense/high-control mode and a low-decision/single-focus mode without looking like two different products.
- Survives a side-by-side gut check against the anti-references (Kaplan/Fiveable/heavy-gamification institutional or cutesy edtech).

**Brand Identity:**
- A brand personality/voice is articulated that matches "empowering, optimistic, helpful, calm safe-haven, gentle accountability" and is specific enough to reject work that doesn't match it — not just adjectives.
- The system works convincingly without a finalized app name (placeholder-name-ready).
- Passes the same anti-reference gut check as Visual Design.

**UX:**
- The overview/navigation ("place") mode and the focused single-topic ("working") mode are each concretely expressed, not just named.
- The "Open Hand" concept (scoring mechanics shown face-up before the student attacks the question) has a specific, usable UX expression.
- A 10–20 minute session is completable by Learner B (low text, low decisions, visible momentum) without feeling stripped-down or patronizing to Learner A.
- Progressive disclosure is evident: minimal defaults, complexity pulled rather than pushed.
- The contextual pop-over / persistent glossary pattern and the kinetic-feedback-tied-to-rubric-grading loop are both present and legible.

## Constraint ledger

| Constraint | Hard (must survive) or Soft (fair game for Chaos Agent) | Source |
|---|---|---|
| No exposure of generative agents to the source product's existing visual identity brief, prototype files, or the source product's real name/identity | Hard (process constraint) | David, 2026-09-15 |
| No exposure of generative agents to any prior visual/UX design exploration already produced for this brief in another session | Hard (process constraint) | David, 2026-09-15 |
| Laptop-first web app (not phone-first, not native mobile) | Hard | Origin brief, 2026-09-15 |
| Design presents the existing engine/content (curriculum, grading, question formats); does not alter what it does | Hard | Origin brief, 2026-09-15 |
| No parent-facing UI in v1 | Hard | Origin brief, 2026-09-15 |
| No subscription/paywall-nag UI patterns | Hard | Origin brief, 2026-09-15 |
| "Help them learn efficiently; do not do the work for them" — no answer-vending shortcut UX | Hard | Origin brief, 2026-09-15 |
| Exact visual expression of the spatial-memory/navigation metaphor | Soft | Expanded understanding, 2026-09-15 |
| Exact visual anchor system design (only the *principle* — one meaning per anchor — is hard) | Soft | Expanded understanding, 2026-09-15 |
| Whether the two cognitive profiles are explicit modes vs. one adaptive interface | Soft — open question | Origin brief, 2026-09-15 |
| App name / final brand identity | Soft — deferred | Origin brief, 2026-09-15 |
| Which additional subjects beyond AP Statistics/Biology at launch | Soft — open question | Origin brief, 2026-09-15 |

## Model assignment (snapshot at project start)

Snapshot of `config/agent-models.yaml` as of 2026-09-16 — see that file for current global rationale. **"GPT-Sol" is David's name for his Codex (OpenAI) instance.**

| Role | Model | Snapshot date |
|---|---|---|
| Creative Director | claude-opus (Anthropic) | 2026-09-15 |
| Brand Strategist | Codex / GPT-Sol (OpenAI) — global default as of 2026-09-16 (originated as a project-crux-level override, then promoted). | 2026-09-16 |
| Visual Designer | Codex / GPT-Sol (OpenAI) — global default as of 2026-09-16 (originated as a project-crux-level override, then promoted). | 2026-09-16 |
| Marketing Creative Designer | N/A — track not active this pass | 2026-09-15 |
| Critic | grok (xAI) — global default, not overridden. Rationale: reviewing GPT-Sol's Visual Design and Brand Identity output from a different lab preserves the decorrelation `ARCHITECTURE.md` §4 calls for, and matches David's stated intent for Critic as an "outside QA" on design decisions. | 2026-09-15 |
| Chaos Agent | grok (xAI) | 2026-09-15 |

## Stage log

- `2026-09-15` — Charter shell created. Process constraints (clean-room, session isolation) recorded ahead of brief. Awaiting pedagogy/features brief from David.
- `2026-09-15` — Project renamed `design-agency` → `project-crux`; charter reworded to remove the source product's name from repo content entirely.
- `2026-09-15` — David worked with a Claude Design session in the Creative Director role to draft the brief.
- `2026-09-15` — Global role consolidation (DECISION-0001 / APPROVAL-0001): UX Critic and Usability Tester merged into a single Critic role, assigned Grok.
- `2026-09-15` — David decided to expose category-level information (AP Statistics/Biology, test-prep) to the brief-development process — the product's real name and existing design work remain withheld. Resolves the "anonymize category" open question from the charter shell.
- `2026-09-15` — Claude Design session returned a completed Origin brief and Expanded understanding. Charter completed with Active tracks, Done Decider checklist, Constraint ledger, and Model assignment (Visual Designer → GPT-Sol project-level override) drafted and committed. **Status moved to approved to generate.** Next stage: Visual Design and Brand Identity generation, handed off via `projects/project-crux/handoff/` per `docs/ARCHITECTURE.md` §7.
- `2026-09-15` — Contamination check on the `/design` (Claude Design) brief-development session: David reviewed the full transcript and found no reference to Cramapple anywhere in it, consistent with the session-isolation constraint holding in practice. Not a formal guarantee that the session's GitHub connector, if any, was pointed away from the Cramapple repo — but no evidence the excluded prior art was used. Treated as resolved; not re-flagged.
- `2026-09-15` — Handoff packet 001 (Visual Design track) committed to `projects/project-crux/handoff/001-visual-designer.md`. Assigns GPT-Sol (per Model assignment) to produce ≥3 genuinely distinct visual/UI directions for the "Open Hand" concept, using String Seed of Thought (§5c) to counter convergence. Output destination: `projects/project-crux/visual/001-directions.md`. Awaiting GPT-Sol's output.
- `2026-09-16` — Corrected a labeling error: the handoff packet had borrowed the kit-level `TASK-NNNN` numbering (as "TASK-0002") from `docs/tasks/TASK_TEMPLATE.md`, which has no corresponding task file anywhere. Project-level generative work is tracked via this Stage log and the handoff packet's own numbering (`NNN-role.md`), not the kit's engineering-task apparatus — see `docs/ARCHITECTURE.md` §2 (new "Project folder contents" note) for the documented convention.
- `2026-09-16` — Corrected the Model assignment table: Brand Strategist was still showing the global default (gpt-5.1) when it should be a project-level override to Codex/GPT-Sol, same tool as the Visual Designer override. Clarified that "GPT-Sol" is David's name for his Codex instance, not a separate model.
- `2026-09-16` — David promoted Codex/GPT-Sol from a project-crux-level override to the **global default** for Brand Strategist and Visual Designer in `config/agent-models.yaml` (DECISION-0005/APPROVAL-0005). This charter's Model assignment table updated accordingly — these rows are no longer overrides, just this project inheriting the (now-current) default.
- `2026-09-16` — Handoff Packet 001's output (`projects/project-crux/visual/001-directions.md`) reviewed and **rejected** by David: four directions converged on the same emotional register (quiet/desaturated) and layout structure (2-column), and none engaged the charter's inspiration set. Handoff Packet 002 committed to `projects/project-crux/handoff/002-visual-designer.md` — a corrective re-brief, not a polish pass, mandating divergence across emotional temperature, palette, layout structure, and interactivity, and making the inspiration clusters a hard per-direction requirement. **Open decision, flagged in the packet itself:** which model runs 002 — the packet as drafted recommended switching to "the global-default Gemini" to decorrelate from Sol, but that recommendation predates DECISION-0005 (Sol is now the default). David to confirm before dispatch: Gemini (now an override), both Gemini and Sol in parallel, or otherwise.
- `2026-09-16` — **Resolved: David chose to run 002 on Sol**, not following the Creative Director's decorrelation recommendation. Deliberate Owner call, not an oversight — flagged in the handoff packet as a real consequence: no model switch is helping Sol diverge from 001's convergence this time, so the packet's divergence mandate and anti-convergence guard are the only thing enforcing it.
- `2026-09-16` — Handoff 002's output (`projects/project-crux/visual/002-directions.md`, 5 directions, SSoT seeds at register level per the packet's requirement) committed **directly by David** outside this Claude Code session (commits `0a4c312`, `55de244`) — not authored or reviewed by this session. Not yet reviewed against the divergence mandate or by the Critic. **Next required action:** review 002 against Handoff 002's divergence axes (emotional temperature, palette, structure, interactivity) and the inspiration-cluster requirement; if it holds up, route to the Critic (Grok) for independent review before any Done consideration.

- `2026-09-16` — Handoff Packet 003 (`projects/project-crux/handoff/003-visual-designer.md`) committed. A focused probe, not a re-generation: narrows 002's five directions to two and pushes each in a deliberately contrasting way. **The charter's no-character/no-mascot constraint is suspended for this probe only** (David's explicit instruction, 2026-09-16) — not a permanent charter change. **Motivation:** real student reaction to the current live product's design/UX has been decidedly lukewarm ("bleh" — David's word), so this probe is a deliberate deep rethink in response to actual user signal, not a taste refresh. Output destination: `projects/project-crux/visual/003-directions.md`. Awaiting GPT-Sol's output.
- `2026-09-16` — **Flagging a repo inconsistency, not yet resolved:** `projects/project-crux/visual/001-directions.md` does not exist in the repo (404) even though this Stage log's 2026-09-15 entry and Handoff Packet 002's recommended prompt both reference it as readable prior-art ("as an example of the convergence you must NOT repeat"). Either the file was described here but never actually committed, or it was deleted afterward — unclear which. Consequence: any agent following Handoff 002's or 003's recommended prompt to read `001-directions.md` will fail to find it. **David to decide:** reconstruct the file (if the original 001 output survives elsewhere) or drop/edit the reference in the outstanding handoff packets so agents aren't sent looking for a file that isn't there.

- `2026-09-16` — Adopted `prompts/UNIVERSAL_SESSION_PROMPT.md` as the single session-start prompt for every tool on this project (Claude/`/design`, GPT-Sol, Grok — all now have write access, confirmed by David). Each session determines its own role by reading `config/agent-models.yaml` and this charter's Model assignment table rather than being told its role in advance, so the same text is correct for all three. Superseded `prompts/CROSS_LAB_SPECIALIST_PROMPT.md` (marked Superseded, kept for history — it hardcoded "specialist, not conductor," which doesn't fit a tool playing Creative Director) and updated handoffs 001/002 (historical note added, bespoke Recommended Prompt blocks preserved as records of what actually ran) and 003 (not yet executed — its Recommended Prompt block replaced outright with instructions to use the universal prompt + `SESSION START: project-crux` instead). `docs/prompts/CLAUDE_NEW_SESSION_PROMPT.md` and `CODEX_NEW_SESSION_PROMPT.md` are unaffected — they govern kit-level `TASK-NNNN` engineering work, a separate track. **Note:** Claude Code (this session) is not assigned any role in `config/agent-models.yaml` and does not use the universal prompt — its function on this project has been mechanical (committing on behalf of tools without write access, auditing, keeping this Stage log current), not one of the five defined generative/critique roles.

## Changelog

- `2026-09-15` — initial charter shell, no origin brief yet.
- `2026-09-15` — renamed to `project-crux`; scrubbed source-product identity from file content.
- `2026-09-15` — Model assignment table updated for the UX Critic/Usability Tester → Critic consolidation (DECISION-0001).
- `2026-09-15` — Charter completed: Origin brief, Expanded understanding, Active tracks, Done Decider checklist, Constraint ledger, and Model assignment (with GPT-Sol/Grok overrides) filled in. Top-of-file note updated to reflect the resolved category-anonymization decision.
