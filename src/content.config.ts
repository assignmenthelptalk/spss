import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Schema mirrors the topical map at
// semantic-seo-workflow/client_data/spssassignmenthelp/topical_map.json
// Every field here traces back to a Holistic SEO concept — do not add
// fields that don't map to Source Context, Central Entity, or the
// Core/Outer Section structure.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    // SEO / on-page
    title: z.string(),
    description: z.string().max(160),
    h1: z.string(),

    // Topical map placement
    section: z.enum(['core', 'outer']),
    pillar: z.boolean().default(false),
    pathway: z.string().optional(), // e.g. "Parametric Tests", "Dissertation and Research Chapters"
    priority: z.enum(['high', 'medium', 'low']).default('medium'),

    // Contextual flow / bridging (Koray's Contextual Bridge concept)
    contextualBorderQuestion: z.string().optional(),
    bridgesTo: z.array(z.string()).default([]), // slugs of other "pages" entries

    // Publishing
    publishOrder: z.number().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { pages };
