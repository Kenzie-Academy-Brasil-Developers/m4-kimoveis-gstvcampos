import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundData: User | null = await userRepository.findOneBy({ id });
  if (!foundData) throw new Error("User not found");

  res.locals = { ...res.locals, foundData };

  return next();
};
