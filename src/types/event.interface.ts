/* eslint-disable @typescript-eslint/no-explicit-any */

import { IReview } from "./review.interface";
import { IHost, IUser } from "./user.interface";

export interface IEvent {
    id?: string;
    EventName: string;
    description?: string;
    image?: string;
    date: string;
    status?: "OPEN" | "FULL" | "CANCELLED" | "COMPLETED";
    location: string;
    category?: string;
    minParticipants: number;
    maxParticipants: number;
    fee: number;
    averageRating?: number;
    createdAt?: string;
    updatedAt?: string;
    host?: IHost;
}

export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export interface IJoinEvent {
    id: string;
    userId: string;
    eventId: string;
    status: PaymentStatus;
    user: IUser;
    event: IEvent;
    createdAt: string;
    updatedAt: string;
    review?: IReview;          
    // payment      

}

export interface IPayment {
    id: string;
    joinEventId: string;
    userId?: string;
    eventId?: string;
    amount: number;
    transactionId: string;
    status: PaymentStatus;
    paymentGatewayData?: any;
    stripeEventId?: string;

    createdAt: string;
    updatedAt: string;
}

export interface IJoinEventFormData {
    eventId: string;
   
}


