---
handoff: project-frontdoor/003
role: visual-designer
status: ready
lane: divergence
actor: codex
model: unspecified
source_sha: 1b0a5ad
frozen_hash:
inputs:
  - projects/project-frontdoor/charter.md
  - projects/project-frontdoor/design-system/SOURCE.md
  - projects/project-frontdoor/design-system/TOKENS.md
  - projects/project-frontdoor/design-system/VISUAL_IDENTITY.md
  - projects/project-frontdoor/design-system/styles.css
  - projects/project-frontdoor/design-system/tokens/colors.css
  - projects/project-frontdoor/design-system/tokens/typography.css
  - projects/project-frontdoor/design-system/tokens/fonts.css
  - projects/project-frontdoor/design-system/tokens/spacing.css
  - projects/project-frontdoor/design-system/tokens/elevation.css
  - projects/project-frontdoor/design-system/tokens/semantic.css
outputs:
  - projects/project-frontdoor/visual/mocks/home-directions/direction-01/home.html
  - projects/project-frontdoor/visual/mocks/home-directions/direction-01/home-desktop.png
  - projects/project-frontdoor/visual/mocks/home-directions/direction-01/home-mobile.png
  - projects/project-frontdoor/visual/mocks/home-directions/direction-02/home.html
  - projects/project-frontdoor/visual/mocks/home-directions/direction-02/home-desktop.png
  - projects/project-frontdoor/visual/mocks/home-directions/direction-02/home-mobile.png
  - projects/project-frontdoor/visual/mocks/home-directions/direction-03/home.html
  - projects/project-frontdoor/visual/mocks/home-directions/direction-03/home-desktop.png
  - projects/project-frontdoor/visual/mocks/home-directions/direction-03/home-mobile.png
  - projects/project-frontdoor/visual/mocks/home-directions/manifest.md
supersedes: project-frontdoor/001
revises: none
---

# Handoff Packet 003 — Visual Designer (Cramapple home page — 3 divergent MARKETING home-page directions, inside the design system)

Task:
- **Produce three genuinely divergent home-page directions for `cramapple.com`, each a real MARKETING home page, each built inside the locked Cramapple design system, each escaping the generic landing-page median.** Directions only — this selects nothing and builds no production code. Deliver each as a self-contained, working HTML mock plus a desktop and a mobile render, and one `manifest.md`.

## Why this packet exists — read this first (it supersedes 001)

This packet **supersedes `project-frontdoor/001`**, which was returned. 001 was a thorough brief and its design-system, anti-median, and two-beat requirements all still stand — they are repeated in full below. It failed on **one point**, and that point is the whole reason for this re-run:

**001's three directions came back as the app's exercise screen, not a marketing home page.** Each opened cold inside an AP Statistics Open Hand exercise — product chrome and all ("Unit 2 · Two-variable data", "0/4", "Pre-loaded demo", a reasoning box, hints) — with no orientation for a first-time visitor. They ticked every checklist item in the brief (two-beat spine, one live sandbox, trial gate, device tiering) and still missed the genre. The brief leaned so hard on *show don't tell / no persuasive copy / the demo is the sale / do not be a generic SaaS page* that the result overcorrected into an app UI that isn't a marketing page at all.

**The correction — define the page by its job:**

- **A marketing home page is not the product. It is the page that makes a stranger want the product.** The live Open Hand demo is a *tool inside* that page, not the page itself.
- **Orient in the first view.** Someone who has never heard of Cramapple must, from the first screen, grasp **what it is, who it is for, and why it beats a worksheet or a drill app** — carried by design and the demo, not by a wall of persuasive copy. 001 dropped visitors mid-exercise with zero orientation; that is the specific failure to fix.
- **Frame the demo as a demonstration, not as logged-in app chrome.** Kill the "Unit 2 · Two-variable data / 0/4 / Pre-loaded demo" product-interface framing that makes it look like the visitor is already inside the app. The visitor is a prospect being shown the product, not a user mid-session.
- **Make the case and convert.** The two-beat narrative must argue the value and lead naturally to *start the 7-day trial* — as a marketing page does, through the demonstration, not through testimonials or claims.

Hold this alongside the anti-median guard, not against it: the answer is **not** to add a hero headline + feature cards + logo bar + testimonial band (that is the median, still disqualified). The novelty budget is still **layout, motion, and narrative**. The task is to make a page that both *orients and sells to a stranger* **and** *is unmistakably not a generic SaaS/edtech page* — the demonstration is how you do both at once.

