import { Types } from "mongoose"

 export type SlotType ={
    service:Types.ObjectId,
    date:string,
    startTime:string,
    endTime:string,
    isBooked?: string |undefined,
}
