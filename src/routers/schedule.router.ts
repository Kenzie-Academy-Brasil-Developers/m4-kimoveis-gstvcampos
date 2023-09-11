import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleControllers } from "../controllers";
import { scheduleCreateSchema } from "../schemas";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  scheduleControllers.create
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  scheduleControllers.read
);
