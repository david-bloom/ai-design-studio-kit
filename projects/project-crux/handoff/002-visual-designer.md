# Handoff Packet 002 — Visual Designer

> Drafted by the Creative Director (Claude Design, `/design`) for David to commit. Supersedes the *task* of 001 (produce first-pass directions); 001 remains in the repo as prior context and as the record of what convergence to avoid.

Task:
- Handoff 002 (project-crux, Visual Design track) — **re-run the Generate stage.** Produce a genuinely divergent, inspiration-anchored set of visual/UI directions for the "Open Hand" study app. This is a corrective re-brief, not a polish pass on 001.

Prompts Included:
- [x] Visual Designer (cross-lab specialist — see `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`)
- [ ] Brand Strategist  - [ ] Critic  - [ ] Chaos Agent

## Why 002 exists (read before generating)

001 (`projects/project-crux/visual/001-directions.md`) returned four competent directions but **converged**, and David rejected the set. The specific, nameable failures you must not repeat:

1. **Register collapse.** All four landed on the same emotional temperature — quiet, desaturated, "composed professional analysis tool." SSoT varied the *motif label* (margin / terrain / instrument / pinboard) while the underlying vibe stayed identical. Surface variety, not real divergence.
2. **Structure collapse.** Three of four were 2-column; the fourth varied columns but not feel.
3. **The inspiration set was ignored.** The charter's inspiration references never showed up. 001 appears to have read the *negative* constraints ("not gamified, not worksheet-like") and over-corrected into austerity, treating the *positive* references as skippable. That is the central error to fix.

**Critical framing correction:** "not gamified" and "not worksheet-like" do **not** mean austere, cold, or minimal-by-subtraction. The charter's target feel is **empowering, optimistic, a calm safe-haven with gentle accountability** — warmth, imagination, tactility, and delight are explicitly wanted. Design *toward* that, don't just avoid the anti-patterns.

## The inspiration set is now a HARD requirement

