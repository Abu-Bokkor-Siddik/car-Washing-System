import { Schema, model } from "mongoose";
import { UserType } from "./user.interface";

import bcrypt from 'bcrypt'

const userSchema = new Schema<UserType>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin']
    },
    address:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

// pre save middleware  for hash password 
userSchema.pre('save',async function(next){

this.password= await bcrypt.hash(
   this.password,12
)
next()
})
export const UserModel = model<UserType>('user',userSchema)