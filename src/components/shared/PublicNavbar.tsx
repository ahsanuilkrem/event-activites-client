
import Link from "next/link";
import { Button } from "../ui/button";
import { CalendarHeart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { getCookie } from "@/src/services/auth/tokenHandlers";
import LogoutButton from "./LogoutButton";
import { getUserInfo } from "@/src/services/auth/getUserInfo";
import { publicNav } from "@/src/lib/publicNav";
import UserDropdown from "../modules/dashboard/UserDropdown";
import { UserInfo } from "@/src/types/user.interface";




const PublicNavbar = async () => {
  // const user = getUserInfo.
  // const navItems = [
  //   { href: "#", label: "" },
  //   { href: "#", label: "Explore Events" },
  //   { href: "#", label: "Become a Host" },
  //   { href: "#", label: "My Events" },
  //   { href: "/dashboard", label: "Dashboard" },

  // ];

  const accessToken = await getCookie("accessToken");

  let role: "GUEST" | "USER" | "HOST" | "ADMIN" = "GUEST";

  if (accessToken) {
    const user = await getUserInfo(accessToken);
    role = user?.role ?? "GUEST";
  }

  const navItems = publicNav[role];

  const userInfo = (await getUserInfo()) as UserInfo;
  //    if (!userInfo) {
  //   return <div className="hidden">No user session found</div>; 
  // }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  dark:bg-background/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-[#FF6B6B] p-2 rounded-xl text-white">
            <CalendarHeart size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Event<span className="text-[#FF6B6B]">Community</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {/* {accessToken ? (
            <LogoutButton />
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )} */}

          {/* User Dropdown */}
          <div >
           {userInfo ? (
            <UserDropdown userInfo={userInfo} />
           ): (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
           )} 
          </div>
        </div>


        {/* Mobile Menu */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline"> <Menu /> </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-4">
                  <div className="flex justify-center"></div>
                  {accessToken ? (
                    <LogoutButton />
                  ) : (
                    <Link href="/login">
                      <Button>Login</Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;