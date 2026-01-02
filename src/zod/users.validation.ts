
import { z } from "zod";

 export const updateUserStatusSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        contactNumber: z.string().optional(),
        role: z.enum(["ADMIN", "HOST", "USER"]).optional(),
        status: z.enum(["ACTIVE", "BLOCKED", "DELETED"]).optional()
    })
})