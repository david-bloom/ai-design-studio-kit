> Historical: Handoff 001 output, rejected by David 2026-09-16 (see handoff 002); kept because later packets cite it.

# Visual/UI Directions — Open Hand

> **Status: advisory exploration, not final or approved.** These directions are proposals for David's review. Only David can pass the Visual Design Hard Gate or mark the track Done.

## Shared product contract

Every direction below keeps the same learning sequence: **see the scoring hand → attempt the question → reveal rubric-lit feedback → make one useful next move**. The interface teaches how points work without vending an answer. At laptop width, the question remains the visual center; navigation and secondary detail yield before the working area does.

Across all directions:

- **Won points** and **commonly lost points** each receive one exclusive anchor. Those anchors are never reused for navigation, subjects, completion, or generic status.
- A compact default serves the low-decision learner; an optional **Open details** control reveals denser rubric language, alternate representations, and attempt history for the high-control learner. This is progressive disclosure within one system, not two branded modes.
- Mathematical expressions use a true math renderer and tabular numerals. Graphs get titled axes, legends, patterns in addition to color, and an adjacent data-table view. Extended-response fields preserve a comfortable 65–75-character line length.
- Glossary terms carry a quiet dotted underline; their popovers open beside the term with a one-sentence definition, a tiny subject-specific visual when useful, and a keyboard-accessible path back to the question.
- Motion is brief and causal. Rubric feedback illuminates the exact scoring criterion affected; nothing showers confetti, spins a prize wheel, or punishes a missed day.

---

## Direction 01 — Margin & Measure

**SSoT seed:** `2fd0705690b8dd4c`

**Seed derivation:** Split into `2f / d0 / 70 / 56 / 90 / b8 / dd / 4c`. The alternating low/high values become an alternating wide/narrow editorial rhythm. The repeated `d` suggests margin marks; `70–56–90` becomes a measured vertical scale. This produces a quiet annotated-page system rather than a dashboard.

**One-line concept:** A beautifully typeset field guide where scoring logic lives in the margin and the student's thinking owns the page.

### Visual system

- **Palette:** Paper `#F7F3E8`; Ink `#182523`; Moss `#476A5A`; Mist `#DDE7DF`; won-point anchor **Cobalt Bracket** `#2856D8`; commonly-lost anchor **Persimmon Notch** `#D85C32`; hairline `#C9CEC6`.
- **Type pairing:** **Newsreader** for question stems, topic titles, and reflective feedback; **Inter** for controls, rubric labels, data tables, and metadata. **STIX Two Math** for formulae.
- **Motif / illustration stance:** Fine rules, crop marks, brackets, and small observational ink drawings. Illustration behaves like a useful marginal diagram—not decoration. No rounded mascot art, classroom clip art, faux notebook lines, or paper texture behind working content.
- **Component character:** Mostly square cards with 10px radii, thin rules, generous internal margins, and minimal shadow. Controls resemble precise editorial tabs. Cobalt left brackets mean only “point available/won”; persimmon corner notches mean only “common loss.”

### Open Hand at laptop width

On a 1440px canvas, a 72px left rail holds subject, topic trail, and a restrained session marker (“2 of 5”). The main stage is a 12-column grid with a 7-column question sheet and a 4-column scoring margin separated by a generous gutter.

The question sheet begins with format and estimated time, then presents the complete Statistics or Biology prompt. A graph or data table can expand to the full seven columns; a segmented control swaps **Graph / Data / Accessible summary** without moving the prompt. Formulae sit on the baseline with surrounding prose rather than in ornamental tiles. The response surface stays directly below the prompt, with numeric, written, or upload controls appropriate to the question.

The scoring margin is visible from the start. “This hand is worth 4” heads a vertical stack of compact criteria. Each available point has a cobalt bracket; each common loss has a persimmon corner notch and one plain-language warning. Criteria show *what earns credit*, not the solution steps. A single primary action—**Make your move**—begins the attempt; assistance choices sit under **Need a nudge?** and disclose Hint, Check my work, Walkthrough, and Worked solution with increasing-friction explanations.

After submission, the margin becomes kinetic: brackets fill only beside demonstrated evidence, while a missed criterion receives a restrained persimmon underline. The response and the relevant phrase in the rubric remain in the same viewport. The bottom action is singular: “Strengthen criterion 3,” with “See full feedback” secondary.

### Why it may fit / watch-outs

It offers Learner A density through editorial hierarchy and Learner B a stable, low-choice reading order. It is especially strong for long prompts and written responses. Watch for “premium textbook” stiffness; tactile diagrams and warmer microcopy must keep it a safe haven rather than an assessment document.

---

## Direction 02 — Living Contours

**SSoT seed:** `5a23b65f898844d9`

**Seed derivation:** The seed alternates letters and climbing number clusters (`23 → 65 → 89`), then lands on doubled `44`. Those rises become contour bands and a destination path; the doubled value becomes a stable clearing. The result is spatial memory through topography in navigation, deliberately removed once focused work begins.

**One-line concept:** A subject is a calm landscape of destinations; each study session opens into a distraction-free clearing.

