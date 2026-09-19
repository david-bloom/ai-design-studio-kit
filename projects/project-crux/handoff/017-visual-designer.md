---
handoff: project-crux/017
role: visual-designer
status: accepted
lane: divergence
actor: claude-design
model: fable
source_sha: b27b252
frozen_hash: 96fc5f8bef0f93adff0b26368e3d2a13362a9ea5ee6e7a165b8bfe69f5d73b74
inputs:
  - projects/project-crux/charter.md
outputs:
  - projects/project-crux/visual/mocks/head-to-head-017/signal-proof/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-017/signal-proof/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-017/daybreak-relay/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-017/daybreak-relay/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-017/open-window/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-017/open-window/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-017/midnight-standard-control/openhand-stats.html
  - projects/project-crux/visual/mocks/head-to-head-017/midnight-standard-control/openhand-stats.png
  - projects/project-crux/visual/mocks/head-to-head-017/manifest.md
supersedes: none
revises: none
---

# Handoff Packet 017 — Visual Designer (Rebuild the Head-to-Head Frozen Spec, Blind, on a Second Lab)

Task:
- Handoff 017 (project-crux, Visual Design track) — **build the four register plates from the frozen requirement spec below, from scratch, on a different model (Fable) than the one that built the first set.** Same frozen brief, independent build. This is a decorrelation re-run, not a redesign of the spec and not a selection.

## Why 017 exists (read before building)

The first execution of this frozen spec (handoff 015, built by Codex / GPT-Sol) **converged**: three of the four register builds resolved to the same design in three costumes — warm cream ground, heavy black sans headline, one warm action accent, scatterplot parked top-left, model response to its right, rubric rail further right. Only the control (Midnight Standard) held its distance, and only because it was told to defend the opposite register. The named UX patterns in section D (claim-then-evidence / baton-relay / layered-overlay) did not actually differentiate the layouts.

The most likely cause is not the brief and not any single constraint — it is that **one model built all four in one context and settled onto its own safe median** (the `ARCHITECTURE.md` §5c / §4 convergence-and-correlation failure). So 017 changes exactly one variable: **who builds it.** The frozen spec is re-run verbatim on a second lab (Fable), built **blind** to the first set, to answer a clean question for David — *was the convergence Sol's, or was it the method's?*

Nothing here loosens the frozen content. Sections A/B/C stay frozen; section D stays the variable under test. The only deltas from handoff 015 are the builder (Fable, not Sol), the output folder (`head-to-head-017/`, so the two sets sit side by side for comparison), and the blind-build guard below.

## The blind-build guard (this is the point of 017 — do not skip it)

- **Build the four registers from the frozen spec alone.** Do **not** open, read, reference, or reconstruct the existing first-set plates at `projects/project-crux/visual/mocks/head-to-head-014/` (any register, `.html` or `.png`) or `014-register-directions.md`. They are deliberately withheld from your inputs so your build cannot anchor on them. If you have already seen them in this session, do not carry them forward; treat the spec as your only source.
- **Diverge the four from each other, natively.** Each register invents its own arrangement, reveal pattern, and interaction model to satisfy the frozen brief. If two of your four could swap palettes and be indistinguishable, they have collapsed — re-approach one. Section D names four genuinely different UX structures; make the *structure*, not just the palette, carry the difference.
- **SSoT anti-convergence (`ARCHITECTURE.md` §5c):** before building each of the three teen-register plates, emit a distinct random seed string and derive that plate's structural model + palette temperature + reveal pattern from it, rather than reaching for the first arrangement that comes to mind. Record the seed per plate in the manifest.

---

## THE FROZEN SPEC (build to this exactly)

> Reproduced verbatim from David's frozen requirement spec. The content strings in section A are frozen — copy them exactly, do not paraphrase. Two operative substitutions from the original: the builder is **Fable** (not Sol), and the output folder is **`head-to-head-017/`** (not `head-to-head-014/`). Nothing in sections A–D is otherwise changed.

**Head-to-head · the identical brief all four register builds satisfy.**

This document is the single source of truth for *what* each register build must contain. It does **not** prescribe layout, structure, palette, or fonts — those are the variable under test. Each register (Signal/Proof, Daybreak Relay, Open Window, Midnight Standard) invents its own arrangement, reveal pattern, and interaction model to satisfy this brief natively. The content strings, the point language, and the constraints below are frozen verbatim; copy them exactly, do not paraphrase.

Fable builds one file per register into:
`visual/mocks/head-to-head-017/<register>/openhand-stats.html`

- `signal-proof/`
- `daybreak-relay/`
- `open-window/`
- `midnight-standard-control/`  ← a 3-column arrangement here is expected and fine.

