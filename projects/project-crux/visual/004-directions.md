# Visual/UI Directions 004 — Frozen Set for Critic Review

> **Status: frozen review set; advisory only — not final, approved, or ready to ship.** This file consolidates six previously reviewed options without redesign or harmonization. David alone decides whether the Visual Design track is Done.

## Shared hard constraints

- Each direction uses two exclusive scoring anchors—one for available/earned points and one for commonly lost points—never reused for navigation, subjects, or generic status.
- Interactive/action colors never double as scoring anchors.
- Assistance progresses from least to most revealing and states what each step reveals; it helps the learner without vending an answer.
- Progressive disclosure serves Learner B's low-decision default and lets Learner A pull density into the same system.
- Laptop-first layouts preserve real AP Statistics and Biology content: equations, accessible graphs and data tables, scientific figures, and extended written responses.
- No gamification, streaks, leaderboards, paywall nags, parent surfaces, or coercive feedback.
- The project remains clean-room/blind. Withheld identity and prior exploration are not inferred or reconstructed.

---

## Option 1 — Draw the Door: Influence Lab

> **Move status: advisory / not final.** This preserves Direction 01's existing visual system exactly and adds one buildable, rubric-teaching interaction. In this frozen set, it replaces the earlier static Draw the Door option.

### What remains unchanged from 002

- **Palette:** Night Ink `#241B35`; Canvas `#FFF9EF`; World Purple `#6F3CFF`; Sun Yellow `#FFD84D`; Guava `#FF6B6B`; Pool Blue `#28C7D9`; Leaf `#42A66A`.
- **Type:** Bricolage Grotesque + Literata + STIX Two Math.
- **Scoring anchors:** yellow closed loop = point available/earned; guava open loop = commonly lost. Neither appears anywhere else.
- **Interaction color:** World Purple draws, drags, and focuses. Purple never communicates scoring.
- **Structure:** one full-width laptop canvas with the response tray rising from the bottom.

### AP Statistics sample

**Prompt shown face-up:**

> A teacher records targeted practice time, (x), in hours per week and free-response score, (y), in points, for 24 students. Describe the association. Then explain how the highlighted observation affects the least-squares regression model.

The central 760 × 470px scatterplot has clearly labeled axes and units. Twenty-three Pool Blue observations form a moderately strong positive linear pattern. One World Purple observation is highlighted well below the pattern at a high (x)-value. The accessible data table is one keystroke or control away and updates with the plot.

### The interactive beat

The beat is called **Touch the model, then say what changed**. It has two linked phases inside the same canvas.

#### Phase 1 — Fit is not correlation

A World Purple candidate line appears over the fixed data. The learner drags its rotation handle or vertical handle.

Three consequences update live:

1. the displayed equation ŷ = (a + bx);
2. a compact residual strip beneath the plot;
3. sum of squared residuals, shown as a number and as proportional Pool Blue bars.

The correlation value does **not** change while only the line moves. A short Literata sentence beneath the graph updates with the line:

> “This line predicts about **[b] more FRQ points** for each additional **hour of targeted practice**.”

The changing sentence teaches that a slope interpretation needs direction, rate, response variable, explanatory variable, and units. It never tells the learner which candidate line is best. If the learner drags far from the fitted line, residual bars grow; the system asks, “What is the residual pattern telling you?” rather than snapping to the answer.

#### Phase 2 — Influence belongs to the data

The line returns to the least-squares fit. The learner now drags the highlighted observation vertically along its fixed (x)-position, or scrubs an **Outlier height** control.

Four consequences recompute live:

- the least-squares line;
- slope (b);
- correlation (r);
- the highlighted observation's residual.

A before/after ghost line remains faintly visible until the learner releases the point. The contextual sentence changes from “As the point moves…” to a neutral comparison:

> “With the highlighted observation here, the fitted slope is **[b] points per hour** and (r = [r]).”

This distinction is the teaching payload: moving a chosen model changes residual fit but not the data's correlation; moving an influential data point can change both the fitted line and the strength of association.

### Accessibility-equivalent controls

Every pointer action has an equal route:

