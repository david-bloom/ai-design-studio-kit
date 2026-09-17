# Guide concept library

> Status: advisory exploratory material — not final, approved, or ready to ship. David alone decides whether any guide concept advances and whether the Visual Design/UX tracks are done.

This library holds original guide-character exploration separately from UI directions so future concepts can be added without turning Option 06 into a closed cast. Every concept receives a stable `GC-NNN` identifier. UI mocks reference those IDs and do not duplicate or redefine the character assets.

## Current concepts

| ID | Name | Register | Primary risk | Current asset |
|---|---|---|---|---|
| GC-001 | Fizzbit | Buoyant, elastic, curious instigator | Young-skewing or busy | `concepts/GC-001-fizzbit/contact-sheet.png` |
| GC-002 | Moxie Quill | Brisk, comic, candid near-peer | Snark, authority, generic mascot familiarity | `concepts/GC-002-moxie-quill/contact-sheet.png` |
| GC-003 | Bramblekin | Grounded, tender, quiet companion | Nostalgic decoration | `concepts/GC-003-bramblekin/contact-sheet.png` |

## Adding concepts

1. Assign the next unused stable ID.
2. Copy `GUIDE_BRIEF.md` into `concepts/GC-NNN-name/concept.md` and fill every section.
3. Keep raw or alternate generations under `iterations/`; select one named review asset at the concept root.
4. Record generation prompts, model/tool, date, source handoff, and known deviations.
5. Add comparisons under `comparisons/` without changing the concept's ID.

The no-character constraint was suspended only for the specific Option 06 probe by David. This library records that experiment; its existence does not broaden the suspension to other options or authorize characters in the product.