**None of the four may inherit the Blue Hour Cabinet structure, palette, or fonts.** Midnight Standard sharing a 3-column approach with Blue Hour is acceptable; reusing its red top bar, cream ground, or Bungee/Passion One type is not.

### A. Frozen content (verbatim strings)

**A1. Product + mode framing**
- Product name: **The Blue Hour Cabinet**
- Subject: **AP Statistics**
- Mode label: **Open Hand · full picture**

**A2. Navigator — study map (5 units · 13 topics)**
Heading: **Study map · 5 units · 13 topics** — sub: *Follows the AP curriculum*.
Current location: **Unit 2 · Exploring Two-Variable Data**, topic **2.3 · Least-Squares Regression**.

```
Unit 1 — Exploring One-Variable Data
  1.1  Variables & classification
  1.2  Representing data
  1.3  Summaries & distributions
Unit 2 — Exploring Two-Variable Data
  2.1  Two categorical variables
  2.2  Scatterplots & correlation
  2.3  Least-squares regression        ← current topic
Unit 3 — Collecting Data
  3.1  Sampling methods
  3.2  Experiments & studies
Unit 4 — Probability & Distributions
  4.1  Probability foundations
  4.2  Random variables
  4.3  Binomial & geometric
Unit 5 — Inference
  5.1  Confidence intervals
  5.2  Significance tests
```

**A3. The question (verbatim)**
> Describe the association between weekly practice time and free-response score, and interpret the slope in context.

**A4. The graph — scatterplot data**
- x-axis: **Practice time (hours/week)**; y-axis: **Free-response score**.
- 9 data points, positive/moderately-strong/roughly-linear cloud rising left→bottom to right→top.
- A **least-squares line** fitted through the cloud.
- One **influential point** marked distinctly (low practice time, higher-than-expected score) that pulls/flattens the fitted line — must be visually singled out from the other 8.

**A5. Rubric — "How points move" (3 criteria, verbatim)**
Two states must be distinguishable by **shape, not color alone**: earned vs lost.

1. **Describe the association** — **+2**
   - Earned: *Direction, form, strength, and unusual features — stated in context.*
   - **Lost when** a feature is skipped or given without variables/units.
2. **Interpret the slope** — **+1**
   - Earned: *Say what changes, per what, on average, in context.*
   - **Lost when** the number is stated with no context.
3. **Explain influence** — **+1**
   - Earned: *Name the influential point and how it pulls the fitted line.*
   - **Lost when** influence is asserted with no mechanism.

Total available: **4 points.**

**A6. Model response + credit toggle**
A two-state toggle switches the model response between **Full credit (4 / 4)** and **Points lost (1 / 4)**. The score tally updates with the state.

**Full credit (4 / 4) — three paragraphs, verbatim:**
1. The association is positive, moderately strong, and roughly linear *[✦ describe]*. Students who practice more tend to earn higher scores, on average.
2. The slope of **0.72** means that each additional hour of weekly practice predicts about **0.72 more points** on the free-response, on average *[✦ slope in context]*.
3. One student practices far less than their score would suggest — an **influential point** that pulls the fitted line down and flattens the slope *[✦ influence]*.

**Points lost (1 / 4) — three paragraphs, each with its deduction, verbatim:**
1. The association is positive and strong *[✦ partial]*.
   - **−1** · form not named (linear?) and strength not tied to the data
2. The slope is 0.72.
   - **−1** · a number with no context — name what changes, per what, in context
3. Practice helps scores.
   - **−1** · influence asserted with no mechanism; the influential point is never named

The three ✦ tags in the full-credit answer map 1:1 to the three rubric criteria (A5).

**A7. Reference card — "For this question" (verbatim)**
- **Topic:** Two-variable quantitative data — describing scatterplots and fitting a least-squares regression line.
- **Skills involved:**
  - Describe association: direction · form · strength · unusual
  - Interpret slope & intercept in context
  - Identify and reason about influential points
- **Vocabulary:**
  - **Influential point** — An observation whose removal substantially changes the fitted model.
  - **Residual** — Observed minus predicted response for a point.
  - **Slope (b)** — Predicted change in y per one-unit change in x.

**A8. Deep Dive — "the CED gate" (verbatim, 4 sections)**
Title: **Classifying variables** — sub: *Categorical vs quantitative · discrete vs continuous*.
Eyebrow: *Deep dive · the CED gate*.

