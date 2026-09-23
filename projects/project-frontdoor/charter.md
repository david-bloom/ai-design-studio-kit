# Project Charter — project-frontdoor

Status: **Brief complete — approved to generate.** Copied from `docs/PROJECT_CHARTER_TEMPLATE.md`. This file is the seed everything else reads. Update in place as understanding changes; log changes in the changelog rather than silently rewriting history.

*Slug note:* `project-frontdoor` = the product's public front door (home page). Kept category-neutral by convention, **not** for clean-room reasons — this project is a deliberate extension of an existing, named product's design system (see the contamination note below), so its identity is not withheld. Rename to something explicit (e.g. `cramapple-homepage`) if clarity is preferred over convention.

**A note on the contamination model — this project is the inverse of project-crux.** project-crux ran clean-room: generative agents were withheld from the source product's existing design so nothing stale was inherited. This project does the opposite. The home page must **live inside the app's locked design system**, so generative sessions are *seeded with* that system as ground truth. The contamination to guard against here is not prior art — it is **convergence onto the generic landing-page median** (hero + three feature cards + logo bar + testimonial + big CTA, and every equivalent). That median is an **anti-reference**, quarantined in two places: (1) the brief-development conversation is not fed competitor home pages "for inspiration," and (2) the generative handoff carries the kit's anti-convergence guards (SSoT seeds per `ARCHITECTURE.md` §5, plus a disqualifier self-check: *if this could be any SaaS home page, it is disqualified*). Novelty is spent on **layout, motion, and narrative** — never on re-litigating color, type, or the anchor discipline the design system already settled.

