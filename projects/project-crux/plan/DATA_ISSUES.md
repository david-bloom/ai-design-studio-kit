# Pre-build data issues — project-crux

Status: findings log (Orchestrator, 2026-09-20). These are **product-data / content issues** (engineering + content track), not design work — but they gate surfaces the build-out will read. Recommend fixing in **one pre-build data pass, before new surfaces are wired to this data.**

Source: production database, read-only. **Clean-room maintained** — product identity withheld; table/field names and AP subjects are in-scope ground truth. Cannot be filed in the product's own repo from this session (read-only clone, branch-bound) → **mirror these into the product's backlog.**

---

## ISSUE-1 — Difficulty labeling is effectively absent / unusable

**Impact:** blocks any difficulty-driven behavior — the fade / "try another" escalation, question ordering, filtering, or adaptive selection. The mastery+hint mechanic (2026-09-20) implicitly needs a difficulty signal to escalate against; it isn't there.

**Two difficulty systems exist; neither is usable:**

1. **`content_labels` (label_type = `difficulty`)** — the canonical scale **Easy / Medium / Hard / Very Hard** is *defined* (across 3 exam packs) but has **zero rows in `artifact_label_assignments`**. It is an empty schema: the vocabulary exists, no item is tagged. Also sits in the layer the DB marks "deprecated compatibility projection."
2. **`item_package_payload->>'difficulty'`** — the only place difficulty is *populated*, and only partially, on a different scale:

| Subject | Type | Items (latest ver.) | Labeled | Values present |
|---|---|---|---|---|
| Biology | MCQ | 100 | 0 | — |
| Biology | FRQ | 157 | 0 | — |
| AP Statistics | FRQ | 178 | 0 | — |
| AP Statistics | MCQ | 321 | 203 (63%) | Easy 23 · Easy-Medium 20 · Medium 160 |

The populated scale (**Easy / Easy-Medium / Medium**) is off-scheme — no Hard, no Very Hard, plus an off-list "Easy-Medium."

**Recommendation:** adopt **Easy / Medium / Hard / Very Hard** in the **current** content model (not the deprecated `content_labels` layer); backfill every item; enforce presence at publish. Owner: content + engineering. Not a design task.

---

## ISSUE-2 — `subject_key` not normalized across tables

**Impact:** any cross-table join on `subject_key` silently breaks (already hit while mapping coverage).

- `subjects.subject_key`: `biology`, `ap-statistics`, `ap-calculus-ab`, … — hyphens, **and internally inconsistent** (`biology`, not `ap-biology`).
- `topic_point_briefs.subject_key`: `ap_biology`, `ap_statistics` — underscores and an `ap_` prefix.

**Recommendation:** pick one canonical convention (suggest `ap-<slug>`, hyphens); fix the authority table `subjects` (incl. `biology` → `ap-biology`); backfill referencing tables in one migration guarded by FKs. **Audit every use site first** — RLS policies, the Stripe catalog mapping, and `subject_entitlements` all key on subject, so a naive rename can orphan entitlements. Owner: engineering. Do before new surfaces read the data.

**Decision (David, 2026-09-21): canonical = hyphen; replace underscores.** So `ap_biology` → `ap-biology`, `ap_statistics` → `ap-statistics` in `topic_point_briefs`/`taxonomy_source_versions`.
**One catch to close, or the mismatch survives:** "replace underscore with hyphen" yields `ap-biology`, but `subjects.subject_key` currently says `biology` (no `ap-` prefix), while its other rows use `ap-…`. So full canonical is **`ap-<slug>` for every subject** — the migration must also do `subjects.biology` → `ap-biology`, not just swap underscores. Otherwise Biology stays mismatched (`ap-biology` vs `biology`).
This is a production data migration (writes to prod, touches RLS / Stripe / entitlements), not a read — out of this session's read-only scope. Engineering runs it with the use-site audit first.

---

## Still queued (2026-09-20)

- Full **data-contract audit** — systematically diff keys / enums / ids across `subjects`, `taxonomy_*`, `content_item_*`, `topic_point_briefs` (there are likely more mismatches than the two above).
- **Canonical-answer question coverage** by unit × topic (the brief side is healthy: Biology 60 topics / 8 units, Statistics 55 / 5; the question side is unmeasured).
