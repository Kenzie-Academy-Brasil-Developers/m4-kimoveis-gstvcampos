import { Category } from "../entities";
import { AppError } from "../errors";
import { CategoryCreate, CategoryRead, CategoryReturn } from "../interfaces";
import { categoryRepository } from "../repositories";

const create = async (payload: CategoryCreate): Promise<CategoryReturn> => {
  const category: Category = categoryRepository.create(payload);
  await categoryRepository.save(category);

  return category;
};

const read = async (): Promise<CategoryRead> => {
  return await categoryRepository.find();
};

const readRealState = async (categoryId: number): Promise<any> => {
  const categories = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });

  if (!categories) throw new AppError("Category not found", 404);

  return categories;
};

export default { create, read, readRealState };
