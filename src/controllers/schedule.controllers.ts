import { Request, Response } from "express";
import { scheduleServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.decoded.sub;
  const schedule = await scheduleServices.create(userId, req.body);
  return res.status(201).json(schedule);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const schedules = await scheduleServices.read(Number(req.params.id));
  return res.status(200).json(schedules);
};

export default { create, read };
