# Visual/UI Register Directions 014 — Teen-Register Re-Divergence + Control

> **Status: advisory exploration — not final, selected, approved, or ready to ship.** These four written directions test visual register at the Open Hand working screen. They do not select a direction, alter the product engine, or mark any track Done. David is the sole Done Decider.

## Shared frame and non-negotiables

All four directions describe the same 1440×900 laptop unit: a sample question is face-up with its scoring mechanics visible, followed by the student's move. Information architecture is intentionally familiar enough to compare register rather than mistake novelty for audience fit.

Across the set:

- **Points earned / available** and **points commonly lost** each have one exclusive visual anchor. Those anchors are never reused for navigation, subjects, actions, generic status, or decoration.
- The action color is separate from both scoring anchors.
- Assistance stays ordered and explicit: **Nudge** (one question to ask yourself) → **Check one link** (checks one relationship in the learner's own work) → **Walk the reasoning** (reveals the reasoning sequence, not the response) → **Study a worked solution** (a complete separate example, with a productive-struggle warning).
- Learner B receives one obvious next action, a bounded 10–20 minute session, and only the active criterion by default. Learner A can pull rubric language, exact values, alternate representations, attempt comparison, and the full criteria map into the same screen.
- Real AP content keeps its intellectual and typographic density. Graphs have accessible data-table equivalents; equations use dedicated math type; extended responses retain a comfortable reading measure.
- No streaks, points-as-rewards, mascots, celebration loops, subscription prompts, or answer-vending shortcuts appear.

## Direction 1 — Signal / Proof

> **Direction status: advisory / not final.**

**SSoT seed:** `V8-ember/zine-41-KITE`

**Seed derivation:** `V8` suggests forward pressure without frantic motion, setting an **assertive, candid** emotional temperature. `ember` forces a **hot, saturated** palette rather than the project's established cool fields. `zine-41` maps to an **asymmetric editorial proof-board**: cropped modules, hard alignments, and deliberately uneven negative space instead of a centered stack, full-width scene sequence, folio, or three-column cabinet. `KITE` supplies lift—the layout should feel light despite its visual confidence. Result: **assertive-candid + hot-saturated + asymmetric proof-board**.

**One-line concept:** A bold editorial proof-board turns the rubric from institutional fine print into visible evidence the learner can inspect, challenge, and use.

### How it metabolizes the updated register brief

- **High contrast:** true Ink Black against Gallery White forms the permanent reading ground; color appears in bounded, high-energy blocks rather than washing the whole screen.
- **Generous white space:** the largest shape is an unoccupied white field around the question and evidence. Modules never tile edge to edge; the asymmetry depends on air.
- **Warm accents:** Persimmon and Marigold give the product its identity and pace. Neither carries scoring meaning.
- **Black sans-serif headers:** extra-black grotesque headlines are short, direct, and editorial. Long academic reading stays in a quieter sans.
- **Inspiration principles:** from **Depop**, the confidence of an authored listing and the sense that the student owns the work in front of them; from **Instagram**, a decisive crop and strong figure/ground that makes one piece of evidence feel worth stopping on. No marketplace chrome, social metrics, feed, likes, or borrowed palette appears.

### Visual system

| Token | Hex | Use |
|---|---:|---|
| Gallery White | `#FFFDF8` | dominant ground and negative space |
| Ink Black | `#111111` | headlines, primary text, hard rules |
| Persimmon | `#FF5A36` | primary actions and active manipulation only |
| Marigold | `#FFB800` | identity blocks and neutral emphasis only |
| Electric Lilac | `#A78BFA` | subject-neutral reference tint only |
| Earned Cobalt | `#2457E6` | earned/available scoring anchor only |
| Lost Plum | `#7A244F` | commonly-lost scoring anchor only |

**Palette map:** hot and saturated at the accent layer; neutral and extremely high-contrast at the reading layer. It is intentionally warmer, louder, and whiter than Options 01–07.

**Type pairing:** **Archivo Black** for two-to-six-word headers; **Inter** for interface, prompts, and long responses; **STIX Two Math** for equations and statistical notation. The previous set used Archivo Black inside a full-width scene system; here it is recast as sparse editorial signage inside an asymmetric proof-board, not as poster narration.

**Exclusive scoring anchors:** an **Earned Cobalt bracket** (`[—]`) wraps only evidence that earns or can earn a rubric point; a **Lost Plum missing-corner frame** marks only the exact gap where credit is commonly lost. Persimmon drives actions and never scores. Marigold is identity emphasis and never scores.

### Structure: new asymmetric proof-board

At 1440×900, a 96px left mast carries only the subject, topic, and a plain-text session position. The remaining canvas uses a 12-column grid but occupies it unevenly:

- A 7-column, 640px-high **proof field** begins at column 2. It holds the sample prompt, graph or figure, and model response on white.
- A 3-column **rubric strip** is offset upward at the right edge. Only the active criterion is expanded; the other criteria are black text labels separated by air, not cards.
- A 2-column-wide warm identity block sits behind the screen title, never behind academic prose.
- A low **Your move shelf** runs from columns 5–12. It is initially a 72px lip; opening it creates a full-width response surface without moving the sample's decisive evidence off-screen.

The key register move is not collage decoration. It is the blunt juxtaposition of one very large proof, one small criterion, and a great deal of white—an editorial hierarchy that says “this is the thing worth seeing.” Modules align to a strict grid and use square corners; there is no scrapbook texture.

### Open Hand example — AP Statistics

The face-up sample asks:

> A school compares nightly sleep and next-day reaction time for 28 students. Describe the association, then explain how the highlighted high-leverage observation affects the least-squares regression line.

The scatterplot occupies 620×390px with labeled units and point shapes that do not rely on color. A sample response sits directly below it. The Earned Cobalt bracket wraps “moderately strong, negative, roughly linear association” and the contextual slope interpretation. The Lost Plum missing-corner frame sits where a comparison response says only “the point changes the line” but fails to explain leverage and direction.

The Persimmon action **Test the point** opens one bounded control. Before the point moves, the student predicts whether the slope will become more or less negative. Moving it updates the fit, slope, correlation, residual, and accessible data table. The system then asks the student to complete one sentence in context; it never supplies the interpretation.

Opening **Your move** preserves the graph's size while exposing a new dataset about study breaks and error rate. The sample annotations disappear. The response shelf asks first for a one-line prediction, then expands to the full written response. Learner B sees one criterion and one Persimmon action. Learner A opens **Show the full proof** to reveal exact rubric language, all criteria, raw values, and the before/after fit comparison.

**Biology transfer:** the same proof-board presents an enzyme-rate graph and a catalase-control response. The figure remains the dominant proof; the rubric strip brackets valid control evidence and frames the missing causal link. No layout region changes meaning between subjects.

### Register risk to test

The candid editorial stance could feel performatively trendy or visually fragmented. Test whether students read the asymmetry as ownership and confidence or as a fashion surface placed over schoolwork. A failure looks like attention landing on the warm blocks before the graph.

---

## Direction 2 — Daybreak Relay

> **Direction status: advisory / not final.**

**SSoT seed:** `2C-sunline/relay-88-OPEN`

**Seed derivation:** `2C` sets a **kinetic, purposeful** emotional temperature: energizing, but closer to warm-up focus than hype. `sunline` selects a **sun-warm, high-luminance** palette with narrow bursts of saturation. `relay-88` derives a **three-beat horizontal relay** in which Sample, Read the score, and Your move are simultaneously locatable but only one is active. `OPEN` forces wide gutters and prevents the relay from becoming a cramped stepper. Result: **kinetic-purposeful + sun-warm luminous + horizontal relay**.

**One-line concept:** The learner moves through three clear exchanges—see the model, read why it scores, then carry the reasoning into a fresh problem.

### How it metabolizes the updated register brief

- **High contrast:** Blackboard Black type and rules sit on Sun White; the active beat receives a saturated warm flare while inactive beats remain structurally visible.
- **Generous white space:** the relay occupies one horizontal line through an otherwise open surface. Each beat has room to breathe and academic content never sits on a saturated background.
- **Warm accents:** Solar Orange signals action and motion; Warm Rose and Honey create identity moments. Scoring remains blue/oxblood and semantically separate.
- **Black sans-serif headers:** wide, compressed sans headlines create clear performance cues—“SEE IT,” “READ THE SCORE,” “YOUR MOVE”—without motivational slogans.
- **Inspiration principles:** from **Nike**, purposeful momentum, decisive hierarchy, and confidence earned through doing; from **Hollister**, sun-warmed optimism and horizon-like openness without lifestyle photography, surf motifs, distressed type, or a house palette.

### Visual system

| Token | Hex | Use |
|---|---:|---|
| Sun White | `#FFFDF4` | dominant working ground |
| Blackboard Black | `#0B0D0F` | headlines, copy, axes, strong dividers |
| Solar Orange | `#FF6A1A` | active controls and relay motion only |
| Honey | `#FFC940` | identity flare and neutral highlight only |
| Warm Rose | `#FF8B8B` | secondary identity field only |
| Earned Marine | `#1261A0` | earned/available scoring anchor only |
| Lost Oxblood | `#8F1D2C` | commonly-lost scoring anchor only |

**Palette map:** warm and high-luminance, moderately saturated overall with one hot action accent. Compared with Signal / Proof, its energy comes from sunlight and pace rather than hot editorial collision.

**Type pairing:** **Druk Condensed / Anton fallback** for the short relay headers; **Atkinson Hyperlegible Next** for interface and academic reading; **STIX Two Math** for equations. Display type never carries a full prompt or response.

**Exclusive scoring anchors:** an **Earned Marine split-tick**—two parallel vertical ticks joined at their base—appears only beside evidence that earns or can earn a point. A **Lost Oxblood dropped tick**—one tick visibly offset below the baseline—appears only beside a common scoring loss. Solar Orange owns interaction and never scores; the relay line itself stays black.

### Structure: new three-beat horizontal relay

This is not Lantern Fold: it does not hide content in leaves, imitate pages, or require horizontal dragging. All three beats are fixed, addressable regions visible at once in a `420 / 280 / fluid` layout under a 104px header:

1. **See it** — the face-up sample figure and prompt.
2. **Read the score** — the active criterion and its two anchors.
3. **Your move** — a fresh problem with a response surface.

A single 4px black relay line links the three regions, but it carries navigation only and never fills, scores, or celebrates. Selecting a beat enlarges it into the fluid region while the others compress to labeled edge panels. Keyboard shortcuts `1`, `2`, and `3` move among beats; ordinary buttons provide the same route. At default, **Read the score** owns the fluid region so the sample and the student's next move are both visible as context.

### Open Hand example — AP Biology

The sample asks students to reason about osmosis in plant cells placed in solutions of differing solute concentration. **See it** contains a labeled cell diagram, a small table of initial/final masses, and a concise prompt. **Read the score** shows a sample response and makes two facts face-up:

- the Earned Marine split-tick marks a correct claim about the direction of net water movement and evidence from percent mass change;
- the Lost Oxblood dropped tick marks a response that names diffusion but never connects solute concentration to water potential and net movement.

Solar Orange powers **Change the solution**. The learner predicts the direction of mass change, then scrubs external solute concentration. The graph and data table update together. A neutral prompt asks, “Which relationship in your explanation does this result support?” No causal sentence is generated.

**Your move** contains a new dialysis-tubing setup. Learner B begins with one choice—predict gain or loss—then gets one 280-character reasoning field. Only after the first draft does the relevant rubric criterion appear. Learner A can expand the full experimental table, formal water-potential notation, all rubric wording, and side-by-side attempt history in place.

**Statistics transfer:** the same relay handles a confidence-interval task. See it holds a sample interval and study context; Read the score distinguishes parameter interpretation from a probability claim; Your move asks the learner to interpret a fresh interval. The equation and accessible numerical summary remain visible without compressing the response.

### Register risk to test

Performance language may read as sports-brand cosplay if the relay becomes too slogan-driven. The test is whether momentum makes the next intellectual move clearer. If students remember “SEE IT / YOUR MOVE” but cannot locate the causal or inferential relationship, the register has outrun the learning task.

---

## Direction 3 — Open Window

> **Direction status: advisory / not final.**

**SSoT seed:** `mango-03/quietwindow-L6-ARC`

**Seed derivation:** `mango-03` yields a **buoyant, self-possessed** emotional temperature rather than the confrontational heat of Signal / Proof or the athletic pace of Daybreak Relay. `quietwindow` selects a **warm-neutral palette with a few juicy accents** and a bright, calm reading field. `L6-ARC` derives a **two-deck open-window stage**: a spacious evidence deck above and a response deck below, joined by one movable aperture. Result: **buoyant-self-possessed + warm-neutral/juicy accent + two-deck open window**.

**One-line concept:** A bright academic window makes difficult content feel open and socially current while one movable aperture connects the rubric evidence above to the student's response below.

### How it metabolizes the updated register brief

- **High contrast:** Near Black text, graph marks, and focus rings sit on clean white and warm cream. Accent fields are large but never carry long reading.
- **Generous white space:** the upper evidence deck deliberately uses only 60–65% of its available width; the empty third is functional space where the aperture and contextual note can move.
- **Warm accents:** Mango and Watermelon supply identity; Dusty Peach supports larger quiet fields. None is negative-only, and none scores.
- **Black sans-serif headers:** heavy geometric headers feel contemporary and direct; sentence-case labels keep the interface from shouting.
- **Inspiration principles:** from **Instagram**, the confidence of one well-framed object and the effortless switch between overview and close view; from **Depop**, personal authorship and an interface that treats the learner's own response as the primary artifact; from **Hollister**, warm ease and social confidence without photography, beach codes, or nostalgia styling.

### Visual system

| Token | Hex | Use |
|---|---:|---|
| Window White | `#FFFFFF` | primary reading and response ground |
| Warm Glass | `#FFF4E8` | application surround and quiet fields |
| Near Black | `#161616` | headers, text, graphs, focus outlines |
| Mango | `#FF9F1C` | actions and movable aperture only |
| Watermelon | `#FF4F64` | identity punctuation and subject-neutral emphasis |
| Dusty Peach | `#F6C6A8` | large nonsemantic background fields |
| Earned Teal | `#087E78` | earned/available scoring anchor only |
| Lost Violet | `#6D3CC2` | commonly-lost scoring anchor only |

**Palette map:** warm-neutral and high-key with two saturated, juicy accents. It is less hot than Signal / Proof and less solar than Daybreak Relay; confidence comes from framing and clarity.

**Type pairing:** **Sora ExtraBold** for headers; **Public Sans** for interface, prompts, and responses; **STIX Two Math** for equations. All three remain sans-led except the specialized math face, satisfying the black sans headline brief without making prose feel branded at every line.

**Exclusive scoring anchors:** an **Earned Teal lens-ring**—a thin circle with one square registration notch—appears only around or beside credit-bearing evidence. A **Lost Violet open lens**—a circle with a deliberate 70-degree gap—appears only where a common omission breaks the reasoning. Mango owns the aperture and controls and never scores. Watermelon is brand punctuation and never scores.

### Structure: new two-deck open-window stage

The 1440×900 viewport divides horizontally, but not into a scrolling scene sequence:

- The upper 510px **evidence deck** holds the sample question and scientific representation on a 920px left-aligned stage. Its right side is mostly empty except for the current one-sentence criterion.
- A 14px black horizon separates it from the lower **response deck**, which holds the fresh problem and writing surface.
- A Mango **aperture**—a 176×112px movable viewport—can be placed over a graph region, sentence, or diagram component. Its paired readout at the horizon names what the selected evidence does in the reasoning, not whether it is “good.”

The aperture is a comparison tool, not a magnifier gimmick. In the face-up sample, its three preset stops correspond to claim, evidence, and reasoning. In Your move, the student places it once to identify which part of the fresh evidence they intend to use before writing. A keyboard list and textual evidence index provide equivalent access.

### Open Hand example — AP Biology and AP Statistics

The primary Biology sample concerns natural selection in a bacterial population exposed to an antibiotic. The evidence deck contains a before/after frequency graph, a concise experimental description, and a sample explanation. Moving the Mango aperture among graph, claim, and mechanism keeps the selected evidence large while the criterion sentence stays still. Earned Teal lens-rings identify evidence that supports differential survival and reproduction. A Lost Violet open lens marks the common leap that individual bacteria “adapt because they need to.”

The response deck presents a fresh pesticide-resistance dataset. Learner B first chooses one graph region to use, then writes one causal sentence. Feedback attaches at most one scoring anchor and asks for one revision. Learner A opens **Evidence index** to compare raw frequencies, alternate graph forms, the full rubric, and both drafts without leaving the deck.

For AP Statistics, the evidence deck switches to two sampling distributions with different sample sizes. The aperture can align the centers and spreads; the criterion readout asks the learner to distinguish variability from bias. Your move uses a new pair of distributions and requests a written comparison in context. Exact statistics and a table alternative remain available. The aperture never reveals the conclusion or writes the response.

### Register risk to test

The warm, socially current framing may become too lifestyle-soft if the evidence deck loses its black structural edge. Test it with the densest Biology figure and a long Statistics stem. If the white space collapses or the accents begin behaving like decoration around content, the direction fails its premise.

---

## Direction 4 — Control: Midnight Standard

> **Control — defends the cool/mature register against the updated brief. Advisory / not final.**

**Derivation by intent:** This control does not pretend to emerge neutrally from the teen-register brief. It deliberately preserves the strongest proposition in the existing cool-register family: ambitious students may prefer an interface that trusts them with the atmosphere and precision of a serious working instrument. It uses the validated three-column architecture because the control's job is to isolate register, not introduce a new interaction model. It does **not** copy Blue Hour's cyanotype, thread, specimen imagery, or files.

**Control seed:** `CONTROL-7N/slate-index-24`

**Seed derivation:** `CONTROL` fixes the test role; `7N` sets a **composed, exacting** emotional temperature; `slate-index` selects a **cool, muted** palette and document-like information hierarchy; `24` preserves a **fixed three-column reference workspace** with restrained disclosure. Result: **composed-exacting + cool-muted + fixed three-column workspace**.

**One-line concept:** A precise midnight reference desk gives the learner every scoring truth and scientific relationship a stable, serious home.

**The case it makes:** Calm authority may resonate more than overt youth-coding with ambitious learners who want study time to feel private, competent, and free of trend performance. A cool field can reduce visual heat during long written work while making the academic object itself luminous.

**What would falsify the teen-register brief:** if both real learners choose this control more often, remain in it longer without fatigue, locate scoring evidence at least as quickly, and describe it as more desirable—not merely “more serious”—than the three teen-register directions, the claim that warm, high-white-space brand language is the better audience fit is weakened. Conversely, if they call it remote, adult, generic, or “bleh,” or avoid returning despite equal task success, the control has done its job and the updated brief gains support.

### Visual system

| Token | Hex | Use |
|---|---:|---|
| Midnight Slate | `#111A24` | application surround and headers |
| Deep Panel | `#1B2937` | quiet secondary panels |
| Reading Mist | `#EDF1F3` | long-form reading and response ground |
| Cool Gray | `#A9B4BE` | metadata and inactive structure |
| Signal Cyan | `#4CC9C0` | actions, focus, and manipulation only |
| Earned Ice | `#C7E6FF` | earned/available scoring anchor only |
| Lost Rust | `#C65B46` | commonly-lost scoring anchor only |

**Palette map:** cool, muted, and low-chroma with strong luminance contrast. Fired rust is a narrow semantic exception, not a general warmth strategy. The control intentionally declines generous white space as a brand gesture, though it protects adequate reading space and accessibility.

**Type pairing:** **IBM Plex Sans Condensed Semibold** for headers and instrument labels; **IBM Plex Sans** for interface, prompts, and responses; **STIX Two Math** for equations. Headline type is pale on slate rather than black on white, deliberately opposing the updated brief.

**Exclusive scoring anchors:** an **Earned Ice registration corner**—four small right-angle marks—is used only for credit-bearing evidence. A **Lost Rust broken rule**—two short aligned strokes with a central gap—is used only for common losses. Signal Cyan powers controls and focus, never scoring.

### Structure: existing three-column reference workspace

The screen uses a stable `272 / fluid / 304px` grid:

- **Left:** one expanded rubric criterion, with the remaining criteria collapsed into plain index rows.
- **Center:** the face-up sample, interactive representation, prediction, and response surface on Reading Mist.
- **Right:** glossary, formulas, exact values, and help ladder as quiet reference drawers.

This borrows the proven rubric / model / reference architecture, not Blue Hour's craft signature. There are no cyanotypes, sewn traces, specimen drawers, glass negatives, or photograms. The mature register depends on stable geometry, disciplined labels, and low visual noise.

### Open Hand example — AP Statistics

The sample asks the learner to compare two confidence intervals for a population proportion and explain the effect of sample size. The center shows both intervals, their numerical endpoints, and the study context. Earned Ice registration corners mark a sample explanation that correctly describes greater precision in context. The Lost Rust broken rule marks the common error “there is a 95% chance the true proportion is in this computed interval.”

Signal Cyan controls sample size in a bounded simulation. The learner predicts what will change, adjusts the value, and watches interval width update while the parameter remains fixed. The prompt asks for an explanation; it does not generate one. Your move replaces the sample with intervals from a different survey and removes all anchors.

Learner B sees the active criterion, one control, and one response field; reference drawers stay closed. Learner A opens exact endpoints, repeated-sampling visualization, formal rubric language, and prior attempts in the surrounding columns. The reading surface remains light for extended work even though the application frame is nocturnal.

**Biology transfer:** a gene-expression task places a regulatory diagram in the center and keeps vocabulary and experimental controls in the right reference column. The same anchors distinguish observed evidence from a missing mechanistic link.

### Control risk to test

Maturity can become emotional distance, and muted cool panels can make the product look like professional software borrowed by a student. The control is credible only if its precision produces calm and voluntary return—not just compliance or adult approval.

## Divergence audit

| Direction | Test role | Emotional temperature | Palette temperature / saturation | Structural model | Contrast / white-space strategy | Inspiration principle | Distance from Options 01–07 |
|---|---|---|---|---|---|---|---|
| **Signal / Proof** | Teen-register A | Assertive, candid, authored | Hot and saturated accents on black/white | Asymmetric editorial proof-board | Hard black/white; white is the largest shape | Depop ownership + Instagram decisive framing | Not a canvas, stack, spatial field, folio, guided scene set, or cabinet; the rubric behaves as editorial evidence rather than a panel system |
| **Daybreak Relay** | Teen-register B | Kinetic, purposeful, optimistic | Sun-warm, high-luminance, moderately saturated | Three-beat horizontal relay, all beats locatable | Black on sun-white; large open gutters around one horizontal line | Nike purposeful momentum + Hollister warmth/openness | Unlike Lantern Fold, nothing unfolds or hides in pages; unlike Say It Bright, all beats remain spatially related instead of becoming full-screen scenes |
| **Open Window** | Teen-register C | Buoyant, self-possessed, calm | Warm-neutral with juicy warm accents | Two-deck stage joined by a movable evidence aperture | Near-black on white/cream; one-third of evidence deck intentionally empty | Instagram framing + Depop authorship + Hollister ease | Not Soft Landing's card stack or Blue Hour's three-column craft world; the aperture makes evidence selection, not cards or material metaphor, the signature |
| **Midnight Standard** | **Control** | Composed, exacting, private | Cool, muted, low-chroma | Fixed three-column reference workspace | Pale reading surface inside a dark frame; adequate rather than expressive white space | Best honest case for the cool/mature family | Deliberately close in register to the cool family, but strips away Blue Hour's cyanotype/thread craft to isolate mature atmosphere and stable utility |

### Distinct-triple check

No two teen-register directions share a `(register + palette temperature + structure)` triple:

1. `assertive-candid + hot-saturated + asymmetric proof-board`
2. `kinetic-purposeful + sun-warm luminous + horizontal relay`
3. `buoyant-self-possessed + warm-neutral/juicy + two-deck open window`

The control sits outside that cluster at `composed-exacting + cool-muted + fixed three-column workspace`. Swapping palettes would not make the three teen directions interchangeable: each direction's emotional proposition is carried by its hierarchy and movement model as well as its color.

> **Closing status: advisory exploration only.** These directions are hypotheses for comparison and real learner reaction. None is selected, approved, final, or a Done decision.
