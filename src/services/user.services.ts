import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { User } from "../entities";
import { userReadSchema, userReturnSchema } from "../schemas";
import { userRepository } from "../repositories";

const create = async (payload: UserCreate): Promise<UserReturn> => {
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
): Promise<UserReturn> => {
  const userUpdated: User = await userRepository.save({ ...user, ...payload });

  return userReturnSchema.parse(userUpdated);
};

const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, destroy, partialUpdate };
