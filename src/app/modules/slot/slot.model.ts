import { SlotType } from './slot.interface';
import { Schema, model } from 'mongoose';
const slotSchema = new Schema <SlotType>({
    service:{
        type:Schema.Types.ObjectId,
        ref:"service"
    },
    date:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true,
    },
    isBooked:{
        type:String,
    }
})

export const SlotModel = model<SlotType>("Slot",slotSchema)