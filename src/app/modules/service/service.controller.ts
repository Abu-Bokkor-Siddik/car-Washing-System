import { Request, Response } from 'express';
import { allServiceHere } from './service.service';
import { serviceValidation } from './service.validation';
// create service
const serviceController = async (req: Request, res: Response) => {
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
    console.log(error);
  }
};
// get single service
const singleServiceController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await allServiceHere.singleService(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Service retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
       console.log(error) 
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
