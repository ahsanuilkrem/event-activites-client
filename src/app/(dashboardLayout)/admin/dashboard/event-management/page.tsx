
import EventFilters from "@/src/components/modules/admin/eventManagement/EventFilters";
import AdminEventManagementHeader from "@/src/components/modules/admin/eventManagement/EventsManagementHeader";
import EventsTable from "@/src/components/modules/admin/eventManagement/EventsTable";
import TablePagination from "@/src/components/shared/TablePagination";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/src/lib/formatters";
import { getEvent } from "@/src/services/host/hostEvent.service";
import { Suspense } from "react";


const AdminEventsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const eventsResult = await getEvent(queryString);

  const totalPages = Math.ceil(
    eventsResult.meta?.total / eventsResult.meta.limit
  );

  return (
    <div className="space-y-6">
      <AdminEventManagementHeader />
      <EventFilters />
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <EventsTable
          events={eventsResult.data}
        />
        <TablePagination
          currentPage={eventsResult.meta.page}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default AdminEventsManagementPage; 
