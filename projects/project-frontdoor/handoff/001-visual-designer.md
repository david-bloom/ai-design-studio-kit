---
handoff: project-frontdoor/001
role: visual-designer
status: returned
lane: divergence
actor: codex
model: Codex / GPT-Sol (OpenAI)
source_sha: 034062f
frozen_hash: 1798b84d90817f8a3c88fb2cbb18452e1fe5f9182065dfd208b5521f1f1d97d2
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
supersedes: none
revises: none
---

# Handoff Packet 001 — Visual Designer (Cramapple home page — 3 divergent directions, inside the design system)

Task:
- **Produce three genuinely divergent home-page directions for `cramapple.com`, each built inside the locked Cramapple design system, each escaping the generic landing-page median.** Directions only — this selects nothing and builds no production code. Deliver each as a self-contained, working HTML mock plus a desktop and a mobile render, and one `manifest.md`.

## Why this packet exists (read before building)

This is the inverse of a project-crux clean-room run. The design system is **not** withheld here — it is the ground you build on. The home page is the one page of the "New Cramapple Marketing" project that does not yet carry the system; every sibling page (signup, payment, how-it-works) already does, so this page has to read as the same family the moment a student lands on it.

The contamination to fight is **the generic landing-page median** — hero + three feature cards + logo bar + testimonial + big CTA, and every equivalent. That median is the anti-reference. If a direction could be re-skinned into any SaaS/edtech home page, it has failed, no matter how clean it looks. Your novelty budget is **layout, motion, and narrative** — not palette, type, or the anchor discipline, which the design system already settled and you inherit unchanged.

## The design-system binding (hard — this is what "inside the system" means)

Read `design-system/TOKENS.md`, `design-system/VISUAL_IDENTITY.md`, and the token CSS before building. The mirror at `design-system/` is a commit-pinned snapshot of the canonical skill (`cramapple:.claude/skills/cramapple-design/@5341d4d`); the live style guide is https://preview--ap-prep-canvas.lovable.app/style-guide. Non-negotiable, every direction:

- **Consume the semantic aliases (`tokens/semantic.css`), never the raw scales, and never a hardcoded hex.** If a value is missing, that is a finding for the manifest, not a reason to inline one.
- **Colour ownership is fixed.** Orange (`#f54900`/`#ca3500`) = masthead / the one primary action — **never an error colour**. Blue = points earned / rubric. Maroon = points lost. Purple = the student's own work. Yellow = hints, and every yellow surface costs the student something — **never decoration**. Green = reference. One meaning per colour; nothing new in the warm lane.
- **Square corners** (`--radius-all: 0`; the only round thing is the MCQ radio dot). **Zero motion tokens** (`--motion-duration: 0ms`) — see the motion note below. **16px floor** for anything a student reads.
- **Type:** Bungee (wordmark), Passion One (display), Source Sans 3 (body), STIX Two Math. No mark exists — the wordmark is set in Bungee; **do not draw a logo.**
- **Coherence check:** open the live style guide and the already-restyled sibling marketing pages; your direction must sit beside them without looking like a different product.

*Motion note:* the app's `--motion-duration` is `0ms` by deliberate policy (no transitions invented for "polish"). A marketing home page may use motion as part of its narrative, but treat that as a **scoped, deliberate exception you name in the manifest** — motion in service of the demonstration (e.g. the rubric lighting as a student acts), never decorative easing sprinkled on chrome. Do not silently redefine the token.

## Anti-convergence guard (this is the point of the divergence lane — do not skip)

- **SSoT (`ARCHITECTURE.md` §5c):** before building each direction, emit a distinct random seed string and derive that direction's **layout structure + motion/narrative model + scroll choreography** from it, rather than reaching for the first arrangement that comes to mind. Record the seed per direction in the manifest.
- **Diverge on structure, not skin.** All three share the same palette and type (they must — it is one design system). So the difference has to live in *arrangement and narrative*: how the two-beat spine is composed, how the live hero is framed, how the page moves as you scroll, where the trial gate sits. If two directions could swap layouts and be indistinguishable, one has collapsed — re-approach it.
- **Disqualifier self-check (run per direction, record the result):** *If this page could belong to any SaaS/edtech product with its logo swapped in, it is disqualified.* Also disqualified: a hero that tells rather than shows; a testimonial/logo-bar/"social-proof" band (there is no proof yet — see the brief); more than one fully-live sandbox.

