
import EventFilters from "@/src/components/modules/admin/eventManagement/EventFilters";
import AdminEventManagementHeader from "@/src/components/modules/admin/eventManagement/EventsManagementHeader";
import HostEventsTable from "@/src/components/modules/host/EventManagement/HostEventsTable";
import TablePagination from "@/src/components/shared/TablePagination";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/src/lib/formatters";
import { getMyEvent } from "@/src/services/host/hostEvent.service";
import { Suspense } from "react";


const MyEventsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const eventsResult = await getMyEvent(queryString);
  // console.log(eventsResult.data)

  const totalPages = Math.ceil(
    eventsResult.data?.meta?.total / eventsResult.data?.meta?.limit
  );

  return (
    <div className="space-y-6">
      <AdminEventManagementHeader />
      <EventFilters />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <HostEventsTable
          events={eventsResult?.data?.data}
        />
        <TablePagination
          currentPage={eventsResult?.data?.meta?.page}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default MyEventsManagementPage; 
