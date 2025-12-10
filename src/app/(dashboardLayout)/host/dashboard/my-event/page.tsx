import EventManagementHeader from "@/src/components/modules/host/EventManagement/EventManagementHeader";
import RefreshButton from "@/src/components/shared/RefreshButton";

const MyEventManagementPage = async () => {
//   const result = await getSpecialities();
  
  return (
    <div className="space-y-6">
      <EventManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      {/* <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <SpecialitiesTable specialities={result.data} />
      </Suspense> */}
    </div>
  );
};

export default MyEventManagementPage;