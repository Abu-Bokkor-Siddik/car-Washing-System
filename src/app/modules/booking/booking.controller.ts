/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { bookingService } from "./booking.service";
import { JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken';
import config from "../../config";
import ResponseError from "../../../error/response.error";
import { bookingValidation } from "./booking.validation";

const bookingCreateController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const zodValidationParses = bookingValidation.zodValidationBookingService.parse(
        req.body
      );
    const token = req.headers.authorization?.split(' ')[1];
      const verityToken = jwt.verify(
                token as string,
                config.jwt_token as string
              );
              // console.log(verityToken)
              const { email, role } = verityToken as JwtPayload;
              // console.log(email)
              
      const result = await bookingService.bookingDataDB(zodValidationParses,email,res,next);
     
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'booking created successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
// all booking slot here 
const allBookingSlotController = async(req:Request,res:Response,)=>{
  try {
      const result = await bookingService.allBookingSlot()
      res.status(200).json({
          success: true,
          statusCode: 200,
          message: ' All bookings retrieved successfully',
          data: result,
        });
  } catch (error) {
    throw new ResponseError(400,'not found data')
  }
}
// get user booking controller 
const userBookingController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  const token = req.headers.authorization?.split(' ')[1];
    const verityToken = jwt.verify(
              token as string,
              config.jwt_token as string
            );
            // console.log(verityToken)
            const { email, role } = verityToken as JwtPayload;
            // console.log(email)
            
    const result = await bookingService.userBookingSlot(email);
   
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'booking created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
  export const allBookingController ={
    bookingCreateController,
    allBookingSlotController,
    userBookingController,
  }