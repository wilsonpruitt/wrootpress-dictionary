# Wroot Press Dictionary

Digital edition of McClintock & Strong's *Cyclopedia of Biblical, Theological, and Ecclesiastical
Literature* (1867–1887). Target: dictionary.wrootpress.com. Sibling project: `difficult-passages`
(design source), `lectern.wrootpress.com` (Phase 2 integration target).

See `~/Downloads/PLAN.md` for the full build handoff.

## Editorial Note convention

As entries are ingested from the public-domain source, add contemporary scholarly/historical
context inline in the same pass — no separate editorial phase. Wrap the note in a raw HTML div
inside the entry's markdown body:

```html
<div class="editorial-note">

**Editorial Note (Wroot Press, YYYY):** ...note text...

</div>
```

- Blank lines around the paragraph are required so the markdown inside the `<div>` still renders.
- Set `hasEditorialNote: true` in frontmatter when a note is present.
- Keep notes short: a dating correction, an archaeological update, a flag that a claim is
  disputed among modern specialists — not a rewrite of the entry.
- Always name the source of the update in the note itself (e.g. "modern chronologies place...")
  rather than presenting it as unsourced fact, since it's Claude's own knowledge, not a scraped
  citation the way the M&S body text is.

## Commands

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/, runs Pagefind indexing via postbuild
```

## Not yet done

- Full ~49,800-entry scrape/ingestion pipeline (studylight.org + archive.org cross-check) — only
  2 sample entries exist so far (`elijah.md`, `jericho.md`) to validate the template.
- Pagefind search UI wiring on the frontend (index is built by `postbuild`, but no search box yet).
- Deploy to dictionary.wrootpress.com.
