import { z } from "zod";
import { scheduleCreateSchema } from "../schemas";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;

export { ScheduleCreate };
