import mongoose from 'mongoose';
import { ServiceModel } from '../service/service.model';
import { SlotModel } from '../slot/slot.model';
import { UserModel } from '../user/user.model';
import { BookingType } from './booking.interface';
import ResponseError from '../../../error/response.error';
import { StoreModel } from './booking.store.modle';


const bookingDataDB = async (payload: BookingType, email: string) => {
  // transaction start ...
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await UserModel.findOne({ email }).session(session);

    if (!user) {
      throw new ResponseError(404, 'error user not create');
    }

    const service = await ServiceModel.findById({
      _id: payload?.serviceId,
    }).session(session);
    if (!service) {
      throw new ResponseError(404, 'error service not create');
    }

    const slot = await SlotModel.findById({ _id: payload?.slotId }).session(
      session
    );

    if (!slot) {
      throw new ResponseError(404, 'error slot not update');
    }

    const data = await {
      customer: {
        name: user?.name,
        email: user?.email,
        password: user?.password,
        phone: user?.phone,
        role: user?.role,
        address: user?.address,
      },
      service: {
        name: service?.name,
        description: service?.description,
        price: service?.price,
        duration: service?.duration,
        isDeleted: service?.isDeleted,
      },
      slot: {
        service: slot?.service,
        date: slot?.date,
        startTime: slot?.startTime,
        endTime: slot?.endTime,
        isBooked: 'booked',
      },
      vehicleType: payload?.vehicleType,
      vehicleBrand: payload?.vehicleBrand,
      vehicleModel: payload?.vehicleModel,
      manufacturingYear: payload?.manufacturingYear,
      registrationPlate: payload?.registrationPlate,
    };

    const result = await StoreModel.create([data], { session });
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error) {
   console.log(error);
  }
};
// get all booking slot  
const allBookingSlot =async()=>{
  const result = await StoreModel.find()
  return result ;
}
// get user  booking slot 
const userBookingSlot =async(email:string)=>{

  const withCustomer = await StoreModel.find({"customer.email":email})
  const result = withCustomer.map(data=>({
    _id:data?._id,
    service:data?.service,
    slot:data?.slot,
    vehicleType:data?.vehicleType,
    vehicleBrand:data?.vehicleBrand,
    vehicleModel:data?.vehicleModel,
    manufacturingYear:data?.manufacturingYear,
    registrationPlate:data?.registrationPlate

  }))
  
  return result ;
}
export const bookingService = {
  bookingDataDB,
  allBookingSlot,
  userBookingSlot
};
