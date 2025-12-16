"use server"

/* eslint-disable @typescript-eslint/no-explicit-any */


import { serverFetch } from "@/src/lib/server-fetch";
import { zodValidator } from "@/src/lib/zodValidator";
import { IEvent } from "@/src/types/event.interface";
import { createEventZodSchema, UpdateEventZodSchema } from "@/src/zod/event.validation";


export async function createEvent(_prevState: any, formData: FormData) {
    try {
        const payload: IEvent = {
            EventName: formData.get("EventName") as string,
            description: formData.get("description") as string,
            date: formData.get("date") as string,
            category: formData.get("category") as string,
            location: formData.get("location") as string,
            minParticipants: Number(formData.get("minParticipants")),
            maxParticipants: Number(formData.get("maxParticipants")),
            fee: Number(formData.get("fee")),
           
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
        // if(result.success){
        //     revalidateTag("event-list", "max");
        // }
        console.log(" createEvent", result)
        return result;
        
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}` }

    }
}

export async function getEvent(queryString?: string) {
    try {
        const response = await fetch(`http://localhost:5000/api/v1/event${queryString ? `?${queryString}` :""}`, {
            method:"GET",
            next: {tags: ["event-list"]}
        })
        const result = await response.json();
        // console.log("get all event",result)
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function getMyEvent(queryString?: string) {
    try {
        const response = await serverFetch.get(`/event/my-event${queryString ? `?${queryString}` :""}`, {
            // next: {tags: ["event-list"]}
        })
        const result = await response.json();
        console.log("get all My event",result)
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function getEventById(id: string) {
    try {
        const response = await serverFetch.get(`/event/${id}`)
        const result = await response.json();
        console.log("getEventById", result)
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

export async function UpdateEvent( id: string, _prevState: any, formData: FormData) {
    try {
        const payload: Partial<IEvent> = {
            EventName: formData.get("EventName") as string,
            description: formData.get("description") as string,
            date: formData.get("date") as string,
            category: formData.get("category") as string,
            location: formData.get("location") as string,
            status: formData.get("status") as  "OPEN"| "FULL"| "CANCELLED" | "COMPLETED",
            minParticipants: Number(formData.get("minParticipants")),
            maxParticipants: Number(formData.get("maxParticipants")),
            fee: Number(formData.get("fee")),
           
        }
        if (zodValidator(payload, UpdateEventZodSchema).success === false) {
            return zodValidator(payload, UpdateEventZodSchema);
        }

        const validatedPayload = zodValidator(payload, UpdateEventZodSchema).data;

        const newFormData = new FormData()
        newFormData.append("data", JSON.stringify(validatedPayload))

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob)
        }

        const response = await serverFetch.patch(`/event/${id}`, { 
           
            body: newFormData, 
        })

         const result = await response.json();
        // if(result.success){
        //     revalidateTag("event-list", "max");
        // }
        console.log("UpdateEvent",result)
        return result;
        
    } catch (error: any) {
        console.log(error);
        return { success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}` }

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

