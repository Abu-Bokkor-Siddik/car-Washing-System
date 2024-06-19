import express from 'express'
import { allBookingController } from './booking.controller';
import { authentic } from '../../middleware/auth.middlewares';


const router= express.Router();

router.post('/bookings',authentic('user'),allBookingController.bookingCreateController)
router.get('/bookings', authentic('admin'),allBookingController.allBookingSlotController);
router.get('/my-bookings', authentic('user'),allBookingController.userBookingController);

export const bookingRouter = router;