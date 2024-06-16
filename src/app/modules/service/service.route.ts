import express from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { allController } from './service.controller';
import config from '../../config';
import { UserModel } from '../user/user.model';
import { authentic } from '../../middleware/auth.middlewares';
const router = express.Router();
router.post(
  '/services',
//   auth validation 
   authentic('admin'),
//   async(req, res, next) => {
//     try {
//       const token = req.headers.authorization?.split(' ')[1];
//     //   console.log(token)
//       const verityToken = jwt.verify(
//         token as string,
//         config.jwt_token as string
//       );
//       console.log(verityToken)
//       const { email, role } = verityToken as JwtPayload;
//       const user = await UserModel.findOne({email})
//       if (user?.role!==role) {
//         res.status(401).json({
//             success: false,
//             statusCode: 401,
//             message: 'You have no access to this route',
//           });
//       }

//       if (role !== 'admin') {
//         res.status(401).json({
//           success: false,
//           statusCode: 401,
//           message: 'You have no access to this route',
//         });
//       }
//       // console.log(verityToken)

//       next();
//     } catch (error) {
//         next(error)
//     }
//   },
  allController.serviceController
);
router.get('/services/:id', allController.singleServiceController);
router.delete('/services/:id', allController.deleteServiceController);
router.put('/services/:id', allController.updateServiceController);
router.get('/services', allController.allServiceController);
export const serviceRouter = router;