- **Candidate line:** Tab focuses slope or intercept; Arrow keys change by `0.1`; Shift + Arrow changes by `1.0`; exact slope/intercept fields accept numeric entry.
- **Highlighted observation:** Tab focuses the point; Up/Down changes (y) by `0.25`; Shift changes by `1.0`; an exact (y)-value field is available.
- **Outlier scrub:** standard range input with current value spoken by screen readers; Home/End move to the documented range limits.
- **Data alternative:** a synchronized table marks the highlighted row and announces changed slope, (r), and residual in a polite live region after input settles.
- **Motion:** Reduce Motion removes interpolation and ghost-line travel; values and states still update instantly.
- **Graph:** high-contrast point shapes supplement color; focus order follows prompt → graph controls → consequence readout → rubric map → next action.

### Rubric-teaching link

The Open Hand sample displays three criteria around the canvas:

- **Yellow closed loop 1 — Describe:** direction, form, strength, and unusual features in context.
- **Yellow closed loop 2 — Explain influence:** state what changes in the regression model and why the observation has leverage/influence.
- **Yellow closed loop 3 — Interpret:** express slope using both variables and their units.

One **guava open loop** marks the most common loss:

> “A number alone is not an interpretation: name what changes, per what, and in which population or context.”

During the sample, the first time the learner moves the point and opens the consequence readout, a thin purple connector draws from the live slope sentence to Yellow Loop 3. The loop does not “award” anything—the sample is already face-up. It labels why that sentence earns the rubric point. When the point is moved back toward the pattern, a second connector links the changing (r) and slope to Yellow Loop 2.

The learner must complete a prediction before the second phase animates:

> “If the highlighted point moves upward toward the pattern, what do you expect to happen to the slope or strength of association?”

The response can be a brief selection plus optional explanation. The simulation then provides evidence for reflection; it does not grade the prediction as a game event.

### Your move — transfer, not replay

The sample canvas clears with its geometry preserved. A fresh AP Statistics instance shows hours of sleep and reaction time for student volunteers, including a high-leverage observation. The sample's yellow and guava annotations disappear.

The learner must:

1. predict the observation's effect before moving it;
2. scrub the observation once to test the prediction;
3. write a two-sentence response: describe the association, then explain the observation's influence in context.

The primary action is **Check my reasoning**, not “show answer.” Rubric-lit feedback closes a yellow loop only around evidence actually present in the response. If units/context are missing, the guava open loop appears beside that sentence with one revision prompt:

> “Complete the rate: reaction-time units per additional hour of sleep.”

The learner edits the sentence in place and resubmits. The assistance drawer remains ordered: **One hint → Check one sentence → Walk through the relationship → Study a worked solution**. It states what each choice will reveal before opening.

### Content and implementation guardrails

- Do not imply that manually rotating a candidate line changes (r); only data movement changes correlation.
- Do not snap the learner's line or point to a correct state before they have made and described a prediction.
- Preserve raw values in the data-table view; do not turn exact Statistics content into an approximate visual toy.
- The graph occupies at least 55% of usable laptop height before the response tray opens.
- Simulation telemetry is optional detail for Learner A; Learner B initially sees only the graph, one prompt, and one active control.

---

## Option 2 — Soft Landing

**Direction status:** Advisory concept, not final or approved.

**SSoT seed:** `0647bd8bab9c62a9e4fa`

**Register derivation:** `06` is the coolest, lowest-arousal seed opening in the set; `47` maps to a centered sequential stack; `bd` asks for meaningful movement but not freeform manipulation. The alternating high/low tail (`ab–9c–62–a9`) becomes inhale/exhale pacing between dense and quiet cards. Terminal `fa` provides one luminous moment after feedback. Result: **restorative + cool-luminous + single-focus stack + gently kinetic**.

**One-line concept:** Each study move arrives as one generous card, with the rest of the session held safely out of sight.

### Inspiration metabolized

- **Wellness / safe-haven:** translates Balance and Gentler Streak's low-anxiety pacing into controlled disclosure, soft transitions, and language that acknowledges effort without judging it.
- **Gentle accountability:** translates Habit Huddle's follow-through into a visible session promise—“three useful moves”—rather than streaks or guilt.
- **Crisp tactile minimalism:** borrows Readwise's legible single-object focus, but makes it dimensional and warm rather than austere.

### Visual system