*No exemplar is provided on purpose.* You are not being shown an existing Cramapple marketing page to match — that would collapse this divergence lane into imitation. "Marketing home page" here is defined by the **job** above, not by a reference to reskin. Diverge on how each direction accomplishes that job.

## The design-system binding (hard — this is what "inside the system" means)

Read `design-system/TOKENS.md`, `design-system/VISUAL_IDENTITY.md`, and the token CSS before building. The mirror at `design-system/` is a commit-pinned snapshot of the canonical skill (`cramapple:.claude/skills/cramapple-design/@5341d4d`); the live style guide is https://preview--ap-prep-canvas.lovable.app/style-guide. Non-negotiable, every direction:

- **Consume the semantic aliases (`tokens/semantic.css`), never the raw scales, and never a hardcoded hex.** If a value is missing, that is a finding for the manifest, not a reason to inline one. (001 correctly flagged the missing semantic *masthead* alias — carry that finding forward; do not patch it locally.)
- **Colour ownership is fixed.** Orange (`#f54900`/`#ca3500`) = masthead / the one primary action — **never an error colour**. Blue = points earned / rubric. Maroon = points lost. Purple = the student's own work. Yellow = hints, and every yellow surface costs the student something — **never decoration**. Green = reference. One meaning per colour; nothing new in the warm lane.
- **Square corners** (`--radius-all: 0`; the only round thing is the MCQ radio dot). **Zero motion tokens** (`--motion-duration: 0ms`) — see the motion note below. **16px floor** for anything a student reads.
- **Type:** Bungee (wordmark), Passion One (display), Source Sans 3 (body), STIX Two Math. No mark exists — the wordmark is set in Bungee; **do not draw a logo.**
- **Coherence check:** your direction must sit beside the app and its already-restyled sibling marketing pages as the same product — same family, same register — while still being a marketing page, not an app screen.

*Motion note:* the app's `--motion-duration` is `0ms` by deliberate policy (no transitions invented for "polish"). A marketing home page may use motion as part of its narrative, but treat that as a **scoped, deliberate exception you name in the manifest** — motion in service of the demonstration (e.g. the rubric lighting as a student acts), never decorative easing sprinkled on chrome. Do not silently redefine the token.

## Anti-convergence guard (this is the point of the divergence lane — do not skip)

- **SSoT (`ARCHITECTURE.md` §5c):** before building each direction, emit a distinct random seed string and derive that direction's **layout structure + motion/narrative model + scroll choreography** from it, rather than reaching for the first arrangement that comes to mind. Record the seed per direction in the manifest. (Use fresh seeds; do not reuse 001's.)
- **Diverge on structure, not skin.** All three share the same palette and type (they must — it is one design system). So the difference has to live in *arrangement and narrative*: how the page orients a newcomer, how the two-beat spine is composed, how the live hero is framed and introduced as a demo, how the page moves as you scroll, where the trial gate sits. If two directions could swap layouts and be indistinguishable, one has collapsed — re-approach it.
- **Disqualifier self-check (run per direction, record the result):** disqualified if (a) it could belong to any SaaS/edtech product with its logo swapped in; (b) it reads as the app's UI rather than a page that introduces and sells the app (the 001 failure); (c) a first-time visitor could not tell what Cramapple is, who it is for, and why it is better than a worksheet from the first view; (d) it leads by telling rather than showing; (e) it uses a testimonial/logo-bar/"social-proof" band (there is no proof yet); (f) it has more than one fully-live sandbox.

## The brief (from `charter.md` — build to this)

**Audience & job.** The visitor is a student, and the student is the buyer. Two cognitive profiles inherited from the app: Learner A tolerates density; Learner B (mild ADHD) needs low-decision, short-attention, visible momentum. A distractible student bounces rather than reads — the first view must **orient and land the value without persuasive copy**. The page's one job is to **convert: start the 7-day trial** (purchase happens downstream, inside the trial).

**Marketing home page, show-don't-tell.** The product does the talking, but the page must still frame what a stranger is looking at. This is a two-beat page:

