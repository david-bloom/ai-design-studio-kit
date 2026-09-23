---
handoff: project-frontdoor/002
role: chaos-agent
status: dispatched
lane: divergence
actor: grok
model: grok (xAI)
source_sha: b1e6d77
frozen_hash: 9c01c87c964525ee3db9538802f3ec31d8ed4785b01e4a6b65acb465897aa80b
inputs:
  - projects/project-frontdoor/charter.md
  - projects/project-frontdoor/design-system/SOURCE.md
  - projects/project-frontdoor/design-system/TOKENS.md
  - projects/project-frontdoor/design-system/VISUAL_IDENTITY.md
  - projects/project-frontdoor/design-system/styles.css
  - projects/project-frontdoor/design-system/tokens/colors.css
  - projects/project-frontdoor/design-system/tokens/typography.css
  - projects/project-frontdoor/design-system/tokens/fonts.css
  - projects/project-frontdoor/design-system/tokens/spacing.css
  - projects/project-frontdoor/design-system/tokens/elevation.css
  - projects/project-frontdoor/design-system/tokens/semantic.css
outputs:
  - projects/project-frontdoor/chaos/transplant-01/home.html
  - projects/project-frontdoor/chaos/transplant-01/home-desktop.png
  - projects/project-frontdoor/chaos/transplant-01/home-mobile.png
  - projects/project-frontdoor/chaos/manifest.md
supersedes: none
revises: none
---

# Handoff Packet 002 — Chaos Agent (Cramapple home page — one transplant wildcard)

Task:
- **Produce one deliberately off-axis home-page wildcard for `cramapple.com` via the transplant mechanism (`ARCHITECTURE.md` §5b).** Impose an unrelated reference domain's *organizing logic* on the home page and translate the principle — not the skin — into a working HTML mock plus a desktop and a mobile render. This is a **chaos branch:** advisory, labeled, never silently merged. It runs in parallel with the Visual Designer's three directions (`project-frontdoor/001`) as the decorrelated wildcard, from a different lab (xAI) than the generative pipeline (Claude + Sol).

## Why this packet exists

