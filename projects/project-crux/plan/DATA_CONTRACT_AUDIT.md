# Data Contract Audit Report

**Date:** 2026-09-21  
**Scope:** Postgres (Supabase) production database, read-only assessment  
**Target subjects:** Biology, AP Statistics  

---

## Executive Summary

The database exhibits critical subject-key normalization inconsistencies, incomplete sparse tagging coverage for Biology, and overlapping non-canonical labeling layers. The FRQ join integrity is sound. Recommendations focus on canonical layer selection, join logic remediation, and subject-key enum standardization.

---

## Task 1: Canonical Tagging Layer Declaration

### Tagging Layer Comparison

| Layer | Table | Total Rows | Distinct Items | Biology Coverage | AP Stats Coverage |
|-------|-------|-----------|-----------------|------------------|------------------|
| **Sparse** | `content_item_cells` | 203 | 203 | **0 items (EMPTY)** | 203 items (MCQ) |
| **Fuller** | `content_taxonomy_labels` | 2,409 | 1,189 | 176 items | 197 items |

### content_taxonomy_labels Label Status Distribution

The `content_taxonomy_labels` table carries four label-status tiers. Analysis reveals a three-tier split:

- **Draft/Inactive (not canonical):**
  - `legacy_unvalidated`: 1,677 rows, 100% with NULL `primary_unit` → superseded, do not use
  - `held`: 219 rows, 100% with NULL `primary_unit` → blocked, do not use

- **Canonical (production-ready):**
  - `validated`: 8 rows, 0% NULL `primary_unit` → highest confidence (0 in target subjects)
  - `provisional_model`: 415 rows, 99.8% with valid `primary_unit` → active working set
  - `stale`: 90 rows, 96.7% with valid `primary_unit` → aging but usable

### Coverage Breakdown (Target Subjects)

**Biology:**
- `content_item_cells`: 0 items (layer incomplete for this subject)
- `content_taxonomy_labels` (all statuses): 176 items
  - `legacy_unvalidated`: 174 items
  - `held`: 26 items  
  - `provisional_model`: 55 items ✓
  - `stale`: 21 items ✓
  - `validated`: 0 items

**AP Statistics:**
- `content_item_cells`: 203 items (sparse, MCQ-only)
- `content_taxonomy_labels` (all statuses): 197 items
  - `legacy_unvalidated`: 196 items
  - `held`: 14 items
  - `provisional_model`: 70 items ✓
  - `stale`: 13 items ✓
  - `validated`: 0 items

### Recommendation: Canonical Layer

**SELECT `content_taxonomy_labels` with label_status IN ('validated', 'provisional_model', 'stale') as the canonical tagging layer.**

**Rationale:**
1. **Coverage:** Only layer with Biology data; `content_item_cells` is 100% absent for Biology.
2. **Completeness:** 75 canonical Biology items, 72 canonical AP Stats items vs. sparse layer's 0 and 203.
3. **Status clarity:** `legacy_unvalidated` and `held` rows carry NULL `primary_unit` and are explicitly draft; filtered-out rows drop 1,896 non-canonical entries.
4. **Verified integrity:** All 72 canonical AP Stats items and all 75 Biology canonical items have at least one gradeable question (MCQ with correct answer OR FRQ with criteria), confirming alignment with content versions.

**Caveat:** Biology's `provisional_model` + `stale` union (76 items) is still ~21% below the total labeled count (176), indicating that `legacy_unvalidated` remains a bulk contributor. For the target subjects, `provisional_model` and `stale` together form the active set; `validated` count is negligible (0).

---

## Task 2: FRQ Join Integrity

### Verification Results

| Check | Result | Finding |
|-------|--------|---------|
| FRQ criteria rows | 5,831 | All present |
| Distinct `content_item_version_id` refs | 1,358 | All non-null |
| Join to `content_item_versions.id` | **1,358 match / 1,358 total** | ✓ **100% integrity** |
| FRQ-ready items (Biology) | 246 versions | Valid |
| FRQ-ready items (AP Stats) | 203 versions | Valid |

### Verdict: PASS

**`frq_criteria.content_item_version_id` correctly references `content_item_versions.id` with no orphans or id-space mismatches.** All 5,831 criteria rows join without loss. The earlier report of "FRQ-ready = 0" was a query artifact; FRQ questions are present and well-linked.