1. **Beat 1 — the live Open Hand hero (the one live sandbox), framed as a demonstration.** A real, attemptable Open Hand moment sits near the top: the scoring is face-up, the student can open a hint, type into the answer field, and watch the rubric light up (blue earned / maroon lost, shape-distinguishable). It must be **introduced as "try what Cramapple does"** — a prospect trying a demo — **not** presented as if the visitor is already logged into the app mid-unit. Use the design system's own Open Hand FRQ pattern and the **real AP Statistics least-squares sample** the app's templates use (practice-time vs. free-response score; slope 0.72; the influential point) — authentic content, not edu-filler. This beat is the demo, the proof, and the hook — but it sits inside a page that has told the visitor what they are looking at.
2. **Beat 2 — the input→output loop (a scripted showcase, NOT a second live engine).** One story: *throw your real, messy work at it, get back clean study material.* Bring-your-own-question and photograph-your-handwritten-work (input) → hints → topic-level notes (output), shown as a pre-baked, stepped-through example. Lightly interactive at most; not a second live sandbox.

**Fidelity tiering (hard).** Exactly **one** fully-live sandbox — Beat 1. Everything else is scripted showcase.

**The trial gate is the demo's front porch.** The live hero runs on a pre-loaded question. The moment the experience turns personal and unbounded — *upload your own question, switch to your subjects, save these notes* — is exactly where **"Start your 7-day trial"** fires. Demo → trial → buy should read as one continuous motion, not three separate asks.

**Device (hard).** The app is laptop-first, but this page must **convert on a phone.** Tier by device: **desktop gets the live sandbox; mobile gets the scripted showcase**, CTA prominent on both. Include a **buy-on-phone → use-on-laptop handoff** (e.g. "we'll email you a link to open on your laptop" / continue-on-desktop) so a phone signup is not stranded from where the product works.

**Proof (hard).** There are no testimonials, quotes, or proof points yet, and none may be invented. The live demo carries credibility. Leave a **graceful, empty-for-now slot** where real proof will drop in later without a redesign — but ship these directions with no proof band and no median social-proof section.

## What each direction owns (the variable under test)

- **How the page orients a first-time visitor** — how, within the first view, it establishes what Cramapple is, who it's for, and why it beats a worksheet, without a persuasive-copy wall and without the median hero.
- **Layout & composition** — how the two beats are arranged and sequenced down the page.
- **Motion & narrative** — how the page reveals and moves as a student scrolls/acts; the scoped, named motion exception above.
- **Scroll choreography & the trial-gate placement** — where and how the "Start your 7-day trial" moment is reached.
- **Framing of the live hero as a demo** — how the Open Hand sandbox is introduced, bounded, and marked as a demonstration (not app chrome) before the gate.

Everything in the design-system binding and the brief is fixed. The five items above are yours to invent, and must genuinely differ across the three directions.

## Render settings

Chromium headless, `waitUntil: 'load'`, awaited `document.fonts.ready`.
- **Desktop:** `viewport { width: 1440 }`, **full-page** capture (the home page scrolls — capture the whole page, not a 900px crop). `deviceScaleFactor: 1`.
- **Mobile:** `viewport { width: 390 }`, full-page capture, `deviceScaleFactor: 2`.
- Fonts load from the token `fonts.css`; render with network access or the declared fallbacks substitute.
- **Size:** each PNG under 500 KB (policy §7); total under 10 MB. If a PNG exceeds 500 KB, optimize with `pngquant` / `oxipng` / `zopflipng` — do not change viewport or format. If your surface cannot render PNGs, deliver the three `home.html` files and say so; the steward renders the PNGs at these settings.

## What to record in `manifest.md`

- Per direction: its fresh SSoT seed string and the layout / motion-narrative / scroll model it derived.
- Per direction: **how it orients a first-time visitor** (what/who/why-not-a-worksheet in the first view), how it composes the two-beat spine, how it frames the live hero as a demonstration (not app chrome), where the trial gate fires, and how the mobile scripted-showcase tier differs from the desktop live tier.
- Per direction: the disqualifier self-check result — explicitly including (b) it does not read as the app's UI and (c) a stranger is oriented in the first view; plus confirmation of exactly one live sandbox, no invented proof, no drawn logo.
- Token conformance: confirmation that only semantic aliases were used, no hardcoded hex, colour ownership respected, earned/lost anchors shape-distinguishable without hue, square corners held; the missing-masthead-alias finding carried forward; and the named motion exception (what moves, why it serves the demonstration).
- The AP Statistics sample used in the live hero (so it stays consistent), and confirmation the content is the real least-squares example, not edu-filler.
- The render command and viewports.

