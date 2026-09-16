# Place / Overview Mode 006 — Four Additive Proposals

> **Status: advisory exploration — not final, approved, or ready to ship.** These proposals add a curriculum-scale place mode to four existing directions without redesigning their frozen working modes. David alone decides whether any direction advances or whether a track is Done.

## Shared place-mode contract

All four proposals render the engine's existing hierarchy as **Subject → Unit → Topic → Skill → working session**. The examples below demonstrate authentic AP Statistics and AP Biology structures; production labels and relationships come from the curriculum database rather than from the interface.

The overview always answers three questions without turning learning into a game:

1. **Where am I?** Current subject, unit, and topic are spatially stable.
2. **What could use attention?** Mastery is expressed as orientation—unstarted, revisit suggested, or steady—not as a score, rank, badge, streak, percentage, or territory conquered.
3. **Where can I go next?** One calm recommendation is visible by default, with its reason. The learner may choose elsewhere.

Each direction introduces a mastery treatment distinct from its earned/lost scoring anchors. Scoring anchors do not appear anywhere in place mode. Recommendations use the direction's existing action language but never imply correctness or award status.

Real-content topology shown throughout:

- **AP Statistics:** units such as One-Variable Data, Two-Variable Data, Collecting Data, Probability, Random Variables, Sampling Distributions, and Statistical Inference; topics and skills remain visible beneath each unit when detail is pulled.
- **AP Biology:** units such as Chemistry of Life, Cell Structure and Function, Cellular Energetics, Cell Communication, Heredity, Gene Expression, Natural Selection, and Ecology.
- **Cross-subject home:** both subjects remain visible at overview scale. Entering a subject changes emphasis, not product mode or visual identity.

---

## 1. Draw the Door — The Living Route

> **Direction status: advisory / not final.** Additive place mode for Draw the Door — Influence Lab; the working-mode specification in `004-directions.md` remains unchanged.

### Native visual system

- **Palette:** Night Ink `#241B35`; Canvas `#FFF9EF`; World Purple `#6F3CFF`; Sun Yellow `#FFD84D`; Guava `#FF6B6B`; Pool Blue `#28C7D9`; Leaf `#42A66A`.
- **Type:** Bricolage Grotesque for place labels and controls; Literata for unit descriptions; STIX Two Math for Statistics notation.
- **Motif:** a drawn line creates navigable relationships. The curriculum is a route network, not a collection of cards.
- **Interaction:** pan, trace, focus, and zoom; keyboard, list, and reduced-motion equivalents are first-class.

### Terrain at 1440px

The Canvas fills the laptop below a 64px Night Ink ribbon. AP Statistics and AP Biology appear simultaneously as two broad hand-drawn territories separated by breathing room but joined at Home. Neither is a literal country or conquered map.

Each **unit is a named clearing** outlined in a quiet Night Ink contour. Topics sit inside as small labeled junctions connected by curricular prerequisite routes. Routes express relationship, not a mandated sequence: a learner can move directly to any available topic.

The Statistics territory reads from descriptive data toward inference. A learner can see One-Variable Data leading through Probability and Sampling Distributions toward Inference, with Two-Variable Data branching toward regression. The Biology territory groups Cell Structure, Cellular Energetics, Cell Communication, Heredity, Gene Expression, Natural Selection, and Ecology into connected systems. At the whole-map scale, unit names remain readable; topic labels appear as the learner zooms or focuses a unit.

A persistent subject landmark sits at each territory's origin: a tiny Pool Blue distribution silhouette for Statistics and a Leaf sectional-cell silhouette for Biology. These are subject landmarks only, never mastery or scoring symbols.

### Mastery treatment — route condition

Mastery is communicated through **route texture plus a text label**, never through the yellow closed loop or guava open loop:

| Orientation state | Route treatment | Plain-language label |
|---|---|---|
| Unstarted | Thin Night Ink dotted path | “Not visited yet” |
| Revisit suggested | Double Pool Blue path with a short broken center rhythm | “Worth another pass” |
| Steady | Continuous Leaf path with a subtle woven texture | “Holding steady” |

