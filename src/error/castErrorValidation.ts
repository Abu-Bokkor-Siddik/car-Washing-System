import mongoose from "mongoose";
import { ErrorTypes, returnType } from "./interface";

export const CastErrorValidation = (err:mongoose.Error.CastError):returnType=>{
    const errorSource:ErrorTypes  = [
        {
          path: err.path,
          message: err.message,
        },
      ];
      const statusCode = 400;
  
    return {
      statusCode,
      message: 'Invalid ID',
      errorSource,
    };
}
