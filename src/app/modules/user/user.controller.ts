/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { userService } from "./user.service"
import { userValidation } from "./user.validation";

const createUser= async (req:Request,res:Response,next:NextFunction)=>{
    try {
        // zod validation here .. some todo 
        // const zodValidationParse = userValidation.userDataValidation.parse(req.body)
        // test todo 
        const result = await userService.userDataDB(req.body);
        res.status(200).json({
            success:true,
            statusCode: 200,
            message:"user create successfully",
            data:result,
        })
    } catch (error) {
        next(error)
    }
}

export const userController ={
    createUser
   }