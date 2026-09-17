# Decision Brief 009 — Open Blocking & Notable Findings

> **Advisory / not final / not a Done decision. Selects no winner and ranks nothing.**
> Consolidated by Claude Code per Handoff 009 from `critic/005-review.md` and `critic/008-divergence-gate.md` only. No new findings. David alone decides Done (`ARCHITECTURE.md` §5).

Rows are ordered by severity, then by source file. Every row traces to a sentence in 005 or 008.

---

## Blocking — 1 open

### B1 · Option 3 Pocket Universe — Learner B cannot finish a short session
**Source:** 005, Option 3 severity summary (Blocking).
**Finding:** Without aggressive time-boxing or a forced "close simulation → write" gate, Learner B is likely to leave a 15-minute session without a complete written response. The continuous manipulation and scale shifts can consume the session before writing begins.
**Decision this implies:** Does Option 3 advance *only* with a mandatory simulation→write gate and a hard time-box, or does it come off the candidate list?
**Evidence that would settle it:** A timed session test of a Pocket Universe prototype with 3–5 Learner-B-profile students, run twice — with and without the gate — measuring how many complete a written response inside 15 minutes.

---

## Notable — 7 open

| # | Source | Finding (still open) | The one decision it implies | Evidence that would settle it |
|---|---|---|---|---|
| **N1** | 005, cross-cutting | Transfer-vs-spectacle risk is acknowledged in several options' own risk notes but has **never been stress-tested** against real 10–20 min session completion for Learner B. | Can any direction reach Done on design review alone, or is a timed-session test a precondition for the UX track's Done? | One timed end-to-end session per advancing direction; measure completion rate and written-response quality, not impressions. |
| **N2** | 005, Option 1 | The Phase 1 (move the line, *r* unchanged) vs Phase 2 (move the point, *r* changes) distinction is powerful teaching but may overload a 10–15 min Learner B session unless the sample is aggressively time-boxed. | Scope the Influence Lab sample down (one phase per session?), or keep the two-phase interaction intact and accept the load? | Timed Learner-B walkthrough of the two-phase sample, instrumented for where the 15-minute budget actually goes. |
| **N3** | 005, Option 4 | Lantern Fold's horizontal accordion **must** have robust keyboard and button alternatives or it becomes a blocker for some users; trackpad/magnification risk is real. | Is the vertical/keyboard fallback a hard build requirement of this direction, or is horizontal-only interaction disqualifying? | Keyboard-only and screen-reader pass on a Lantern Fold prototype, plus a trackpad + magnification test at 1440px. |
| **N4** | 005, Option 5 | Emotional temperature is high. For students who already find the live product "bleh," Say It Bright may cut through **or** read as another high-energy educational surface. 005 says only real student reaction can tell. | Tune the register down, keep it as-is, or gate advancement on a student-reaction read? | Reaction from the actual "bleh" cohort, side-by-side against a cooler direction (Soft Landing or Lantern Fold). |
| **N5** | 005, Option 6 | Character presence is a stylistic and brand risk even under the suspension: Fizzbit carries the highest age-skew/busyness risk, Moxie Quill the highest snark risk, Bramblekin the highest nostalgia/decoration risk. Drift toward mascot behavior in later iterations is a named risk. | Does the no-character rule come back on, stay suspended for one register only, or stay suspended for all three? | The controlled comparison 005 describes: Option 5 text-only baseline vs the three registers, scored on engagement **and** transfer **and** seriousness. 005 states the Critic cannot settle this; only real use can. |
| **N6** | 005, cross-cutting (residual) | The set-level place-mode gap is closed for Options 1, 2, 4 and 5 (see *Already closed* below) but **remains open for Option 3 and Option 6**, which 006 explicitly deferred as higher-variance. Option 3's "universe" is still topic-scale, not curriculum-scale. | Are Options 3 and 6 still live candidates? If either is, its place mode must be commissioned before the UX Done Decider item can be met for it. | A scope decision, not a test. If either advances, the deliverable is a place-mode specification in that direction's own system, to the standard 006 set. |
| **N7** | 008, Option 07 challenger | Cyanotype/photogram craft is **asserted in prose more strongly than rendered on the plates**: the center fields are labeled "Exposure Table" but the diagrams read as clean vector science graphics, not light-exposed cloth with chemical bloom or irregular silhouette. Of the direction's own four falsifiable distinctiveness claims, "pale exposure silhouettes" is the one that fails (3/4 pass). | Invest a render pass to bring the plates up to the written medium claim before the head-to-head, or judge the challenger on its written direction as it stands? | One re-rendered plate with true photogram qualities, shown beside the current grade-4a plate. 008 calls this a rendering gap inside a divergent world — not evidence of a reskin. |

---

## Already closed — listed once, then dropped

- **Place / overview mode under-specified (005: set-level Notable, Option 2 Notable, Option 3 second Notable, Option 4 Minor).** Closed by `visual/006-place-mode.md`, which delivers full place modes for Draw the Door, Soft Landing, Lantern Fold and Say It Bright (text-only) in each direction's own system, with mastery treatments explicitly distinct from the scoring anchors. **Residual for Options 3 and 6 is carried above as N6.**
- **008's verdict itself.** The gate question "genuinely divergent, or a reskin?" is answered — **Divergent**. 008 raised no Blocking findings.

**`visual/007b-color-resolution.md` closes no 005 or 008 finding.** Neither file raised the colour grade as a Blocking or Notable finding. 007b settled the register (grade 4a) *before* 008 was dispatched, and 008 confirms it judged the warm-white plates and did not use the superseded dark surround as evidence either way. It is recorded here so the grade is not re-opened as though it were an open finding.

---

## Noted, but not severity-tagged by their source

008 weighed two further doubts and deliberately did **not** tag either, so neither is a row above: the **register hit** (whether a cool scientific-cabinet center under a warm surround supplies the comfort a nervous student wants — 008 calls this "a later taste/user-test question") and the **signature-vs-comfort trade** (the plates prioritise a nameable signature over immediate soft comfort — 008 holds this is the brief's intended trade). Both would be answered by the same student-reaction evidence as N4.

---

## What this brief does not do

It does not rank the directions, choose between the in-house synthesis and the Blue Hour Cabinet challenger, approve anything, or mark any track Done. Six of the eight open items above resolve to the same class of evidence — a timed session or a student-reaction read with real learners — which is a fact about the findings, not a recommendation.
