# Phase-1 Surface Map + Data Contract

Status: **DRAFT for David's review** (Orchestrator, 2026-09-19; revised after ground-truth extraction). Not landed. Companion to `CHARTER_UPDATE_2026-09-19.md`.

**Clean-room maintained.** Generic engine field names are in-scope product ground truth (the schema), not withheld identity or existing visual design. No product name, personal names, domains, or existing UI look-and-feel appears here.

**Data source of truth:** the **production `app.*` schema** (read-only), reconciled with the content/spec repo. Two cautions the extraction surfaced:
- The flat `public.*` tables (`questions`, `sessions`, `student_attempts`, `student_lock_queue`) are a **superseded prototype** — do **not** build on them.
- **Production, not Development**, is the truth: Dev is a stripped sandbox missing ~46 prod objects (Stripe, publish-gate, practice selectors).
- Inside `app.*`, some tables are labelled "deprecated compatibility projections" (`content_items`, `content_item_versions`, `mcq_choices`, `frq_criteria`) — still the practical read path for content, but the authoritative lifecycle is the governance tables (`artifact_versions`, `artifact_state_events`). Designers read the projections; they don't need the governance layer.

---

## 1. Phase-1 scope (build order)

| # | Surface | Kind | Build order |
|---|---|---|---|
| 0 | **Open Hand provocation** — the *only* net-new design; confirms the pattern the rest inherit | Design (signature moment) | now (3 provocations, settling ~2026-09-20) |
| 1 | **Student home + progress (combined)** | Design (adaptive launch + mastery surface) | after pattern confirmed |
| 2 | **Working/Study template** (parametric) — inherits the confirmed pattern | Template / build | after pattern confirmed |
| — | Shared components (scoring anchors, **reference rail**, collapsed-assist panel, glossary popover) | Component library | with the provocation |

**Scope correction (David):** the only genuinely new *design* is the **Open Hand provocation**. Once its pattern is confirmed, the other surfaces are pattern-application/build, not fresh design. Home + progress **combine** into one mastery-aware surface.

**Deferred to Phase 2b:** curriculum "place"/overview mode · signup + payments (self/parent, parent-pay is net-new) · marketing home · blog (reskin) · account/subject-unlock · diagnostic flow · hand-drawn/photo BYOQ capture.

**Prerequisites (not surfaces):** (a) a **locked visual direction** (Done decision, David); until then templates are direction-agnostic. (b) a **design system + token layer**. (c) the **component library** above.

---

## 2. The parametric Working/Study template

One template. Three switches, four states. Do **not** build four templates.

