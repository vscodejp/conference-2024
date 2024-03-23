import { defineCollection, z } from "astro:content";

const suponsor = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().url(),
      order: z.number().min(1).optional(),
      description: z.string().min(1).optional()
    }),
});

const staff = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      image: image(),
      url: z.string().url(),
      order: z.number().min(1).optional()
    }),
});

const supporter = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      image: image(),
      url: z.string().url(),
      description: z.string()
    }),
});

export const collections = {
  suponsor, staff, supporter
};
