/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import { userValidation } from './user.validation';
import ResponseError from '../../../error/response.error';
// create user here 
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // zod validation here
    const zodValidationParse = userValidation.userDataValidation.parse(
      req.body
    );

    const result = await userService.userDataDB(zodValidationParse);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// all booking slot here 
const allUserController = async(req:Request,res:Response,next: NextFunction)=>{
  try {
      const result = await userService.allUser()
      if (result.length===0) {
       throw new ResponseError(404,'not found booking data')
      }
      res.status(200).json({
          success: true,
          statusCode: 200,
          message: ' All bookings retrieved successfully',
          data: result,
        });
  } catch (error) {
    next(error)
  }
}
const updateUserContoller = async(req:Request,res:Response,next:NextFunction)=>{
  try {
      const {id}=req.params;
      const payload= req.body;
      const result= await userService.updateUser(id,payload)
      if (!result) {
        res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'service not Found',
          
        });
      }
      res.status(200).json({
          success: true,
          statusCode: 200,
          message: 'user update successfully',
          data: result,
        });
  } catch (error) {
      next(error)
  }
}
const singleUserContoller = async(req:Request,res:Response,next:NextFunction)=>{
  try {
      const {email}=req.params;
      // console.log(req.params)
      // console.log(email)
    // const {email}=req.body
      const result= await userService.singleUser(email)
      if (!result) {
        res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'User not Found',
          
        });
      }
      res.status(200).json({
          success: true,
          statusCode: 200,
          message: 'user found successfully',
          data: result,
        });
  } catch (error) {
      next(error)
  }
}

// review ======>>>>
const userReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // zod validation here
    const data = req.body;

    const result = await userService.userReview(data);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllReviewController = async(req:Request,res:Response,next: NextFunction)=>{
  try {
      const result = await userService.getAllReview()
      if (result.length===0) {
       throw new ResponseError(404,'not found booking data')
      }
      res.status(200).json({
          success: true,
          statusCode: 200,
          message: ' All Reviews retrieved successfully',
          data: result,
        });
  } catch (error) {
    next(error)
  }
}
export const userController = {
  createUser,
  allUserController,
  updateUserContoller,
  singleUserContoller,
  userReviewController,
  getAllReviewController,

}