
  
//   id               String             
//   EventName        String
//   description      String ?
//     image            String ?
//         date             DateTime
//   location         String
//   category         String ?
//     minParticipants  Int
//   maxParticipants  Int
//   fee              Float @default (0)
//   status           EventStatus @default (OPEN)
//   averageRating    Float @default (0.0)

import { IHost } from "./user.interface";

//   hostId           String
//   host             Profile @relation(fields: [hostId], references: [id])

//   participants     EventParticipant[]
//   reviews          Review[]
//   payment          Payment[]

//   createdAt        DateTime @default (now())
//   updatedAt        DateTime @updatedAt



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