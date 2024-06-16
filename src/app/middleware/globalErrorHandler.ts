/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  request,
} from 'express';
import { ZodError, ZodIssue } from 'zod';
import { ErrorTypes, returnType } from '../../error/interface';
import { zodErrorHandle } from '../../error/zodErrorHandle';
import { mongooshValidation } from '../../error/handleMongoosh';
import { CastErrorValidation } from '../../error/castErrorValidation';
import { duplicateError } from '../../error/duplicateError';
import ResponseError from '../../error/response.error';
export const globalErrorHandles: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = err.message || 'Data not found';
   
  let errorSource: ErrorTypes = [
    {
      path: '',
      message: 'some thing is wrong',
    },
  ];
let data:[] = []
  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandle(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = mongooshValidation(err);

    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  }else if (err?.name === 'CastError') {
    const simplifiedError = CastErrorValidation(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  }else if (err?.code === 11000) {
    const simplifiedError = duplicateError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSource = simplifiedError?.errorSource;
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    // for test
    // err,
    stack: err?.stack,
  });
};
