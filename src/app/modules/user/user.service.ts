import { UserType } from "./user.interface";
import { UserModel } from "./user.model";

const userDataDB= async(payload:UserType)=>{
    const result = await UserModel.create(payload)
    return result;
}
export const userService ={
    userDataDB,
}