import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    status: z.enum(["active", "completed", "paused", "deprecated"]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    repository: z.string().url().optional(),
    demo: z.string().url().optional(),
    collaborators: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url().optional(),
        })
      )
      .optional(),
    category: z.string(),
  }),
});

export const collections = { blog, projects };
