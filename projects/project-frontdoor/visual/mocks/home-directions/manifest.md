# Project Frontdoor — Home Directions 001

Status: advisory directions for comparison. This manifest selects and ranks nothing.

## Direction 01 — Score desk

- SSoT seed: `5499aaa3b8e3`.
- Derivation: the repeated `a` suggested an anchored side rail; `5499` became a wide evidence field plus narrow, sticky score desk; the terminal `e3` became a second beat that changes from two columns into a three-step input/output sequence.
- Structure: the live Open Hand is an asymmetric question-and-score desk. The AP Statistics graph, answer field, hint, and checking interaction occupy the wide working surface; the rubric remains physically beside the work. Beat 2 becomes a left-indexed transformation ledger: real work in, reasoning through, topic notes out.
- Narrative and scroll: the score rail stays in view while the student works. The page then crosses a heavy orange rule and changes from live assessment to a scripted transformation record.
- Trial gate: after the scripted input/output example, exactly where the interface proposes using the visitor's own work, subjects, and saved notes.
- Device tier: desktop receives the one live answer/rubric sandbox. Mobile replaces it with a scripted graph-and-rubric preview and carries the same transformation story and phone-to-laptop handoff.
- Disqualifier check: passes. It is a working score desk followed by a transformation ledger, not a headline hero, feature-card grid, logo bar, testimonial band, or repeated CTA sequence. Exactly one live sandbox; no invented proof; the mark is the Bungee wordmark only.
- Motion exception: `score-rail lock`. User-controlled scrolling pins the rubric long enough to compare work and points; there is no timed animation or eased transition, and `--motion-duration` is not redefined.

## Direction 02 — Follow the point

- SSoT seed: `861c8f0277c4`.
- Derivation: alternating high/low characters became a vertical score spine; `0277` became a three-station relay crossed by one line; the final `c4` became a four-point tally that accumulates as reasoning is traced.
- Structure: the live Open Hand is organized around a narrow vertical score spine, with the prompt spanning above a graph/work split. Beat 2 is a horizontal relay of one artifact through photograph, hint, and notes stations.
- Narrative and scroll: the point trail begins in the hero's vertical spine, then turns ninety degrees into a three-station line. The student follows one piece of work rather than browsing a feature menu.
- Trial gate: after station three, when the pre-baked artifact would become the visitor's own upload and workspace.
- Device tier: desktop receives the live response and reactive rubric. Mobile receives a two-step scripted preview, followed by vertically stacked relay stations and the phone-to-laptop handoff.
- Disqualifier check: passes. Its score spine and literal artifact relay are product-specific and cannot become a generic SaaS page by swapping a logo. Exactly one live sandbox; no invented proof; no drawn logo.
- Motion exception: `relay travel`. The apparent movement is produced only by the visitor's scroll across fixed stations; state changes in the sandbox are instantaneous and the global zero-motion tokens remain intact.

## Direction 03 — Open evidence table

- SSoT seed: `a31a6b491ffb`.
- Derivation: the mirrored `a…a` produced an evidence table with prompt and graph held together; `491` became a wide graph over a four-point rubric strip; the paired `ff` became a strict before/after transformation split.
- Structure: the live Open Hand is one large outlined evidence table: prompt in a narrow margin, graph and answer in the main field, rubric as a full-width scoring edge. Beat 2 is a 50/50 messy-work versus clean-notes comparison.
- Narrative and scroll: the page opens as a single inspectable object, then unfolds into a simultaneous before/after spread rather than a sequence of cards.
- Trial gate: in the bridge beneath the before/after spread, precisely when upload, subject switching, and saved notes become personal.
- Device tier: desktop receives the live evidence table. Mobile receives a scripted compact graph with shape-distinct scoring states, then the stacked before/after story and phone-to-laptop handoff.
- Disqualifier check: passes. The evidence-table hero and paired work transformation are inseparable from the Open Hand product behavior. There is exactly one live sandbox, no social proof, and only the Bungee wordmark.
- Motion exception: none. This direction tests stillness; all live state changes are immediate and the narrative is revealed by ordinary scrolling.

## Shared conformance record

- The HTML files import the pinned `design-system/styles.css` entry point and consume semantic surface, text, cap, action, status, and rule aliases. No hex value is hardcoded in a mock. Typography, spacing, and elevation use the role tokens supplied by their token modules.
- The mirror does not expose a dedicated semantic masthead alias. The mocks therefore use the semantic primary-action orange alias for the masthead as well as the single trial action; this preserves orange's fixed ownership without consuming a raw color-scale variable. This missing masthead alias is a token-contract finding, not patched locally.
- Orange is limited to masthead, question boundary, structural trial threshold, and the one primary trial action. Blue marks earned rubric evidence. Maroon marks lost evidence. Purple holds student work. Yellow is used only by a hint or the influential point that the hint calls out. Green names the reference/notes output.
- Earned and lost states remain distinguishable without hue: `✓` versus `✕`, solid versus dashed heavy edges, and state text. All corners remain square. Student-readable content stays at or above 16px.
- Each page contains one fully live sandbox on desktop only. The second beat is pre-baked and non-grading. Mobile intentionally receives a scripted version of Beat 1 rather than the laptop interaction.
- Each page contains one `Start your 7-day trial` action at the personal/unbounded boundary and explicitly promises an emailed continue-on-laptop link for phone buyers.
- Each direction includes an empty structural slot for future verified outcomes; no testimonial, logo, quote, user count, or performance claim was invented.

## AP Statistics sample

All directions use the same real least-squares example: weekly practice time on the x-axis, free-response score on the y-axis, a positive moderately strong roughly linear association, slope `0.72`, and a low-practice/higher-than-expected influential point that pulls the fitted line and flattens its slope. The three rubric criteria are: describe the association (`+2`), interpret the slope in context (`+1`), and explain influence (`+1`). The interaction teaches the missing reasoning move; it does not reveal a response to copy.

## Rendering

Chromium headless render procedure:

```text
open file URL; viewport 1440×900; deviceScaleFactor 1; waitUntil load; await document.fonts.ready; screenshot fullPage → home-desktop.png
open file URL; viewport 390×844; deviceScaleFactor 2; waitUntil load; await document.fonts.ready; screenshot fullPage → home-mobile.png
```

All six images are PNG, use the required widths and device scale factors, and are optimized below 500 KB each.
