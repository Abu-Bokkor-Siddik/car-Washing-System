import { NextFunction, Request, Response } from 'express';
import { allServiceHere } from './service.service';
import { serviceValidation } from './service.validation';
// create service
const serviceController = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const zodValidationParse = serviceValidation.zodValidationService.parse(
      req.body
    );
    const result = await allServiceHere.serviceCreate(zodValidationParse);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Service created successfully',
      data: result,
    });
  } catch (error) {
   next(error)
  }
};
// get single service
const singleServiceController = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { id } = req.params;
    const result = await allServiceHere.singleService(id);
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
      message: 'Service retrieved successfully',
      data: result,
    });
  } catch (error) {
   next(error)
  }
};
// get all services 
const allServiceController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const result = await allServiceHere.allServices()
        // if data not found  todo 
    if (result.length===0) {
      res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Service not Found',
        data: [],
      });
    }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'services retrieved successfully',
            data: result,
          });
    } catch (error) {
     next(error)
    }
}
// delete service 
const deleteServiceController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {id}=req.params;
        const result= await allServiceHere.deleteService(id)
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
            message: 'Service deleted successfully',
            data: result,
          });
    } catch (error) {
        next(error)
    }
}
const updateServiceController = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {id}=req.params;
        const payload= req.body;
        const result= await allServiceHere.updateService(id,payload)
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
            message: 'Service update successfully',
            data: result,
          });
    } catch (error) {
        next(error)
    }
}
export const allController = {
  serviceController,
  singleServiceController,
  allServiceController,
  deleteServiceController,
  updateServiceController
};
