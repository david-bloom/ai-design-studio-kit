---
handoff: project-crux/014
role: visual-designer
status: draft
lane: divergence
actor: codex
model: unspecified
source_sha:
frozen_hash:
inputs:
  - projects/project-crux/charter.md
  - projects/project-crux/visual/004-directions.md
  - projects/project-crux/visual/007-working-mode-challenger.md
outputs:
  - projects/project-crux/visual/014-register-directions.md
supersedes: none
revises: none
---

# Handoff Packet 014 — Visual Designer (Re-diverge on an Updated Teen-Register Brief, With a Control)

Task:
- Handoff 014 (project-crux, Visual Design track) — **re-run the Generate stage at the register level.** Produce a genuinely divergent set of visual/UI directions for the "Open Hand" study screen against an **updated audience-register brief**, plus **one mandated control direction that deliberately ignores that brief.** This is a register/palette/type exploration, not a re-do of the information architecture, and not a polish pass.

## Why 014 exists (read before generating)

The set to date (Options 01–06 in `004-directions.md`) and the current working-mode challenger (`007-working-mode-challenger.md`, "The Blue Hour Cabinet") lean cool, muted, and mature in register. Independent expert brand feedback (relayed by David from a recognized brand-development expert) is that this register is **working against the actual audience**: brands that resonate with teens tend toward **higher contrast, generous white space, warm color accents, and black sans-serif type.** This converges with an already-open Critic finding — 009/N4, the "register hit," which asked whether a cool register supplies the comfort a nervous student wants and said only real reaction could settle it. Treat the register question as now decided by that expert input: **explore the teen-resonant register seriously.**

This packet does **not** touch Blue Hour Cabinet. David is personally directing changes to Option 07 in parallel as a hands-on exercise; 07's files are out of scope here (see Do Not Touch). 014 generates *fresh alternates*, it does not re-skin 07.

## The updated brief (register only)

Metabolize these register principles into each teen-register direction, and name how each direction does so:

- **High contrast.** Confident figure/ground; strong darks against strong lights. Not low-contrast tonal fields.
- **Generous white space.** Space as a primary device, not leftover margin.
- **Warm color accents.** Warmth carries energy and identity — and it must not be coded only as the negative "points-lost" anchor.
- **Black sans-serif headers.** Display/headline type is heavy sans, not serif.

