import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyEmailExists,
  userControllers.create
);
userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  userControllers.read
);

userRouter.use("/:id", middlewares.verifyIdExists);
userRouter.patch(
  "/:id",
  middlewares.validateBody(userUpdateSchema),
  middlewares.verifyEmailExists,
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  userControllers.partialUpdate
);
userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.verifyAdmin,
  userControllers.destroy
);