### Visual system

- **Palette:** Cloud `#F5F8F2`; Deep Pine `#173F3A`; Fern `#4D7B58`; Pale Lichen `#DCE9CF`; Lake `#CDE8EA`; won-point anchor **Solar Disc** `#F2B53D`; commonly-lost anchor **Violet Split** `#7557C7`; body ink `#19302C`.
- **Type pairing:** **Manrope** for the interface and dense information; **Fraunces** for destination names and large question openings. **STIX Two Math** for formulae.
- **Motif / illustration stance:** Abstract contour lines, sectional cuts, tiny ecological or statistical “specimens,” and soft fields of flat color. Never literal mountains, treasure maps, flags, avatars, or progress-as-conquest.
- **Component character:** Broad organic panels, pill-shaped wayfinding only, clipped-flat working cards, and subtle elevation through color rather than shadow. The solar disc exclusively marks points won/available; the violet split-line exclusively marks common losses.

### Open Hand at laptop width

The overview uses the full 1440px width as a subject terrain: broad topic regions, labeled landmarks, and one gently pulsing recommended destination. Mastery is shown as increasing contour definition—not territory captured. Learner A can toggle a compact layer showing skill codes, confidence, and question counts; the default shows three decisions at most: **Continue**, **Recommended next**, and **Choose a place**.

Selecting a topic performs a short zoom into a “clearing,” then the contour navigation disappears. In focused work, a 64px top bar retains only Back to terrain, topic name, and session progress. The Open Hand screen is a centered 1040px stage split 60/40: prompt and response on the left; visible scoring mechanics on the right.

The right side reads as a vertical sectional cut. Each scoring layer has a solar disc with its point value and a short criterion. Violet split-lines expose common fault lines such as “names correlation without interpreting direction and strength.” A thin connector can highlight which prompt phrase a criterion concerns, but only on hover/focus to avoid visual noise.

Biology imagery occupies a dedicated figure well with zoom, labels toggle, and text alternative; Statistics graphs use the same well with axis and table tools. Extended writing opens the left side to 70% width while the scoring section collapses to a persistent 280px strip. **Start my attempt** is the only filled action. Assistance rests in a bottom drawer, ordered from least revealing to most revealing.

After grading, earned solar discs rise a few pixels and settle beside matching evidence in the student's response. Violet splits mark only a repair opportunity. The interface offers one destination-sized next move: “Add the biological mechanism,” followed by the option to inspect the full scoring map.

### Why it may fit / watch-outs

This direction gives the strongest literal support to spatial-memory navigation while protecting focus inside sessions. It can make return visits feel situated rather than streak-driven. Watch for nature-app familiarity and metaphor overload; the working mode must remain crisp, and terrain language should never obscure academic labels.

---

## Direction 03 — Signal Bench

**SSoT seed:** `547f3f6ddaf47a28`

**Seed derivation:** Repeated `f` and `d` produce high-contrast signal peaks; `47` repeats in reverse proximity, suggesting calibration marks and mirrored comparison. The terminal `28` becomes a restrained 2:8 accent-to-neutral ratio. The result is a humane scientific instrument: exact, responsive, and low-chrome.

**One-line concept:** A calm analysis bench that makes scoring evidence behave like a precisely calibrated signal.

### Visual system

- **Palette:** Warm White `#FAFAF7`; Carbon `#161A1D`; Steel `#59636B`; Cool Panel `#E9EEF0`; Electric Blue `#1769E0`; won-point anchor **Lime Tick** `#8CBF26`; commonly-lost anchor **Magenta Gap** `#C83E76`; grid `#CAD2D5`.
- **Type pairing:** **IBM Plex Sans** for interface and prose; **IBM Plex Mono** for data, point values, annotations, and skill codes. **STIX Two Math** for formulae.
- **Motif / illustration stance:** Calibration ticks, signal traces, specimen frames, and compact data glyphs. Illustration is diagrammatic, labelled, and testable. Avoid dark “pro dashboard” styling, glassmorphism, laboratory clichés, and neon overload.
- **Component character:** Rectilinear modules with 4px radii; strong typographic hierarchy; no decorative shadows. The lime tick means only “credit evidenced.” The magenta broken interval means only “credit commonly lost.” Blue remains interactive and therefore never carries scoring meaning.

### Open Hand at laptop width

At 1440px, a 240px collapsible control rail lists the current topic, question queue, and session length. The 760px central bench holds the question and answer. A 360px evidence panel is always visible. Learner B sees labels and a single recommended action; Learner A can expand a **Bench data** subpanel for rubric codes, confidence, timing, and attempt comparison without changing the primary composition.

The question header is a compact instrument readout: subject/topic, format, points, and estimated time. Below it, the prompt flows in a plain white field. Graphs are large, high contrast, and manipulable with keyboard-accessible crosshairs; Biology figures can expose or hide labels without revealing answers. A response editor offers equation entry, units, table construction, image upload, or long-form prose according to question type—never all tools at once.

