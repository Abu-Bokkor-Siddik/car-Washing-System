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
        type:String,
        required:true
    },
    registrationPlate:{
        type:String,
        required:true
    },
    // date,
    // duration,
    // endTime,
    // startTime,
    // isBooked,
    // price
    date:{
        type:String,
    },
    duration:{
        type:String,
    },
    endTime:{
        type:String,
    },
    startTime:{
        type:String,
    },
    isBooked:{
        type:String,
    },
    price:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    transactionId:{
        type:String,
    },
    

},{
    timestamps:true,
})

export const BookingModels = model<BookingType>("bookings",bookingSchema)
