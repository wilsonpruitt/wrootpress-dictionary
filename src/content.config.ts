import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/entries' }),
  schema: z.object({
    headword: z.string(),
    entryType: z.enum(['person', 'place', 'book']), // Phase 2 adds: 'concept', 'institution'
    aliases: z.array(z.string()).default([]), // KJV/alt spellings, e.g. Elias/Elijah
    source: z.enum(['mcclintock-strong-1867', 'original']).default('mcclintock-strong-1867'),
    sourceCitation: z.string().optional(), // e.g. "McClintock & Strong, Cyclopedia, vol. IV, 1887"
    scriptureRefs: z.array(z.object({
      book: z.string(),
      chapterStart: z.number(),
      verseStart: z.number().optional(),
      chapterEnd: z.number().optional(),
      verseEnd: z.number().optional(),
    })).default([]),
    crossReferences: z.array(z.string()).default([]), // slugs of related entries
    tags: z.array(z.string()).default([]), // empty in Phase 1; Lectern facet vocab in Phase 2
    status: z.enum(['stub', 'reviewed', 'published']).default('stub'),
    hasEditorialNote: z.boolean().default(false), // body carries a "## Editorial Note" section
    furtherReading: z.array(z.object({
      title: z.string(),
      author: z.string(),
      year: z.string().optional(),
    })).default([]), // bibliography-only pointers to modern (often copyrighted) scholarship —
    // title/author/year, never quoted or summarized text. Same "pointer, no prose" convention
    // as Lectern's Barth citations. See ingest/pointer-library.md for the source survey.
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = { entries };
