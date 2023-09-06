import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;
  if (!name) return next();

  const foundMovie: Movie | null = await movieRepo.findOneBy({
    name: name,
  });

  if (foundMovie) throw new AppError("Movie already exists.", 409);

  return next();
};
