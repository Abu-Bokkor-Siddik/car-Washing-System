import express from 'express';
import { allSlotController } from './slot.controller';
import { authentic } from '../../middleware/auth.middlewares';
const router = express.Router();
router.post('/services/slots',authentic('admin'),allSlotController.slotCreateController)
router.get('/slots/availability',allSlotController.getSlotController);
// single check
router.get('/slot/:id', allSlotController.singleSlotController);
router.put(
    '/slot/:id',
    // authentic('admin'),
    allSlotController.updateSlotContoller
  );
export const slotRoute = router;