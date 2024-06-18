import { z } from "zod";
const zodValidationBookingService = z.object({
    serviceId:z.string(),
    slotId:z.string(),
    vehicleType:z.string(),
    vehicleBrand:z.string(),
    vehicleModel:z.string(),
    manufacturingYear:z.number(),
    registrationPlate:z.string(),
})
export const bookingValidation = {
    zodValidationBookingService
}