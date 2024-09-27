import { Types } from "mongoose"
import { UserType } from "../user/user.interface"
import { SlotType } from "../slot/slot.interface"

export type BookingType ={
    serviceId:Types.ObjectId,
    slotId:Types.ObjectId,
    vehicleType:string,
    vehicleBrand:string,
    vehicleModel:string,
    manufacturingYear:string,
    registrationPlate:string,
    date:string,
    duration:string,
    endTime:string,
    startTime:string,
    isBooked:string,
    price:string,
    name:string,
    email:string,
    transactionId:string
}

export type StoreType ={
    customer:UserType,
    service:StoreType,
    slot:SlotType,
    vehicleType:string,
    vehicleBrand:string,
    vehicleModel:string,
    manufacturingYear:number,
    registrationPlate:string
}