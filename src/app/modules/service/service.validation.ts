import { z } from "zod";
const zodValidationService = z.object({
    name:z.string(),
    description:z.string(),
    price:z.number(),
    duration:z.number(),
    isDeleted:z.boolean()
})
export const serviceValidation = {
    zodValidationService
}