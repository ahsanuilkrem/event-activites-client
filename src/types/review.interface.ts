import { IEvent, IJoinEvent } from "./event.interface";
import { IUser } from "./user.interface";

export interface IReview {
    id?: string;
    rating: number;
    comment: string;
    userId: string;
    hostId: string;
    eventId: string;
    joinEventId: string;
    user: IUser;
    host: IUser;
    event: IEvent
    joinEvent: IJoinEvent;
    createdAt: string;
    updatedAt: string;
}

export interface IReviewFormData {
    joinEventId: string;
    hostId?: string;
    rating: number;
    comment: string;
}