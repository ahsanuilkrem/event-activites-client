
import HostFilters from "@/src/components/modules/admin/hostManagement/HostFilters";
import HostsTable from "@/src/components/modules/admin/hostManagement/HostTable";
import ManagementPageHeader from "@/src/components/shared/ManagementPageHeader";
import TablePagination from "@/src/components/shared/TablePagination";
import { TableSkeleton } from "@/src/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/src/lib/formatters";
import { getHosts } from "@/src/services/admin/hostManagement";
import { Suspense } from "react";

const AdminUsersManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const hostsResult = await getHosts(queryString);
  const totalPages = Math.ceil(
    (hostsResult?.meta?.total || 1) / (hostsResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
      <ManagementPageHeader
        title="Host Management"
        description="Manage Hosts information and details"
      />

      {/* Search, Filters */}
      <HostFilters />

      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <HostsTable hosts={hostsResult?.data || []} />
        <TablePagination
          currentPage={hostsResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminUsersManagementPage;

