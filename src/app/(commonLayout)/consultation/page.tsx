
import EventFilters from "@/src/components/modules/admin/eventManagement/EventFilters";
import EventGrid from "@/src/components/modules/consultation/EventGrid";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/src/lib/formatters";
import { getEvent } from "@/src/services/host/hostEvent.service";
import { Suspense } from "react";

// ISR: Revalidate every 10 minutes for event listings
// export const revalidate = 600;

const ConsultationPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);

  // Fetch doctors and specialties in parallel
  const [EventsResponse] = await Promise.all([
    getEvent(queryString),

  ]);

  const events = EventsResponse?.data || [];
  //  console.log(events)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Join a Event</h1>
          <p className="text-muted-foreground mt-2">
            Search and join Event with our qualified Event Activites center
          </p>
        </div>


        {/* Filters */}
      <EventFilters />

        {/* Doctor Grid */}
        <Suspense fallback={<TableSkeleton columns={3} />}>
          <EventGrid events={events} />
        </Suspense>
      </div>
    </div>
  );
};

export default ConsultationPage;