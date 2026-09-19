# Head-to-Head 014 — Open Hand Register Comparison

> Advisory comparison set. This manifest records implementation facts only; it does not select, rank, or approve a register.

## Frozen sample

All four builds use the same Project Crux frozen requirement spec: The Blue Hour Cabinet, AP Statistics, `Open Hand · full picture`, the 5-unit / 13-topic study map, the weekly-practice regression question, the 9-point scatterplot with one influential low-practice/high-score point, the 4-point rubric, both model-response states, the reference card, and the four-section CED Deep Dive.

The content, point language, response copy, and constraints are held constant. Layout, reveal pattern, interaction model, palette, typography, and scoring-anchor form vary by register.

## Register builds

### Signal / Proof

- Path: `signal-proof/openhand-stats.html`
- Structure: question and graph form the claim/evidence field; model-response claims sit directly beside the evidence; rubric criteria act as warrants; the reference card closes the right-hand proof rail.
- Earned/lost distinction: three-sided evidence bracket vs offset dropped mark.
- Reserved action color: violet is used only for decision controls and the current study-map selection.

### Daybreak Relay

- Path: `daybreak-relay/openhand-stats.html`
- Structure: a four-beat baton rail moves focus through points → evidence → language → Deep Dive while keeping the worked sequence readable in one frame.
- Earned/lost distinction: marine split bracket vs oxblood dropped mark.
- Reserved action color: orange marks only the active relay/control state.

### Open Window

- Path: `open-window/openhand-stats.html`
- Structure: the graph is the ground; rubric, model response, and reference surfaces float above it as layered reading lenses.
- Earned/lost distinction: teal registration bracket vs violet dropped mark.
- Reserved action color: mango is limited to interactive controls and the selected study-map topic.

### Midnight Standard — control

- Path: `midnight-standard-control/openhand-stats.html`
- Structure: dense three-column rubric / evidence / reference ledger, with model response paired to the graph in the central working column.
- Earned/lost distinction: ice registration bracket vs rust dropped mark.
- Reserved action color: cyan is limited to interactive controls and the selected study-map topic.

## Functional inventory

Each build includes and implements:

- full study-map open, browse, and topic selection;
- all three rubric criteria and the 4-point total;
- 9-point scatterplot, fitted line, and singled-out influential point;
- full-credit / points-lost response toggle with 4/4 ↔ 1/4 tally;
- exact full-credit responses, deduction states, and ✦ mappings;
- complete reference card;
- complete Deep Dive dialog with open, close, backdrop-close, and Escape-close behavior.

## Render target

- Viewport: 1440 × 900
- Device scale factor: 1
- Output PNG: `openhand-stats.png` beside each HTML build
