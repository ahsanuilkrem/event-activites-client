
import EventContent from "@/src/components/modules/consultation/eventDetails/EventContent";
import { getEventById } from "@/src/services/host/hostEvent.service";

const EventDetalPage = async ({ params,}: { params: Promise<{ id: string }>}) => {
    
  const { id } = await params;
  const result = await getEventById(id);
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <EventContent event={result.data} />
    </div>
  );
};

export default EventDetalPage;