import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyEmailExists,
  userControllers.create
);
userRouter.get("", userControllers.read);

userRouter.use("/:id", middlewares.verifyIdExists);
userRouter.patch(
  "/:id",
  middlewares.validateBody(userUpdateSchema),
  middlewares.verifyEmailExists
);
userRouter.delete("/:id", userControllers.destroy);
