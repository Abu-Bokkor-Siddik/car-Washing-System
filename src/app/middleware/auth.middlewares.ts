import jwt, { JwtPayload } from 'jsonwebtoken';

import { UserModel } from '../modules/user/user.model';
import { NextFunction, Request, Response } from 'express';
import config from '../config';
import ResponseError from '../../error/response.error';

export const authentic = (roles: string) => {
  // console.log(roles)
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        throw new ResponseError(401,"You have no access to this route")
      }
      // console.log(token)
      const verityToken = jwt.verify(
        token as string,
        config.jwt_token as string
      );

      const { email, role } = verityToken as JwtPayload;

      const user = await UserModel.findOne({ email });
      if (user?.role !== role) {
        throw new ResponseError(401,"You have no access to this route")
      }

      if (role !== roles) {
        throw new ResponseError(401,"You have no access to this route")
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
