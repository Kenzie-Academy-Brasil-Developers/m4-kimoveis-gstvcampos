import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";
import { userReadSchema, userReturnSchema } from "../schemas";
import { userRepository } from "../repositories";
import { hash } from "bcryptjs";
import { AppError } from "../errors";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  payload.password = await hash(payload.password, 10);

  const user: User = userRepository.create(payload);
  await userRepository.save(user);

  return userReturnSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepository.find());
};

const partialUpdate = async (
  user: User,
  payload: UserUpdate
): Promise<User> => {
  return await userRepository.save({ ...user, ...payload });
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, destroy, partialUpdate };
