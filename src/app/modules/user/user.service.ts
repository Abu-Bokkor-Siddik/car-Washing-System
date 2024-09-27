import { remove } from '../../utilitis/utilitis';
import { UserType } from './user.interface';
import { ReviewModel, UserModel } from './user.model';
// user service
const userDataDB = async (payload: UserType) => {
  const result = await UserModel.create(payload);
  // user password remove from response ..
  const removeFields = await remove(result?.toObject(), ['password']);
  return removeFields;
};
const allUser = async () => {
  const result = await UserModel.find();
  return result;
};
// update
const updateUser = async (_id: string, payload: Partial<UserType>) => {
  const result = await UserModel.findByIdAndUpdate({ _id }, payload, {
    new: true,
  });
  return result;
};
// get single service
const singleUser= async (email: string) => {
  console.log(email)
  const result = await UserModel.findOne({ email })
// console.log(result)
  return result;
};
// review here
const userReview= async (payload: UserType) => {
  const result = await ReviewModel.create(payload);
  return result;
};
const getAllReview= async () => {
  const result = await ReviewModel.find();
  return result;
};
export const userService = {
  userDataDB,
  allUser,
  updateUser,
  singleUser,
  userReview,
  getAllReview
};
