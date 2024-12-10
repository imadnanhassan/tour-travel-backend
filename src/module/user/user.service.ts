import { IUser } from "./user.interface";
import UserModel from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await UserModel.create(payload);
  return result;
};

const getUsers = async () => {
  const result = await UserModel.find()
  return result
}

const getSingleUser = async (userId: string) => {
  const result = await UserModel.findById(userId)
  return result
}

const updateUser = async (userId: string, payload: IUser) => {
  const result = await UserModel.findByIdAndUpdate(userId, payload, { new: true })
  return result
}

const deleteUser = async (userId: string) => {
  const result = await UserModel.findByIdAndDelete(userId)
  return result
}

export const userService = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
