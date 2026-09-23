# Project Charter — project-frontdoor

Status: **Shell — brief development in progress.** Copied from `docs/PROJECT_CHARTER_TEMPLATE.md`. This file is the seed everything else reads. Update in place as understanding changes; log changes in the changelog rather than silently rewriting history.

*Slug note:* `project-frontdoor` = the product's public front door (home page). Kept category-neutral by convention, **not** for clean-room reasons — this project is a deliberate extension of an existing, named product's design system (see the contamination note below), so its identity is not withheld. Rename to something explicit (e.g. `cramapple-homepage`) if clarity is preferred over convention.

**A note on the contamination model — this project is the inverse of project-crux.** project-crux ran clean-room: generative agents were withheld from the source product's existing design so nothing stale was inherited. This project does the opposite. The home page must **live inside the app's locked design system**, so generative sessions are *seeded with* that system as ground truth. The contamination to guard against here is not prior art — it is **convergence onto the generic landing-page median** (hero + three feature cards + logo bar + testimonial + big CTA, and every equivalent). That median is an **anti-reference**, quarantined in two places: (1) the brief-development conversation is not fed competitor home pages "for inspiration," and (2) the generative handoff carries the kit's anti-convergence guards (SSoT seeds per `ARCHITECTURE.md` §5, plus a disqualifier self-check: *if this could be any SaaS home page, it is disqualified*). Novelty is spent on **layout, motion, and narrative** — never on re-litigating color, type, or the anchor discipline the design system already settled.

## Origin brief

> David's direction as given, verbatim substance (2026-09-23). **In progress — to be completed by the Creative Director brief-development conversation.**

- A **home page** for the product (an AP/high-school test-prep study app; the same product project-crux designed the app UX/brand for).
- Primary job: **convert the buyer.** For this product the **buyer is the student** (the end user is the purchaser), not a parent — this differs from a typical edtech home page aimed at parents.
- **Show, don't tell.** The page leans into **interactive screenshots / live product demonstration**, not persuasive marketing language. The product does the talking.
- Must **live inside the app's locked design system** (extension, not a sibling register).
- Must **avoid the generic landing-page median.**

## Expanded understanding

*To be filled by the Creative Director brief-development conversation. The open questions below are the ones flagged as brief-completing; close them before generation.*

- **Real audience:** the student-as-buyer. Note the two cognitive profiles carried from project-crux (Learner A: strong executive function, tolerates density; Learner B: mild ADHD, needs low-decision / short-attention / visible momentum). A distractible student will bounce, not read — the home page inherits that constraint. *What is the visitor's entry context — cold (search/ad), referral (friend/teacher), or returning?*
- **The conversion action:** *What exactly does the buyer do?* Access model carried from project-crux: one-time purchase, tiers by subjects unlocked, no subscription/paywall-nag. *Does the page drive to a direct purchase, a free sample, or the "Open Hand" demo — and what is free vs. paid?*
- **The money moment(s) to demonstrate:** show-don't-tell needs a subject. Candidate signatures from the product: the **"Open Hand"** concept (scoring mechanics shown face-up), rubric-lit grading of written/photographed answers, the overview↔working modes. *Which 1–3 moments, shown interactively, make a student "get it" in seconds?*
- **Fidelity of the "interactive screenshots":** *live, attemptable product embedded in the page (e.g. actually try an Open Hand question), or high-fidelity annotated mocks?* This is a real fork — it changes build complexity, novelty ceiling, and how convincing "show don't tell" can be.
- **Proof without persuasion:** conversion usually leans on proof, but persuasive copy is out **and** testimonials/logo bars are the median. *How is credibility established — is the live demo itself the proof, or is any evidence (score outcomes, "augments your teacher, doesn't replace them") needed?*
- **First-view job:** laptop-first (inherited). *What must land in the first ~5 seconds for Learner B before a scroll?*
- **Reference/competitive context:** differentiate from worksheet/LMS edtech, heavy-gamification apps, and drill-heavy test prep (Kaplan/Fiveable) — the anti-references. The generic SaaS/edtech home-page median is the primary thing to counteract.
- **Open questions:** final app name still deferred (project-crux); which subjects are shown on the page at launch.

## Active tracks