The treatments are shape/texture redundant and remain distinguishable without color. “Steady” is not permanent mastery; its popover says when the evidence was last observed and what kind of work supported it. No percentages, totals, trophies, or completion rings appear.

Sun Yellow and Guava—the working mode's scoring-anchor colors—are absent from map state. World Purple remains the action color for the learner's current trace and never communicates mastery.

### Calm default for Learner B

On entry, the full map is visible but subdued. One World Purple route draws from **You are here** to a single nearby destination card:

> **Try next: Interpreting slope in context**<br>
> A short practice move can strengthen a recent gap. About 12 minutes.

The only filled action is **Trace this route**. **Choose another place** is secondary. No modal asks the learner to configure a session before beginning.

### Learner A pull from the same map

Opening the top-edge **Show map layers** shelf adds, in place:

- topic and skill codes;
- question formats available at each junction;
- evidence recency and confidence as text;
- prerequisites and neighboring skills;
- filters for uploaded questions, written response, graph/data interpretation, and simulation slots.

The base map does not change and the recommended route remains optional. Keyboard `/` opens direct topic search; results pulse their location rather than replacing the terrain with a list.

### Place ↔ working transition

Selecting a topic causes the World Purple route to finish drawing into its junction. The camera follows the final segment; surrounding curriculum fades, the junction expands into the full-width working canvas, and the unchanged Open Hand sample appears. Only then may yellow closed loops and guava open loops enter, preserving their exclusive scoring meaning.

**Back to map** reverses the spatial move: the working canvas contracts into the same junction, preserving position, zoom, and selected layer. Reduce Motion replaces the camera travel with a labeled crossfade. Focus lands on the originating topic in both directions.

### Accessibility and risk boundary

- A synchronized outline view presents Subject → Unit → Topic → Skill with the same labels and status text.
- Arrow keys move between adjacent junctions; Enter opens; Escape returns to the prior scale.
- The map never requires freehand tracing or precise pointer steering.
- Primary risk: route density becoming decorative spaghetti. At most one recommendation route and one focused prerequisite chain are emphasized at once.

---

## 2. Soft Landing — The Study Archipelago

> **Direction status: advisory / not final.** Additive place mode for Soft Landing; its centered working-card stack remains unchanged.

### Native visual system

- **Palette:** Deep Harbor `#173A5E`; Clear Sky `#5CC8F2`; Apricot `#FFB36B`; Lavender Air `#D9D2FF`; Foam `#F5FCFF`; Dark Text `#183047`; Soft Green `#7CC9A4`.
- **Type:** Aptos/Carlito for navigation and metadata; Lora for unit names and descriptive prompts; STIX Two Math for formulas.
- **Motif:** a calm field of card-islands at different depths; the system holds complexity at the horizon until the learner asks for it.
- **Interaction:** focus an island, bring a card forward, or open the whole chart; no carousel and no forced sequence.

### Terrain at 1440px

The overview is a wide **archipelago of study islands** floating on a Foam-to-Lavender Air field. Statistics occupies the left constellation; Biology occupies the right. A stable Home inlet joins them at the lower center.

Each unit is a broad, softly raised island. Topics are smaller card-forms nested along its shoreline, so adjacency and grouping remain spatial rather than becoming a flat list. Statistics places One-Variable Data and Two-Variable Data near the foreground, with Probability, Sampling Distributions, and Inference extending toward the horizon. Biology groups cell-scale units near one another, then connects Heredity and Gene Expression before opening toward Natural Selection and Ecology.

The learner may pan gently across the field or use a persistent subject/unit outline. Selecting an island brings it closer without leaving the overview; topic cards become readable while other units remain visible enough to preserve orientation.

### Mastery treatment — surface clarity

Mastery uses **card-surface clarity and seam pattern**, not the deep-harbor pebble or apricot ripple:

