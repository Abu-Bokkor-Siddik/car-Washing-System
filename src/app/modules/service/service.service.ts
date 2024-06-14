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
// get all service 
const allServices =async()=>{
    const result = await ServiceModel.find();
    return result ;
}
// update 
const updateService = async(_id:string,payload:Partial<ServiceType>)=>{
    const result = await ServiceModel.findByIdAndUpdate({_id},payload,{new:true})
    return result;
}
// delete 
const deleteService = async(_id:string)=>{
    const updateIsDeleted = await ServiceModel.findByIdAndUpdate({_id},{
        $set:{
            "isDeleted": true,
        }
    },{new:true})
    
   
        const result = await ServiceModel.deleteOne({_id})
        // delete update 
        
  
    // todo global error handle

    // if (!result) {
    //     throw new Error('not found')
    // }
    return updateIsDeleted;
}
export const allServiceHere= {
serviceCreate,
singleService,
allServices,
deleteService,
updateService
}