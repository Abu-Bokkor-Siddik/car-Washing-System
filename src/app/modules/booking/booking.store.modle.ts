import { Schema, model } from 'mongoose';
import { StoreType } from './booking.interface';
import { UserType } from '../user/user.interface';
import { ServiceType } from '../service/service.interface';
import { SlotType } from '../slot/slot.interface';

// customer
const customerSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
  },
  address: {
    type: String,
    required: true,
  },
});
const servicesSchema = new Schema<ServiceType>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const slotsSchema = new Schema<SlotType>({
  service: {
    type: Schema.Types.ObjectId,
    ref: 'service',
  },
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  isBooked: {
    type: String,
  },
});
const storeSchema = new Schema<StoreType>({
    customer:customerSchema,
    service:servicesSchema,
    slot:slotsSchema,
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
})
// storeSchema.pre('save',async function(next){
//   const isExists = await StoreModel.findOne({
//    slot:this.slot
   
//   });
//   if (isExists) {
//     throw new Error(' already Booking !')
//   }
//   next()
// })
export const StoreModel = model<StoreType>("booking",storeSchema)