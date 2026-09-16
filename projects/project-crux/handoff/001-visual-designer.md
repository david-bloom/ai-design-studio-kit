# Handoff Packet 001 — Visual Designer

Task:
- Handoff 001 (project-crux, Visual Design track) — produce multiple distinct visual/UI directions for project-crux's "Open Hand" study app.

Prompts Included:
- [x] Visual Designer (cross-lab specialist — see prompts/CROSS_LAB_SPECIALIST_PROMPT.md)
- [ ] Brand Strategist  - [ ] Critic  - [ ] Chaos Agent

Current Source (read in full before generating):
- Charter: projects/project-crux/charter.md — ESPECIALLY Origin brief (the "Open Hand" concept), Expanded understanding (retention/UX principles), Constraint ledger, Done Decider → Visual Design, and Model assignment.
- Framework: docs/ARCHITECTURE.md §3 (Visual Designer role — you own visual identity AND UI-level design), §5c (String Seed of Thought), §1.1 (brief is not a spec).
- Latest commit reviewed: e8a3480ff5b23c9cabcc2db76f7feb44045ef7ad (charter.md, "Log contamination check result on project-crux charter").

Approval State:
- Approved: charter is "approved to generate"; Visual Design track is in scope.
- Not approved / Required before Done: nothing you produce is final. Track "Done" is Hard-Gate — David's sign-off only. Your output is advisory/generative.

Live / Tool State:
- N/A — static directions only. The content/grading engine is ground truth but is not needed to render these; do not build against it or assume its internals.

Files / Systems Affected:
- Create: projects/project-crux/visual/001-directions.md (+ optional comps under projects/project-crux/visual/assets/).
- Do not modify anything else.

Open Risks / Blockers:
- P1 — Convergence (mode-collapse). You MUST use String Seed of Thought (§5c): emit a distinct random seed string per direction and derive that direction from it. ≥3 directions that differ on a nameable axis (structure/palette/type/motif), not rewordings of one idea.
- P2 — Category anonymization is an OPEN charter question. Use the category exactly as the charter states it; do not seek more specificity.
- Clean-room / blind-start: the real product name/identity and any prior design exploration are deliberately withheld and held outside this repo. Do not infer, request, or reconstruct them. Anything not in this packet or the charter is withheld, not missing.

Do Not Touch:
- The product's real name/identity or category beyond the charter (withheld on purpose).
- Any prior/parallel design exploration (excluded prior art — kept outside this repo for clean comparison).
- The engine/data layer, charter.md, config/, docs/, and other projects/.
- Deferred/out of scope: app naming (deferred), Marketing Templates track (out).

Next Expected Output:
- projects/project-crux/visual/001-directions.md — for EACH direction: its SSoT seed string; a one-line concept; palette (hex), type pairing, motif/illustration stance; and how the "Open Hand" screen (a sample question laid face-up with visible scoring mechanics → student's move) is laid out at laptop width. Optional supporting comps in visual/assets/.
- Required: ≥3 genuinely distinct directions; each expresses Open Hand; each legible at laptop size for real Statistics/Biology content (formulas, data/graphs, extended written responses); explicitly labeled advisory/not-final.
- If you lack repo write access, output clearly delimited blocks labeled with the exact destination paths so a human can commit them.

Recommended Prompt for Visual Designer:
"""
Use prompts/CROSS_LAB_SPECIALIST_PROMPT.md. Project slug: project-crux. You are the Visual Designer (ARCHITECTURE.md §3). Read projects/project-crux/handoff/001-visual-designer.md, then projects/project-crux/charter.md in full. This project is clean-room/blind — do not infer the real product name or category. Produce ≥3 genuinely distinct visual/UI directions for the "Open Hand" study app using String Seed of Thought (§5c): one random seed per direction, derive the direction from it. Write to projects/project-crux/visual/001-directions.md. Your output is advisory; David alone decides "done."
"""