- **Palette:** Deep Harbor `#173A5E`; Clear Sky `#5CC8F2`; Apricot `#FFB36B`; Lavender Air `#D9D2FF`; Foam `#F5FCFF`; Dark Text `#183047`; Soft Green `#7CC9A4`. **Register:** cool and restorative with luminous chromatic surfaces; low contrast between backgrounds, high contrast for text.
- **Scoring anchors:** available/earned point = **deep-harbor pebble** containing a white notch; commonly lost point = **apricot ripple** of three concentric arcs. Sky blue is the action color and never scores.
- **Type pairing:** **Aptos / Carlito** for compact interface information; **Lora** for questions and feedback; **STIX Two Math** for formulae.
- **Illustration stance:** slow gradients, translucent depth, horizon-like curves, and tiny breathing room illustrations tied to content state—not meditation imagery.
- **Interaction stance:** a card stack advances through inspect → attempt → feedback → revise. Cards slide with weight and can be stepped backward without losing work.

### Open Hand at 1440px

The layout is a **centered 880px single-card stage** floating above a soft chromatic field. The next two cards are visible only as offset edges behind it, giving spatial continuity without presenting choices. A narrow session promise along the bottom says “Move 1 of 3” in plain text; it never becomes a streak or score.

The first face is the sample question. Selecting **Turn the hand** rolls the same card forward—not a flip animation that hides context—revealing scoring mechanics layered directly onto the prompt. Deep-harbor pebbles pin evidence that earns credit; apricot ripples sit beside common losses. **Try one like it** slides the response card into the same position, preserving the learned geography.

An AP Biology extended-response sample on osmoregulation uses a large labeled membrane figure followed by a 70-character text measure. During the attempt, the figure recedes upward but remains summonable with one key. The default response surface asks for one claim first; **Build full response** reveals evidence and reasoning fields for Learner A or when the task requires them.

Feedback arrives as a new translucent layer over the learner's own response: one earned pebble settles beside valid evidence, and one apricot ripple expands around the missing mechanism. The next card says “Add the mechanism that connects concentration to water movement.” Full scoring detail and attempt comparison remain behind **See the whole hand**.

Assistance rises from beneath the active card in least-to-most revealing order. Selecting Worked solution requires an explicit acknowledgment that it will replace productive struggle for this attempt; it never sits beside the primary action.

### Risk to test

Sequential calm could hide relationships that Learner A wants to scan. The backward path, persistent mini-outline, and “whole hand” view must make the stack feel focused rather than restrictive.

---

## Option 3 — Pocket Universe

**Direction status:** Advisory concept, not final or approved.

**SSoT seed:** `5e156577d6e22e0f8600`

**Register derivation:** `5e` creates a curious, high-wonder middle temperature; `15` selects a zoomable field with no fixed reading edge; `65` specifies continuous manipulation. The central double `77` becomes paired scales—system and detail—while ending `00` insists on a clean reset point between exploration and assessed response. Result: **lush-curious + jewel-saturated + zoomable spatial field + continuous simulation**.

**One-line concept:** Enter the system, change one variable, and watch scoring logic emerge at the scale where it matters.

### Inspiration metabolized

- **Rich interactivity:** metabolizes CellWalk's scale-shifting and Explorabl.es' causal play into a manipulable academic model with an explicit bridge from observation to written evidence.
- **Children's-book imagination:** draws on Madeleine L'Engle's sense of immense systems becoming personally graspable; scale shifts create wonder without fantasy decoration.
- **Crisp tactile minimalism:** uses Brilliant-like object directness—what can move looks movable, and every movement has an intelligible consequence.

### Visual system

- **Palette:** Deep Space `#12143A`; Electric Cyan `#2DE2E6`; Orchid `#B96BFF`; Acid Leaf `#B9F227`; Coral Signal `#FF5D73`; Pale Star `#F7F8FF`; Graphite `#25274D`. **Register:** cool jewel tones at high saturation against a dark field; the light response mode reverses to Pale Star for long reading.
- **Scoring anchors:** available/earned point = **acid-leaf hex lens** with a central dot; commonly lost point = **coral severed bridge** symbol. Cyan is the manipulation highlight and never scores.
- **Type pairing:** **Space Grotesk** for navigation and labels; **Source Serif 4** for prompts and written work; **STIX Two Math** for equations.
- **Illustration stance:** sectional scientific worlds with scale rulers, crisp labels, and depth through parallax. No sci-fi chrome, spaceship metaphors, or collectibles.
- **Interaction stance:** zoom, isolate, drag variables, scrub time, and compare states. All simulations include Reset, keyboard controls, and a static table representation.

