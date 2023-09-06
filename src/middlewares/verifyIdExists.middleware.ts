import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { addressRepo, categoryRepo, userRepo } from "../repositories";

type BodyOrParams = "body" | "params";
type entitie = "user" | "address" | "category";

const verifyIdExists =
  (
    bodyOrParams: BodyOrParams,
    idKeyName: string,
    entitie: string,
    errorMsg: string
  ) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {



    const foundData: any | null = await [entitie]Repo.findOneBy({
      id: Number(req[bodyOrParams][idKeyName]),
    });

    if (!query.rowCount) {
      throw new AppError(errorMsg, 404);
    }

    res.locals = { ...res.locals, foundData };

    return next();
  };

export default verifyIdExists;
