import { z } from "zod";
const zodValidationBookingService = z.object({
    serviceId:z.string(),
    slotId:z.string(),
    vehicleType:z.string(),
    vehicleBrand:z.string(),
    vehicleModel:z.string(),
    manufacturingYear:z.string(),
    registrationPlate:z.string(),
    date:z.string(),
    duration:z.string(),
    endTime:z.string(),
    startTime:z.string(),
    isBooked:z.string(),
    price:z.string(),
    name:z.string(),
    email:z.string(),
    transactionId:z.string(),
})
export const bookingValidation = {
    zodValidationBookingService
}