## The brief (from `charter.md` — build to this)

**Audience & job.** The visitor is a student, and the student is the buyer. Two cognitive profiles inherited from the app: Learner A tolerates density; Learner B (mild ADHD) needs low-decision, short-attention, visible momentum. A distractible student bounces rather than reads — the first view must land the value **without persuasive copy**. The page's one job is to **convert: start the 7-day trial** (purchase happens downstream, inside the trial).

**Show, don't tell.** The product does the talking. This is a two-beat page:

1. **Beat 1 — the live Open Hand hero (the one live sandbox).** A real, attemptable Open Hand moment sits at the top: the scoring is face-up, the student can open a hint, type into the answer field, and watch the rubric light up (blue earned / maroon lost, shape-distinguishable). Use the design system's own Open Hand FRQ pattern and the **real AP Statistics least-squares sample** the app's templates use (practice-time vs. free-response score; slope 0.72; the influential point) — authentic content, not edu-filler. This beat *is* the demo, the proof, and the hook.
2. **Beat 2 — the input→output loop (a scripted showcase, NOT a second live engine).** One story: *throw your real, messy work at it, get back clean study material.* Bring-your-own-question and photograph-your-handwritten-work (input) → hints → topic-level notes (output), shown as a pre-baked, stepped-through example. Lightly interactive at most; not a second live sandbox.

**Fidelity tiering (hard).** Exactly **one** fully-live sandbox — Beat 1. Everything else is scripted showcase.

**The trial gate is the demo's front porch.** The live hero runs on a pre-loaded question. The moment the experience turns personal and unbounded — *upload your own question, switch to your subjects, save these notes* — is exactly where **"Start your 7-day trial"** fires. Demo → trial → buy should read as one continuous motion, not three separate asks.

**Device (hard).** The app is laptop-first, but this page must **convert on a phone.** Tier by device: **desktop gets the live sandbox; mobile gets the scripted showcase**, CTA prominent on both. Include a **buy-on-phone → use-on-laptop handoff** (e.g. "we'll email you a link to open on your laptop" / continue-on-desktop) so a phone signup is not stranded from where the product works.

**Proof (hard).** There are no testimonials, quotes, or proof points yet, and none may be invented. The live demo carries credibility. Leave a **graceful, empty-for-now slot** where real proof will drop in later without a redesign — but ship these directions with no proof band and no median social-proof section.

## What each direction owns (the variable under test)

- **Layout & composition** — how the two beats are arranged and sequenced down the page.
- **Motion & narrative** — how the page reveals and moves as a student scrolls/acts; the scoped, named motion exception above.
- **Scroll choreography & the trial-gate placement** — where and how the "Start your 7-day trial" moment is reached.
- **Framing of the live hero** — how the Open Hand sandbox is introduced and bounded before the gate.

Everything in the design-system binding and the brief is fixed. The four items above are yours to invent, and must genuinely differ across the three directions.

## Render settings

Chromium headless, `waitUntil: 'load'`, awaited `document.fonts.ready`.
- **Desktop:** `viewport { width: 1440 }`, **full-page** capture (the home page scrolls — capture the whole page, not a 900px crop). `deviceScaleFactor: 1`.
- **Mobile:** `viewport { width: 390 }`, full-page capture, `deviceScaleFactor: 2`.
- Fonts load from the token `fonts.css`; render with network access or the declared fallbacks substitute.
- **Size:** each PNG under 500 KB (policy §7); total under 10 MB. If a PNG exceeds 500 KB, optimize with `pngquant` / `oxipng` / `zopflipng` — do not change viewport or format. If your surface cannot render PNGs, deliver the three `home.html` files and say so; the steward renders the PNGs at these settings.

## What to record in `manifest.md`

- Per direction: its SSoT seed string and the layout / motion-narrative / scroll model it derived.
- Per direction: how it composes the two-beat spine, where the trial gate fires, and how the mobile scripted-showcase tier differs from the desktop live tier.
- Per direction: the disqualifier self-check result (why it is not the median; confirmation of exactly one live sandbox, no invented proof, no drawn logo).
- Token conformance: confirmation that only semantic aliases were used, no hardcoded hex, colour ownership respected, earned/lost anchors shape-distinguishable without hue, square corners held; and the named motion exception (what moves, why it serves the demonstration).
- The AP Statistics sample used in the live hero (so it stays consistent), and confirmation the content is the real least-squares example, not edu-filler.
- The render command and viewports.

