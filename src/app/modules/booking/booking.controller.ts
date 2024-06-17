import { NextFunction, Request, Response } from "express";
import { bookingService } from "./booking.service";

const bookingCreateController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
    //   const zodValidationParses = zodValidationSlotCreate.zodValidationSlot.parse(
    //     req.body
    //   );
      const result = await bookingService.bookingDataDB(req.body);
  
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
  }