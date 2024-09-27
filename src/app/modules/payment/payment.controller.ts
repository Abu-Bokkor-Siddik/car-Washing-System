import { NextFunction, Request, Response } from "express";
import { paymentService } from "./payment.service";

const conframationController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(req.query.transactionId ,'query here')
    const {transactionId,status}=req.query;
    const result=await paymentService.confirmationService(transactionId as string,status as string)
   res.send(result)
  };
  export const paymentController={
    conframationController
  }