import "express-async-errors";
import express, { Application, json } from "express";
import "reflect-metadata";
import middlewares from "./middlewares";
import {
  categoryRouter,
  realEstateRouter,
  scheduleRouter,
  sessionRouter,
  userRouter,
} from "./routers";

const app: Application = express();
app.use(json());

app.use("/users", userRouter);
app.use("/login", sessionRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", scheduleRouter);

app.use(middlewares.handleErrors);

export default app;