| Track | In scope? | Notes |
|---|---|---|
| Visual Design | **Yes** | The home page's visual system — but strictly *within* the locked design system. Novelty is in composition/layout, not palette or type. |
| Brand Identity | **No — inherit** | The brand and design system are already locked; this project consumes them, it does not re-open them. That inheritance is the point. |
| Marketing Templates | **Yes (scoped)** | This is the product's acquisition/conversion surface. Scoped to the home page itself, **not** a reusable campaign-template library or any parent-facing GTM. |
| UX | **Yes** | Core problem: the "show don't tell" interactive-demonstration mechanic, and a first-view that converts a low-attention student without persuasive copy. |

## Done Decider checklist (per active track)

Drafted as a starting point — David is the Done Decider and should edit these before or during review, not treat them as fixed.

**Visual Design:**
- Reads unmistakably as the same family as the app's locked design system (tokens, type, register, anchor discipline) — a returning user would recognize it instantly.
- Survives the anti-median gut check: does **not** resolve to hero + feature-cards + logo-bar + testimonial + CTA, and would not be mistaken for a generic SaaS/edtech home page.
- Novelty is legibly in layout / motion / narrative, not in re-skinned color or type.

**Marketing Templates (conversion surface):**
- Has one clear, defined conversion action for the student-buyer; the path to it is obvious without persuasive copy.
- Establishes enough credibility to convert **through demonstration**, not testimonials or claims.

**UX:**
- "Show don't tell" is real: the page demonstrates the product interactively rather than describing it.
- A low-attention student (Learner B) gets the core value in the first view without reading, and can reach the conversion action in a short, low-decision path.
- Serves Learner A's tolerance for density without alienating Learner B — one page, both profiles, per the design system's existing dual-mode discipline.

## Constraint ledger

| Constraint | Hard (must survive) or Soft (fair game for Chaos Agent) | Source |
|---|---|---|
| Home page lives **inside** the app's locked design system (extension, not a sibling register) | Hard | David, 2026-09-23 |
| Design-system primitives — tokens, type, register, anchor discipline — are inherited, not re-opened | Hard | David, 2026-09-23 |
| Show, don't tell: interactive product demonstration carries the message, not persuasive copy | Hard | David, 2026-09-23 |
| Primary job is to convert the buyer, and the buyer is the student (end user = purchaser) | Hard | David, 2026-09-23 |
| No generic landing-page median (hero + feature cards + logo bar + testimonial + CTA and equivalents) | Hard (anti-reference) | David, 2026-09-23 |
| Novelty budget is layout / motion / narrative only | Hard (framing) | David, 2026-09-23 |
| Laptop-first (not phone-first) | Hard | Inherited, project-crux origin brief |
| No subscription/paywall-nag UI patterns | Hard | Inherited, product ground truth |
| Exact interactive-screenshot / demo mechanic | Soft | To be set in brief dev |
| Live-attemptable demo vs. annotated high-fidelity mocks | Soft — open fork | To be decided in brief dev |
| Amount and placement of any supporting copy | Soft | To be set in brief dev |
| Which subjects are shown on the page at launch | Soft — open question | To be set in brief dev |

## Model assignment (snapshot at project start)

Snapshot of `config/agent-models.yaml` as of 2026-09-23. This is a snapshot, not a live reference — a later global swap does not retroactively change what this project reasoned with. **"GPT-Sol" is David's name for his Codex (OpenAI) instance.**

| Role | Model | Snapshot date |
|---|---|---|
| Creative Director | claude-opus (Anthropic) | 2026-09-23 |
| Brand Strategist | N/A — brand inherited, track not active | 2026-09-23 |
| Visual Designer | Codex / GPT-Sol (OpenAI) — global default | 2026-09-23 |
| Marketing Creative Designer | gpt-image (OpenAI) — global default (text-in-image fidelity) | 2026-09-23 |
| Critic | grok (xAI) — global default, decorrelated from the generative labs | 2026-09-23 |
| Chaos Agent | grok (xAI) | 2026-09-23 |

*Decorrelation note:* if a direction leans hard on both Visual Designer and Marketing Creative Designer, consider a project-level override to keep them from sharing blind spots — see `config/agent-models.yaml` brand_strategist rationale for the pattern.

## Stage log

> Not maintained by hand as of Policy-Version 2.0. Operational history is the generated `projects/project-frontdoor/handoff/README.md`; current state is `docs/STATE.md`. This section is a pointer only.

## Changelog

- `2026-09-23` — initial charter shell. Extension-not-sibling decision, inverted contamination model (seed with design system; quarantine the generic landing-page median), and the decided constraints recorded. Origin brief and Expanded understanding left for the Creative Director brief-development conversation to complete.
