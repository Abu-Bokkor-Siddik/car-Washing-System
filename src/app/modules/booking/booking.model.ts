import { Schema, model } from 'mongoose';
import { BookingType } from './booking.interface';
const bookingSchema = new Schema<BookingType>({
    serviceId:{
        type:Schema.Types.ObjectId,
        ref:"service" 
    },
    slotId:{
        type:Schema.Types.ObjectId,
        ref:"Slot"
    },
    vehicleType:{
        type:String,
        required:true
    },
    vehicleBrand:{
        type:String,
        required:true
    },
    vehicleModel:{
        type:String,
        required:true
    },
    manufacturingYear:{
        type:Number,
        required:true
    },
    registrationPlate:{
        type:String,
        required:true
    }

},{
    timestamps:true,
})

export const BookingModel = model<BookingType>("booking",bookingSchema)
