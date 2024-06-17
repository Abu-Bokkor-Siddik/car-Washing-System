import express from 'express';
import { allSlotController } from './slot.controller';
const router = express.Router();
router.post('/services/slots',allSlotController.slotCreateController)
router.get('/slots/availability',allSlotController.getSlotController);
export const slotRoute = router;