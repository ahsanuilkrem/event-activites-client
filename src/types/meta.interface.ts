export interface IBarChartData {
    month: Date | string;
    count: number;
}

export interface IPieChartData {
    status: string;
    count: number;
}

export interface IAdminDashboardMeta {
    joinEventCount: number;
    userCount: number;
    hostCount: number;
    adminCount?: number; // Only for super admin
    paymentCount: number;
    totalRevenue: {
        _sum: {
            amount: number | null;
        };
    };
    barChartData: IBarChartData[];
    pieCharData: IPieChartData[];
}

export interface IHostDashboardMeta {
    joinEventCount: number;
    useuCount: number;
    reviewCount: number;
    totalRevenue: {
        _sum: {
            amount: number | null;
        };
    };
    formattedAppointmentStatusDistribution: IPieChartData[];
}

export interface IUserDashboardMeta {
    joinEventCount: number;
    reviewCount: number;
    formattedAppointmentStatusDistribution: IPieChartData[];
}

export type IDashboardMeta = IAdminDashboardMeta | IHostDashboardMeta | IUserDashboardMeta;