| Orientation state | Island/topic treatment | Plain-language label |
|---|---|---|
| Unstarted | Clear outline on Foam, no depth layer | “Not explored” |
| Revisit suggested | Lavender Air wash with a dotted lower seam | “Could use a return” |
| Steady | Soft Green translucent surface with a continuous lower seam | “Feeling steady” |

Every state includes its label on focus and in the outline view. Surface states are deliberately quiet; no island grows, unlocks, sparkles, fills a meter, or accumulates tokens.

The deep-harbor pebble and apricot ripple remain exclusive to working-mode scoring and never appear here. Clear Sky is the action/focus glow; it does not signal mastery.

### Calm default for Learner B

One recommended topic card floats forward at the Home inlet while the map remains softly visible behind it:

> **A gentle next move**<br>
> Cell membrane transport · one diagram + one written explanation · about 10 minutes

The primary control is **Set this card down**. **Look around first** returns attention to the archipelago. There is no queue to manage and no demand to choose among several “optimal” paths.

A plain session promise—“One useful move is enough”—appears as supportive copy, not a streak or completion target.

### Learner A pull from the same map

**Open chart** lifts a translucent information layer over the same islands, adding:

- full topic/skill names and prerequisites;
- evidence recency, confidence, and question availability;
- estimated session length and response format;
- a compare tray for two topics across Statistics and Biology;
- direct filtering for inference, experimental design, graphs, or extended response.

The islands do not rearrange into a different dashboard. Learner A gains density while retaining the same locations Learner B learned.

### Place ↔ working transition

Selecting **Set this card down** causes the recommended topic card to settle at the center while the archipelago recedes in depth. The card grows into Soft Landing's unchanged 880px working stage; its next two working cards become visible behind it. Scoring pebbles and ripples appear only after **Turn the hand** inside that stage.

Returning lifts the working card back into its original shoreline position. The learner sees the same island and neighboring topics, with the recommendation updated in plain language only after new evidence exists. Reduced Motion uses depth-free opacity changes; keyboard focus returns to the topic card.

### Accessibility and risk boundary

- An always-available hierarchical outline mirrors every island and shoreline topic.
- Depth never carries meaning alone; boundaries, seam patterns, and text do.
- Zoom controls have buttons and keyboard shortcuts; no drag gesture is required.
- Primary risk: wellness softness obscuring topology. Unit boundaries and labels must pass contrast requirements even when the background remains calm.

---

## 4. Lantern Fold — The Curriculum Atlas

> **Direction status: advisory / not final.** Additive place mode for Lantern Fold; the four-leaf working folio remains unchanged.

### Native visual system

- **Palette:** Midnight Blue `#17243B`; Lantern Gold `#F6B73C`; Persimmon `#E96845`; Parchment `#FFF3D8`; Raspberry `#B83B63`; Sage Cloth `#8CB49A`; Ink `#20283A`.
- **Type:** DM Sans for controls and annotations; Bookmania/Source Serif 4 for unit and topic reading; STIX Two Math for notation.
- **Motif:** a large foldout atlas laid across a desk, with sewn regions, indexed edges, and stable page geography.
- **Interaction:** unfold, refold, compare leaves, and jump by index; every horizontal action has button, keyboard, and vertical-document equivalents.

### Terrain at 1440px

The overview opens as a **single broad atlas sheet** spanning the laptop, not as separate cards. A stitched Midnight Blue centerline distinguishes AP Statistics from AP Biology while keeping both on the same Parchment field.

Units are large atlas regions with shaped borders derived from their content diagrams: Statistics regions use distribution curves, scatter fields, and sampling frames; Biology regions use cell sections, pathways, heredity branches, and ecological layers. These are subtle structural silhouettes, not literal illustrations behind text.

