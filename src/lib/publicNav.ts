export const publicNav = {
  GUEST: [

    { href: "/consultation", label: "Explore Events" },
    { href: "/become-host", label: "Become a Host" },
  ],

  USER: [

    { href: "/consultation", label: "Explore Events" },
    { href: "/dashboard/my-event", label: "My Events" },
    { href: "/dashboard", label: "Dashboard" },
  ],

  HOST: [

    { href: "/consultation", label: "Explore Events" },
    // { href: "/host/dashboard/my-event", label: "My Events" },
    // { href: "/host/dashboard/create-event", label: "Create Event" },
    { href: "/host/dashboard", label: "Dashboard" },
  ],

  ADMIN: [

    // { href: "/admin/dashboard/user-management", label: "Manage Users" },
    // { href: "/admin/dashboard/host-management", label: "Manage Hosts" },
    // { href: "/admin/dashboard/event-management", label: "Manage Events" },
    // { href: "/admin/dashboard/admins-management", label: "Admins" },
    { href: "/consultation", label: "Explore Events" },
    // { href: "/become-host", label: "Become a Host" },
    { href: "/admin/dashboard", label: "Dashboard" },
  ],
};
