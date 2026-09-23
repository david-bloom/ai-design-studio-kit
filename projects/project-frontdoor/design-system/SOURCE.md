# Design system — pinned mirror (READ ONLY)

This folder is a **read-only, version-pinned snapshot** of the Cramapple app's
locked design system. It exists so project-frontdoor's generative handoff has a
self-contained, declarable input to build the home page *inside*. It is **not**
the source of truth and **must not be edited here.**

## Canonical source

- **Repo:** `david-bloom/cramapple`
- **Path:** `.claude/skills/cramapple-design/`
- **Pinned commit:** `5341d4ddae8614240e72737fc1763b4727e357c5`
- **Live style guide:** https://preview--ap-prep-canvas.lovable.app/style-guide

Any change to the design system happens in the canonical skill and is then
re-mirrored here by bumping the pinned commit above. Never hand-edit these files.

## What is mirrored (the token contract only)

- `styles.css` — the single `@import` entry point.
- `tokens/{fonts,colors,typography,spacing,elevation,semantic}.css` — the raw
  scales and the semantic aliases. **Consume the aliases (`semantic.css`), not
  the scales** — see `TOKENS.md`.
- `TOKENS.md` — the human-readable token contract and hard rules.
- `VISUAL_IDENTITY.md` — register, voice, and mark guidance.

The full canonical skill also carries components (`components/`), specimen cards
(`guidelines/`), and screen kits (`ui_kits/`, including an app `home`/study-map
kit — **not** the marketing home page). Those are app-specific and deliberately
**not** mirrored here; read them from the canonical source if a generation needs
component-level fidelity.

## Non-negotiables the home page inherits (from `TOKENS.md`)

- Orange (`#f54900` / `#ca3500`) is the masthead / one primary action — **never
  an error color**. Blue = rubric / points earned. Maroon = points lost. Purple
  = the student's own work. Yellow = hints, and every yellow surface costs the
  student something — **never decoration**. Green = reference. One meaning per
  color; nothing new in the warm lane.
- `--radius-all` is `0px` (square corners; the only exception is `--radius-dot`
  50%, the MCQ radio and nothing else).
- `--motion-duration` is `0ms`, `--motion-easing` is `step-end` — no transitions
  invented for "polish."
- 16px floor for any content a student must read; sub-16px roles are chrome only.
- Never hardcode a hex; add a token instead.

These are inherited constraints for the home page, per the charter's
extension-not-sibling decision. Novelty is spent on layout / motion-narrative /
composition, not on re-tuning these primitives.