Keep the manifest a plain record. It selects nothing and ranks nothing.

## Hard constraints (governance — from charter and policy)

- **Advisory. Selects nothing.** This packet builds three directions for comparison; it does not choose a winner, rank them, or mark the track Done. Track Done is David's alone.
- **Design-system conformance is hard**, per the binding above — this is the whole "extension, not sibling" premise.
- **Help, don't vend.** The Open Hand hero teaches why points move; it never presents itself as an answer to copy. Diagnosis → reasoning → move, never a fill-in key.
- **Real AP content only** in the live hero; do not soften into generic edu-copy.
- **No gamification** (no streaks, XP, badges, confetti, leaderboards) and **no subscription/paywall-nag patterns.** The 7-day trial is offered once, cleanly.
- Laptop **and** phone must both work, per the device tier.

## Model assignment for this run

- **Visual Designer = Codex / GPT-Sol (OpenAI)**; Creative Director / Orchestrator = Claude (David, 2026-09-23). The divergence lane requires a model named at dispatch (`publish --dispatch --model …`); `model:` stays `unspecified` in this draft and is set at dispatch.
- **No Critic and no Chaos Agent on this project** (David, 2026-09-23). There is therefore **no independent decorrelated review pass** after generation — David reviews the three directions directly and decides Done. That makes the **SSoT anti-convergence guard above the primary defense against the three collapsing into one skin** — enforce it, and record each seed. If the three do come back too similar, the divergence-lane fallback is to re-run split across two labs (`ARCHITECTURE.md` §5), not to add a Critic.

## Files / Systems Affected

- Create: the ten files in `outputs` under `projects/project-frontdoor/visual/mocks/home-directions/`.
- Modify nothing else. In particular, do not edit `design-system/` (it is a read-only pinned mirror) or `charter.md`.

## Open Risks / Blockers

- **P1 — Median collapse.** The failure this lane exists to catch. Enforce the SSoT guard and the disqualifier self-check; diverge on structure, not skin.
- **P2 — Off-system drift.** It is tempting to reach past the tokens for a "marketing-y" colour or a rounded card. Don't — the coherence with the restyled siblings is the point. Off-system is a failed direction.
- **P3 — Two live sandboxes.** Only Beat 1 is live. If Beat 2 creeps toward a second live engine, it breaks the fidelity tier and the trial boundary.
- **P4 — Inventing proof.** No testimonials, logos, or numbers that don't exist. The graceful empty slot only.
- **P5 — Telling instead of showing.** A hero that leads with a headline and a paragraph has already lost. Lead with the live Open Hand.
- **P6 — Mobile as an afterthought.** The buyer may convert on a phone; the mobile tier and the laptop handoff are hard, not optional.

## Do Not Touch / Do Not Read

- **Do not touch:** anything not in `outputs` — `charter.md`, `design-system/` (read-only mirror), `config/`, `docs/`, and other `projects/`.
- Deferred/out of scope: production Lovable build (a later step — this is directions only), app naming (deferred), any parent-facing surface.

## Return path

- **If dispatched to Codex (branch intake, the charter default):** commit only the ten declared outputs on branch `codex/project-frontdoor-001-visual-designer` and report branch + SHA. The steward (`claude-code`, from a clone that can push `main`) lands them with `scripts/publish`; the delivery receipt is the completion. Do not report the work complete on your own authority.
- **If instead run on Claude Design (no repo write):** return exactly one AIRLOCK RETURN per `prompts/UNIVERSAL_SESSION_PROMPT.md` — one FILE block per `home.html` and `manifest.md`, one ASSET block per PNG with its export/serve URL (or deliver HTML only and say so; the steward renders the PNGs).

## Next Expected Output

- Three home-page directions, each a self-contained `home.html` that works on desktop and phone, each composing the two-beat spine (live Open Hand hero + scripted input→output loop) inside the design system and off the median, plus a desktop and a mobile render each.
- `manifest.md` recording the per-direction SSoT seeds, spine composition, trial-gate placement, device tiering, disqualifier results, token-conformance confirmations, the AP sample used, and the render command.
