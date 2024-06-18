import express from 'express'
import { allBookingController } from './booking.controller';


const router= express.Router();

router.post('/bookings',allBookingController.bookingCreateController)
router.get('/bookings', allBookingController.allBookingSlotController);
router.get('/my-bookings', allBookingController.userBookingController);

export const bookingRouter = router;