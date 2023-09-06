import { z } from "zod";
import { addressCreateSchema, addressSchema } from "../schemas";
import { Repository } from "typeorm";
import { Address } from "../entities";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressReturn = z.infer<typeof addressSchema>;

export { AddressCreate, AddressReturn };
