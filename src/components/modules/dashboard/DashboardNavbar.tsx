
// import { getNavItemsByRole } from "@/lib/navItems.config";

import { getUserInfo } from "@/src/services/auth/getUserInfo";
import { UserInfo } from "@/src/types/user.interface";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getDefaultDashboardRoute } from "@/src/lib/auth-utils";
import { getNavItemsByRole } from "@/src/lib/navItem.config";

const DashboardNavbar = async () => {
  const userInfo = (await getUserInfo()) as UserInfo;
     if (!userInfo) {
    return <div>No user session found</div>; 
  }
  const navItems = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardNavbarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardNavbar;