import { IUser } from './user.interface';
import UserModel from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await UserModel.create(payload);

  return result;
};

const getUser = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await UserModel.findById(id);
  return result;
};

const updateUser = async (id: string, data: IUser) => {
  const result = await UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await UserModel.findByIdAndDelete(id);
  return result;
};

export const userService = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
