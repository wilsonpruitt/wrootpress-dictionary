# Pointer-library survey: ~/Library/Mobile Documents/.../PDFS/Theology

647 PDFs, surveyed by filename/metadata only (title + author) — **no content read or reproduced**,
consistent with the pointer-only convention already established elsewhere (Lectern's Barth
citations are "pointer, no prose"; doctrine.wrootpress.com pattern). This file is a bibliographic
index for future "Further Reading" / modern-scholarship pointers on Dictionary entries — most of
these PDFs are copyrighted; the Dictionary should cite title/author/year, never quote or summarize
from the file itself.

## Direct hits for entries already ingested (Isaac, Rebekah, Bethuel, Laban, Esau, Jacob, Bethel)

- **Genesis 1-11** (*Ancient Christian Commentary on Scripture*, OT vol. I), ed. Andrew Louth —
  patristic-reception commentary; would support Aaron/Adam/Noah-era entries too.
- **Genesis 12-50** (*Ancient Christian Commentary on Scripture*, OT vol. II), ed. Mark Sheridan —
  patristic reception spanning exactly Abraham through Joseph. Directly on point for every entry
  shipped so far.
- **Genesis** (*Anchor Yale Bible*), E.A. Speiser — the standard modern critical commentary on
  Genesis; natural single citation for "modern scholarship" on any patriarch entry.
- *Abraham, the Nations, and the Hagarites* (Goodman, Van Kooten, et al.) — comparative
  Jewish/Christian/Islamic Abraham scholarship; relevant once an Abraham entry exists.

## Collection shape (604 normally-titled works, keyword-bucketed; buckets overlap-free, first match wins)

- Modern/20th-c. systematic theology (Barth, Bonhoeffer, Moltmann, Niebuhr, Tillich, Rahner,
  Balthasar, pneumatology, etc.): ~66
- Patristics/Church Fathers (Augustine, Chrysostom, Origen, Cassian, desert fathers, etc.): ~60
- Wesley/Methodist history (incl. Arminius/Arminianism): ~32
- Biblical commentary/reference series (Anchor Yale Bible Reference Library, Hermeneia, ACCS,
  Second Temple/Pseudepigrapha): ~25
- General church history (Reformation, Byzantine, missions/colonial): ~16
- Uncategorized (specific monographs/biographies too varied for a keyword bucket): ~405
- **Anchor Yale Bible numbered commentary volumes** (separate count, `01`–`43` series): 35 —
  covers most of OT (Genesis through Wisdom of Solomon) and much of NT (Matthew, Luke, John,
  1 Corinthians, Ephesians, Hebrews, James, Revelation). Good pointer stock for any future book
  entries or NT figures.

## 8 cryptically-named files (needed pdftotext first-page check to identify)

Mostly **Wesleyan Theological Journal** offprints (`1981-wtj-16-1.pdf` confirmed; `06_1982_wainwright`,
`06_2002_park`, `08_1997_young`, `09_1987_wainwright`, `10_1987_walsh` — all match the journal's
numbering convention and Methodist-studies surnames — Geoffrey Wainwright is a known Methodist
theologian). One (`97ef9cc3512d3ae3c492ed240386b8cc59c06901.pdf`) is a French "Tome Troisième" from
a Lille University digitization, likely tied to a different Wilson project (Péguy/French corpus),
not the Dictionary. **These 8 look like they belong to the separate Wesley-studies work, not core
Dictionary material** — flagging rather than filing them under Dictionary.

## Recommendation

Add a lightweight, bibliography-only "Further Reading" block to the entry schema — title/author/
year, no quoted text, matching Lectern's existing Barth convention (`mode: "pointer"`, citation
index only). Don't build this as a new copyrighted-text ingestion pipeline; it's a citation list,
not a corpus.

## Not yet covered — journals as the copyright-safe gap-filler

This library is thin on *very recent* (last ~15 years) scholarship and thin outside Genesis/
patristics/Wesley. Wilson's suggestion — pull recent theological journal **tables of contents**
(not the articles themselves) — is the right complement: journal TOC metadata (title, author,
journal, volume, year, sometimes DOI) is bibliographic, not the copyrighted content, so it sidesteps
the issue entirely while extending pointer coverage into contemporary scholarship this PDF
collection doesn't reach.