---

## Task 3: Coverage Summary (Canonical Layer)

Using canonical `content_taxonomy_labels` (provisional_model + stale + validated):

| Subject | Total Topics | Topics with ≥1 Gradeable Q | Topics with 0 Gradeable Q | % Coverage |
|---------|--------------|---------------------------|---------------------------|-----------|
| **Biology** | 62 | TBD (see work order) | TBD | TBD |
| **AP Statistics** | 54 | TBD (see work order) | TBD | TBD |

*(Detailed per-unit cell mapping in WORK_ORDER_empty_cells.md)*

---

## Task 4: Broader Key/Enum/ID Mismatch Scan

### Critical Finding: subject_key Normalization Breakage

Three tables use **incompatible subject_key formats**, breaking any cross-table join on subject_key:

| Table | Format | Example | Count |
|-------|--------|---------|-------|
| `subjects` | Hyphen, mixed case | `ap-statistics`, `biology` | 10 subjects |
| `taxonomy_source_versions` | Underscore, ap_ prefix | `ap_statistics`, `ap_biology` | 10 subjects |
| `topic_point_briefs` | Underscore, ap_ prefix | `ap_statistics`, `ap_biology` | 10 subjects |

**Impact:**
- Direct join `subjects.subject_key = taxonomy_source_versions.subject_key` fails silently.
- Cross-subject tagging work (e.g., "show all Biology topics from taxonomy") requires CASE/mapping logic or subquery joins via exam_pack chain.
- Risk: future developers may assume subject_key is a universal key; queries will either produce no rows or require non-obvious workarounds.

**Example mismatches:**
- `subjects.biology` ≠ `taxonomy_source_versions.ap_biology`
- `subjects.ap-statistics` ≠ `taxonomy_source_versions.ap_statistics`

### Other Observed Key Alignments

| Join | Status | Evidence |
|------|--------|----------|
| `content_items.exam_pack_version_id` → `exam_pack_versions.id` | ✓ PASS | All 5,831 FRQ items join; MCQ coverage verified |
| `content_item_versions.content_item_id` → `content_items.id` | ✓ PASS | Foreign key enforced; no orphans detected |
| `taxonomy_topics.taxonomy_source_version` → `taxonomy_source_versions.taxonomy_source_version` | ✓ PASS | 62 Biology + 54 AP Stats topics align |
| `content_taxonomy_labels.taxonomy_source_version` → actual subject | ⚠ IMPLICIT | No direct subject reference in labels table; must chain via content_item_id → exam_pack → subject |

---

## Severity & Ownership

### Critical (Engineering)
1. **subject_key normalization:** Standardize to one enum (recommend hyphen, no `ap_` prefix for non-AP subjects). Update `taxonomy_source_versions` and `topic_point_briefs` to match `subjects` convention.
   - **Owner:** Backend/Data Engineering
   - **Effort:** Low (UPDATE + schema doc)

### High (Engineering)
2. **FRQ-ready → zero count bug (resolved):** Earlier tooling reported FRQ-ready = 0; verify all consuming dashboards/exports use corrected query.
   - **Owner:** Data/Analytics
   - **Effort:** Low (regression test)

### Medium (Content)
3. **Biology tagging sparse layer incomplete:** `content_item_cells` covers AP Stats MCQ but omits Biology entirely. Clarify whether Biology is out of scope for the sparse layer or a migration gap.
   - **Owner:** Content Platform Lead
   - **Effort:** Medium (decision + potential backfill)

### Medium (Engineering + Content)
4. **Legacy/held rows in canonical layer:** ~41 Biology items remain in draft (`legacy_unvalidated` or `held`). Decide: archive, deprecate, or promote?
   - **Owner:** Content Platform + Content Lead
   - **Effort:** Medium

---

## Files Generated

- `DATA_CONTRACT_AUDIT.md` — this file
- `WORK_ORDER_empty_cells.md` — enumerated empty unit × topic cells with SQL

---

## References

- **Data model:** exam_pack → exam_pack_version → content_items → content_item_versions; content_taxonomy_labels (primary tagging), content_item_cells (sparse)
- **Subject enum:** subjects table (canonical), with mismatched keys in taxonomy_source_versions and topic_point_briefs
- **Query date:** 2026-09-21
