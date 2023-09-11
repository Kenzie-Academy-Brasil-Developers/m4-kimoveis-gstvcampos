import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().or(z.date()),
  hour: z.number(),
  realEstateId: z.number().positive(),
  userId: z.number().positive(),
});

const scheduleCreateSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive(),
});

export { scheduleSchema, scheduleCreateSchema };
