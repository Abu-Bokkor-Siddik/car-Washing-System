import express from 'express'
import { allController } from './service.controller';
const router= express.Router();
router.post('/services',allController.serviceController)
router.get('/services/:id',allController.singleServiceController)
export const serviceRouter = router;