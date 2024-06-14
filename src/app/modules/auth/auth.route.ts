import express from 'express';
import { authAllController } from './auth.controller';
const router = express.Router();
router.post('/auth/login',authAllController.authController)
export const LoginRouter= router;