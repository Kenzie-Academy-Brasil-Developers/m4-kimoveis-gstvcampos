import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleControllers } from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post("", scheduleControllers.create);
scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  scheduleControllers.read
);

