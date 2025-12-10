
import { z } from "zod";

export const createEventZodSchema = z.object({
    EventName: z.string().min(1, "Event name is required"),
    description: z.string().optional(),
    image: z.string().optional(),

    date: z
        .string({ message: "Date is required" })
        .refine(
            (val) => !isNaN(Date.parse(val)),
            { message: "Invalid date format, must be ISO string" }
        ),

    category: z.string().optional(),

    location: z.string({ error: "Location is required" }),

    minParticipants: z
        .number({ error: "minParticipants must be a number" })
        .min(1, "minParticipants must be at least 1"),

    maxParticipants: z
        .number({ error: "maxParticipants must be a number" })
        .min(1, "maxParticipants must be at least 1"),

    fee: z
        .number({ error: "fee must be a number" })
        .default(0),
});



export const UpdateEventZodSchema = z.object({
    EventName: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z
        .string()
        .refine(
            (val) => !isNaN(Date.parse(val)),
            { message: "Invalid date format, must be ISO string" }
        ).optional(),
    category: z.string().optional(),
    location: z.string().optional(),
    status: z.enum(["OPEN", "FULL", "CANCELLED", "COMPLETED"],).optional(),
    minParticipants: z
        .number().optional(),
    maxParticipants: z
        .number().optional(),
    fee: z
        .number().optional(),
        
});

  
  
  
  
