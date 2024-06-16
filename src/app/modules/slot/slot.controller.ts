import { NextFunction, Request, Response } from "express";

import { allService } from "./slot.service";
import { zodValidationSlotCreate } from "./slot.validation";

const slotCreateController = async (req: Request, res: Response,next:NextFunction) => {
    try {
      const zodValidationParses = zodValidationSlotCreate.zodValidationSlot.parse(
        req.body
      );
      const result = await allService.slotCreateService(zodValidationParses);
    
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'slot created successfully',
        data: result,
      });
    } catch (error) {
     next(error)
    }
  };
  export const allSlotController ={
    slotCreateController,
  }