import { RealEstate } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate } from "../interfaces";
import { realEstateRepository, scheduleRepository } from "../repositories";

const create = async (userId: number, payload: ScheduleCreate) => {
  const verifyHour = Number(payload.hour.split(":")[0]);

  if (verifyHour < 8 || verifyHour > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  const verifyDate = new Date(payload.date).getDay();

  if (verifyDate === 0 || verifyDate === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const foundRealEstate: RealEstate | null =
    await realEstateRepository.findOneBy({ id: payload.realEstateId });
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  const scheduleExists = await scheduleRepository.findOneBy({
    hour: payload.hour,
    date: payload.date,
    realEstate: { id: payload.realEstateId },
  });

  if (scheduleExists)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  const scheduleUserExist = await scheduleRepository.findOneBy({
    hour: payload.hour,
    date: payload.date,
    user: { id: userId },
  });

  if (scheduleUserExist)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  const schedule = scheduleRepository.create({
    ...payload,
    user: { id: userId },
    realEstate: { id: payload.realEstateId },
  });
  await scheduleRepository.save(schedule);

  return { message: "Schedule created" };
};

const read = async (realEstateId: number): Promise<any> => {
  const realEstateFound = await realEstateRepository.findOne({
    where: {
      id: realEstateId,
    },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true
      }
    },
  });

  if (!realEstateFound) {
    throw new AppError("RealEstate not found", 404);
  }

  return realEstateFound;
};

export default { create, read };
