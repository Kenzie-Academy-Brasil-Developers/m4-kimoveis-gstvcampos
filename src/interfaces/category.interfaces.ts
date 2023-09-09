import { z } from "zod";
import {
  categoryCreateSchema,
  categoryReadSchema,
  categorySchema,
} from "../schemas";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryReturn = z.infer<typeof categorySchema>;
type CategoryRead = z.infer<typeof categoryReadSchema>;

export { CategoryCreate, CategoryReturn, CategoryRead };
