import { ErrorTypes, returnType } from "./interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const duplicateError = (err:any):returnType=>{
    const match = err.message.match(/"([^"]*)"/);
    const extractedErrorMessage = match && match[1];
    const errorSource:ErrorTypes  = [
        {
          path: err.path,
          message: `{${extractedErrorMessage} is already exist}`,
        },
      ];
      const statusCode = 400;
  
    return {
      statusCode,
      message: 'Duplicate Error',
      errorSource,
    };
}