### Open Hand at 1440px

The screen begins as a **full-bleed interactive field**. A compact question ribbon spans the top; a response dock remains closed along the bottom. Scoring mechanics live as lenses placed inside the model itself, not in a side panel. Clicking a lens pauses the model and explains which observation supports its rubric criterion.

For AP Biology, the sample follows cellular respiration. The learner zooms from organism to mitochondrion, scrubs oxygen availability, and watches relative ATP output and metabolite levels change. Acid-leaf lenses mark observable evidence needed for credit; coral severed bridges appear where students commonly leap from condition to conclusion without the mechanism. The sample narration never completes the causal explanation. It asks the learner to name what changed and why.

The assessed move resets the field (`00` in the seed): a different condition appears, all sample annotations disappear, and the learner manipulates then writes. Opening the response dock shifts the field into a restrained top strip while a full-width light writing surface occupies the lower two-thirds—avoiding dark-mode fatigue for extended prose.

The Statistics variant becomes a sampling-distribution universe: changing sample size makes distributions tighten in real time; the table view exposes exact values. A learner must translate the observed change into statistical language rather than receive a generated conclusion.

Learner B gets one highlighted control and one question at a time. Learner A can unlock comparison mode, confidence intervals, raw observations, and rubric codes. Feedback replays only the decisive variable change, then places one lens on the learner's written evidence.

### Risk to test

The simulation could consume attention without improving transfer. Every manipulation needs a prediction prompt before motion and an explanation prompt afterward; otherwise it becomes spectacle.

---

## Option 4 — Lantern Fold

**Direction status:** Advisory concept, not final or approved.

**SSoT seed:** `0b570c7245dd93d0262b`

**Register derivation:** `0b` sets a low-arousal but warm evening register; `57` maps to a horizontal foldout rather than a card stack; low interaction byte `0c` favors deliberate reveal over manipulation. The bright midpoint `dd–93` becomes a luminous reveal at the scoring fold, and final `26–2b` returns to steady reading. Result: **cozy-contemplative + warm luminous + horizontal accordion + tactile reveal**.

**One-line concept:** A compact study folio unfolds across the desk, making the sample, scoring logic, attempt, and revision feel like connected pages of one thought.

### Inspiration metabolized

- **Children's-book imagination:** metabolizes physical page turns, authored pacing, and the emotional warmth of pre-phone reading without copying illustration styles.
- **Crisp tactile minimalism:** translates distill.pub's explanatory sequencing into folds that expose only the representation needed at that moment.
- **Wellness / safe-haven:** uses warm light and reliable page geography to make return visits feel settled and familiar.

### Visual system

- **Palette:** Midnight Blue `#17243B`; Lantern Gold `#F6B73C`; Persimmon `#E96845`; Parchment `#FFF3D8`; Raspberry `#B83B63`; Sage Cloth `#8CB49A`; Ink `#20283A`. **Register:** warm, luminous, and moderately saturated—more evening reading room than beige minimalism.
- **Scoring anchors:** available/earned point = **gold square seal** with an embossed numeral; commonly lost point = **raspberry dog-ear** cut from a page corner. Persimmon is the interactive/tab color and never scores.
- **Type pairing:** **DM Sans** for controls and annotations; **Bookmania / Source Serif 4** for question reading; **STIX Two Math** for notation.
- **Illustration stance:** paper-cut sectional diagrams, limited-depth shadows, stitched rules, and occasional full-bleed explanatory plates. Tactility supports hierarchy; no faux notebook paper or scrapbook clutter.
- **Interaction stance:** unfold, compare, and layer. Motion is discrete and reversible rather than continuous.

### Open Hand at 1440px

The laptop becomes a **horizontal accordion of four connected leaves**. Only one and a half leaves are visible at once, so the learner senses sequence without facing a wall of content. The mini-map along the top names the leaves: Sample → How it scores → Your move → Revise. It is navigation, not completion scoring.

An AP Statistics free-response sample opens on the first leaf with a residual plot above a concise prompt. Pulling the persimmon tab extends the second leaf beneath—not beside—the first so the exact graph remains aligned across the fold. Gold seals sit directly on evidence that earns points: identifying the pattern, interpreting nonlinearity, and connecting it to model fit. Raspberry dog-ears disclose common losses such as describing the plot without evaluating the model.

