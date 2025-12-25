"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/src/lib/server-fetch";
import { IReviewFormData } from "@/src/types/review.interface";


export async function createReview(data: IReviewFormData) {
    try {
        const response = await serverFetch.post("/review", {
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Error creating review:", error);
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Failed to create review",
        };
    }
}