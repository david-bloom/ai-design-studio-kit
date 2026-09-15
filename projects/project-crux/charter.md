# Project Charter — project-crux

Status: **shell only — origin brief not yet supplied.** This file will be filled in once David provides the pedagogy and features brief. Recorded now: the process decisions that constrain how this project must be run, made before any brief exists, so they can't drift once generation starts.

**A note on what this file deliberately does not say.** This project runs as a clean-room, blind-start exercise (see constraints below). Generative agents (Brand Strategist, Visual Designer, Marketing Creative Designer, and anyone else pointed at this repo) are expected to read this charter in full — so the real-world product this project is ultimately for, and the identity of any existing design work being deliberately set aside, are held **outside this repo entirely**, known only to David and to whichever Creative Director session originated this project. Do not add that identifying information to this file, to `README.md`, to the activity/decision logs, or to any handoff packet — anywhere a generative agent might read. If you are a generative agent reading this and were not told the product's real identity, that is intentional; do not infer or guess it.

## Why this project exists (process note, not part of the eventual product brief)

This project is deliberately unnamed after any existing product — the slug and every file in this folder are category-neutral on purpose. It was created to run a from-scratch visual/UX/brand design exploration for a real, existing product, without inheriting that product's existing design decisions — and to be reusable for other design work later without implying which product it maps to.

Two process constraints apply to this project specifically, agreed before any brief was written:

1. **Clean-room from the source product's existing design artifacts.** Any existing visual identity brief, UI prototypes, or color/type/layout decisions already made for the real product are **excluded prior art**, not seed material — they exist only for later comparison/audit, outside this repo. The source product's underlying *product/business* facts (what it does, who it's for, the business model) are separately in-scope as ground truth once the brief is written — this exclusion is about design decisions only, not the product concept.
2. **Session isolation.** The Creative Director session that originated this project had already seen the excluded design artifacts in #1 (from working directly on the source product elsewhere). To keep this project's generative stages genuinely uncontaminated, **those stages must run in a fresh session** whose only input is this charter once filled in — never a continuation of a session that has seen the source product's existing visual brief or prototypes.

Open question, to resolve when the brief is written: whether to also **anonymize the product category** in what the generative agents are shown (e.g. "a skill-mastery and diagnostic-practice tool for a high-stakes standardized test" rather than naming the real category up front), to avoid category-level tropes biasing output before the brief's own thinking is introduced. Undecided — flag for David.

## Origin brief

> Pending — David to supply updated pedagogy and features.

## Expanded understanding

Pending brief development.

## Active tracks

| Track | In scope? | Notes |
|---|---|---|
| Visual Design | TBD | |
| Brand Identity | TBD | |
| Marketing Templates | TBD | |
| UX | TBD | |

## Done Decider checklist (per active track)

Pending.

## Constraint ledger

| Constraint | Hard (must survive) or Soft (fair game for Chaos Agent) | Source |
|---|---|---|
| No exposure of generative agents to the source product's existing visual identity brief or prototype files, and no exposure to the source product's name/identity itself | Hard (process constraint, not a creative one) | David, 2026-09-15 |
| (product/business ground truth from the source product's vision doc, once confirmed in scope) | TBD | |

## Model assignment (snapshot at project start)

Snapshot of `config/agent-models.yaml` as of 2026-09-15 — see that file for current rationale.

| Role | Model | Snapshot date |
|---|---|---|
| Creative Director | claude-opus (Anthropic) | 2026-09-15 |
| Brand Strategist | gpt-5.1 (OpenAI) | 2026-09-15 |
| Visual Designer | gemini-3-pro (Google) — pending project-level override to GPT-Sol, see Stage log | 2026-09-15 |
| Marketing Creative Designer | gpt-image (OpenAI) | 2026-09-15 |
| Critic | grok (xAI) | 2026-09-15 |
| Chaos Agent | grok (xAI) | 2026-09-15 |

## Stage log

- `2026-09-15` — Charter shell created. Process constraints (clean-room, session isolation) recorded ahead of brief. Awaiting pedagogy/features brief from David.
- `2026-09-15` — Project renamed `design-agency` → `project-crux`; charter reworded to remove the source product's name from repo content entirely (previously present in this file's own process note, defeating the blind-start intent for any generative agent reading it in full).
- `2026-09-15` — David worked with a Claude Design session in the Creative Director role to draft the brief. A prompt was issued for that session to complete this charter and set a project-level model override: Visual Designer → GPT-Sol. Not yet applied here — pending that session's output being brought back and committed.
- `2026-09-15` — Global role consolidation (DECISION-0001 / APPROVAL-0001): UX Critic and Usability Tester merged into a single Critic role, assigned Grok. Reflected in `config/agent-models.yaml`, `docs/ARCHITECTURE.md`, and this charter's Model assignment table above.

## Changelog

- `2026-09-15` — initial charter shell, no origin brief yet.
- `2026-09-15` — renamed to `project-crux`; scrubbed source-product identity from file content.
- `2026-09-15` — Model assignment table updated for the UX Critic/Usability Tester → Critic consolidation (DECISION-0001).
