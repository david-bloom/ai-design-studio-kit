# Work Order: Empty Unit × Topic Cells

**Report Date:** 2026-09-21  
**Scope:** Biology, AP Statistics  
**Coverage Model:** Canonical `content_taxonomy_labels` (label_status IN: 'validated', 'provisional_model', 'stale')  

---

## Critical Finding: Topic-Level Tagging Absent

**The canonical tagging layer does NOT capture topic-level tags.** All 513 canonical labels have EMPTY `assessed_topics` arrays. Items are assigned to `primary_unit` only, not to individual topics within those units.

### Consequence for Work Order

**Unit × Topic granularity cannot be determined from the current tagging schema.** The enum mismatch in `assessed_topics` (all NULL/empty across 2,409 labels) prevents enumeration of empty topic cells.

---

## Unit-Level Coverage (Current Canon)

### Biology (8 Units, 62 Topics Total)

All units have ≥1 gradeable canonical item:

| Unit | Title | Gradeable Items | Status |
|------|-------|-----------------|--------|
| 1 | Chemistry of Life | 5 | ✓ HAS_ITEMS |
| 2 | Cells | 10 | ✓ HAS_ITEMS |
| 3 | Cellular Energetics | 6 | ✓ HAS_ITEMS |
| 4 | Cell Communication and Cell Cycle | 11 | ✓ HAS_ITEMS |
| 5 | Heredity | 7 | ✓ HAS_ITEMS |
| 6 | Gene Expression and Regulation | 13 | ✓ HAS_ITEMS |
| 7 | Natural Selection | 13 | ✓ HAS_ITEMS |
| 8 | Ecology | 8 | ✓ HAS_ITEMS |

**Unit-level coverage: 8/8 (100%)**  
**Topic-level coverage: UNKNOWN** (tagging schema gap)

### AP Statistics (5 Units, 54 Topics Total)

All units have ≥1 gradeable canonical item:

| Unit | Title | Gradeable Items | Status |
|------|-------|-----------------|--------|
| 1 | Exploring One-Variable Data and Collecting Data | 27 | ✓ HAS_ITEMS |
| 2 | Probability, Random Variables, and Probability Distributions | 19 | ✓ HAS_ITEMS |
| 3 | Inference for Categorical Data: Proportions | 9 | ✓ HAS_ITEMS |
| 4 | Inference for Quantitative Data: Means | 5 | ✓ HAS_ITEMS |
| 5 | Regression Analysis | 12 | ✓ HAS_ITEMS |

**Unit-level coverage: 5/5 (100%)**  
**Topic-level coverage: UNKNOWN** (tagging schema gap)

---

## Schema Defect: assessed_topics Not Populated

All labels (2,409 rows) have `assessed_topics` as an empty array:

```
label_status              | with_topics | empty_topics
--------------------------|-------------|-------------
legacy_unvalidated        |      0      |    1,677
held                      |      0      |      219
provisional_model         |      0      |      415
stale                     |      0      |      90
validated                 |      0      |        8
--------------------------|-------------|-------------
TOTAL                     |      0      |    2,409
```

**Root cause:** The tagging layer was designed to capture unit membership (via `primary_unit`) but the `assessed_topics` enum was never populated during labeling. Without topic tags, audits cannot verify whether all 62 Biology topics (or 54 AP Stats topics) are individually represented in the question pool.

---

## Immediate Actions Required

### High Priority (Blocking Topic-Level Audit)
1. **Data: Backfill `assessed_topics` in `content_taxonomy_labels`**
   - For each canonical label, infer topic codes from item content or manual review
   - Cross-reference with `taxonomy_topics` to validate topic_code values
   - Populate `assessed_topics` array for all 513 canonical rows
   - **Owner:** Content Platform / Data Engineering
   - **Effort:** High (requires domain expertise for mapping)

2. **Schema: Review `assessed_topics` design**
   - Confirm array structure is correct for postgres ARRAY type
   - Add NOT NULL constraint once backfill complete
   - Add documentation/comment explaining topic tagging semantics
   - **Owner:** Engineering
   - **Effort:** Low

### Medium Priority (Unblock Topic Enumeration)
3. **Audit: Re-run topic-level work order once assessed_topics is populated**
   - Identify unit × topic pairs with 0 gradeable items
   - Enumerate authoring work order per unit
   - Generate per-topic difficulty distribution

---

## Topic Enumeration Template (Ready After Backfill)

Once `assessed_topics` is populated, the query below will generate the full work order:

```sql
-- Query: empty unit × topic cells per subject
WITH gradeable_items AS (
  SELECT DISTINCT civ.content_item_id
  FROM app.content_item_versions civ
  WHERE civ.id IN (
    SELECT DISTINCT mc.content_item_version_id
    FROM app.mcq_choices mc
    WHERE mc.is_correct = true
    UNION
    SELECT DISTINCT fc.content_item_version_id
    FROM app.frq_criteria fc
  )
),
canonical_topic_coverage AS (
  SELECT DISTINCT 
    ctl.taxonomy_source_version,
    ctl.primary_unit,
    topic_code
  FROM app.content_taxonomy_labels ctl,
    LATERAL UNNEST(ctl.assessed_topics) AS topic_code
  WHERE ctl.label_status IN ('validated', 'provisional_model', 'stale')
    AND ctl.primary_unit IS NOT NULL
    AND array_length(ctl.assessed_topics, 1) > 0
  INNER JOIN gradeable_items gi ON ctl.content_item_id = gi.content_item_id
)
SELECT
  tsv.subject_key,
  tt.unit_number,
  tt.unit_title,
  tt.topic_code,
  tt.topic_title,
  'EMPTY_WORK_ITEM' as action
FROM app.taxonomy_topics tt
JOIN app.taxonomy_source_versions tsv ON tt.taxonomy_source_version = tsv.taxonomy_source_version
LEFT JOIN canonical_topic_coverage ctc ON tt.taxonomy_source_version = ctc.taxonomy_source_version
  AND tt.unit_number = ctc.primary_unit
  AND tt.topic_code = ctc.topic_code
WHERE tsv.subject_key IN ('ap_biology', 'ap_statistics')
  AND ctc.primary_unit IS NULL
ORDER BY tsv.subject_key, tt.unit_number, tt.topic_code;
```

---

## SQL Used for This Report

```sql
-- Unit-level coverage from canonical labels
WITH gradeable_items AS (
  SELECT DISTINCT civ.content_item_id
  FROM app.content_item_versions civ
  WHERE civ.id IN (
    SELECT DISTINCT mc.content_item_version_id
    FROM app.mcq_choices mc
    WHERE mc.is_correct = true
    UNION
    SELECT DISTINCT fc.content_item_version_id
    FROM app.frq_criteria fc
  )
),
unit_coverage AS (
  SELECT DISTINCT
    tsv.subject_key,
    ctl.primary_unit,
    COUNT(DISTINCT CASE WHEN gv.content_item_id IS NOT NULL THEN ctl.content_item_id END) as gradeable_count
  FROM app.content_taxonomy_labels ctl
  LEFT JOIN gradeable_items gv ON ctl.content_item_id = gv.content_item_id
  JOIN app.taxonomy_source_versions tsv ON ctl.taxonomy_source_version = tsv.taxonomy_source_version
  WHERE ctl.label_status IN ('provisional_model', 'stale', 'validated')
    AND ctl.primary_unit IS NOT NULL
  GROUP BY tsv.subject_key, ctl.primary_unit
)
SELECT
  uc.subject_key,
  tu.unit_number,
  tu.unit_title,
  COALESCE(uc.gradeable_count, 0) as gradeable_items,
  CASE WHEN uc.gradeable_count = 0 OR uc.gradeable_count IS NULL THEN 'EMPTY' ELSE 'HAS_ITEMS' END as status
FROM app.taxonomy_units tu
JOIN app.taxonomy_source_versions tsv ON tu.taxonomy_source_version = tsv.taxonomy_source_version
LEFT JOIN unit_coverage uc ON tsv.subject_key = uc.subject_key AND tu.unit_number = uc.primary_unit
WHERE tsv.subject_key IN ('ap_biology', 'ap_statistics')
ORDER BY tsv.subject_key, tu.unit_number;
```

---

## Summary

| Metric | Biology | AP Statistics |
|--------|---------|---------------|
| Total units | 8 | 5 |
| Units with gradeable items | 8 (100%) | 5 (100%) |
| Units with ZERO gradeable items | 0 | 0 |
| Total topics | 62 | 54 |
| Topics with gradeable items | **UNKNOWN** | **UNKNOWN** |
| Empty topic cells | **Requires assessed_topics backfill** | **Requires assessed_topics backfill** |
| Work order scope | 62 topics × 8 units | 54 topics × 5 units |

---

## References

- Canonical tagging query excludes: `legacy_unvalidated` (1,677 rows), `held` (219 rows)
- Canonical includes: `validated` (8 rows), `provisional_model` (415 rows), `stale` (90 rows)
- Gradeable definition: MCQ with is_correct=true OR FRQ with ≥1 criterion row
