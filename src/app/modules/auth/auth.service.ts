import jwt from 'jsonwebtoken';
import { AuthUser } from './auth.interface';
import { UserModel } from '../user/user.model';
import { remove } from '../../utilitis/utilitis';
import { Response } from 'express';

const authService = async (payload: AuthUser, res: Response) => {
  const existUser = await UserModel.findOne({ email: payload?.email });
  // user not found
  if (!existUser) {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'User not Found',
      data: [],
    })
    return;
  }

  const removeFields = await remove(existUser?.toObject(), ['password']);

  // create jwtWebToken
  const jwtPayload = {
    email: existUser?.email,
    role: existUser?.role,
  };
  // console.log(config.jwt_token)
  const accessToken = jwt.sign(
    jwtPayload,
    'f5b0c8b60c4d8bda0e7a4a27e1234e8e9a8c9e77a3a4d6d8b8c1e2e7f8a4b3c2',
    { expiresIn: '20d' }
  );
  return {
    accessToken,
    removeFields,
  };
};

export const authAllService = {
  authService,
};