1. **Core idea** — Categorical-vs-quantitative and discrete-vs-continuous is pure vocabulary with no formula attached — but the CED treats it as a gate: using a mean or standard deviation on a categorical variable, or a bar chart on a continuous one, is scored as a **category error**, not partial credit for a numeric mistake.
2. **What students need to understand** — This classification step determines which graphs, statistics, and inference procedures are even valid to reach for later in the course, so misclassifying a variable here can invalidate an otherwise-correct calculation several units later.
3. **How this becomes points** — Multiple-choice and free-response items expect a stated variable to be correctly classified before any statistic or graph choice is judged — picking the right numeric answer for the wrong variable type earns **no credit** for the classification component.
4. **Answer move** — When a question gives you a variable description, decide **categorical vs quantitative first**, then — if quantitative — **discrete vs continuous**, before choosing any graph or statistic. This step is about *reading* the variable, not analyzing it.

### B. Functional inventory (must be present and working in every build)

Each element must exist and be interactive; *how* it is placed, revealed, and connected is the register's own choice.

1. **Navigator** across the full 5-unit / 13-topic study map (A2), with the current topic marked, and a way to open/browse the whole map and select another topic.
2. **Rubric surface** (A5) — all three criteria with point values and earned/lost language.
3. **Graph** (A4) — the scatterplot, fitted line, and singled-out influential point.
4. **Credit toggle** (A6) — switches model response between 4/4 and 1/4; tally follows.
5. **Model response** (A6) — both states, with the ✦ criterion tags / deduction notes.
6. **Reference card** (A7).
7. **Deep Dive** (A8) — all four sections, openable and closable.

### C. Hard constraints (non-negotiable, every build)

1. **Earned vs lost is a shape/form distinction, not color-only.** A colorblind learner must tell an earned criterion from a lost one without relying on hue.
2. **The action color is reserved for one job.** Pick the single interactive/decision affordance the register elevates; do not spend that same color decoratively elsewhere.
3. **Help, don't vend.** The model response and deductions teach *why* points move; they never present themselves as the answer to copy. The ladder is diagnosis → reasoning → move, not a fill-in-the-blank key.
4. **Real AP content only.** The statistics, rubric language, and CED framing above are accurate and must not be softened into generic edu-copy.
5. **No gamification.** No streaks, points-as-reward, badges, confetti, XP, or leaderboards. The "score" is an assessment tally, not a game score.

### D. The variable under test (what each register owns)

- **Layout & UX pattern** — how the 7 inventory elements are arranged, sequenced, revealed, and moved between. This is the primary thing David is comparing. Diverge genuinely:
  - *Signal / Proof* — claim-then-evidence structure; the assertion and its warrant sit together.
  - *Daybreak Relay* — a baton-pass sequence; elements hand off in a worked order.
  - *Open Window* — layered/overlay reveal; the graph is the ground, surfaces float over it.
  - *Midnight Standard (control)* — formal, dense, near-print-standard; a 3-column ledger is fine.
- **Visual register** — type system, palette temperature, structural voice, anchor shapes, and the reserved action color.

Everything in sections A, B, and C is frozen. Everything in section D is the builder's to invent.

---

## Render settings (match 015 so the two sets are comparable)

Chromium headless, `viewport: { width: 1440, height: 900 }`, `deviceScaleFactor: 1`, `waitUntil: 'load'`, `fullPage: false`, awaiting `document.fonts.ready` before screenshot. Verify on each rendered PNG before delivery that the plate fills the 1440×900 frame with no clipped content and no overflow.

**Size:** each PNG under 500 KB (policy §7); total under 10 MB. If a PNG exceeds 500 KB, optimize with `pngquant` / `oxipng` / `zopflipng` — do not reduce the viewport, change format, or request `--allow-large`. If your surface cannot produce a 1440×900 PNG, deliver the self-contained HTML for each plate and say so in your return; the steward renders the PNGs from your HTML at these settings.

## What to record in `manifest.md`

- the 9-point dataset you defined to satisfy A4 (list it, so all four plates and any later render reuse it byte-for-byte), and confirmation the influential point is singled out from the other 8;
- per plate: its SSoT seed string and the structure/palette-temperature it derived;
- per plate: the resolved font stack (and any fallback that substituted), and confirmation the 1440×900 frame is filled with no clipping;
- per plate: the two scoring-anchor shapes as rendered (earned vs lost, distinguishable without hue) and confirmation the action color is not reused as an anchor;
- confirmation that no plate inherited Blue Hour's red top bar, cream ground, or Bungee/Passion One type;
- the render command and viewport.

Keep the manifest a plain record. It selects nothing and ranks nothing.

## Hard constraints (governance — from the charter and policy)

