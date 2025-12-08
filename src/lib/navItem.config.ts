

import { NavSection } from "../types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
    const defaultDashboard = getDefaultDashboardRoute(role);

    return [
        {
            items: [
                {
                    title: "Dashboard",
                    href: defaultDashboard,
                    icon: "LayoutDashboard",
                    roles: ["USER", "HOST", "ADMIN"],
                },
                {
                    title: "My Profile",
                    href: `/my-profile`,
                    icon: "User",
                    roles: ["USER", "HOST", "ADMIN"],
                },
                {
                    title: "Home",
                    href: `/`,
                    icon: "Home",
                    roles: ["USER", "HOST", "ADMIN"],
                },

            ]
        },
        {
            title: "Settings",
            items: [
                {
                    title: "Change Password",
                    href: "/change-password",
                    icon: "Settings", // ✅ String
                    roles: ["USER"],
                },
            ],
        },
    ]
}

export const hostNavItems: NavSection[] = [
    {
        title: "Event",
        items: [
            {
                title: "Create Event",
                href: "/doctor/dashboard/create-event",
                icon: "Calendar", // ✅ String
                badge: "3",
                roles: ["HOST"],
            },
            {
                title: "My Event",
                href: "/doctor/dashboard/my-schedules",
                icon: "Clock", // ✅ String
                roles: ["HOST"],
            },
            {
                title: "Explore Events",
                href: "/consultation",
                icon: "ClipboardList", // ✅ String
                roles: ["USER"],
            },
            {
                title: "join event",
                href: "/doctor/dashboard/prescriptions",
                icon: "FileText", // ✅ String
                roles: ["HOST"],
            },
        ],
    }
]

export const userNavItems: NavSection[] = [
    {
        title: "Event",
        items: [
            {
                title: "Join Event",
                href: "/dashboard/join-event",
                icon: "Calendar", // ✅ String
                roles: ["USER"],
            },
            {
                title: "Explore Events",
                href: "/consultation",
                icon: "ClipboardList", // ✅ String
                roles: ["USER"],
            },
        ],
    },


]

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Admins",
                href: "/admin/dashboard/admins-management",
                icon: "Shield", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Manage Hosts",
                href: "/admin/dashboard/host-management",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Manage Users",
                href: "/admin/dashboard/user-management",
                icon: "Users", // ✅ String
                roles: ["ADMIN"],
            },
            {
                title: "Manage Events",
                href: "/admin/dashboard/event-management",
                icon: "Calendar", // ✅ String
                roles: ["ADMIN"],
            },
        ],
    }

]

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "HOST":
            return [...commonNavItems, ...hostNavItems];
        case "USER":
            return [...commonNavItems, ...userNavItems];
        default:
            return [];
    }
}