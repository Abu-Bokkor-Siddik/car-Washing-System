/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import { userValidation } from './user.validation';
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

export const userController = {
  createUser,
};
