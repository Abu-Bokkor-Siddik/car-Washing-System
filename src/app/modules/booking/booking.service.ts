import mongoose from 'mongoose';
import { ServiceModel } from '../service/service.model';
import { SlotModel } from '../slot/slot.model';
import { UserModel } from '../user/user.model';
import { BookingType } from './booking.interface';
import ResponseError from '../../../error/response.error';
import { StoreModel } from './booking.store.modle';
import { NextFunction, Response } from 'express';
import { startPayment } from '../payment/payment.utils';
import { BookingModels } from './booking.model';
import { object } from 'zod';

const bookingDataDB = async (
  payload: BookingType,
  email: string,
  res: Response,
  next: NextFunction,
  serviceId: string,
  slotId: string
) => {
  const {
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
    date,
    duration,
    endTime,
    startTime,
    isBooked,
    price,
    name,
    transactionId,
  } = payload;
  // console.log(payload);
  // const transactionId = `txr-${Date.now()}`;
  const bookingData = {
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
    date,
    duration,
    endTime,
    startTime,
    serviceId,
    slotId,
    isBooked,
    price,
    name,
    email,
    transactionId,
  };
  const result = await BookingModels.create(bookingData);
  // console.log(slotId, 'slot id');
  // const object = new objectId 
  // const updateSlot = await SlotModel.findOne(
  //   { _id:"66e47d25623b5d9c03bb2e37"}
  // );
  // const updateSlots = await SlotModel.findById(
  //   { _id:new mongoose.Types.ObjectId(slotId)}
  // );
  // // console.log("_id:",new mongoose.Types.ObjectId(slotId))
  // console.log(updateSlot, 'booking data and update slot');
  // console.log(updateSlots, 'booking data and update slotsss');
  // todo update the slot booked
  const paymentData = {
    transactionId,
    amount: payload.price,
    customerEmail: email,
    customerName: payload.name,
  };

  const paymentSession = await startPayment(paymentData);
  // transaction start ...
  // console.log(payload, 'frontend data');

  return paymentSession;
};
// get all booking slot
const allBookingSlot = async () => {
  const result = await StoreModel.find().populate('service');
  return result;
};
// get user  booking slot
// const userBookingSlot = async (email: string) => {
//   const withCustomer = await StoreModel.find({ email });

//   const result = withCustomer.map((data) => ({
//     _id: data?._id,
//     service: data?.service,
//     slot: data?.slot,
//     vehicleType: data?.vehicleType,
//     vehicleBrand: data?.vehicleBrand,
//     vehicleModel: data?.vehicleModel,
//     manufacturingYear: data?.manufacturingYear,
//     registrationPlate: data?.registrationPlate,
//   }));

//   return result;
// };
// get
const UserBooking = async (email: string) => {
  // console.log(email)
  const result = await StoreModel.find({ email });
  // console.log(result)
  return result;
};
export const bookingService = {
  bookingDataDB,
  allBookingSlot,
  // userBookingSlot,
  UserBooking,
};
