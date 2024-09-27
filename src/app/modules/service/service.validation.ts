import { z } from "zod";
const zodValidationService = z.object({
    name:z.string(),
    description:z.string(),
    price:z.string(),
    duration:z.string(),
    isDeleted:z.boolean()
})
export const serviceValidation = {
    zodValidationService
}