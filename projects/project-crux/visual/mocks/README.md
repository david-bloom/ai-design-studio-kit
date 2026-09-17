# Project Crux visual mock library

> Status: advisory review material — not final, approved, or ready to ship. David alone decides when Visual Design or UX is done.

This folder turns the six frozen directions in `../004-directions.md` and the four additive place modes in `../006-place-mode.md` into inspectable laptop-first review plates. GitHub is the source of truth.

## Review set

| Option | Working mode | Place / overview mode |
|---|---|---|
| 01 — Draw the Door: Influence Lab | `option-01-draw-the-door/working.html` + `.png` | `overview.html` + `.png` |
| 02 — Soft Landing | `option-02-soft-landing/working.html` + `.png` | `overview.html` + `.png` |
| 03 — Pocket Universe | `option-03-pocket-universe/working.html` + `.png` | Deferred by Handoff 006 |
| 04 — Lantern Fold | `option-04-lantern-fold/working.html` + `.png` | `overview.html` + `.png` |
| 05 — Say It Bright, text-only | `option-05-say-it-bright/working.html` + `.png` | `overview.html` + `.png` |
| 06 — Say It Bright: Three Guide Registers | `option-06-three-guide-registers/working.html` + `.png` | Inherits Option 05 if advanced; deferred by Handoff 006 |

The HTML files are deterministic comps with a few local interactions for review: selecting map locations, scrubbing the Influence Lab outlier, adjusting Pocket Universe oxygen, stepping through Lantern Fold leaves, and changing Say It Bright scenes. PNGs are canonical 1440 × 900 review snapshots for GitHub and human sharing.

Guide exploration is maintained separately in `../guide-concepts/`. Option 06 references stable guide IDs rather than owning the character assets.

## Boundaries

- The UI preserves the palettes, typography intent, anchors, structures, and content relationships in 004/006. It does not select or restyle a direction.
- Scoring anchors appear only in working mode. Overview mastery treatments use distinct shapes, textures, and labels.
- The character constraint is suspended only for Option 06, per David's explicit probe instruction.
- These comps are visual hypotheses. They do not establish usability, accessibility conformance, or a Done decision.

## Rendering

Run from the repository root:

```sh
node projects/project-crux/visual/mocks/shared/render-mocks.mjs
```

The renderer uses Playwright to open each local HTML file at 1440 × 900 and overwrite its neighboring PNG. Install Playwright in the current Node environment, or set `CODEX_NODE_MODULES` to a Node modules directory that contains it.
