import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundData: User | null = await userRepository.findOneBy({ id });
  if (!foundData) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundData };

  return next();
};
