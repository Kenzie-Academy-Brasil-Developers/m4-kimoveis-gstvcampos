import { z } from "zod";
import { userSchema } from "./user.schemas";
import { realEstateSchema } from "./realEstate.schemas";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string().or(z.date()),
  hour: z.number(),
  realEstate: realEstateSchema.array(),
  user: userSchema.array(),
});

const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
});

const scheduleReadSchema = scheduleSchema.array();

export { scheduleSchema, scheduleCreateSchema, scheduleReadSchema };
