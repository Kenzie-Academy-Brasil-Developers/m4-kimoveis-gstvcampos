import { z } from "zod";
import { addressSchema } from "./address.schemas";
import { categoryCreateSchema, categorySchema } from "./category.schemas";

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
  sold: true,
  createdAt: true,
  updatedAt: true
}).extend({
  category: categoryCreateSchema.array(),
});

const realEstateReadSchema = realEstateSchema.array();

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema };
