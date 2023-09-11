import { Address, Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { RealEstateCreate } from "../interfaces";
import {
  addressRepository,
  categoryRepository,
  realEstateRepository,
} from "../repositories";

const create = async ({
  address,
  categoryId,
  ...payload
}: RealEstateCreate) => {
  const foundAddres: Address | null = await addressRepository.findOneBy(
    address
  );
  if (foundAddres) throw new AppError("Address already exists", 409);

  const addressCreate: Address = addressRepository.create(address);
  await addressRepository.save(addressCreate);

  const foundCategory: Category | null = await categoryRepository.findOneBy({
    id: categoryId,
  });
  if (!foundCategory) throw new AppError("Invalid category", 404);

  const realEstate: RealEstate = realEstateRepository.create({
    ...payload,
    address: addressCreate,
    category: { id: categoryId },
  });
  await realEstateRepository.save(realEstate);

  return realEstate;
};

const read = async (): Promise<any> => {
  return await realEstateRepository.find({
    relations: {
      address: true,
    },
  });
};

export default { create, read };
