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
    eventCount: number;
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
    eventCount: number;
    reviewCount: number;
    totalRevenue: {
        _sum: {
            amount: number | null;
        };
    };
    formattedEventParticipantStatusDistribution: IPieChartData[];
}

export interface IUserDashboardMeta {
    userCount: number;
    reviewCount: number;
    formattedEventParticipantStatusDistribution: IPieChartData[];
}

export type IDashboardMeta = IAdminDashboardMeta | IHostDashboardMeta | IUserDashboardMeta;