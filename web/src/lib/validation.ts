import { z } from 'zod';

export const emailSchema = z.string().email();

export const contactSchema = z.object({
  name: z.string().min(2),
  email: emailSchema,
  message: z.string().min(10),
});

export type Contact = z.infer<typeof contactSchema>;

