import { z } from "zod";
import { userCreateSchema, userReadSchema, userReturnSchema } from "../schemas";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;

export { UserCreate, UserRead, UserReturn };
