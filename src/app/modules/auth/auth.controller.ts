import { Request, Response } from "express";
import { authAllService } from "./auth.service";
import { zodValidationAuth } from "./auth.validation";


const authController = async(req:Request,res:Response)=>{
    try {
        // zod 
        const loginZodParse = zodValidationAuth.AuthValidation.parse(req.body)
        const result = await authAllService.authService(loginZodParse)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User logged in successfully",
            token:result?.accessToken,
            data:result?.removeFields
        });
    } catch (error) {
        console.log(error)
    }
}
export const authAllController={
    authController,
}