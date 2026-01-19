
import { DashboardSkeleton } from "@/src/components/shared/DashboardSkeleton";
import { EventPieChart } from "@/src/components/shared/EventPieChart";
import { StatsCard } from "@/src/components/shared/StatCard";
import { getDashboardMetaData } from "@/src/services/meta/dashboard.service";
import { IUserDashboardMeta } from "@/src/types/meta.interface";
import { Suspense } from "react";

// Dynamic SSR with fetch-level caching (30s in service for real-time stats)
export const dynamic = "force-dynamic";

async function UserDashboardContent() {
  // CRITICAL: Server-side role verification before rendering
  const result = await getDashboardMetaData();

  const data: IUserDashboardMeta = result.data;


  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Total Join Event"
          value={data.userCount.toLocaleString()}
          iconName="CalendarDays"
          description="All Join Event"
          iconClassName="bg-blue-100"
        />
        <StatsCard
          title="Total Reviews"
          value={data.reviewCount.toLocaleString()}
          iconName="Star"
          description="Reviews given"
          iconClassName="bg-yellow-100"
        />
      </div>

      {/* Appointment Status Chart */}
      <div className="grid gap-4">
      <EventPieChart
          data={data.formattedEventParticipantStatusDistribution}
          title="My Join Event Status Distribution"
          description="Overview of your Join Event statuses"
        />
      </div>
    </div>
  );
}

const UserDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your Event records and My Join Event history
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <UserDashboardContent />
      </Suspense>
    </div>
  );
};

export default UserDashboardPage;