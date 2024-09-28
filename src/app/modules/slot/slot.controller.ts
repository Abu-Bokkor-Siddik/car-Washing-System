import { NextFunction, Request, Response } from 'express';
import { allService } from './slot.service';
import { zodValidationSlotCreate } from './slot.validation';

const slotCreateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const zodValidationParses = zodValidationSlotCreate.zodValidationSlot.parse(
      req.body
    );
    const result = await allService.slotCreateService(zodValidationParses);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Slots created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// get available slot
const getSlotController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log(req.query,'here')
    const result = await allService.getAllSlot(req.query);
    // console.log(typeof(result))
    if (result.length === 0) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Data not found',
        data: [],
      });
    } else {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Available slots retrieved successfully',
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};
const singleSlotController = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id } = req.params;
    const result = await allService.singleSlot(id);
    if (!result) {
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Slot not Found',
        
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Slot retrieved successfully',
      data: result,
    });
  } catch (error) {
   next(error)
  }
};
const updateSlotContoller = async(req:Request,res:Response,next:NextFunction)=>{
  try {
      const {id}=req.params;
      const payload= req.body;
      const result= await allService.updateSlot(id,payload)
      if (!result) {
        res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'Slot not Found',
          
        });
      }
      res.status(200).json({
          success: true,
          statusCode: 200,
          message: 'Slot update successfully',
          data: result,
        });
  } catch (error) {
      next(error)
  }
}
export const allSlotController = {
  slotCreateController,
  getSlotController,
  singleSlotController,
  updateSlotContoller,
};
