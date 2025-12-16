"use client";

import { Column } from "@/src/components/shared/ManagementTable";
import { IUser } from "@/src/types/user.interface";


export const usersColumns: Column<IUser>[] = [
//   {
//     header: "Patient",
//     accessor: (patient) => (
//       <UserInfoCell
//         name={patient.name}
//         email={patient.email}
//         photo={patient.profilePhoto}
//       />
//     ),
//     sortKey: "name",
//   },

  {
    header: "name",
    accessor: (user) => (
      <div className="flex flex-col">
        <span className="text-sm">{user.name}</span>
      </div>
    ),
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