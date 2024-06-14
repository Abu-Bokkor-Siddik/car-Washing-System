import { ServiceType } from "./service.interface";
import { ServiceModel } from "./service.model";

const serviceCreate = async(payload:ServiceType)=>{
    const result = await ServiceModel.create(payload)
    return result;
}
// get single service 
const singleService = async(_id:string)=>{
    const result = await ServiceModel.findOne({_id})
    return result;
}
export const allServiceHere= {
serviceCreate,
singleService,
}