From the charter (David's brief input). Each direction you produce **must visibly metabolize at least one of these clusters, and must name which cluster(s) and how** in its write-up:

- **Children's-book imagination** — Harold and the Purple Crayon, Where the Wild Things Are, Raina Telgemeier, Madeleine L'Engle. (Imaginative, illustrative, hand-made warmth; drawing-as-thinking; wonder.)
- **Crisp tactile minimalism** — Brilliant.org, distill.pub, Readwise. (Clean, precise, *tactile* — minimal but warm and physical, not sterile.)
- **Rich interactivity** — Explorabl.es, CellWalk, Photomath. (Content is manipulable and kinetic; you learn by doing/moving, not reading a static page.)
- **Wellness / safe-haven** — Headspace, Gentler Streak, Fabulous, Balance. (Calm, encouraging, low-anxiety; color and motion used to soothe and motivate.)
- **Gentle accountability** — habithuddle.com. (Momentum and follow-through without nagging, guilt, or streak coercion.)

Metabolize a *principle* from the reference, don't re-skin the reference. "Feels like Headspace-meets-CellWalk for AP Bio" is the bar; "has a meditation timer" is not.

## Divergence is mandated on the axes that actually collapsed

Produce **≥4 directions**, and the *set* must genuinely spread across these axes — not the motif axis 001 used:

- **Emotional temperature** — the set must span it. At least one direction should feel warm/playful/imaginative; at least one calm/restorative; they must not all read the same.
- **Palette** — do **not** ship four muted warm-neutral palettes. At least one direction must use saturated/vivid color, and at least one should treat color as an *imaginative device* (à la Harold's purple crayon — color that draws the world), not just as accent trim.
- **Layout structure** — do **not** ship four 2-column layouts. Vary the spatial model radically across directions (e.g. canvas/whiteboard, single-focus card stack, guided vertical scroll, spatial map — pick genuinely different ones).
- **Interactivity model** — at least **two** directions must be genuinely *kinetic / manipulable* in concept (drag, draw, simulate, step-through — Explorabl.es / CellWalk / Photomath energy), not a static page with a submit button.

**Anti-convergence guard (SSoT at the register level):** emit a distinct random seed string per direction and derive from it the direction's **emotional temperature + structural model + interaction stance** — not an ornamental motif. No two directions may share the same (register + palette-temperature + layout-structure) combination. If two directions could swap palettes and become indistinguishable, they are the same direction — start over on one.

## Hard constraints that still hold (from the charter — non-negotiable)

- **Clean-room / blind-start.** The real product name/identity and any prior/parallel design exploration are deliberately withheld and held outside this repo. Do not infer, request, or reconstruct them. Anything not in this packet or the charter is *withheld, not missing*.
- **One meaning per anchor.** "Points earned" and "points commonly lost" each get one exclusive visual anchor, used nowhere else (not for nav, subjects, or generic status).
- If a direction uses an interactive accent color, that color must **not** double as a scoring anchor.
- **Help, don't vend.** Assistance ladders least→most revealing; no answer-vending shortcut UX.
- **Laptop-first** web app. Legible at laptop width for real AP Statistics *and* Biology content (formulae, data/graphs, extended written responses).
- **No gamification / streak coercion, no subscription/paywall-nag patterns, no parent UI.**
- Progressive disclosure: a compact low-decision default for Learner B; density pulled (not pushed) for Learner A. One system, not two branded modes.

## Model assignment for this run

Decorrelation call (Creative Director recommendation — **David to confirm before dispatch**):
- 001 ran on **GPT-Sol** and converged. Will run 002 on Sol again before assessing alternate models. 

> **Flag added on commit (Claude Code, 2026-09-16):** this recommendation predates or was drafted independently of `config/agent-models.yaml` DECISION-0005, which promoted Codex/GPT-Sol to the **global default** for Visual Designer (Gemini and GPT-image are now alternates, not the default). The underlying goal here — get a training distribution different from whatever produced 001 — still holds; the "run the global default instead" framing above no longer matches current config.
>
> **Resolved (David, 2026-09-16): 002 runs on Sol.** The Creative Director's decorrelation recommendation above is not being followed — this is a deliberate Owner decision, not an oversight. Consequence for Sol on this run: the same tool that converged on 001 is being asked to genuinely diverge without a change in training distribution to help it. The divergence mandate and anti-convergence guard in this packet are doing all the work that a model switch would otherwise have shared — treat them as non-negotiable, not aspirational, precisely because there's no other decorrelation lever pulled this time.

## Approval State

- Approved: charter is "approved to generate"; Visual Design track is in scope; re-running Generate is Standing-Approval work.
- Not approved / required before Done: nothing you produce is final. Track "Done" is Hard-Gate — **David's sign-off only.** Your output is advisory/generative.

## Live / Tool State

- N/A — static directions only. The content/grading engine is ground truth but is not needed to render these; do not build against it or assume its internals.

## Files / Systems Affected

- Create: `projects/project-crux/visual/002-directions.md` (+ optional comps under `projects/project-crux/visual/assets/`).
- Do not modify `001-directions.md`, `charter.md`, `config/`, `docs/`, other `projects/`, or anything else.

## Open Risks / Blockers

- **P1 — Convergence (repeat of 001).** This is the whole reason for 002. Enforce the divergence axes and the anti-convergence guard above. A set that varies motif but not register fails this packet.
- **P2 — Inspiration set still unused.** Each direction must name the cluster(s) it draws from and how. A direction that names none is incomplete.
- **P3 — Over-correction into gimmick.** Divergence and playfulness must not break the hard constraints (one-meaning anchors, help-not-vend, real-content legibility, no gamification). Warm and imaginative, not toy-like.
- **Clean-room:** the real product name/identity and prior exploration are withheld on purpose. Do not infer or reconstruct.

## Do Not Touch

- The product's real name/identity or category beyond the charter.
- Any prior/parallel design exploration (excluded prior art).
- The engine/data layer, `charter.md`, `config/`, `docs/`, `001-directions.md`, and other `projects/`.
- Deferred/out of scope: app naming (deferred), Marketing Templates track (out).

## Next Expected Output

- `projects/project-crux/visual/002-directions.md` — for EACH direction:
  - its SSoT seed string **and** the derivation showing how register/structure/interaction came from it;
  - a one-line concept;
  - **which inspiration cluster(s) it metabolizes, and how** (required);
  - palette (hex) — with a note on where it sits on the warm↔vivid / muted↔saturated map;
  - type pairing; motif/illustration/interaction stance;
  - how the **Open Hand** screen (sample question face-up with visible scoring mechanics → the student's move) is laid out at laptop width, with real Statistics *and* Biology examples somewhere across the set;
  - explicit "advisory / not final" label.
- Required: ≥4 directions that genuinely spread across the mandated divergence axes; ≥2 kinetic/manipulable in concept; each names its inspiration cluster; no two share the (register + palette-temperature + structure) triple.
- Close with a comparative table plotting the set on the divergence axes (emotional temperature, palette, structure, interactivity) so the spread is auditable at a glance.
- If you lack repo write access, output clearly delimited blocks labeled with the exact destination paths so a human can commit them.

> **Note (added 2026-09-16, historical — not a change to what was actually sent):** project-crux now uses `prompts/UNIVERSAL_SESSION_PROMPT.md`, pasted into each tool's persistent project instructions, triggered by `SESSION START: project-crux` — `prompts/CROSS_LAB_SPECIALIST_PROMPT.md` referenced below is superseded. The block below is preserved as the historical record of what actually governed this handoff when it ran; it is not meant to be reused going forward.

## Recommended Prompt for Visual Designer

"""
Use `prompts/CROSS_LAB_SPECIALIST_PROMPT.md`. Project slug: project-crux. You are the Visual Designer (ARCHITECTURE.md §3). Read `projects/project-crux/handoff/002-visual-designer.md`, then `projects/project-crux/charter.md` in full, then `projects/project-crux/visual/001-directions.md` as an example of the convergence you must NOT repeat. This project is clean-room/blind — do not infer the real product name or category. Produce ≥4 genuinely divergent visual/UI directions for the "Open Hand" study app. Each must visibly metabolize at least one of the charter's inspiration clusters (name which and how). The set must spread across emotional temperature, palette (not all muted neutrals), layout structure (not all 2-column), and interactivity model (≥2 kinetic/manipulable). Apply String Seed of Thought (§5c) at the REGISTER level: one seed per direction, derive its temperature/structure/interaction from the seed — not an ornamental motif. "Not gamified / not worksheet-like" means warm, imaginative, safe-haven — NOT austere. Keep all hard constraints (one-meaning anchors, help-not-vend, laptop-first, real AP content, no gamification). Write to `projects/project-crux/visual/002-directions.md`. Your output is advisory; David alone decides "done."
"""
