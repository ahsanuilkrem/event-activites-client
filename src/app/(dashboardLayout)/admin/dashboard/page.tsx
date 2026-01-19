

import { DashboardSkeleton } from "@/src/components/shared/DashboardSkeleton";
import { EventBarChart } from "@/src/components/shared/EventBarChart";
import { EventPieChart } from "@/src/components/shared/EventPieChart";
import { StatsCard } from "@/src/components/shared/StatCard";
import { getDashboardMetaData } from "@/src/services/meta/dashboard.service";
import { IAdminDashboardMeta } from "@/src/types/meta.interface";
import { Suspense } from "react";

async function AdminDashboardContent() {
  const result = await getDashboardMetaData();

  const data: IAdminDashboardMeta = result.data;

  const totalRevenue = data.totalRevenue?._sum?.amount || 0;

  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div
        className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${
          data.adminCount !== undefined ? "xl:grid-cols-6" : "xl:grid-cols-5"
        }`}
      >
        <StatsCard
          title="Total JoinEvent"
          value={data.joinEventCount.toLocaleString()}
          iconName="CalendarDays"
          description="All Join Events"
          iconClassName="bg-blue-100"
        />
        <StatsCard
          title="Total Event"
          value={data.eventCount.toLocaleString()}
          iconName="CalendarDays"
          description="All Events"
          iconClassName="bg-blue-100"
        />
        <StatsCard
          title="Total users"
          value={data.userCount.toLocaleString()}
          iconName="Users"
          description="Registered users"
          iconClassName="bg-green-100"
        />
        <StatsCard
          title="Total Hosts"
          value={data.hostCount.toLocaleString()}
          iconName="Users"
          description="Active doctors"
          iconClassName="bg-purple-100"
        />
        {data.adminCount !== undefined && (
          <StatsCard
            title="Total Admins"
            value={data.adminCount.toLocaleString()}
            iconName="UserCog"
            description="System administrators"
            iconClassName="bg-orange-100"
          />
        )}
        <StatsCard
          title="Total Payments"
          value={data.paymentCount.toLocaleString()}
          iconName="CreditCard"
          description="Payment transactions"
          iconClassName="bg-indigo-100"
        />
        <StatsCard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          iconName="DollarSign"
          description="Total earnings"
          iconClassName="bg-emerald-100"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <EventBarChart data={data.barChartData} />
        <EventPieChart data={data.pieCharData} />
      </div>
    </div>
  );
}

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your Event  system statistics
        </p>
      </div>

      <Suspense fallback={<DashboardSkeleton />}>
        <AdminDashboardContent />
      </Suspense>
    </div>
  );
};

export default AdminDashboardPage;