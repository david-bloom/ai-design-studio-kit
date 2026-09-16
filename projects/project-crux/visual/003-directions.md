# Visual/UI Focused Probe 003 — Draw the Door + Say It Bright

> **Status: advisory exploration — not final, approved, or ready to ship.** This probe extends only Directions 01 and 05 from `002-directions.md`. David alone decides whether either direction advances or whether the Visual Design track is Done.

## Intent-change flag: character constraint temporarily suspended

David has explicitly suspended the Charter/002 **no-character rule for Direction 05 in this probe only**. This is a controlled experiment to compare whether character presence improves emotional connection after students responded weakly to the quieter register. It is not a permanent Charter change and does not authorize characters in Direction 01 or the other three `002` directions.

All three concepts below are original characters shaped by high-level illustration principles only. They do not reproduce published characters, names, costumes, silhouettes, or artwork. They never represent points, correctness, progress, rewards, streaks, subjects, or navigation; they never supply an answer.

---

## Move A — Draw the Door: Influence Lab

> **Move status: advisory / not final.** This preserves Direction 01's existing visual system exactly and adds one buildable, rubric-teaching interaction.

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

## Move B — Say It Bright: Three Guide Registers

> **Move status: advisory / not final.** The three characters are alternatives in one identical scene, not a trio proposed to coexist.

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

## Focused-probe review question

This artifact asks David to make two narrow judgments before Critic review:

1. Does **Influence Lab** make Direction 01's interactivity genuinely teach the Statistics rubric, or does manipulation still distract from transfer?
2. In Direction 05, does any one guide register improve emotional legibility without diminishing the seriousness and space of real AP content—and if so, is that benefit strong enough to reconsider the temporarily suspended no-character constraint?

No recommendation here is an approval or Done decision.
