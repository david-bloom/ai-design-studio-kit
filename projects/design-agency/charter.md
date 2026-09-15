# Project Charter — design-agency

Status: **shell only — origin brief not yet supplied.** This file will be filled in once David provides the updated pedagogy and features brief. Recorded now: the process decisions that constrain how this project must be run, made before any brief exists, so they can't drift once generation starts.

## Why this project exists (process note, not part of the eventual product brief)

This project is deliberately **not** named after any existing product. It was created to run a from-scratch visual/UX/brand design exploration for what is currently Cramapple, without inheriting Cramapple's existing design decisions — and to be reusable for other design work later without implying it's Cramapple-specific.

Two process constraints apply to this project specifically, agreed before any brief was written:

1. **Clean-room from Cramapple's existing design artifacts.** Cramapple's `docs/product/CRAMAPPLE_VISUAL_IDENTITY_BRIEF_v2.md`, its prototype HTML files, and any color/type/layout decisions already made there are **excluded prior art**, not seed material. They exist for later comparison/audit only. Cramapple's underlying *product/business* facts (what it does, who it's for, the business model) are separately in-scope as ground truth — this exclusion is about design decisions only, not the product concept.
2. **Session isolation.** The Creative Director session(s) that ran the discovery conversation for this project (in the Cramapple repo, prior to this file existing) were already exposed to the excluded artifacts in #1. To keep this project's generative stages (Brand Strategist, Visual Designer, Marketing Creative Designer) genuinely uncontaminated, **those stages must run in a fresh session** whose only input is this charter once filled in — not a continuation of any session that has seen Cramapple's existing visual brief or prototypes.

Open question, to resolve when the brief is written: whether to also **anonymize the product category** in what the generative agents are shown (e.g. frame it as "a skill-mastery and diagnostic-practice tool for a high-stakes standardized test" rather than naming Cramapple/AP Biology up front), to avoid category-level tropes (Kaplan/Fiveable-style edtech conventions) biasing output before any of Cramapple's own thinking is introduced. Undecided — flag for David.

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
| No exposure of generative agents to Cramapple's existing Visual Identity Brief v2 or prototype HTML files | Hard (process constraint, not a creative one) | David, this session, 2026-09-15 |
| (product/business ground truth from Cramapple's vision doc, once confirmed in scope) | TBD | |

## Model assignment (snapshot at project start)

Snapshot of `config/agent-models.yaml` as of 2026-09-15 — see that file for current rationale.

| Role | Model | Snapshot date |
|---|---|---|
| Creative Director | claude-opus (Anthropic) | 2026-09-15 |
| Brand Strategist | gpt-5.1 (OpenAI) | 2026-09-15 |
| Visual Designer | gemini-3-pro (Google) | 2026-09-15 |
| Marketing Creative Designer | gpt-image (OpenAI) | 2026-09-15 |
| UX Critic | claude-opus (Anthropic) | 2026-09-15 |
| Usability Tester | grok (xAI) | 2026-09-15 |
| Chaos Agent | grok (xAI) | 2026-09-15 |

## Stage log

- `2026-09-15` — Charter shell created. Process constraints (clean-room, session isolation) recorded ahead of brief. Awaiting pedagogy/features brief from David.

## Changelog

- `2026-09-15` — initial charter shell, no origin brief yet.
