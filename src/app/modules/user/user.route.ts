import express from 'express';
import { userController } from './user.controller';
import { authentic } from '../../middleware/auth.middlewares';
// all is ok
const router = express.Router();
// router post for user
router.post('/auth/signup', userController.createUser);
router.get('/single/:email', userController.singleUserContoller);
router.get('/user', authentic('admin'), userController.allUserController);
router.put(
  '/user/:id',userController.updateUserContoller
);
// review here
router.post('/review', userController.userReviewController);
router.get('/review', userController.getAllReviewController);

// authentic('admin')
export const userRouter = router;
