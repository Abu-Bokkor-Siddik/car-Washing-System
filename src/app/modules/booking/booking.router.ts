import express from 'express'
import { allBookingController } from './booking.controller';


const router= express.Router();

router.post('/bookings',allBookingController.bookingCreateController)
export const bookingRouter = router;