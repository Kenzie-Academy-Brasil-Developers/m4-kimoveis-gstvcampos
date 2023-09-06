import { z } from "zod";
import { categoryCreateSchema, categorySchema } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryReturn = z.infer<typeof categorySchema>;

export { CategoryCreate, CategoryReturn };
