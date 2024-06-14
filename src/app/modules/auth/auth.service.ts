import jwt from "jsonwebtoken";
import { AuthUser } from "./auth.interface";
import { UserModel } from "../user/user.model";
import bcrypt from 'bcrypt'
import config from "../../config";
import { remove } from "../../utilitis/utilitis";

const authService= async(payload:AuthUser)=>{

const existUser= await UserModel.findOne({email:payload?.email})


// if (!existUser) {
//     throw new Error ("This user not Found")
    
// }
// match password 
// const matchPassword = await bcrypt.compare(payload?.password,existUser?.password as string)


const removeFields = await remove(existUser?.toObject(),['password'] )

// console.log(matchPassword)
// create jwtWebToken
const jwtPayload = {
    email:existUser?.email,
    role:existUser?.role
}
// console.log(config.jwt_token)
const accessToken = jwt.sign(jwtPayload, 'f5b0c8b60c4d8bda0e7a4a27e1234e8e9a8c9e77a3a4d6d8b8c1e2e7f8a4b3c2', { expiresIn: '20d'});
return{
    accessToken,
    removeFields,

}

}

export const authAllService={
    authService,
}