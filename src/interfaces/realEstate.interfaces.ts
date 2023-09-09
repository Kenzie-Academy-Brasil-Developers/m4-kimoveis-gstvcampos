import { z } from "zod";
import { realEstateCreateSchema, realEstateReadSchema } from "../schemas";

type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;

export { RealEstateCreate, RealEstateRead };
