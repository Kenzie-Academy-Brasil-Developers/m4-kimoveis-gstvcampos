import { Category, RealEstate } from "../entities";
import { AppError } from "../errors";
import { RealEstateCreate } from "../interfaces";
import {
  addressRepository,
  categoryRepository,
  realEstateRepository,
} from "../repositories";

const create = async (payload: RealEstateCreate) => {
  const foundAddres = await addressRepository.findOneBy(payload.address);
  if (foundAddres) throw new AppError("Address already exists", 409);

  const addressCreate = addressRepository.create(payload.address);
  await addressRepository.save(addressCreate);

  const allCategories: Array<Category> = [];

  for await (const category of payload.category) {
    const name = category.name;
    const foundCategory = await categoryRepository.findOneBy({ name });

    if (!foundCategory) {
      throw new AppError(`Invalid category: ${name}`, 404);
    }

    allCategories.push(foundCategory);
  }

  // const realEstate = realEstateRepository.create({
  //   ...payload,
  //   payload.address,
  //   category: allCategories,
  // });
  // await realEstateRepository.save(realEstate);

  // return realEstate;
};

const read = async (): Promise<any> => {
  return await realEstateRepository.find({
    relations: {
      address: true
    }
  });
};

export default { create, read };