- **type:** `FRQ` (short/long) | `MCQ`
- **source:** product-directed practice (from the cell mastery queue) | **BYOQ** (the student's real homework) — *BYOQ is the intended default year-round entry, not a secondary path*
- **states:** Open Hand → Attempt → Collapsed Assist → Graded Feedback

**The differentiator (design must protect it):** the loop **teaches first, doesn't solve.** Skill explainer → one question worked "open hand" (solution shown) → the student's own **cold** attempt. For **BYOQ**, it teaches on a vetted **parallel** problem and hands the student's *real* question back **unsolved**. "Help, don't do it for them" is the product, not a guardrail bolted on.

| State | What it does | Primary data (app.*) |
|---|---|---|
| **Open Hand** | Skill explainer + a worked example with scoring shown face-up (what earns points, where they're commonly lost). | READ `topic_explainers` (explainer), `topic_point_briefs` (the "Topic Point Brief": whatItIs · whyItMatters · howPointsAreEarned · answerMove · commonPointLoss · learnMorePath · exam/class importance), `frq_criteria` (rubric, FRQ), `mcq_choices` (+ distractor rationale, MCQ) |
| **Attempt** | Student answers: MCQ select, typed/numeric FRQ, (photo/drawn = later). Cold vs. coached matters. | WRITE `attempts`, `attempt_responses`, `response_versions`; `assistance_level` = cold\|coached\|exam (**coached zeroes mastery evidence** — a real UX consequence to signal) |
| **Collapsed Assist** | The single consolidated help surface ("Learn") — escalating help that never vends the answer. | Content from `topic_explainers`/`topic_point_briefs`; governed by `assistance_level` |
| **Graded Feedback** | Rubric-lit result: per-criterion earned/not-earned + minimal next-improvement. The primary kinetic payoff. | READ `grading_results`, `attempt_criterion_results` (per-criterion: earned / not_yet_earned / partially_earned / unable_to_determine + evidence quote + minimum-fix; plus `highest_value_gap`, `feedback_preview`, `action_hint`/`repair_hint`). WRITE mastery to `student_cell_state` (cell = topic×skill; decay, `next_due_at`) |

**Scoring-anchor system** (Von Restorff, one meaning per anchor) binds to **per-criterion results** (earned vs. not-earned). Most-reused visual primitive — design once in the component library.

**Grading-engine reality that shapes the templates:**
- Text FRQ grading is live but **slow and never abstains** (no "we're not sure / human review" path). Design the feedback state for latency and for a confident-but-possibly-wrong output.
- The formula/quantitative engine is **built but currently unreachable — there is no typed-math input.** A **typed-math editor in the FRQ template is a concrete Phase-1 unlock**, not a nicety.
- Hand-drawn/spatial grading is **not launch-ready** → photo/drawn BYOQ is out of Phase 1.

**BYOQ in Phase 1 = typed.** The photo/QR capture backend is only partly built (`response_attachments` deployed; `capture_pairing_tokens` written but not enabled; homework-image intake designed and filed for later). So Phase-1 BYOQ is typed-question entry into the same loop; photo/hand-drawn capture is Phase 2.

**Report affordance:** a "report this question" action on every item (superseded `public.question_reports` in the prototype; confirm the prod equivalent).

**Hint scaffolding — the core measurement idea (David, 2026-09-20).** The Open Hand components are not just shown; the student can *choose* to expose them as **hints** — the rubric, the topic point brief, vocab/glossary, the "answer move." **The number and type of hints pulled is the performance signal**, and it drives both feedback and the adaptive next step ("Let's try another *without* the rubric and vocabulary"). Independence is the mastery metric; the fade loop (re-present a parallel item with fewer hints available) is how mastery is earned.
- This unifies the **reference rail** with the assist model: each rail component has two lives — *shown to teach* (teach-first Open Hand) and *student-pulled as a tracked, cost-bearing hint*. The provocation must visibly express that duality, non-punitively.
- **Mastery rule (David, resolved 2026-09-20):** *Mastery = answering **multiple distinct questions with zero hints** (cold). Need a hint? You're good, but not mastered.* Hints **never** earn mastery credit — which is consistent with the existing binary `coached`-doesn't-count rule (INV-5), so mastery scoring does **not** need a graded rebuild.
- **What the mechanic still needs (eng/product, not design):** (a) a per-attempt **hint-usage record** (which component, how many) — used only for **feedback and the adaptive fade** ("try another without the rubric and vocabulary"), not for mastery; (b) a "**N cold-correct across distinct questions**" threshold in `student_cell_state` (confirm the tier ladder / weighted-evidence already supports N-distinct + decay; define N). Mastery stays cold-gated and binary.

---

## 3. Student home (from the production `/home` behavior)

The adaptive launch surface. One or two decisions to a productive session; single adaptive interface (D-C), density pulled via progressive disclosure.

| Element | Function | Data (app.*) |
|---|---|---|
| "Start here" hero | Due-queue recommendation — the single highest-value next action | `get_home_start_queue` RPC over `student_cell_state`, ordered **direct_miss > decay > provisional_confirm > new_exposure** |
| Skills rail | Mastery legible: skills as new / building / strong | `taxonomy_skills`, `student_cell_state`, `taxonomy_cells` |
| Course-position confirm | A light "where am I in the course" confirmation ("madlib") | `student_course_positions` |
| Subject toggle | Switch among entitled subjects | `subjects`, `subject_entitlements` |
| Entry paths | recommend · topic · check_work · **bring_question** | `learning_sessions` (mode quick/focused/buckle_down ≈ 15/30/60 min) |
| Homework-helper probe | Demand-probe stub for BYOQ | `growth_event_outbox` / acquisition instrumentation |

---

## 4. Data contract (production `app.*`, confirmed)

**Identity/access:** `profiles`, `subjects`, `subject_entitlements` (tiers beta/paid/trial, time-windowed), `stripe_checkout_sessions` / `stripe_webhook_events` *(Phase 2)*.
**Content (read via projections):** `content_item_versions`, `mcq_choices` (+ distractor rationale), `frq_criteria` (rubric criteria), `topic_point_briefs`, `topic_explainers`; item→cell map `content_item_cells`; deterministic checks `content_item_checks`.
**Taxonomy:** `taxonomy_units`, `taxonomy_topics`, `taxonomy_skills`, `taxonomy_cells` (topic×skill).
**Sessions/attempts/grading:** `learning_sessions`, `attempts`, `attempt_responses`, `response_versions`, `grading_results`, `attempt_criterion_results`, `progress_snapshots`.
**Mastery/home:** `student_cell_state` (tier ladder, fragile flag, weighted evidence, decay/next_due), `student_course_positions`, `home_release_manifest`, `student_memory_snapshots`/`student_memory_events` (coaching memory).
**BYOQ capture (partial/deferred):** `response_attachments`, `capture_pairing_tokens`, `capture_pairing_events`.

---

## 5. Gaps, corrections, and `[NEEDS DAVID]`

1. **Direction lock** — the gate. Wireframes/structure proceed now; skinned templates wait on it.
2. **Parent-pay / gifting is NOT built** *(corrects the earlier "likely already built")*. Per-subject entitlements + Stripe exist; **purchaser ≠ entitlement-holder does not** — no gift code, redemption, transfer, or parent/child account link anywhere. It's backlog (parent-purchaser, parent portal). **Phase-2 parent-pay is design-and-build from scratch, not a reskin.**
3. **Zero real students have ever been graded in production** — all attempts are synthetic/owner. Grading accuracy is pilot-only, and the lukewarm reception was to the *experience*, not to grading. Reassuring for a redesign; sobering for launch claims.
4. **Content maturity trap:** the two launch subjects (Biology, Statistics) have **no item-package files in the repo `content/`** — they live only in the prod DB (`content/` holds Calc AB/BC, Precalc, Chemistry, Physics). Design from the DB shapes, seeded on Biology.
5. **Typed-math editor** — building it in the FRQ template unlocks an already-built grading engine. Worth pricing into Phase 1.
6. **Live-site view** — this session's network policy blocks the live domain; to see the rendered current build I need a linked browser or screenshots (Orchestrator-only; never fed to generative agents).

---

## 6. Dependency spine

Lock direction → design system + tokens → **component library** (scoring anchors, collapsed-assist panel, glossary popover) → **Working/Study template** (skins the shared shell; teach-first loop; typed FRQ + MCQ; product-directed + typed-BYOQ) → **Student home** (due-queue hero + skills rail) → *(Phase 2b)* place mode · progress · signup/payments (incl. net-new parent-pay) · marketing · blog · account · photo/drawn BYOQ.
