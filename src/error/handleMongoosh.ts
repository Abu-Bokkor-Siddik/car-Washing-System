import mongoose from 'mongoose';
import { ErrorTypes, returnType } from './interface';

export const mongooshValidation = (
  err: mongoose.Error.ValidationError
): returnType => {
  const errorSource: ErrorTypes = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSource,
  };
};
