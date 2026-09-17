# Project Charter — cramapple-seo

Status: **Charter shell. Brief development not started — awaiting David's brief.** Filled per `docs/ARCHITECTURE.md` §2 and `docs/PROJECT_CHARTER_TEMPLATE.md`. Living document — update in place; history in the changelog.

## Why this project exists (process note)

Opened 2026-09-17 on David's instruction: "Start a new cramapple session focused on SEO and AO marketing." This is a go-to-market project for the live Cramapple product (AP exam study aid), not a design exploration. It is deliberately **not** a track inside `project-crux`: that charter lists Marketing Templates as out of scope, and its clean-room constraints would make SEO work impossible there, because search and answer-engine optimization cannot be done without the real product name, domain, and existing site content.

**Placement concern, recorded for David's decision (policy §10 hard gate — revealing a blind project's withheld identity):** `project-crux` withholds the product's real name from generative agents. This charter names the product. Every session in this repo reads `docs/STATE.md`, which will list this project, so any future crux specialist will see the name. The name already appears once in the crux Stage log (the 2026-09-15 contamination-check entry), so the practical exposure is small, but the constraint ledger there calls it Hard. Options: (a) accept the name-level exposure and keep this project here, relying on policy §9 (sessions read only STATE, their charter, and their packet) to keep crux specialists out of this folder; (b) move this project to the Cramapple product repository and keep only a pointer here; (c) rename the slug to something category-neutral and keep the name inside the charter body only. Recommendation: (a). The design content that actually matters to the clean-room stays out of this project; SEO copy is not visual design.

**Terminology assumption:** "AO" is read as **AEO — Answer Engine Optimization**, i.e. getting Cramapple cited and recommended by AI answer surfaces (Google AI Overviews, ChatGPT, Perplexity, Claude) alongside classic search ranking. If David meant something else, correct this line before the brief is written.

## Origin brief

> Awaiting David's brief. Paste it verbatim here.

Questions the brief needs to answer before generation starts:

1. **Target surfaces.** Which matter most right now: Google organic, AI answer engines, app-store search, or all three? Is there a live marketing site, and on what platform (the HubSpot connector available to this session exposes AEO metrics and blog/landing-page tools, which would make HubSpot the natural read input if that is where the site lives)?
2. **Buyer vs. user.** Who searches: the student, or the parent who pays? Search intent differs sharply ("AP Bio FRQ practice" vs. "best AP study app for my kid"). Crux's v1 excludes a parent-facing UI, but marketing may not.
3. **Scope of subjects.** AP Statistics and AP Biology only, or the broader AP catalog? This sets the keyword universe.
4. **Existing baseline.** Current domain authority, indexed pages, any Search Console or analytics access, any content already published. Without a baseline the first packet should be an audit, not a plan.
5. **Timing.** AP exams are in May. Search volume for AP prep peaks January through April. Is the goal the 2027 cycle?
6. **What "done" looks like.** A ranked keyword map and content calendar? Drafted pages? Structured-data and AEO-readiness changes to the site? Rankings themselves are not a deliverable the kit can promise.
7. **Voice constraints.** Does the crux Brand Identity track (in progress) own voice, or does this project define marketing voice independently until crux lands?

## Expanded understanding

To be written after brief development.

- **Real audience:** —
- **Real constraints vs. assumed ones:** —
- **Unstated goals:** —
- **Reference/competitive context (seed, unverified):** Fiveable, Khan Academy AP, Albert.io, Kaplan, College Board's own AP Classroom, Quizlet, r/APStudents. To be confirmed in the audit packet.
- **Open questions:** see the seven above.

## Active tracks

Proposed; David confirms.

| Track | In scope? | Notes |
|---|---|---|
| Visual Design | **No** | Owned by `project-crux`. |
| Brand Identity | **Partial** | Messaging pillars and positioning for search and answer-engine contexts only. Does not restate or pre-empt crux's brand system. |
| Marketing Templates | **Yes** | Landing pages, blog/answer-page templates, structured-data patterns, meta and snippet patterns. |
| UX | **No** | |

**Role gap, flagged:** `docs/ARCHITECTURE.md` §3 has no SEO/content-strategy role. Nearest fits are Brand Strategist (positioning, messaging) and Marketing Creative Designer (channel templates). Either the packets brief those roles with an explicit SEO/AEO scope, or a new role is added, which is an `ARCHITECTURE.md` change and therefore a human-review PR (policy §6). Recommendation: brief the existing roles; add a role only if two packets in a row strain the fit.

## Done Decider checklist (per active track)

Drafts. David edits before generation.

**Brand Identity (partial):**
- A one-page positioning statement and three to five messaging pillars exist, each tied to a search or answer-engine intent, not just to adjectives.
- The messaging is consistent with the crux Origin brief's product truths (help, do not do the work; not AP-only; no subscription-nag) and does not contradict crux's brand work once it lands.

**Marketing Templates:**
- A keyword and question map exists, grouped by intent and by subject, with the AEO question set (the literal questions students and parents ask AI assistants) called out separately from classic keywords.
- At least one landing-page template and one answer-page template exist, each with the structured-data and on-page pattern needed for AI answer surfaces to cite it.
- An audit of the current site against those patterns exists, with a prioritized fix list.
- Every recommendation names the surface it serves (Google organic, AI Overviews, LLM chat, app store) so David can trade them off.

## Constraint ledger

Seed entries; David confirms.

| Constraint | Hard (must survive) or Soft (fair game for Chaos Agent) | Source |
|---|---|---|
| No copy that promises score outcomes or exam-day results | Hard | David's product principle: help, do not do the work (crux Origin brief) |
| No content that does the student's work (answer keys, essay mills, FRQ answer dumps) | Hard | Same |
| Marketing voice must not contradict the crux Brand Identity track once landed | Hard | This charter, 2026-09-17 |
| No dark-pattern acquisition mechanics (fake urgency, subscription nags) | Hard | Crux Origin brief access model |
| Which surfaces to prioritize (organic vs. AEO vs. app store) | Soft, open | Brief question 1 |
| Student-first vs. parent-first messaging | Soft, open | Brief question 2 |
| Subject scope of the keyword universe | Soft, open | Brief question 3 |

## Model assignment (snapshot at project start)

Snapshot of `config/agent-models.yaml` as of 2026-09-17. No project-level overrides proposed yet.

| Role | Model | Snapshot date |
|---|---|---|
| Creative Director / Orchestrator | claude-opus (Anthropic) | 2026-09-17 |
| Brand Strategist | Codex / GPT-Sol (OpenAI) | 2026-09-17 |
| Marketing Creative Designer | gpt-image (OpenAI) for rendered creative; text templates and audits to be briefed to Codex / GPT-Sol, to be confirmed | 2026-09-17 |
| Critic | grok (xAI) | 2026-09-17 |
| Chaos Agent | grok (xAI) | 2026-09-17 |

## Stage log

Not maintained (Policy-Version 2.0). Operational history is the generated `projects/cramapple-seo/handoff/README.md` once the first packet exists; current state is `docs/STATE.md`.

## Changelog

- `2026-09-17` — charter shell created on branch `claude/seo-ao-marketing-alziaw` by the Orchestrator session; not yet available on `main`. Placement concern, AEO terminology assumption, brief questions, proposed tracks, seed Done Decider items, and seed constraints recorded. Awaiting David's brief and placement decision.
