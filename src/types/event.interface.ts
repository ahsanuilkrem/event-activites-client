
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
    //   payment      

}

export interface IJoinEventFormData {
    eventId: string;
   
}

// [
//   {
//     "EventName": "Summer Music Festival",
//     "description": "Join us for a day full of live performances from top bands and solo artists. Food and drinks available on-site.",
//     "image": "https://example.com/images/summer-music.jpg",
//     "date": "2025-06-21T18:00:00Z",
//     "status": "OPEN",
//     "location": "Central Park, New York",
//     "category": "Music",
//     "minParticipants": 50,
//     "maxParticipants": 500,
//     "fee": 45.00
//   },
//   {
//     "EventName": "City Marathon 2025",
//     "description": "A challenging marathon through the city streets. Participants of all levels are welcome. Medals for all finishers.",
//     "image": "https://example.com/images/marathon.jpg",
//     "date": "2025-09-10T06:30:00Z",
//     "status": "OPEN",
//     "location": "Downtown, Chicago",
//     "category": "Sports",
//     "minParticipants": 100,
//     "maxParticipants": 1000,
//     "fee": 30.00
//   },
//   {
//     "EventName": "Pro Gamer Showdown",
//     "description": "Competitive gaming tournament with top pro gamers. Watch live streams and compete for prizes in multiple gaming categories.",
//     "image": "https://example.com/images/gaming-showdown.jpg",
//     "date": "2025-07-15T14:00:00Z",
//     "status": "OPEN",
//     "location": "Convention Center, Los Angeles",
//     "category": "Gaming",
//     "minParticipants": 20,
//     "maxParticipants": 200,
//     "fee": 20.00
//   },
//   {
//     "EventName": "Modern Art Exhibition",
//     "description": "Explore contemporary art from local and international artists. Guided tours available every hour.",
//     "image": "https://example.com/images/art-exhibition.jpg",
//     "date": "2025-08-05T10:00:00Z",
//     "status": "OPEN",
//     "location": "City Art Gallery, San Francisco",
//     "category": "Art",
//     "minParticipants": 10,
//     "maxParticipants": 100,
//     "fee": 15.00
//   },
//   {
//     "EventName": "Jazz Night Under the Stars",
//     "description": "Enjoy an evening of smooth jazz music outdoors. Bring your friends and relax with live performances.",
//     "image": "https://example.com/images/jazz-night.jpg",
//     "date": "2025-07-20T19:30:00Z",
//     "status": "OPEN",
//     "location": "Riverside Amphitheater, Austin",
//     "category": "Music",
//     "minParticipants": 30,
//     "maxParticipants": 300,
//     "fee": 25.00
//   }
// ]
