
import { getUserInfo } from "@/src/services/auth/getUserInfo";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getDefaultDashboardRoute } from "@/src/lib/auth-utils";
import { getNavItemsByRole } from "@/src/lib/navItem.config";
import { IUser } from "@/src/types/user.interface";

const DashboardNavbar = async () => {
  const userInfo = (await getUserInfo()) as IUser;
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