import JoinEventList from "@/src/components/modules/users/JoinEventList";
import { getMyJoinEvents } from "@/src/services/users/joinEvent.service";
import { IJoinEvent } from "@/src/types/event.interface";
import { Suspense } from 'react';

export default async function MyEventPage() {
 
    const [response] = await Promise.all([
        getMyJoinEvents(),

    ]);
    const events: IJoinEvent[] = response?.data.data || [];
    //   console.log(events)
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">My Join Event</h1>
                <p className="text-muted-foreground mt-2">
                    View and manage your Events
                </p>
            </div>
                <Suspense fallback={<div>Loadinng My event...</div>}>
                     <JoinEventList events={events} />
                </Suspense>
           
        </div>
    );
}