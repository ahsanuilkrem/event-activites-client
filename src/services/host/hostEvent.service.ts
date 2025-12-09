/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/src/lib/server-fetch";
import { zodValidator } from "@/src/lib/zodValidator";
import { createEventZodSchema } from "@/src/zod/event.validation";
import { revalidateTag } from "next/cache";

export async function createEvent(_prevState: any, formData: FormData) {
    try {
        const payload = {
            EventName: formData.get("EventName") as string,
            description: formData.get("description") as string | null,
            date: formData.get("date") as string,
            category: formData.get("category") as string | null,
            location: formData.get("location") as string,
            minParticipants: Number(formData.get("minParticipants")),
            maxParticipants: Number(formData.get("maxParticipants")),
            fee: Number(formData.get("fee")) || 0,
        }
        if (zodValidator(payload, createEventZodSchema).success === false) {
            return zodValidator(payload, createEventZodSchema);
        }

        const validatedPayload = zodValidator(payload, createEventZodSchema).data;

        const newFormData = new FormData()
        newFormData.append("data", JSON.stringify(validatedPayload))

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob)
        }

        const response = await serverFetch.post("/event/create-event", { 
            body: newFormData,
        })

        const result = await response.json();
        if(result.success){
            revalidateTag("event-list", "max");
        }
        return result;
        
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}` }

    }
}



export async function getEvent() {
    try {
        const response = await serverFetch.get("/event", {
            cache: "force-cache",
            next: {tags: ["event-list"]}
        })
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}


export async function deleteEvent(id: string) {
    try {
        const response = await serverFetch.delete(`/event/${id}`)
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}