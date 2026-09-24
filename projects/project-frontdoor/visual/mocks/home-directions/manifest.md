# Project Frontdoor — Marketing Home Directions 003

Status: advisory directions for comparison. This manifest selects and ranks nothing. Handoff 003 supersedes the returned 001 delivery.

## Direction 01 — The visible move

- Fresh SSoT seed: `380c846d7ac5`.
- Derivation: `380` became an opening split between a large promise and a compact comparison; the mirrored hard/soft characters became “worksheet ends / Cramapple continues”; `d7ac5` became a five-beat visual rhythm that resolves into the trial gate.
- First-view orientation: the opening states that Cramapple is for high-school AP students, defines it as practice that turns real questions into visible scoring, hints, and notes, and contrasts that loop with the dead end of a right/wrong worksheet. The first screen then labels the embedded interaction “Try what Cramapple does · no sign-in.”
- Marketing structure: an orientation-and-difference opening flows into a wide, clearly bounded product demonstration. Beat 2 is a horizontal input → reasoning → notes pipeline.
- Demo framing: no unit, lesson, progress, or logged-in navigation appears. The AP Statistics exercise is introduced from outside the product as a real sample whose rubric reacts to the prospect’s answer.
- Trial gate: after the scripted pipeline, at the exact moment “your questions / saved notes / other subjects” would become personal and unbounded.
- Device tier: desktop receives the one live sandbox. Mobile receives a scripted graph-and-rubric proof followed by the same pipeline and phone-to-laptop bridge.
- Disqualifier self-check: passes. It is a marketing page, not an app screen; a stranger can identify what, who, and why-not-a-worksheet in the first view. Its difference ledger and product-specific pipeline cannot become a generic SaaS page by swapping a logo. Exactly one live sandbox; no invented proof; no drawn logo.
- Motion exception: `rubric receipt`. Only an explicit check action changes the rubric rows and tally, instantly. Scrolling carries the narrative; no decorative transition or easing is added.

## Direction 02 — The AP reader

- Fresh SSoT seed: `b3c4bc9ee83d`.
- Derivation: alternating `b3c4` produced a high-contrast threshold between orientation and sample; the double `e8` became a three-column “prompt / evidence / scorer” demonstration; the final `3d` became three staggered depth stations.
- First-view orientation: the dark opening names the student audience, identifies Cramapple as AP practice that shows its scoring, and explains the difference from drill apps: rubric visibility, missing-link diagnosis, and reusable reasoning. The sample is labeled as a scored example with no account.
- Marketing structure: a high-contrast value threshold opens into a three-column demonstration. Beat 2 descends through a staggered staircase: actual page, missing link, retained topic notes.
- Demo framing: “What you’re trying” and “Why this is different” sit beside the sample; “What the scorer sees” names the rubric surface. There is no app chrome, course position, or in-session progress.
- Trial gate: after the final stair, where the prospect is invited to bring a personal question, choose a subject, and retain the notes.
- Device tier: desktop receives the live prompt/evidence/scorer demonstration. Mobile receives a scripted scoring preview and vertically stacked staircase, plus the emailed laptop-continuation promise.
- Disqualifier self-check: passes. It orients a stranger before the product sample and reads as a marketing argument made through scoring, not as a logged-in workspace. The scorer window and stepped artifact journey are product-specific, not feature cards. Exactly one live sandbox; no invented proof; no drawn logo.
- Motion exception: `point-trail state`. The live sample changes only after the prospect requests a scorer read; the state snap is immediate. The staircase is revealed by ordinary user-controlled scroll.

## Direction 03 — More useful than a red X

- Fresh SSoT seed: `f1e5ff0382da`.
- Derivation: the paired `ff` produced a permanent side-by-side opening—orientation at left, showroom at right; `0382` became three explicit value rows feeding an eight-part sample surface; the closing `da` became a simultaneous messy/ready spread.
- First-view orientation: the left rail says Cramapple is AP practice for students, explains that it reads reasoning against the rubric, supplies help at the missing link, and keeps the useful part as notes. Three rows make the input → score → next-time distinction visible before the sample.
- Marketing structure: orientation and demonstration share the first viewport rather than occurring sequentially. Beat 2 is a simultaneous before/after spread: the homework page normally lost versus the reasoning available on Friday.
- Demo framing: the right surface is explicitly a “60-second Cramapple sample” and “Try the product from the outside.” No logged-in navigation, subject switcher, lesson count, or progress tally appears.
- Trial gate: beneath the before/after spread, when upload, subject switching, and saved notes become the visitor’s own workspace.
- Device tier: desktop presents orientation and the live showroom side by side. Mobile stacks the complete orientation above a scripted sample, then the before/after narrative and phone-to-laptop handoff.
- Disqualifier self-check: passes. It is unmistakably an acquisition page that frames and sells the product; a stranger gets what, who, and why-not-a-worksheet in the first view. The persistent orientation/showroom split and AP-answer transformation are not generic SaaS scaffolding. Exactly one live sandbox; no invented proof; no drawn logo.
- Motion exception: none beyond instantaneous, user-requested scoring state. The direction tests a still first-view showroom and a scroll-revealed comparison.

## Shared conformance record

- Each HTML file imports the pinned `design-system/styles.css` entry point and consumes semantic surface, text, rule, cap, action, and status aliases. No mock contains a hardcoded hex value or consumes a raw color-scale variable. Typography, spacing, and elevation use the supplied role tokens.
- The missing semantic masthead alias found in 001 remains. These mocks use the semantic primary-action orange alias for the masthead as well as the single trial action; this preserves orange’s fixed ownership without patching the read-only token mirror.
- Orange is limited to masthead, demonstration boundary, trial threshold, and the one primary trial action. Blue marks earned rubric evidence. Maroon marks lost evidence. Purple holds student work. Yellow appears only for the hint and its influential-point callout. Green names the retained reference notes.
- Earned and lost states are readable without hue: `✓` versus `✕`, solid versus dashed heavy edges, and explicit text. Corners remain square. Student-readable content stays at or above 16px.
- Every direction contains exactly one fully live sandbox on desktop. Beat 2 is a pre-baked narrative, never another grading engine. Mobile intentionally receives a scripted demonstration rather than the laptop interaction.
- Each page contains one `Start your 7-day trial` action at the personal/unbounded boundary and a clear email-link handoff for a phone buyer continuing on a laptop.
- Each direction reserves an empty structural slot for future verified student proof; no quote, logo bar, user count, outcome statistic, or testimonial was invented.

## AP Statistics sample

All three directions use the real least-squares example: weekly practice time on the x-axis, free-response score on the y-axis, a positive moderately strong roughly linear association, slope `0.72`, and a low-practice/higher-than-expected influential point that pulls the fitted line and flattens its slope. The rubric criteria are describe the association (`+2`), interpret the slope in context (`+1`), and explain influence (`+1`). The interaction diagnoses missing reasoning; it does not reveal a response to copy.

## Rendering

Chromium headless procedure:

```text
open file URL; viewport 1440×900; deviceScaleFactor 1; waitUntil load; await document.fonts.ready; screenshot fullPage → home-desktop.png
open file URL; viewport 390×844; deviceScaleFactor 2; waitUntil load; await document.fonts.ready; screenshot fullPage → home-mobile.png
```

All six deliverables are PNG, use the required widths and device scale factors, and are kept below 500 KB each.
