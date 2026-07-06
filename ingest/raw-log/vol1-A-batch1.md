# Volume 1 ingestion — batch 1 (letter A, opening entries)

Source: `ingest/sources/vol1-archive-org-djvu.txt` (archive.org `cyclopaediaofbib01mccl`,
McClintock & Strong vol. I, 1867). Processed by hand, judiciously, one entry at a time — not
bulk-converted. Raw OCR line refs below point into that source file as ingested.

## Published (src/content/entries/)

- **Aaron** (person) — full I/II/III sections, cleaned OCR, editorial note on Exodus-dating
  debate and golden-calf/Korah source criticism. Source lines ~1110–1355 (before "Aaron Acharon,"
  a distinct medieval rabbi, which starts a new entry).
- **Aalar** (place) — short entry, editorial note resolving M&S's own person-or-place hedge via
  the Ezra 2:59/Neh 7:61 place-name convention. Source line ~1104.

## Held back — not person/place/book, kept raw for Phase 2 (source: original / concept entries)

- **"A. See Alpha."** (source line 1102) — bare cross-reference to the Greek letter; a
  linguistic/symbol entry, not in Phase 1 scope.
- **"Aadrak. See Aazrak."** (source line 1104, right before Aalar) — cross-reference stub; target
  entry "Aazrak" not yet reached in this volume's letter range. Revisit once Aazrak is ingested —
  may just become an alias on that entry rather than its own stub.
- **"Aara"** (source line 1106) — a Rabbinic/Talmudic lexical term (two-aleph example word), not a
  person, place, or book. Kept raw for a future "concept"/philological entry type in Phase 2.

## Also noted, not yet ingested

- Immediately after Aaron: **"Aaron Acharon"** (14th-c. Caraite rabbi), **"Aaron ha-Rishon"**
  (13th-c. Caraite rabbi/physician), **"Aaron ben-Aser"** (11th-c. Masoretic scholar) — three
  distinct historical persons sharing the headword "Aaron," genuinely separate people from the
  biblical Aaron. Good next batch: three short, clean person entries.
- **"A'mos"** (line ~35940) — M&S combines the prophet Amos (person) and the Book of Amos under
  one headword, the same way it does with common names like Joseph. Per PLAN.md's disambiguation
  rule, this should split into two entries (`amos` person, `amos-book` book) rather than force one
  `entryType`. Flagged for a future batch — needs a full read-through to find the person/book
  section boundary before splitting.
