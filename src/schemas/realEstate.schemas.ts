import { z } from "zod";
import { addressSchema } from "./address.schemas";
import { categorySchema } from "./category.schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().nonnegative().default(0).or(z.string()),
  size: z.number().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  address: addressSchema,
  category: categorySchema.array(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
});

const realEstateReadSchema = realEstateSchema.array();

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema };
