// import { getDefaultDashboardRoute } from "@/lib/auth-utils";
// import { getNavItemsByRole } from "@/lib/navItems.config";
// import { getUserInfo } from "@/services/auth/getUserInfo";
// import { NavSection } from "@/types/dashboard.interface";
// import { UserInfo } from "@/types/user.interface";
// import DashboardSidebarContent from "./DashboardSidebarContent";

import { getDefaultDashboardRoute } from "@/src/lib/auth-utils";
import { getNavItemsByRole } from "@/src/lib/navItem.config";
import { getUserInfo } from "@/src/services/auth/getUserInfo";
import { NavSection } from "@/src/types/dashboard.interface";
import { UserInfo } from "@/src/types/user.interface";
import DashboardSidebarContent from "./DashboardSidebarContent";


const DashboardSidebar = async () => {
  const userInfo = (await getUserInfo()) as UserInfo;

   if (!userInfo) {
    return <div>No user session found</div>; 
  }

  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardSidebar;