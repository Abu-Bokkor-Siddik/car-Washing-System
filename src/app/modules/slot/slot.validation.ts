import { z } from "zod";
const zodValidationSlot = z.object({
    service:z.string( {invalid_type_error: 'Service id must be string',
 required_error: 'Service is required'}),
    date:z.string(),
    startTime:z.string(),
   endTime:z.string(),
   isBooked:z.string().optional()
    
})
export const zodValidationSlotCreate={
    zodValidationSlot
}