import { z } from "zod";
import { addressSchema } from "./address.schemas";
import { categorySchema } from "./category.schemas";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number().positive(),
  address: addressSchema,
  category: categorySchema.array(),
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
});

const realEstateReadSchema = realEstateSchema.array();

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema };
