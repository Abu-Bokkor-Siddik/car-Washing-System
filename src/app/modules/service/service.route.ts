import express from 'express';
import { allController } from './service.controller';
import { authentic } from '../../middleware/auth.middlewares';
const router = express.Router();
router.post(
  '/services',
  //   auth validation admin check
  authentic('admin'),
  allController.serviceController
);
// single check
router.get('/services/:id', allController.singleServiceController);
// soft delete 
router.delete('/services/:id',authentic('admin'), allController.deleteServiceController);
// update 
router.put(
  '/services/:id',
  authentic('admin'),
  allController.updateServiceController
);
// all services check
router.get('/services', allController.allServiceController);
export const serviceRouter = router;
