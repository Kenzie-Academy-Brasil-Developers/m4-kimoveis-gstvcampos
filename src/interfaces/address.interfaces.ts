import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressReturn = z.infer<typeof addressSchema>;

export { AddressCreate, AddressReturn };