The learner drags the folio left to reveal **Your move**, where a new residual plot occupies the same physical location. This repetition creates spatial memory. A full-width response field opens below the plot; formula tools and an accessible data table live inside the leaf's lower pocket. Learner A can unfold a fifth technical leaf containing rubric wording and prior attempts. Learner B never needs to see it.

After grading, the folio partially refolds to place the learner's response over the sample's criterion map. A single gold seal or raspberry dog-ear appears on the relevant sentence. The final leaf asks for one revision, then closes to a quiet note: “You made the model judgment explicit.” No badge or streak follows.

### Risk to test

Horizontal movement can become awkward with trackpads and screen magnification. The accordion needs ordinary buttons, arrow-key navigation, and a vertical document fallback that preserves the same page geography.

---

## Option 5 — Say It Bright (original, text-only)

**Direction status:** Advisory concept, not final or approved.

**SSoT seed:** `e6f03252e2ca716704d8`

**Register derivation:** `e6` is the hottest, most outward-facing opening; `f0` selects oversized full-width scenes; restrained interaction byte `32` favors decisive step-through rather than free play. Alternating `e2–ca–71` produces loud/quiet/loud typographic beats, and `04` forces one near-empty pause before the final `d8` return of confidence. Result: **bold-encouraging + hot saturated + guided vertical scenes + decisive step-through**.

**One-line concept:** The interface speaks with graphic-novel clarity: one big idea, one visible scoring truth, one confident move at a time.

### Inspiration metabolized

- **Children's-book imagination:** metabolizes Raina Telgemeier's emotional legibility, panel pacing, expressive scale, and ability to make difficult moments approachable—without characters or comics pasted onto schoolwork.
- **Gentle accountability:** converts follow-through into a clear verbal contract: “Today: understand one pattern, answer one question, improve one line.”
- **Wellness / safe-haven:** uses direct, nonjudgmental feedback and deliberate quiet frames between intense content moments.

### Visual system

- **Palette:** Punch Red `#F04452`; Ultramarine `#304FFE`; Hot Pink `#F45BB5`; Butter `#FFE66D`; Soft White `#FFFDF8`; Aubergine `#2D163D`; Mint Pause `#BCECCB`. **Register:** hottest and most saturated in the set, balanced by large Soft White pauses.
- **Scoring anchors:** available/earned point = **ultramarine double underline** ending in a square; commonly lost point = **aubergine strike-gap** that stops before the mistaken phrase. Punch Red is the primary action color and never scores.
- **Type pairing:** **Archivo Black** for scene statements and scoring headlines; **Atkinson Hyperlegible Next** for interface and question text; **STIX Two Math** for formulae.
- **Illustration stance:** cropped expressive diagrams, oversized punctuation, panel gutters, and kinetic type used sparingly. Academic content is never set in display type at reading length.
- **Interaction stance:** guided vertical progression with click/keyboard step-through inside each scene. The learner makes one commitment before advancing; there is no endless feed.

### Open Hand at 1440px

This is a **full-width guided vertical sequence**, not a dashboard. Each viewport is one scene:

1. **The question:** a Biology experimental-design prompt sits large and centered with its diagram.
2. **What the scorer can see:** the same prompt remains fixed while criteria arrive one at a time as typographic callouts.
3. **Where answers slip:** aubergine strike-gaps reveal two common reasoning breaks.
4. **Your move:** a new experiment and a full-width response editor replace the sample.
5. **Make it stronger:** the learner revises one highlighted sentence.

The AP Biology example asks the learner to design a control and justify how it isolates the independent variable. Ultramarine double underlines appear beneath the sample's valid control and causal justification. The common-loss strike-gap stops at an unsupported claim, leaving visible space where reasoning is missing. The prompt uses a real figure and extended prose; a sticky mini-index permits immediate movement among scenes for Learner A.

For an AP Statistics numeric-entry problem, scene 2 can step through units, setup, and interpretation without showing the computed answer. Learner B sees only the current scene and one Punch Red action. Learner A opens **Director's view**—a compressed full-sequence overview with rubric codes, formulas, and attempt comparison—without entering a separate mode or visual brand.

Feedback uses scale rather than fireworks. “Your control works.” appears large, then contracts beside the evidenced sentence. The quiet Mint Pause scene asks, “What makes it isolate the variable?” before the next revision. Assistance lives in a persistent but closed footer and states how much each option reveals.

