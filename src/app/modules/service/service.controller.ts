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
      message: 'Service retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const allController = {
  serviceController,
  singleServiceController,
};
