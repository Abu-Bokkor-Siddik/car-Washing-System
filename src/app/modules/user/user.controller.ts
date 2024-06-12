import { Request, Response } from "express"
import { userService } from "./user.service"
import { userValidation } from "./user.validation";

const createUser= async (req:Request,res:Response)=>{
    try {
        // zod validation here .. some todo 
        const zodValidationParse = userValidation.userDataValidation.parse(req.body)
        const result = await userService.userDataDB(zodValidationParse);
        res.status(200).json({
            success:true,
            message:"user create successfully",
            data:result,
        })
    } catch (error) {
        console.log(error)
    }
}

export const userController ={
    createUser
   }