### Risk to test

Large type and saturated scenes can feel patronizing or consume too much vertical space. Real AP content must be prototyped at laptop height; display scale should convey hierarchy, not simplify the intellectual level.

---

## Option 6 — Say It Bright: Three Guide Registers

> **Move status: advisory / not final.** The three characters are alternatives in one identical scene, not a trio proposed to coexist.

> **PROMINENT CONSTRAINT STATUS:** David explicitly suspended the Charter/002 no-character rule for **this option only**, as a controlled experiment. This is not a permanent Charter change and does not authorize characters in any other option. The concepts are original characters shaped by high-level illustration principles only; they do not reproduce published characters, names, costumes, silhouettes, or artwork.

### What remains unchanged from 002

- **Palette:** Punch Red `#F04452`; Ultramarine `#304FFE`; Hot Pink `#F45BB5`; Butter `#FFE66D`; Soft White `#FFFDF8`; Aubergine `#2D163D`; Mint Pause `#BCECCB`.
- **Type:** Archivo Black + Atkinson Hyperlegible Next + STIX Two Math.
- **Scoring anchors:** ultramarine double underline ending in a square = available/earned; aubergine strike-gap = commonly lost. Neither is character decoration.
- **Action color:** Punch Red. It never scores.
- **Structure:** full-width, guided vertical scenes with AP content occupying the center and the guide confined to an edge rail.

### The identical comparison scene

All three characters appear separately in **Scene 2: What the scorer can see** for the same AP Biology Open Hand sample.

**Sample prompt:**

> A student investigates how pH affects catalase activity. Equal concentrations and volumes of catalase and hydrogen peroxide are used in each treatment, temperature is held constant, and oxygen production is measured for 60 seconds. Identify an appropriate negative control and explain how it supports a valid conclusion about the effect of pH.

The experiment diagram and question occupy a centered 960px content stage. The sample response appears below it. An ultramarine double underline marks the response's explicit control and its causal justification. An aubergine strike-gap marks a comparison response that merely says “use a control” without explaining what alternative cause it rules out.

Each candidate guide performs exactly the same job, in the same 168 × 184px lower-left guide rail, using identical words:

> **“Name what the control rules out. Then connect that to the variable you're testing.”**

After the face-up sample, the guide uses one identical follow-through line over a fresh enzyme experiment:

> **“Your move: make that link in one sentence.”**

The guide never identifies the control, writes the justification, reacts to correctness, awards anything, celebrates, frowns, tracks return visits, or appears on the final graded response. Students can hide the guide permanently; hiding it changes no content or function.

### Character A — Fizzbit

**Influence label:** Seuss-inspired in broad register only—springy contour, improbable anatomy, buoyant visual rhythm. Entirely original; no borrowed species, costume, facial construction, rhyme scheme, or published silhouette.

**Design:** Fizzbit is a tall, folded-ribbon creature with three soft elbows, one wide foot, one narrow foot, and a fan-shaped tuft that leans opposite the body. Its silhouette resembles a punctuation mark that has learned to balance. It has a tiny oval face embedded high in the torso rather than a conventional animal head. World-building details are limited to two Butter spots and a Hot Pink inner contour; the outer line is Punch Red, never Ultramarine or Aubergine.

**Pose in the shared scene:** One elastic arm frames—but never touches—the rubric sentence. The other hand opens toward the learner's response box. On entry, the torso bends into a question-mark curve and settles; Reduce Motion shows only the settled pose.

**Voice treatment:** The fixed guide line sits in a Soft White speech lozenge with irregular but highly legible edges. No rhyme, nonsense words, or imitation of a known author's prose.

**Emotional shift:** Most playful and surprising. Fizzbit turns the scoring truth into an invitation to be curious, reducing “rubric” formality. The risk is youngest-skewing energy; the tiny footprint and non-baby proportions must keep it credible for ambitious high-school students.

**Alt text:** “A tall ribbon-shaped guide bends toward the response area with an open, inviting gesture.”

### Character B — Moxie Quill

**Influence label:** loose comedic high-contrast cartoon ink in the spirit of irreverent contemporary graphic novels, including the energy cited in the handoff. Entirely original; no resemblance to the cast, species lineup, wardrobe, facial designs, or compositions of *The Bad Guys*.

