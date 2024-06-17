import { NextFunction, Request, Response } from "express";

export const DataNotFound = () => {
  const statusCode = 400;

  return {
    statusCode,
    message: 'Data not Found',
    data: [],
    
  };
  
};
export const middleWarleError = (req:Request,res:Response,next:NextFunction) => {
 
    (
      res.status(401).json({
        success: false,
        statusCode: 401,
        message: 'You have no access to this route',
       
      })
    ) 
    next()
};