- **Advisory. Selects nothing.** 017 builds four plates for comparison; it does not choose a winner, rank them, or mark any track Done. Track Done is Hard-Gate — David only.
- **Clean-room / blind-start.** The real product name/identity and any prior/parallel design exploration are withheld on purpose. Do not infer, request, or reconstruct them. "The Blue Hour Cabinet" is the frozen in-mock product string for this sample, not the source product's real identity — do not treat it as a lead to anything withheld. Anything not in this packet or the charter is *withheld, not missing*.
- Everything in sections C1–C5 of the frozen spec holds in every plate (shape-not-color anchors, one reserved action color, help-not-vend, real AP content, no gamification).
- **Laptop-first** web app; legible at 1440×900 for the real AP Statistics content in the spec.
- **No gamification / streak coercion, no subscription/paywall-nag patterns, no parent UI.**

## Model assignment for this run

- Per-packet override, David's call at dispatch: Visual Designer = **Fable (claude-fable-5-1)**, not the charter default (Codex / GPT-Sol). The override is the entire point of 017 — a second lab, decorrelated from the model that produced the converged first set (`ARCHITECTURE.md` §4). Divergence lane requires a model set at dispatch (`--model`). This is a dispatch-time model choice, not a charter change.

## Files / Systems Affected

- Create: the nine files in `outputs` under `projects/project-crux/visual/mocks/head-to-head-017/`.
- Modify nothing else.

## Open Risks / Blockers

- **P1 — Re-convergence.** The failure 017 is testing for. If the four collapse onto one skin again, that is a finding (the method converges, not just Sol) — but do not *manufacture* it by anchoring on your own first arrangement. Enforce the SSoT guard and the distinct-structure rule.
- **P2 — Anchoring on the first set.** Reading Sol's head-to-head-014 plates defeats the decorrelation. Build blind (see the blind-build guard).
- **P3 — Anchor drift.** It is easy to let a warm identity accent slide onto a scoring anchor. Keep earned/lost anchors exclusive and shape-distinguishable, and the action color separate, in every plate.
- **P4 — Content infidelity.** The first set silently swapped in a different sample (sleep vs reaction time) instead of the frozen A-section content. Do not. Build the frozen practice-time / free-response-score content in A3–A6 exactly, verbatim.
- **P5 — Success without looking.** Verify each rendered plate visually before delivery; a plate that overflows or clips the 1440×900 frame is not deliverable.
- **Clean-room:** withheld identity stays withheld.

## Do Not Touch / Do Not Read

- **Do not read:** `projects/project-crux/visual/mocks/head-to-head-014/` (the first set, any register, `.html`/`.png`/`manifest.md`) and `projects/project-crux/visual/014-register-directions.md`. Withheld from inputs on purpose — building blind is the experiment.
- **Do not touch:** anything not in `outputs` — in particular the entire existing `visual/mocks/` tree (`option-0*/`, `head-to-head-014/`, Blue Hour / `option-07-challenger/`), `review-board.md`, `mocks/README.md`, `mocks/shared/render-mocks.mjs` (its fixed `pages` array does not fit this folder — run your own one-off render and record the command; do not commit the script), `charter.md`, `config/`, `docs/`, and other `projects/`.
- The product's real name/identity/category beyond the charter; any excluded prior art.
- Deferred/out of scope: app naming (deferred), Marketing Templates track (out).

## Return path — airlock (Claude Design / no repository write access)

You cannot write the repository. Return exactly one AIRLOCK RETURN in the format in `prompts/UNIVERSAL_SESSION_PROMPT.md`:
- one **FILE** block per text output — the four `openhand-stats.html` plates and `manifest.md` — with exact declared paths and exact content;
- one **ASSET** block per PNG (`openhand-stats.png` × 4) with its export/serve URL, or, if your surface cannot render PNGs, say so and deliver the HTML only (the steward renders the PNGs from your HTML at the 015 settings and records that in the landing).

Nothing outside the return. Do not report the work as complete on your own authority: the steward (`claude-code`, from a clone that can push `main`) fetches any export URLs immediately, lands the files unchanged with `scripts/publish`, and the DELIVERY RECEIPT is the completion.

_(If instead David runs Fable on a surface that can push a branch but not `main`, use branch intake: commit only the nine declared outputs on `codex/project-crux-017-visual-designer` and report branch + SHA; the steward lands them. Airlock is the expected path for a Claude Design session.)_

## Next Expected Output

- Eight plate files (four `openhand-stats.html` + four `openhand-stats.png`), each 1440×900, each satisfying the frozen spec (A/B/C) and owning its own section-D structure and register, all rendering the same frozen practice-time / free-response-score sample.
- `manifest.md` recording the defined dataset, per-plate SSoT seeds, font stacks, frame confirmations, anchor shapes, the Blue-Hour non-inheritance confirmation, and the render command.
- In your return: the file list and (branch intake only) branch + SHA.