**Design:** Moxie Quill is an upright porcupine-like creature built from a compact bean-shaped body, five oversized wedge quills, long expressive wrists, and rectangular half-lens glasses. The silhouette is blunt and angular rather than sleek. Brushy neutral-black linework varies dramatically in weight; a Punch Red utility scarf and Butter socks provide color. No Ultramarine or Aubergine appears on the character.

**Pose in the shared scene:** Moxie holds an empty clipboard backward, notices, turns it around, and reveals only the same fixed guide line—not an answer. One eyebrow rises toward the unsupported sentence while the open hand directs attention back to the learner's response.

**Voice treatment:** The fixed guide line appears in a square caption with one hand-inked corner. The copy remains warm and neutral; irreverence comes from physical timing, not sarcasm about mistakes.

**Emotional shift:** Most peer-like and brisk. Moxie makes academic precision feel socially safe and slightly funny rather than solemn. The risk is snark; the character must never smirk at an incorrect answer, deliver put-downs, or become a “cool” authority figure.

**Alt text:** “A compact quilled guide turns an empty clipboard around and gestures toward the learner's response.”

### Character C — Bramblekin

**Influence label:** warm, textured, slightly wild picture-book crosshatching in a Sendak-adjacent emotional register. Entirely original; no horns, crowns, monster anatomy, costume, face, or setting borrowed from *Where the Wild Things Are*.

**Design:** Bramblekin is a low, six-legged seed-pod creature with a rounded back, leaf-shaped ears, and a small lantern-like tail. Its body is covered in short crosshatched patches that resemble bark, moss, and woven cloth rather than fur. The face has two close-set dots and a broad calm brow. Mint Pause and Butter washes sit under warm brown linework; scoring-anchor colors never appear.

**Pose in the shared scene:** Bramblekin sits solidly at the edge of the content stage, one front paw resting beside—but not on—the fixed guide line. The tail light warms once when the prompt appears, then stays still. It does not react to the learner's result.

**Voice treatment:** The fixed line is printed on a simple Butter ground with a lightly crosshatched edge, not a speech balloon. This makes the character feel companionable rather than chatty.

**Emotional shift:** Warmest and safest. Bramblekin makes the scoring truth feel patient and nonjudgmental, with a touch of wildness that keeps “safe” from becoming clinical. The risk is decorative nostalgia; texture must remain in the guide rail and never spread behind graphs, equations, or response text.

**Alt text:** “A small seed-pod guide sits calmly beside the prompt, facing the learner's response area.”

### Side-by-side register comparison

| Candidate | Energy | Relationship to learner | Motion | Emotional promise | Primary risk |
|---|---|---|---|---|---|
| Fizzbit | Buoyant, elastic | Curious instigator | One spring-and-settle entrance | “Hard ideas can open into wonder.” | Feels too young or busy |
| Moxie Quill | Brisk, comic | Candid near-peer | One dry clipboard turn | “Precision does not have to feel precious.” | Slips into snark or trendiness |
| Bramblekin | Grounded, tender | Quiet companion | One warm tail-light settle | “You can take your time and still move forward.” | Becomes nostalgic decoration |

### Character-system guardrails

- These are **three alternatives for one slot**, not a cast, collectible set, or reward system.
- The guide rail may use at most 12% of the viewport area and never reduces the experiment diagram below 720px wide.
- Characters never point with or wear the ultramarine double underline or aubergine strike-gap. Their colors, poses, and motion carry no scoring meaning.
- The exact same line of support is used in this comparison so the illustration register—not differing copy—is what David evaluates.
- Characters appear only at transition/framing moments, never while the learner is reading a long prompt, manipulating a figure, or composing an extended response.
- A persistent **Hide guide** preference removes character art and motion while retaining the guide sentence as plain text.
- No applause, disappointment, idle nagging, streak reference, currency, wardrobe unlock, reaction loop, or “correct-answer” animation.
- For the fresh AP Biology question, the character invites the structural move but never names the control or explains the causal link. Feedback remains rubric-driven and attached to the learner's words.

## Critic-review boundary

This frozen set is the input to independent Critic review. It does not select, combine, approve, or finalize an option. The old static Draw the Door is superseded and intentionally absent; the original text-only Say It Bright remains the baseline against which the separately authorized character experiment can be evaluated.
