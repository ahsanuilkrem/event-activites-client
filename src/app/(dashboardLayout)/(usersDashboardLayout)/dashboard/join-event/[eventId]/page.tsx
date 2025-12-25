
import JoinEventConfirmation from "@/src/components/modules/users/JoinEventConfirmation";
import { getEventById } from "@/src/services/host/hostEvent.service";
import { IEvent } from "@/src/types/event.interface";
import { notFound } from "next/navigation";

interface JoinEventPageProps {
  params: Promise<{
    eventId: string;
  }>;
}

export default async function JoinEvenPage({
  params,
}: JoinEventPageProps) {
  const {eventId } = await params;

  // Fetch doctor and schedule in parallel
  const [eventResponse] = await Promise.all([
    getEventById(eventId),

  ]);

  if (!eventResponse?.success) {
    notFound();
  }

  const event: IEvent = eventResponse.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <JoinEventConfirmation event={event} />
    </div>
  );
}