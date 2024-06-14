import express from 'express'
import { allController } from './service.controller';
const router= express.Router();
router.post('/services',allController.serviceController)
router.get('/services/:id',allController.singleServiceController)
router.delete('/services/:id',allController.deleteServiceController)
router.put('/services/:id',allController.updateServiceController)
router.get('/services',allController.allServiceController)
export const serviceRouter = router;
