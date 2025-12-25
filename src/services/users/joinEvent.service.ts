"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/src/lib/server-fetch";
import { IJoinEventFormData } from "@/src/types/event.interface";


export async function createJoinEvent(data: IJoinEventFormData) {
    try {
        const response = await serverFetch.post("/event/joinEvent", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
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


export async function getMyJoinEvents(id: string) {
    try {
        const response = await serverFetch.get(
            `event//my-event/${id}}`
        );
        const result = await response.json();
        console.log({ result });
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


// export async function getMyJoinEvents(queryString?: string) {
//     try {
//         const response = await serverFetch.get(
//             `/appointment/my-appointment${queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"}`
//         );
//         const result = await response.json();
//         console.log({ result });
//         return result;
//     } catch (error: any) {
//         console.error("Error fetching appointments:", error);
//         return {
//             success: false,
//             message:
//                 process.env.NODE_ENV === "development"
//                     ? error.message
//                     : "Failed to change appointment status",
//         };
//     } 
// }