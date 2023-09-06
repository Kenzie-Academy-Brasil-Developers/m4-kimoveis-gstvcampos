import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post("", middlewares.validateBody(userCreateSchema));
userRouter.get("");

userRouter.use("/:id");
userRouter.patch("/:id", middlewares.validateBody(userCreateSchema));
userRouter.delete("/:id");
