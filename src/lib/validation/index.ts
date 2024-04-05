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
  team: z.string().min(1).max(1),
  facility: z.string().min(2).max(3),
  image: z.string(),
  file: z.custom<File[]>(),
});
export const userValidation = z.object({
  first_name: z.string().min(2).max(20),
  last_name: z.string().min(2).max(20),
  email: z.string().email(),
  role: z.string(),
  password: z.string().min(8).max(21),
  // file: z.custom<File[]>(),
});
