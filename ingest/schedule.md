# Ingestion pace: Revised Common Lectionary, Year A (After Pentecost)

Instead of working through M&S alphabetically, entries are pulled in the order the RCL brings
their subjects up in Sunday worship — "pull the bones from McClintock, add to it; if it isn't in
there, make our own." Source of readings: lectionary.library.vanderbilt.edu (Year A confirmed
live 2026-07-01). Volume/line refs point into `ingest/sources/volNN.txt`.

## Proper 9 — Jul 5, 2026 (done 2026-07-01)

Readings: Gen 24:34-38,42-49,58-67 (Isaac's servant finds Rebekah) + Ps 45/Song 2:8-13 · Zech
9:9-12 + Ps 145 · Rom 7:15-25a · Matt 11:16-19,25-30

- **Isaac** (vol04, line 118081) — published, in M&S.
- **Rebekah** (vol08, line 167204) — published, in M&S.
- **Bethuel** (vol01, line 134421) — published, in M&S. Place-sense of the same headword
  (a city of Judah/Simeon) exists but is OCR-interleaved/garbled on that page — held back, not
  guessed at. See `ingest/raw-log/vol1-A-batch1.md`-style note if revisited.
- **Laban** (vol05, line 31119) — published (person + place senses both included, M&S combines
  them under one headword and both are short). Will be referenced again at Proper 12.

## Proper 10 — Jul 12, 2026 (done 2026-07-01)

Readings: Gen 25:19-34 (birth of Esau and Jacob, birthright sold) + Ps 119:105-112 · Isa 55:10-13
+ Ps 65 · Rom 8:1-11 · Matt 13:1-9,18-23 (Parable of the Sower — no proper names)

- **Esau** (vol03, line 51989) — published, in M&S. Editorial note reframes his forgiveness of
  Jacob at their reunion (Gen 33) against the patristic Esau-as-reprobate reading, and flags that
  Romans 9's "Jacob/Esau" quote (from Malachi 1) is about the *nations*, not individual salvation.
- **Jacob** (vol04, line 129691) — published, in M&S. Very large entry (~1100 OCR lines) — this
  covers the Laban years, Peniel wrestling/renaming to Israel, and the Egypt/death narrative that
  Proper 11 and 12 will also draw on directly, so most of the remaining Genesis-cycle research is
  now already done for this month. One internal genealogical table (Gen 46 descendants list) was
  deliberately **not transcribed** — the OCR column-alignment on that table was too corrupted to
  trust for genealogical data; noted as omitted in the entry body itself, not silently dropped.
- Also surfaced but not yet made into entries: **Jacob's Well** (place, vol04 ~line 130712,
  right after the main Jacob entry) and a minor NT "Jacob (2), father of Joseph the husband of
  Mary" (vol04, line 130805) — low priority, not on this month's readings.

## Proper 11 — Jul 19, 2026 (done 2026-07-01)

Readings: Gen 28:10-19a (Jacob's ladder at Bethel) + Ps 139 · Wisd 12:13,16-19 or Isa 44:6-8 + Ps
86 · Rom 8:12-25 · Matt 13:24-30,36-43 (Wheat and Tares — no proper names)

- **Bethel** (vol01, line 131928) — published, in M&S. Both senses included (1: the famous city
  near Luz/Ai, tied to Jacob's ladder and later Jeroboam's calf-shrine; 2: a minor town in south
  Judah, same as Bethul/Bethuel — cross-checks cleanly against what the `bethuel.md` entry already
  said about that second place-sense). Editorial note flags Albright/Kelso's 20th-century Beitin
  excavations (post-dates M&S) and notes the golden-calf sanctuary itself is still archaeologically
  unconfirmed. This entry's own OCR was noticeably worse quality (heavier Hebrew/Greek garbling)
  than Isaac/Jacob/Esau's — several proper nouns and a couple of citation numbers were reconstructed
  from context/well-known cross-references rather than read directly; genuinely illegible bits
  (the alternate Josephus Greek forms) were dropped rather than guessed.
- Luz and Haran (also named in Gen 28) were not separately located/ingested this round — Luz is
  effectively covered as an alias already since Bethel's own entry explains the Luz/Bethel
  relationship in full.

## Proper 12 — Jul 26, 2026 (not started)

Readings: Gen 29:15-28 (Jacob's marriages to Leah and Rachel) + Ps 105/Ps 128 · 1 Kings 3:5-12
(Solomon's prayer for wisdom) + Ps 119:129-136 · Rom 8:26-39 · Matt 13:31-33,44-52 (parables, no
proper names)

- **Leah** — in M&S, vol05, line 53285 ("Le'ah"). Not yet read/transcribed.
- **Rachel** — in M&S, vol08, line 154977 ("Ra'chel"). Not yet read/transcribed.
- **Solomon** — in M&S, vol09, line 149959 ("Sol'omon"). Not yet read/transcribed — likely a very
  long entry (major king, probably the longest so far after Isaac). Budget accordingly.
- Laban already published (Proper 9) and directly relevant again here.

## Also downloaded, not yet placed on the schedule

- **Zion** — vol10, line 198075 ("Zi'on"). Comes up in Zechariah 9 (Proper 9's Track 2 psalm/OT
  pairing) and will recur constantly in Year A — worth doing soon regardless of a specific week.
- **John the Baptist** — vol04, line 167518. Referenced in Proper 9's Gospel (Matt 11:16-19) via
  "this generation... John came neither eating nor drinking." Not urgent enough to be the subject
  of a whole sermon most weeks, but a natural pickup whenever a Baptist-focused week comes up
  (Advent, or his own July feast days in some calendars).
- **Amos** (vol01, line ~35940) — M&S combines the prophet (person) and the Book of Amos under one
  headword; needs a split into `amos` (person) and `amos-book` (book) per PLAN.md's disambiguation
  rule. Not on the RCL Year A Ordinary-time Track 1 continuous readings right now (those are
  running through Genesis), so lower priority than the patriarch cycle above.

## Volumes downloaded so far (in `ingest/sources/`)

vol01 (A–Bz, via `cyclopaediaofbib01mccl`), vol02 (1889), vol03 (1882), vol04 (1882), vol05
(1882), vol08 (1883), vol09 (1880), vol10 (1881). Not yet downloaded: vol06, vol07, vol11–12
(supplements) — pull on demand when a headword search turns up in them.