Keep the manifest a plain record. It selects nothing and ranks nothing.

## Hard constraints (governance — from charter and policy)

- **Advisory. Selects nothing.** This packet builds three directions for comparison; it does not choose a winner, rank them, or mark the track Done. Track Done is David's alone.
- **Marketing home page, not an app screen** — the whole point of this re-run (see the correction above).
- **Design-system conformance is hard**, per the binding above — this is the whole "extension, not sibling" premise.
- **Help, don't vend.** The Open Hand hero teaches why points move; it never presents itself as an answer to copy. Diagnosis → reasoning → move, never a fill-in key.
- **Real AP content only** in the live hero; do not soften into generic edu-copy.
- **No gamification** (no streaks, XP, badges, confetti, leaderboards) and **no subscription/paywall-nag patterns.** The 7-day trial is offered once, cleanly.
- Laptop **and** phone must both work, per the device tier.

## Model assignment for this run

- **Visual Designer = Codex / GPT-Sol (OpenAI)**; Creative Director / Orchestrator = Claude (David, 2026-09-24). The divergence lane requires a model named at dispatch (`publish --dispatch --model …`); `model:` stays `unspecified` in this draft and is set at dispatch.
- **No Critic and no Chaos Agent review pass on this track** (David) — the Chaos Agent (`002`, Grok) is a decorrelated wildcard, not a review of these directions. David reviews the three directions directly and decides Done. The **SSoT anti-convergence guard plus the marketing-home-page correction above are the primary defenses** — enforce both, and record each seed and disqualifier result.

## Files / Systems Affected

- Overwrite (re-delivery of returned `001`): the ten files in `outputs` under `projects/project-frontdoor/visual/mocks/home-directions/`. The prior versions stay in git history.
- Modify nothing else. In particular, do not edit `design-system/` (it is a read-only pinned mirror) or `charter.md`.

## Open Risks / Blockers

- **P0 — App-screen relapse.** The 001 failure. A page that opens inside the exercise with no orientation, or that reads as logged-in app chrome, is disqualified however clean it looks. Orient the stranger; frame the demo.
- **P1 — Median collapse.** The opposite failure. Do not "fix" P0 by reaching for hero headline + feature cards + logo bar + testimonial + CTA. Orient and sell *through the demonstration and narrative*, off the median.
- **P2 — Off-system drift.** It is tempting to reach past the tokens for a "marketing-y" colour or a rounded card. Don't — coherence with the app and the restyled siblings is the point. Off-system is a failed direction.
- **P3 — Two live sandboxes.** Only Beat 1 is live. If Beat 2 creeps toward a second live engine, it breaks the fidelity tier and the trial boundary.
- **P4 — Inventing proof.** No testimonials, logos, or numbers that don't exist. The graceful empty slot only.
- **P5 — Mobile as an afterthought.** The buyer may convert on a phone; the mobile tier and the laptop handoff are hard, not optional.

## Do Not Touch / Do Not Read

- **Do not touch:** anything not in `outputs` — `charter.md`, `design-system/` (read-only mirror), `config/`, `docs/`, and other `projects/`.
- Deferred/out of scope: production Lovable build (a later step — this is directions only), app naming (deferred), any parent-facing surface.

## Return path

- **If dispatched to Codex (branch intake, the charter default):** commit only the ten declared outputs on branch `codex/project-frontdoor-003-visual-designer` and report branch + SHA. The steward (`claude-code`, from a clone that can push `main`) lands them with `scripts/publish`; the delivery receipt is the completion. Do not report the work complete on your own authority.
- **If instead run on Claude Design (no repo write):** return exactly one AIRLOCK RETURN per `prompts/UNIVERSAL_SESSION_PROMPT.md` — one FILE block per `home.html` and `manifest.md`, one ASSET block per PNG with its export/serve URL (or deliver HTML only and say so; the steward renders the PNGs).

## Next Expected Output

- Three home-page directions, each a self-contained `home.html` that works on desktop and phone, each a **marketing home page** that orients a first-time visitor and composes the two-beat spine (live Open Hand hero framed as a demo + scripted input→output loop) inside the design system and off the median, plus a desktop and a mobile render each.
- `manifest.md` recording the per-direction SSoT seeds, how each orients a newcomer, spine composition, demo framing, trial-gate placement, device tiering, disqualifier results, token-conformance confirmations, the AP sample used, and the render command.
