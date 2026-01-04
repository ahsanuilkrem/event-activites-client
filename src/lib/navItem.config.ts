

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
                title: "My Event",
                href: "/host/dashboard/my-event",
                icon: "Clock", // ✅ String
                roles: ["HOST"],
            },
            {
                title: "Explore Events",
                href: "/consultation",
                icon: "ClipboardList", // ✅ String
                roles: ["USER", "HOST", "ADMIN"],
            },
            // {
            //     title: "join event",
            //     href: "/host/dashboard/join-event",
            //     icon: "FileText", // ✅ String
            //     roles: ["HOST"],
            // },
        ],
    }
]

export const userNavItems: NavSection[] = [
    {
        title: "Event",
        items: [
            {
                title: "Join Event",
                href: "/dashboard/my-event",
                icon: "Calendar", // ✅ String
                roles: ["USER"],
            },
            {
                title: "Explore Events",
                href: "/consultation",
                icon: "ClipboardList", // ✅ String
                roles: ["USER", "HOST", "ADMIN"],
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
                href: "/admin/dashboard/users-management",
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