"use client";

import { UserInfoCell } from "@/src/components/shared/cell/UserInfoCell";
import { Column } from "@/src/components/shared/ManagementTable";
import { IUser } from "@/src/types/user.interface";


export const usersColumns: Column<IUser>[] = [
  {
    header: "user",
    accessor: (user) => (
      <UserInfoCell
        name={user.name}
        email={user.email}
        photo={user.profile?.profileImage}
      />
    ),
    sortKey: "name",
  },
  {
    header: "email",
    accessor: (user) => (
      <span className="text-sm">{user.email|| "N/A"}</span>
    ),
  },
  {
    header: "role",
    accessor: (user) => (
      <span className="text-sm capitalize">
        {user.role|| "N/A"}
      </span>
    ),
  },
  {
    header: "status",
    accessor: (user) => (
        <span className="text-sm capitalize">
        {user.status || "N/A"}
      </span>
    ),
  },
  {
    header: "contactNumber",
    accessor: (user) => (
        <span className="text-sm capitalize">
        {user?.contactNumber|| "N/A"}
      </span>
    ),
  
  },
];