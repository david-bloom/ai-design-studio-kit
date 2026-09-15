# AI Design Studio Kit Tool and Integration Guide

**Status:** Draft / Approved  
**Owner:** David Bloom

## Purpose

This guide covers project-specific tool and integration skills only. Role definitions, agent boundaries, source-of-truth rules, and QA process live in `AI_COLLABORATION_RULES.md` and `AGENT_OPERATING_MODEL.md` — not here. (This file was renamed from `SKILLS_GUIDE.md`; its previous "Source of Truth," "Implementation / Live State," and "QA" sections were removed because they duplicated role rules already defined canonically elsewhere — a second copy of a role rule drifts from the first, and an agent that reads only this file because the task looked technical would miss updates made to the canonical doc.)

**Adapted for a design kit.** This template's section headers are inherited from a general engineering-project version of this kit. "Payments / Integrations" below is repurposed to cover cross-lab model integrations; "Deployment / Serverless Routes" is repurposed to cover publishing or handing off a finished deliverable. Not every rule in those sections has a literal equivalent here (e.g. "webhooks/events idempotent") — read them as the closest applicable principle, not a literal checklist.

## Skill Equivalent: Cross-Lab Model Integrations (repurposed "Payments / Integrations")

Use for:

```text
API access to OpenAI (GPT), Google (Gemini), and xAI (Grok), used per the role assignments in config/agent-models.yaml. Also: Lovable (via MCP) for building interactive prototypes from a Visual Design or UX track's output.
```

Rules:

- Secrets stay backend-only.
- Client redirects or UI state do not prove trusted outcomes.
- Webhooks/events should be idempotent where relevant.

## Skill Equivalent: Deliverable Handoff (repurposed "Deployment / Serverless Routes")

Use for:

```text
Any moment a deliverable leaves this repo: sending final assets to David or an external party, sharing a Lovable-built prototype's live preview, or deploying a prototype via Vercel. There is no standing production service this kit deploys to — treat "deployment" as "handoff."
```

Examples:

- Vercel routes.
- Serverless functions.
- Provider signing routes.
- Environment variables.
- Deployment logs.
- Preview vs production behavior.

Rules:

- Secrets stay server-side.
- Frontend clients must not receive private keys, service-role keys, certificates, or provider signing material.
- Production deployments and env var changes should be hard gates unless explicitly moved to a standing approval lane.
- Live provider state should be persisted in the system of record before downstream status treats it as durable.
- Preview and production behavior must be distinguished.

## Skill Equivalent: Frontend / UX

Use for:

- Frontend prompts.
- Route instructions.
- User-facing copy.
- Client/backend wiring.

Rules:

- Frontend does not own trust decisions.
- Backend/status APIs own gates.
- UI hiding is not security.
