import { remove } from "../../utilitis/utilitis";
import { UserType } from "./user.interface";
import { UserModel } from "./user.model";
// user service 
const userDataDB= async(payload:UserType)=>{
    const result = await UserModel.create(payload)
    // user password remove from response ..
    const removeFields = await remove(result?.toObject(),['password'] )
    return removeFields;
}
export const userService ={
    userDataDB,
}