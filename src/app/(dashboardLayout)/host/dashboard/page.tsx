
import { DashboardSkeleton } from "@/src/components/shared/DashboardSkeleton";
import { EventPieChart } from "@/src/components/shared/EventPieChart";
import { StatsCard } from "@/src/components/shared/StatCard";
import { getDashboardMetaData } from "@/src/services/meta/dashboard.service";
import { IHostDashboardMeta } from "@/src/types/meta.interface";
import { Suspense } from "react";

async function HostDashboardContent() {
  const result = await getDashboardMetaData();

  const data: IHostDashboardMeta = result.data;
  // console.log(data)
  // Safe access with fallback for revenue data
  const totalRevenue = data.totalRevenue?._sum?.amount || 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Events"
          value={data.eventCount.toLocaleString()}
          iconName="CalendarDays"
          description="All Events"
          iconClassName="bg-blue-100"
        />
        <StatsCard
          title="Total Join Event"
          value={data.joinEventCount.toLocaleString()}
          iconName="Users"
          description="Unique User served"
          iconClassName="bg-green-100"
        />
        <StatsCard
          title="Total Reviews"
          value={data.reviewCount.toLocaleString()}
          iconName="Star"
          description="User reviews"
          iconClassName="bg-yellow-100"
        />
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          iconName="DollarSign"
          description="Total earnings"
          iconClassName="bg-emerald-100"
        />
      </div>

      {/* Appointment Status Chart */}
      <div className="grid gap-4">
        <EventPieChart
          data={data.formattedEventParticipantStatusDistribution}
          title="Event Status Distribution"
          description="Overview of your Event statuses"
        />
      </div>
    </div>
  );
}

const HostDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Host Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your Event practice and User statistics
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <HostDashboardContent />
      </Suspense>
    </div>
  );
};

export default HostDashboardPage;