import { BookingType } from "./booking.interface";
import { BookingModel } from "./booking.model";

const bookingDataDB= async(payload:BookingType)=>{
    const result = await BookingModel.create(payload)
    return result;
}
export const bookingService ={
    bookingDataDB,
}