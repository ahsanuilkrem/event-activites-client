
import JoinEventDetails from "@/src/components/modules/users/JoinEventDetails";
import { geteventById } from "@/src/services/users/joinEvent.service";
import { IJoinEvent } from "@/src/types/event.interface";
import { notFound } from "next/navigation";

interface EventDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JoinEventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = await params;

  const response = await geteventById(id);
  // console.log({ response });

  if (!response?.success || !response?.data) {
    notFound();
  }

  const event: IJoinEvent = response.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <JoinEventDetails event={event} />
    </div>
  );
}