Statistics runs along the upper fold from One-Variable Data through Probability and Sampling Distributions to Inference, with Collecting Data and Two-Variable Data as indexed branches. Biology runs along the lower fold from Chemistry of Life and Cell Structure through Energetics, Communication, Heredity, Gene Expression, Natural Selection, and Ecology. Fine stitched routes show curricular relationship without declaring a single compulsory path.

Each unit region contains topic tabs at its edge. Opening a unit folds its region upward into a readable topic spread while the rest of the atlas remains under it, preserving location.

### Mastery treatment — binding condition

Mastery is shown through **Sage Cloth binding patterns**, never through the gold square seal or raspberry dog-ear:

| Orientation state | Binding treatment | Plain-language label |
|---|---|---|
| Unstarted | Unstitched dotted guide along the region edge | “Not opened yet” |
| Revisit suggested | Loose alternating Sage stitches | “Revisit suggested” |
| Steady | Continuous double Sage stitch | “Holding together” |

The state is visible at whole-atlas scale and named on focus. No percentage is printed on a spine; no folio is “completed,” collected, or rewarded.

Lantern Gold and Raspberry remain exclusive to working-mode scoring anchors and do not appear in mastery state. Persimmon remains the atlas tab/action color and never scores.

### Calm default for Learner B

A single Persimmon ribbon lies across one region with a short recommendation:

> **Open here next**<br>
> Sampling distributions · one visual model + one explanation · 11–14 minutes

The controls are **Open this fold** and secondary **Choose a different region**. The atlas does not open several regions or expose technical metadata until asked.

### Learner A pull from the same atlas

Pulling the **Index cord** opens a narrow fifth strip without replacing the map. It lists:

- unit/topic/skill codes;
- prerequisite cross-references;
- recent evidence and confidence in words;
- question types, uploaded-question availability, and simulation slots;
- bookmarks for comparing a Statistics skill with a Biology skill.

Selecting an index item physically highlights its atlas region. The index can compress or expand, but locations never move.

### Place ↔ working transition

Selecting **Open this fold** lifts the chosen topic tab and folds the atlas beneath it. That topic spread becomes Lantern Fold's unchanged four-leaf working folio: Sample → How it scores → Your move → Revise. The working mode's gold seal and raspberry dog-ear enter only on the scoring leaf.

Returning refolds the four working leaves into the original atlas region and places focus on its topic tab. A brief Ink note records orientation—“Last worked here”—without awarding completion. The vertical fallback performs the same transition as nested document sections rather than horizontal animation.

### Accessibility and risk boundary

- Ordinary buttons and arrow keys perform every fold; trackpad dragging is optional.
- A vertical semantic document mirrors atlas order for screen magnification and narrow laptop windows.
- Stitch patterns are supplemented by state labels and never rely on color alone.
- Primary risk: the atlas becoming an ornate table of contents. Region shape, stable adjacency, and reversible folding must carry genuine spatial memory.

---

## 5. Say It Bright (text-only) — The Learning Districts

> **Direction status: advisory / not final.** Additive place mode for the original text-only Say It Bright; its five working scenes remain unchanged.

### Native visual system

- **Palette:** Punch Red `#F04452`; Ultramarine `#304FFE`; Hot Pink `#F45BB5`; Butter `#FFE66D`; Soft White `#FFFDF8`; Aubergine `#2D163D`; Mint Pause `#BCECCB`.
- **Type:** Archivo Black for district/unit declarations; Atkinson Hyperlegible Next for topics and interface; STIX Two Math for formulas.
- **Motif:** a typographic city-map made of full-width districts, strong gutters, cropped diagrams, and deliberate loud/quiet scale changes.
- **Interaction:** scan districts, jump by a sticky map index, or step into a topic scene; no endless feed.

### Terrain at 1440px

The overview is a **single bounded poster-map**, not a vertical course list. AP Statistics and AP Biology occupy two interlocking districts divided by a broad Soft White diagonal avenue. Both remain visible in the initial viewport.

