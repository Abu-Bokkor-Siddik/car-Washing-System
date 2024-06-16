import { NextFunction, Request, Response } from 'express';
import { allServiceHere } from './service.service';
import { serviceValidation } from './service.validation';
import ResponseError from '../../../error/response.error';
import { DataNotFound } from '../../../error/test.error';
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
    // if data not found 
    if (!result) {

      const Data = DataNotFound() 
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
const allServiceController = async(req:Request,res:Response)=>{
    try {
        const result = await allServiceHere.allServices()
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'services retrieved successfully',
            data: result,
          });
    } catch (error) {
      throw new ResponseError(400,'not found data')
    }
}
// delete service 
const deleteServiceController = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const result= await allServiceHere.deleteService(id)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Service deleted successfully',
            data: result,
          });
    } catch (error) {
        console.log(error)
    }
}
const updateServiceController = async(req:Request,res:Response)=>{
    try {
        const {id}=req.params;
        const payload= req.body;
        const result= await allServiceHere.updateService(id,payload)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Service update successfully',
            data: result,
          });
    } catch (error) {
        console.log(error)
    }
}
export const allController = {
  serviceController,
  singleServiceController,
  allServiceController,
  deleteServiceController,
  updateServiceController
};