project-frontdoor deliberately has **no Critic** (David's call). The Chaos Agent is not a replacement check — it does not evaluate the three primary directions. Its job is the one thing a single-lab pipeline can't do for itself: introduce **decorrelated, lateral variance** so David has a genuinely off-axis option to react against. The three Sol directions are SSoT-guided but still reason from inside the same brief and the same design system; this packet reasons from *somewhere else entirely* and lands the result back inside the system.

## The mechanism — transplant (do this, specifically)

1. **Pick an unrelated reference domain** — a field with no obvious connection to test prep or SaaS home pages. Use SSoT (`ARCHITECTURE.md` §5c): emit a random seed string first and derive the domain from it, so you don't reach for the first obvious analogy. Examples of the *kind* of domain (do not default to these — derive your own): a darkroom contact sheet, a trading terminal, a luthier's workbench, a birder's field log, a transit map. Avoid anything that echoes the app's existing "cabinet/specimen-drawer" lineage — that's not a transplant, that's the incumbent.
2. **Translate the principle, not the skin.** Name the *organizing logic* you're borrowing (how that domain sequences attention, reveals information, or structures a decision) and apply that logic to the home page's job. Do not re-skin the page to *look* like a darkroom; restructure how it *works* using the darkroom's logic. The manifest must state the domain, the principle borrowed, and the principle rejected (what you deliberately did not literally copy).
3. **Keep it doing the job.** However radical the structure, the page must still: convert the student-buyer toward **starting the 7-day trial**, **show rather than tell** (a real, attemptable Open Hand moment using the app's AP Statistics least-squares sample lives somewhere in it), and work on **desktop and phone**.

## What you may and may not break

**Hold these (hard — even chaos stays inside them):**
- The design-system token contract: semantic aliases only, no hardcoded hex; colour ownership (orange = masthead/action, blue = earned, maroon = lost, purple = student work, green = reference, yellow = costly hints); square corners; 16px reading floor; Bungee / Passion One / Source Sans 3 / STIX. **The wildcard must still read as the same product** — that's what makes it a usable option rather than a throwaway. Do not draw a logo.
- No invented proof (no testimonials/quotes/numbers that don't exist). Help-don't-vend in the Open Hand moment. Real AP content. No gamification. Converts via the 7-day trial. Works on phone.

**Fair game to flip (soft — this is where the chaos lives):**
- The two-beat spine, the scroll choreography, where/whether a distinct "hero" exists, where the trial gate fires, the "exactly one live sandbox" fidelity tier, and the assumption that the page is even a vertical scroll. Flip whichever soft assumptions the transplanted logic wants flipped — and name each flip in the manifest.

## Render settings

Chromium headless, `waitUntil: 'load'`, awaited `document.fonts.ready`.
- **Desktop:** `viewport { width: 1440 }`, full-page capture, `deviceScaleFactor: 1`.
- **Mobile:** `viewport { width: 390 }`, full-page capture, `deviceScaleFactor: 2`.
- Each PNG under 500 KB (policy §7); optimize with `pngquant`/`oxipng`/`zopflipng` if needed — don't change viewport or format. If your surface can't render PNGs, deliver `home.html` and say so; the steward renders them.

## What to record in `manifest.md`

- The SSoT seed and the transplant domain it produced.
- The organizing principle borrowed, and the principle deliberately *not* literally copied (skin vs. logic).
- Every soft assumption you flipped from the `001` brief, and what the transplant did with the page's job (trial conversion, the Open Hand show-don't-tell moment, the mobile treatment).
- Token conformance: semantic aliases only, colour ownership held, earned/lost anchors shape-distinguishable without hue, square corners, no drawn logo, no invented proof.
- The AP Statistics sample used and the render command.

Keep it a plain record. It selects nothing.

## Hard constraints (governance)

- **Chaos output is advisory and is never silently merged into the primary track** (`ARCHITECTURE.md` §5). It lives only under `projects/project-frontdoor/chaos/`. David alone decides whether any of it survives.
- Selects nothing, ranks nothing, does not touch the `001` directions or the design system.
- Everything under "Hold these" above is non-negotiable.

## Model assignment for this run

- **Chaos Agent = Grok (xAI)** (David, 2026-09-23) — deliberately a different lab from the generative pipeline (Claude CD + Sol VD); same-family variation shares the family's blind spots (`ARCHITECTURE.md` §5, `config/agent-models.yaml` chaos_agent rationale). The divergence lane requires a model named at dispatch; `model:` stays `unspecified` in this draft and is set at dispatch.

## Files / Systems Affected

- Create: the four files in `outputs` under `projects/project-frontdoor/chaos/`.
- Modify nothing else — not `001`'s outputs, not `design-system/`, not `charter.md`.

## Open Risks / Blockers

- **P1 — Skin, not logic.** The failure mode of transplant: making the page *look* like the reference domain instead of borrowing how it *works*. The manifest's "principle borrowed vs. principle rejected" is the guard — be honest in it.
- **P2 — Off-system drift.** Chaos is structural, not a licence to abandon the tokens. If it doesn't read as the same product, it's not a usable wildcard.
- **P3 — Cleverness that forgets the job.** However strange, it still has to move a student toward the trial and show the product working. A beautiful un-converting page is a failed wildcard.

## Return path

- **If Grok can push a branch:** commit only the four declared outputs on `grok/project-frontdoor-002-chaos-agent` and report branch + SHA; the steward (`claude-code`, from a clone that can push `main`) lands them with `scripts/publish`. Do not report complete on your own authority.
- **If not:** return exactly one AIRLOCK RETURN per `prompts/UNIVERSAL_SESSION_PROMPT.md` — one FILE block for `home.html` and `manifest.md`, one ASSET block per PNG with its export/serve URL (or deliver HTML only and say so; the steward renders the PNGs).

## Next Expected Output

- One transplant wildcard: a self-contained `home.html` that works on desktop and phone, borrows an unrelated domain's organizing logic, still does the home page's job, and holds the design-system token contract — plus a desktop and a mobile render.
- `manifest.md` recording the SSoT seed, the transplant domain, principle borrowed vs. rejected, the soft assumptions flipped, token-conformance confirmations, the AP sample, and the render command.