The evidence panel opens with **Before you answer: what the scorer can see**. Each criterion is a horizontal channel: plain-language criterion, point value, lime empty tick, and optional magenta gap warning. A small “Why this matters” disclosure explains rubric intent. The student's first action is **Run attempt**; Hint, Check, Walkthrough, and Solution appear behind a clearly ordered Assistance menu whose copy states what each reveals.

On grading, the student's response becomes the active signal. Lime ticks illuminate beside exact evidence; a magenta gap opens where evidence is absent or ambiguous. Feedback is one sentence first (“Interpret the slope in context, including units”), then an optional trace view links prompt → response → criterion. This makes the engine's feedback feel kinetic without scoring theater.

### Why it may fit / watch-outs

This is the densest and most precise direction, ideal for graphs, formulae, and transparent rubric feedback. It can empower Learner A without burying Learner B because advanced telemetry is opt-in. Watch for coldness and “exam console” anxiety; warm white, humane language, and generous vertical spacing are essential.

---

## Direction 04 — The Pinboard

**SSoT seed:** `a9386d52fa03f924`

**Seed derivation:** Reading the seed as coordinates—`a9 / 38 / 6d / 52 / fa / 03 / f9 / 24`—creates scattered points with two near-edge extremes (`fa`, `f9`) and one near-origin (`03`). Connecting them suggests a constellation of evidence pinned around a central artifact. The direction becomes spatial composition through movable, purposeful cards rather than a linear worksheet.

**One-line concept:** The question lies face-up at the center while scoring clues, evidence, and the student's move are arranged around it like a thoughtful studio pinboard.

### Visual system

- **Palette:** Plaster `#F2EFE9`; Soot `#252322`; Clay `#B96F50`; Faded Sky `#AAC8D4`; Sage `#9EB59B`; won-point anchor **Golden Pin** `#D89A18`; commonly-lost anchor **Indigo Fold** `#514A8F`; white card `#FFFEFA`.
- **Type pairing:** **Atkinson Hyperlegible Next** for all functional reading; **Instrument Serif** for large prompts, unit openings, and reflective feedback. **STIX Two Math** for formulae.
- **Motif / illustration stance:** Flat pinned cards, thread-like relationships, cropped subject imagery, and occasional hand-cut geometric silhouettes. Nothing is rotated more than 0.5°, and content cards never imitate messy handwriting or scrapbook clutter.
- **Component character:** Layered cards with hard offset shadows and visible attachment points. The golden pin exclusively denotes a point that can be or was earned; the indigo folded corner exclusively denotes a common place points are lost.

### Open Hand at laptop width

At 1440px, a slim 64px utility rail sits left while a broad 1280px board fills the window. The sample question is a 720px central white card. Two narrower scoring cards are pinned to its right edge, visibly related but not covering it. A low response tray spans beneath the question and can grow upward for extended writing.

The Open Hand begins already arranged—no drag-and-drop prerequisite. The central card shows the full prompt and any graph or image. Golden pins on the right correspond to earning criteria; indigo folded corners open to reveal common losses. Fine connector threads appear only when a criterion is focused, landing on the relevant phrase, graph region, or response evidence. This literal face-up arrangement makes the “hand” feel inspectable without using playing-card graphics.

For Statistics, a data card can be pulled beside a graph card for comparison. For Biology, a figure card can sit beside a concise mechanism card. On smaller laptop widths, these stack into a fixed reading order: prompt, scoring hand, response. A **Focus board** control hides every card except the prompt, one current criterion, and the response tray; **Show full board** restores density. This creates one coherent interface with two cognitive loads rather than two named learner modes.

After **Make my move**, earned golden pins transfer visually from rubric cards to the exact response evidence. An indigo fold opens only on the highest-leverage repair. The next action is physically adjacent to that fold: “Clarify the causal link.” Full grading notes stay tucked behind the card rather than arriving as a wall of text.

### Why it may fit / watch-outs

This direction makes Open Hand most tangible and gives strong spatial anchors without turning curriculum navigation into a game map. It may feel personal and voluntary across a semester. Watch for visual busyness, especially with long Biology prompts; strict alignment, limited simultaneous cards, and the Focus board state are non-negotiable.

---

## Comparative read for review

| Direction | Primary axis | Information density | Spatial-memory expression | Emotional register | Principal risk |
|---|---|---:|---|---|---|
| Margin & Measure | Editorial page + scoring margin | Medium-high | Chapters, margins, stable page geography | Reflective, composed | Too bookish or assessment-like |
| Living Contours | Terrain overview + clearings | Medium | Strongest in navigation; absent in focus mode | Restorative, optimistic | Metaphor familiarity/overreach |
| Signal Bench | Instrument panel + evidence channels | Highest, progressively disclosed | Calibrated topic/skill coordinates | Precise, capable | Coldness or test anxiety |
| The Pinboard | Central artifact + evidence cards | Variable via Focus board | Strong within the working surface | Tactile, personal | Clutter under complex content |

These are intentionally divergent starting points, not a recommendation to merge all four. A next round should first select one direction—or name a precise hybrid hypothesis—then test it with one Statistics graph-interpretation prompt and one Biology extended-response prompt at realistic content length.
