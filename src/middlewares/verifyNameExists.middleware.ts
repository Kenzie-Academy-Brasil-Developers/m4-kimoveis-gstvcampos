import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = req.body.name;

  const foundEntity: Category | null = await categoryRepository.findOneBy({
    name,
  });
  if (foundEntity) throw new AppError("Category already exists", 409);

  return next();
};