**New inspiration set (this run):** **Nike, Instagram, Depop, Hollister.** Metabolize the *principle* — bold contrast, negative space, warm/confident energy, decisive sans type, an identity teens opt into — **do not re-skin the logos, wordmarks, or house palettes.** "Depop's confidence and white space applied to an AP Bio rubric" is the bar; "put a swoosh on it" is not. (These extend, they do not replace, the charter's existing inspiration clusters.)

## Divergence is mandated, and one direction must defy the brief

Produce **three (3) genuinely distinct teen-register directions PLUS one (1) control** = four total.

**The three teen-register directions:**
- Each visibly metabolizes the updated register brief above and names how.
- **Anti-convergence guard (SSoT at the register level, `ARCHITECTURE.md` §5c):** emit a distinct random seed string per direction and derive its **emotional temperature + palette temperature + structural model** from the seed — not an ornamental motif. No two may share the same (register + palette-temperature + structure) triple. If two could swap palettes and be indistinguishable, they are one direction — re-seed one.
- They must also be distinct *from the existing set* (01–07): a teen-register re-paint of an existing direction is not a new direction.

**The one control (the "ignore the feedback" variant):**
- A direction that **deliberately keeps a cool / muted / mature register** — essentially the strongest honest case *for* the Blue Hour family's register on its own terms.
- It must be a **credible, well-argued direction, not a strawman.** Its job is falsification: it lets the eventual head-to-head test whether the expert teen-register heuristic actually wins with this product's two real learners, rather than assuming it. A control that is deliberately bad proves nothing.
- **Label it explicitly as the control** ("Control — defends the cool/mature register against the updated brief") and state, in one or two lines, the case it is making and what result would falsify the teen-register brief.

## Scope of this exploration

- **Unit:** the **Open Hand working screen at 1440×900** (sample question face-up with scoring mechanics visible → the student's move), the same comparable unit as 002/004. Real **AP Statistics and Biology** content must appear somewhere across the set.
- **Register-led, not IA-led.** You may adopt, reuse, or lightly remix an existing structure (three-column, card stack, guided scenes, folio, lab canvas) if it serves a direction — the exploration is about **palette, type, contrast, space, and accent**, not re-inventing the information architecture. Say which structure each direction rides on.
- Written directions only (like 002/004). No rendered mocks in this packet — mocks come later if a direction advances.

## Hard constraints that still hold (from the charter — non-negotiable)

- **Clean-room / blind-start.** The real product name/identity and any prior/parallel design exploration are withheld on purpose. Do not infer, request, or reconstruct them. Anything not in this packet or the charter is *withheld, not missing*.
- **One meaning per anchor.** "Points earned" and "points commonly lost" each get one exclusive visual anchor, used nowhere else (not for nav, subjects, or generic status). Warm accents are encouraged for identity — but a warm accent used for identity must not also be a scoring anchor.
- Interactive/action color must **not** double as a scoring anchor.
- **Help, don't vend.** Assistance ladders least→most revealing and states what each step reveals; no answer-vending shortcut UX.
- **Laptop-first** web app. Legible at laptop width for real AP Statistics *and* Biology content (formulae, accessible graphs/tables, extended written responses). High contrast and big type must not crowd real content off the screen.
- **Progressive disclosure:** a compact low-decision default for Learner B (mild ADHD, short sessions, visible momentum); density pulled — not pushed — for Learner A. One system, not two branded modes.
- **No gamification / streak coercion, no subscription/paywall-nag patterns, no parent UI.** Teen-brand energy is a register, not a license for rewards/streaks.

## Model assignment for this run

- Default per `config/agent-models.yaml`: Visual Designer = **Codex / GPT-Sol**. Divergence lane requires a model set at dispatch (`--model`).
- **Decorrelation option (David's call at dispatch):** the point of 014 is *fresh* register eyes, and Sol's first divergence pass (001) converged. Running 014 on a different lab is a legitimate decorrelation lever. If it runs on Sol again, the SSoT guard and the divergence mandate above are the only anti-convergence levers — treat them as non-negotiable, not aspirational.

## Approval State

- Approved: charter is "approved to generate"; Visual Design track is in scope; re-running Generate is Standing-Approval work.
- Not approved: nothing you produce is final, selected, or ranked. Track Done is Hard-Gate — **David's sign-off only.** Your output is advisory/generative.

## Note on the brief's provenance (not a blocker)

The updated register brief and the Nike/Instagram/Depop/Hollister inspiration set are stated **inline in this packet** and are also being folded into `charter.md` (Expanded understanding + a soft register constraint) as an **approved charter update** (David, 2026-09-18). Land that charter update **before** dispatching this packet, so `source_sha` stamps against a charter that already carries the register brief. Either way this packet is self-contained: read the charter for everything else, this packet for the register brief.

## Files / Systems Affected

- Create: `projects/project-crux/visual/014-register-directions.md`.
- Modify nothing else.

## Open Risks / Blockers

- **P1 — Convergence.** The three teen-register directions could collapse onto one "bold sans + white space + one warm pop" look. Enforce the SSoT register guard and the distinct-triple rule. Surface variety is not divergence.
- **P2 — Re-skin, not re-think.** A teen-register repaint of an existing direction (or of Blue Hour) is not a new direction. Each must stand on its own register logic.
- **P3 — Strawman control.** The control must be the *best* honest cool/mature case, or it fails its falsification purpose. Do not sandbag it.
- **P4 — Energy breaking the constraints.** Teen-brand contrast/warmth must not become gamification, must not crowd real AP content, and must not fatigue Learner B in a short session. Warm/bold in identity; disciplined in the working reading surface.
- **P5 — Inspiration mis-read.** Metabolize the principle; do not reproduce Nike/Instagram/Depop/Hollister marks, wordmarks, or house palettes.
- **Clean-room:** the real product name/identity and prior exploration are withheld on purpose. Do not infer or reconstruct.

## Do Not Touch

- Anything not in `outputs` — in particular `007-working-mode-challenger.md`, `007b-color-resolution.md`, the entire `visual/mocks/` tree (including `option-07-challenger/`), `004-directions.md`, `006-place-mode.md`, `001/002/003-directions.md`, `charter.md`, `config/`, `docs/`, and other `projects/`.
- Blue Hour Cabinet specifically: David is directing it by hand in parallel. Do not edit, re-skin, or re-render it here.
- The product's real name/identity/category beyond the charter; any excluded prior art.
- Deferred/out of scope: app naming (deferred), Marketing Templates track (out).

## Return path — branch intake

You can push a branch but not `main`. Commit **only your one declared output** (`projects/project-crux/visual/014-register-directions.md`) on `codex/project-crux-014-visual-designer` and report the branch name and SHA. Do not update this packet, do not edit `docs/STATE.md`, and do not report the work as complete on your own authority: the steward (`claude-code`) checks that exact path out of your branch and lands it with `scripts/publish`, and the DELIVERY RECEIPT is the completion. If your integration insists on opening a PR, leave it as a draft and say so.

## Next Expected Output

`projects/project-crux/visual/014-register-directions.md` — for EACH of the four directions:
- its SSoT seed string **and** the derivation showing how temperature/palette/structure came from it (the control states its seed too, or states plainly that it is derived from the existing cool-register set by intent);
- a one-line concept;
- for the three teen-register directions: **how it metabolizes the updated register brief** (contrast, white space, warm accents, black sans) and **which inspiration principle(s)** from Nike/Instagram/Depop/Hollister it draws on and how;
- for the control: the explicit "Control — defends the cool/mature register" label, the case it makes, and what result would falsify the teen-register brief;
- palette (hex) with a note on where it sits on the warm↔cool / muted↔saturated map;
- type pairing (headline + interface + math); which existing or new structure it rides on;
- how the **Open Hand** screen lays out at 1440×900, with real Statistics *and* Biology examples somewhere across the set;
- how it serves Learner B (low-decision default) and Learner A (density pulled), and how it holds the exclusive scoring anchors;
- explicit "advisory / not final" label.

Close with a comparative table plotting all four on the divergence axes (emotional temperature, palette temperature, structure, contrast/white-space) so the spread — and the control's distance from the three — is auditable at a glance.
