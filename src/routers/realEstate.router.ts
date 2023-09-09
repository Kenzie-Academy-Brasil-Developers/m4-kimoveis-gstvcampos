import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateControllers } from "../controllers";
import { realEstateCreateSchema } from "../schemas";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  realEstateControllers.create
);
realEstateRouter.get("", realEstateControllers.read);