Each unit is a large irregular block with a strong typographic label and one content silhouette. Statistics blocks use compact plot, distribution, sample-frame, or interval forms; Biology blocks use molecule, membrane, pathway, chromosome, population, or ecosystem forms. Topic streets connect blocks at meaningful prerequisites and conceptual relationships.

Statistics reads as a route from describing data through probability and sampling toward inference, with Collecting Data and Two-Variable Data as prominent cross streets. Biology moves from molecular and cellular districts through energetics, communication, heredity, gene expression, evolution, and ecology. Unit labels stay large enough to scan; zooming or focusing reveals topic and skill street names.

The map ends at a fixed boundary and always shows a mini-map. It is not an infinite content feed.

### Mastery treatment — typographic state

Mastery uses **letterform fill and border rhythm**, not the ultramarine double underline or aubergine strike-gap:

| Orientation state | District/topic treatment | Plain-language label |
|---|---|---|
| Unstarted | Outline label with a thin neutral border | “Not started” |
| Revisit suggested | Butter diagonal hatch with a dashed neutral border | “Come back to this” |
| Steady | Mint Pause solid field with a continuous neutral border | “Steady for now” |

The same states appear in the mini-map as outline, hatch, and solid shapes. They are not percentages and do not animate as meters. “Steady for now” explicitly avoids permanent-completion language.

Ultramarine and Aubergine remain exclusive to working-mode scoring. Punch Red marks the active route and primary action only; it never communicates mastery.

### Calm default for Learner B

Most districts remain quiet while one recommendation occupies a large Soft White pause in the foreground:

> **GO HERE NEXT**<br>
> Experimental controls<br>
> One sample. One response. One useful revision. · about 12 minutes

The only filled Punch Red action is **Enter this topic**. **See the whole map** removes the foreground pause without adding decisions or changing modes.

Despite the visual energy, nothing flashes, counts down, celebrates, or shames. The recommendation explains itself in one line and can be declined.

### Learner A pull from the same map

Selecting **Director's map** compresses display headlines and reveals more information inside the same district geometry:

- all topic and skill labels;
- prerequisites and cross-unit routes;
- evidence recency and confidence as text;
- response formats and estimated time;
- filters for inference, experimental design, quantitative entry, graph interpretation, and extended response.

The map does not become a separate analytics dashboard. Learner A can jump directly from the sticky index or compare neighboring topics while Learner B's spatial landmarks remain intact.

### Place ↔ working transition

Selecting a topic causes its district block to expand to the viewport while neighboring blocks slide into the sticky mini-index. The district headline becomes Scene 1 of Say It Bright's unchanged working sequence. Punch Red continues as the action color; scoring underlines and strike-gaps appear only in working Scenes 2–5.

**Back to districts** collapses the final working scene into the same map block, keeping scroll/zoom position and the previously opened information density. Reduced Motion swaps the slide for a crossfade with an explicit “Topic view” / “Curriculum map” heading change.

### Accessibility and risk boundary

- A semantic Subject → Unit → Topic outline is available beside the visual map and shares its focus state.
- Hatch, border, and text redundantly express mastery; saturated color never carries meaning alone.
- Display type is reserved for short labels; AP topic descriptions remain Atkinson Hyperlegible Next.
- Primary risk: the hot register making overview scanning exhausting. Large Soft White pauses, bounded extent, and the default single recommendation are mandatory.

---

## Deferred high-variance options

Pocket Universe and Say It Bright — Three Guide Registers receive no place-mode redesign in this pass, per Handoff 006. If either advances later, Pocket Universe could extend its scale-shifting field outward to curriculum scale, while the guide-character option could inherit the text-only Learning Districts unchanged and keep characters out of overview navigation. These are scope notes only, not additional proposals.

## Review boundary

These four proposals close the specification gap identified by the Critic; they do not prove usability, satisfy the Done Decider automatically, or select a direction. The next useful validation is to prototype one Statistics route and one Biology route per advancing system, then test whether both learners can orient, choose, enter a 10–20 minute working session, and return to the same place without mistaking mastery state for scoring or reward.
