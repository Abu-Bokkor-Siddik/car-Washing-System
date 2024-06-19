import express from 'express'
import { userController } from './user.controller';
// all is ok
const router= express.Router();
// router post for user 
router.post('/auth/signup',userController.createUser)
export const userRouter = router;