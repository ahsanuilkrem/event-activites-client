"use server"

import { serverFetch } from "@/src/lib/server-fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function initiatePayment(joinEventId: string) {
    try {
        const response = await serverFetch.post(`/payment/${joinEventId}/initiate-payment`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error initiating payment:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to initiate payment",
        };
    }
}

export async function getPaymentStatus(joinEventId: string) {
    try {
        const response = await serverFetch.get(`/payment/status/${joinEventId}`);
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error fetching payment status:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to fetch payment status",
        };
    }
}