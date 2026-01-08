"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/src/lib/server-fetch";
import { IJoinEventFormData } from "@/src/types/event.interface";
import { revalidateTag } from "next/cache";



export async function createJoinEvent(data: IJoinEventFormData) {
    try {
        const response = await serverFetch.post("/joinEvent", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
          if (result.success) {
            revalidateTag('my-events', { expire: 0 });
            revalidateTag('events-list', { expire: 0 });
            revalidateTag('user-dashboard-meta', { expire: 0 });
            revalidateTag('admin-dashboard-meta', { expire: 0 });
            revalidateTag('host-dashboard-meta', { expire: 0 });
        }
        return result;
    } catch (error: any) {
        console.error("Error creating join Event:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to book appointment",
        };
    }
}


export async function getMyJoinEvents() {
    try {
        const response = await serverFetch.get(
            "/joinEvent/my-joinEvent", {
                next:{
                    tags: ['my-joinEvent'],
                    revalidate:30,
                }
            }
         
        );
        const result = await response.json();
        // console.log({ result });
        return result;
    } catch (error: any) {
        console.error("Error fetching appointments:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to change appointment status",
        };
    }
}

export async function geteventById(id: string) {
    try {
        const response = await serverFetch.get(`/joinEvent/eventId/${id}`);
        const result = await response.json();
        return {
            success: true,
            data: result.data,
        };
    } catch (error: any) {
        console.error("Error fetching My Even:", error);
        return {
            success: false,
            data: null,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to fetch my event",
        };
    }
}


export async function createEventWithPayLater(data: IJoinEventFormData) {
    try {
        const response = await serverFetch.post("/payment/pay-later", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        if (result.success) {
            revalidateTag('my-events', { expire: 0 });
            revalidateTag('events-list', { expire: 0 });
            revalidateTag('user-dashboard-meta', { expire: 0 });
            revalidateTag('admin-dashboard-meta', { expire: 0 });
            revalidateTag('host-dashboard-meta', { expire: 0 });
        }
        return result;
    } catch (error: any) {
        console.error("Error creating Event with pay later:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to event join",
        };
    }
}