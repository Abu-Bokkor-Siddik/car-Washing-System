import { ZodError, ZodIssue } from "zod";
import { ErrorTypes, returnType } from "./interface";

export  // zod
const zodErrorHandle = (err: ZodError):returnType => {
  const errorSource: ErrorTypes = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode= 404;
  return{
      statusCode,
      message:"Zod validation error",
      errorSource, 
      
  }
};