**Design-system input (landed 2026-09-23).** The locked design system is the productionized Project-Crux system that ships in the Cramapple app (internally "BlueHour Cabinet"; orange-masthead register — orange `#f54900`, blue earned / maroon lost / purple student-work, square corners, zero motion, 16px floor). Its canonical home is `david-bloom/cramapple` at `.claude/skills/cramapple-design/` (live style guide: https://preview--ap-prep-canvas.lovable.app/style-guide). A **read-only, commit-pinned mirror** of the token contract is landed here at `design-system/` (pin: `cramapple@5341d4d`) as the declared handoff input — see `design-system/SOURCE.md`. It is a snapshot, not a fork; changes happen in the canonical skill and are re-mirrored by bumping the pin.

**Related initiative & deploy target (resolved 2026-09-23).** Per `cramapple`'s `docs/product/DESIGN_SYSTEM_CUTOVER_PLAN.md` §6, David split into `app.cramapple.com` (product) and **`cramapple.com` (marketing + signup funnel)**. The marketing surface is a Lovable project, **"New Cramapple Marketing"** — all pages reachable without login (homepage, signup, payment flow). **David has already had Lovable apply the new design system to every page in that project except the homepage.** So project-frontdoor is the *design* project for the **one remaining page**, and the deploy target is that Lovable project. Two consequences: (1) the homepage must cohere not only with the app but with its **already-restyled sibling marketing pages** (signup, payment, etc.) — those siblings are the nearest consistency reference; (2) the eventual output should be deployable into the "New Cramapple Marketing" Lovable project (via the Lovable connector), not just static mocks. The `.cramapple.com`-scoped auth-cookie handoff from the cutover plan is the buy-on-phone → use-on-laptop bridge we specified independently.

## Origin brief

> David's direction as given, verbatim substance (2026-09-23).

- A **home page** for the product (an AP/high-school test-prep study app; the same product project-crux designed the app UX/brand for).
- **Primary job: convert the buyer.** For this product the **buyer is the student** (the end user is the purchaser), not a parent — this differs from a typical edtech home page aimed at parents.
- **The conversion action is to buy, entered via a 7-day trial.** The page's actual conversion event is *start the 7-day trial*; the purchase happens downstream, inside the trial.
- **Show, don't tell.** The page leans into **interactive product demonstration**, not persuasive marketing language. The product does the talking.
- **Money moments named by David:** the "Open Hand" concept; hand-drawn / photographed work upload; BYOQ (bring your own question); and copying all the hints so the student can build topic-level notes.
- **Fidelity — David leans live:** the student can change subject, open hints, enter an answer and see grading, even upload their own question.
- **Proof:** no quotes or proof points exist yet; the demo must carry the sale. Proof to be added later, once there is usage.
- **Device reality:** students *use* the product on laptops, but may *buy* on their phones.
- Must **live inside the app's locked design system** (extension, not a sibling register), and must **avoid the generic landing-page median.**

## Expanded understanding

What the brief-development conversation (David + Creative Director, 2026-09-23) resolved beyond the raw brief:

- **Real audience:** the student-as-buyer. The two cognitive profiles carried from project-crux still apply (Learner A: strong executive function, tolerates density; Learner B: mild ADHD, needs low-decision / short-attention / visible momentum). A distractible student bounces rather than reads — the home page inherits that constraint, so the first view must land the core value without copy.
- **The funnel:** land → start 7-day trial → buy. The home page's job is to get the student *into the trial*, not to argue for a purchase in prose.
- **Page spine — two beats, not a feature menu.** Four co-equal money moments would read as a menu (i.e. the median) to a low-attention student. Ranked and combined into a two-beat spine:
  1. **Hero — live Open Hand.** The signature concept, self-explanatory, the "get it in five seconds" beat. This is the first view.
  2. **The input→output loop.** BYOQ + photograph-your-handwritten-work (input) and hints → topic-level notes (output) are *one story*: **throw your real, messy work at it; get back clean study material.** This is the depth/retention beat that separates the product from a drill app — it comes after the hero has earned interest.
- **Fidelity is tiered, deliberately.** Exactly **one** fully-live sandbox — the Open Hand hero (open hints, type an answer, watch the rubric light up on a *pre-loaded* question). The input→output loop is a **scripted showcase** (a pre-baked example stepped through), not a second live engine. Two reasons this is a design decision, not a compromise: (a) build cost — one live grading engine embedded in a marketing page is ambitious, two (one handling arbitrary uploads) is a project; (b) it is forced by the trial boundary below.
- **The demo is the trial's front porch.** The live hero runs on rails (a pre-loaded question). The moment the experience turns *personal and unbounded* — upload your own question, switch to your own subjects, save your notes — is exactly where **"Start your 7-day trial"** fires. Live proves the magic; the trial unlocks it *for you*. This welds demo → trial → buy into one continuous motion instead of three separate asks, and it resolves the demo-vs-trial tension (a fully-live "bring anything" would give away the trial).
- **Two surfaces, two device realities.** The *app* is laptop-first (inherited, hard). The *home page* is a storefront that must **convert on a phone.** Consequences: the live sandbox is a laptop experience and must **not** be forced onto a phone — the device split maps onto the fidelity split (**laptop → live sandbox; phone → scripted showcase**, CTA prominent on both). And a **buy-on-phone → use-on-laptop handoff** is required: the mobile flow must bridge to the laptop (email-a-link / continue-on-desktop) so a phone purchase does not strand the student away from where the product works.
- **Proof without persuasion:** the live demo carries v1. No fake proof and no median testimonial/logo-bar section. Design a **graceful, empty-for-now slot** where real proof drops in once usage exists, so adding it later is not a redesign. Acknowledged risk: shipping a paid product with zero proof is a real conversion risk — the working demo is the accepted bet against it.
- **Reference/competitive context:** differentiate from worksheet/LMS edtech, heavy-gamification apps, and drill-heavy test prep (Kaplan/Fiveable). The generic SaaS/edtech home-page median is the primary thing to counteract.
- **Open questions (non-blocking):** final app name still deferred (project-crux); which subjects appear on the page at launch; the exact form of the scripted showcase's interactivity (step-through vs. lightly interactive).

## Active tracks

| Track | In scope? | Notes |
|---|---|---|
| Visual Design | **Yes** | The home page's visual system — strictly *within* the locked design system. Novelty is in composition/layout/motion, not palette or type. |
| Brand Identity | **No — inherit** | The brand and design system are already locked; this project consumes them, it does not re-open them. That inheritance is the point. |
| Marketing Templates | **Yes (scoped)** | This is the product's acquisition/conversion surface. Scoped to the home page itself, **not** a reusable campaign-template library or any parent-facing GTM. |
| UX | **Yes** | Core problem: the two-beat show-don't-tell spine, the live-hero/trial-gate boundary, the device-tiered fidelity, and the buy-on-phone→use-on-laptop handoff. |

## Done Decider checklist (per active track)

Drafted as a starting point — David is the Done Decider and should edit these before or during review, not treat them as fixed.

**Visual Design:**
- Reads unmistakably as the same family as the app's locked design system (tokens, type, register, anchor discipline) — a returning user would recognize it instantly.
- Survives the anti-median gut check: does **not** resolve to hero + feature-cards + logo-bar + testimonial + CTA, and would not be mistaken for a generic SaaS/edtech home page.
- Novelty is legibly in layout / motion / narrative, not in re-skinned color or type.

**Marketing Templates (conversion surface):**
- One clear conversion action — *start the 7-day trial* — reachable without persuasive copy; the demo→trial→buy motion reads as continuous, not three asks.
- Establishes enough credibility to convert **through demonstration**, not testimonials or claims; a graceful slot exists for real proof later without a redesign.
- Converts on a phone, and the buy-on-phone → use-on-laptop handoff is present and obvious.

**UX:**
- The two-beat spine is legible: a **live** Open Hand hero, then a **scripted** input→output loop (bring-your-own / photo → hints → topic notes). Exactly one live sandbox.
- The trial gate fires at the personal/unbounded moment (upload your own, your subjects, save notes) — not before (would cannibalize the trial) and not after (would fail to convert).
- A low-attention student (Learner B) gets the core value in the first view without reading, on laptop *and* phone, and can reach the trial in a short, low-decision path.
- Serves Learner A's tolerance for density without alienating Learner B — one page, both profiles, per the design system's existing dual-mode discipline.

## Constraint ledger

| Constraint | Hard (must survive) or Soft (fair game for Chaos Agent) | Source |
|---|---|---|
| Home page lives **inside** the app's locked design system (extension, not a sibling register) | Hard | David, 2026-09-23 |
| Design-system primitives — tokens, type, register, anchor discipline — are inherited, not re-opened | Hard | David, 2026-09-23 |
| Show, don't tell: interactive product demonstration carries the message, not persuasive copy | Hard | David, 2026-09-23 |
| Primary job is to convert the buyer, and the buyer is the student (end user = purchaser) | Hard | David, 2026-09-23 |
| Conversion action = **start the 7-day trial** (buy happens downstream, inside the trial) | Hard | David, 2026-09-23 |
| Page spine is **two beats**: (1) live Open Hand hero, (2) scripted input→output loop (BYOQ/photo → hints → topic notes). Not a co-equal feature menu | Hard (framing) | David, 2026-09-23 |
| Fidelity tiering: **exactly one** fully-live sandbox (Open Hand); everything else is a scripted showcase | Hard | David, 2026-09-23 |
| Demo is the trial's **front porch**: live on a pre-loaded question; personal/unbounded actions (upload your own, your subjects, save notes) are the trial gate | Hard | David, 2026-09-23 |
| No proof in v1 — the demo carries it; no fake proof, no median testimonial/logo-bar section; leave a graceful slot for real proof later | Hard | David, 2026-09-23 |
| Home page must **convert on mobile** (distinct from the app's laptop-first constraint) | Hard | David, 2026-09-23 |
| Device-tiered fidelity: laptop → live sandbox; phone → scripted showcase; CTA prominent on both | Hard | David, 2026-09-23 |
| Buy-on-phone → use-on-laptop **handoff bridge** required (email-a-link / continue-on-desktop) | Hard | David, 2026-09-23 |
| Home page must cohere with the **already-restyled sibling marketing pages** (signup, payment, etc.) in the "New Cramapple Marketing" Lovable project — those siblings are the nearest consistency reference | Hard | David, 2026-09-23 |
| Output must be **deployable into the "New Cramapple Marketing" Lovable project** (via the Lovable connector), not static mocks only | Hard | David, 2026-09-23 |
| No generic landing-page median (hero + feature cards + logo bar + testimonial + CTA and equivalents) | Hard (anti-reference) | David, 2026-09-23 |
| Novelty budget is layout / motion / narrative only | Hard (framing) | David, 2026-09-23 |
| The **app** is laptop-first (not phone-first) — applies to the product, not this storefront | Hard | Inherited, project-crux origin brief |
| No subscription/paywall-nag UI patterns | Hard | Inherited, product ground truth |
| Exact form of the scripted showcase's interactivity (step-through vs. lightly interactive) | Soft | To be set in generation |
| Which subjects are shown on the page at launch | Soft — open question | To be set in generation |

## Model assignment (snapshot at project start)

Snapshot of `config/agent-models.yaml` as of 2026-09-23. This is a snapshot, not a live reference — a later global swap does not retroactively change what this project reasoned with. **"GPT-Sol" is David's name for his Codex (OpenAI) instance.**

Project-level assignment set by David, 2026-09-23. This deviates from the global snapshot: **no Grok** — this project runs without a Critic and without a Chaos Agent.

| Role | Model | Snapshot date |
|---|---|---|
| Creative Director | claude-opus (Anthropic) | 2026-09-23 |
| Brand Strategist | N/A — brand inherited, track not active | 2026-09-23 |
| Visual Designer | Codex / GPT-Sol (OpenAI) | 2026-09-23 |
| Marketing Creative Designer | N/A — not this pass (the home page is produced by the Visual Designer, not a separate text-in-image role) | 2026-09-23 |
| Critic | **N/A — no Critic on this project** (David, 2026-09-23) | 2026-09-23 |
| Chaos Agent | **N/A — not used** (David, 2026-09-23) | 2026-09-23 |

*Consequence of no Critic (recorded, David's call):* project-crux's decorrelated Grok Critic was the outside check that caught direction convergence (handoff 015 → the 017 re-run). Without it, the only convergence guards on this project are the **SSoT anti-convergence protocol** in the generative handoff and **David's own review**. The handoff leans on SSoT accordingly; if the three directions come back too similar, the divergence-lane fallback is to re-run split across two labs (`ARCHITECTURE.md` §5), not to add a Critic.

## Stage log

> Not maintained by hand as of Policy-Version 2.0. Operational history is the generated `projects/project-frontdoor/handoff/README.md`; current state is `docs/STATE.md`. This section is a pointer only.

## Changelog

- `2026-09-23` — initial charter shell. Extension-not-sibling decision, inverted contamination model (seed with design system; quarantine the generic landing-page median), and the decided constraints recorded. Origin brief and Expanded understanding left for the Creative Director brief-development conversation to complete.
- `2026-09-23` — brief development complete (David + CD). Origin brief filled (buy via 7-day trial; four named money moments; live fidelity lean; demo carries proof; buy-on-phone/use-on-laptop). Expanded understanding resolved: two-beat page spine (live Open Hand hero + scripted input→output loop), fidelity tiering to exactly one live sandbox, demo-as-trial-front-porch gate, device-tiered fidelity with a buy-on-phone→use-on-laptop handoff, and no-proof-in-v1 with a graceful slot. Constraint ledger and Done Decider checklist updated accordingly; the app-vs-home-page device distinction made explicit. **Status → approved to generate.**
- `2026-09-23` — design-system input landed and initiative reconciled. Confirmed (David) the locked system is the orange-masthead Project-Crux system that ships in the Cramapple app ("BlueHour Cabinet" internally), canonical at `cramapple:.claude/skills/cramapple-design/`; a commit-pinned read-only mirror of the token contract landed at `design-system/` (`cramapple@5341d4d`). Deploy target resolved: the "New Cramapple Marketing" Lovable project, where every page except the homepage already carries the design system — so frontdoor designs the one remaining page, must cohere with its restyled siblings, and outputs to that Lovable project. Ledger updated with the sibling-coherence and Lovable-deploy constraints.
- `2026-09-23` — project-level role/model assignment set (David): Creative Director = Claude, Visual Designer = Sol (Codex/GPT-Sol), **no Grok — no Critic and no Chaos Agent.** Recorded the consequence (SSoT + David's review are the only convergence guards; split-across-labs is the fallback, not a Critic). Handoff 001's model-assignment section updated to match. First generative handoff (`project-frontdoor/001`, Visual Designer, 3 divergent directions) drafted and staged.
