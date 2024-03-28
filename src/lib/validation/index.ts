import { z } from "zod";

export const contactValidation = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  phone: z.number().min(2).max(50),
  email: z.string().email(),
  messge: z.string().min(10).max(5000),
});

export const newsValidation = z.object({
  title: z.string().min(2).max(50),
  content: z.string().min(10).max(5000),
  tags: z.string().min(2).max(50),
  team: z.number().min(2).max(50),
  facility: z.string().min(2).max(3),
  image: z.string(),
  file: z.custom<File[]>(),
});
