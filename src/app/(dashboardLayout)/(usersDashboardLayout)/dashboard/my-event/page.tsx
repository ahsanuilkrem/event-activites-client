import JoinEventList from "@/src/components/modules/users/JoinEventList";
import { getUserInfo } from "@/src/services/auth/getUserInfo";
import { getMyJoinEvents } from "@/src/services/users/joinEvent.service";
import { IJoinEvent } from "@/src/types/event.interface";

export default async function MyEventPage() {
    const user = await getUserInfo();
    // console.log(user)
    const userId: string = user?.profile?.id
    //  console.log(userId)
    const [response] = await Promise.all([
        getMyJoinEvents(userId),

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

            <JoinEventList events={events} />
        </div>
    );
}