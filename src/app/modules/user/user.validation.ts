import { z } from "zod";
const userDataValidation = z.object({
    name:z.string(),
    email:z.string(),
    password:z.string({
        invalid_type_error:'password must be string'
    }),
    phone:z.string(),
    role:z.enum(['user', 'admin']),
    address:z.string()

})
export const userValidation ={
    userDataValidation
}