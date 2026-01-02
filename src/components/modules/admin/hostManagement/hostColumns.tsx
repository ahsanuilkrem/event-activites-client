/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { UserInfoCell } from "@/src/components/shared/cell/UserInfoCell";
import { Column } from "@/src/components/shared/ManagementTable";
import { IHost, } from "@/src/types/user.interface";


export const hostColumns: Column<IHost>[] = [
  {
    header: "Host",
    accessor: (host) => (
      <UserInfoCell
        name={host.name}
        email={host.email}
        photo={host.profileImage}
      />
    ),
    sortKey: "name",
  },

  {
    header: "name",
    accessor: (host) => (
      <div className="flex flex-col">
        <span className="text-sm">{host.name}</span>
      </div>
    ),
  },
  {
    header: "email",
    accessor: (host) => (
      <span className="text-sm">{host.email|| "N/A"}</span>
    ),
  },
  {
    header: "Location",
    accessor: (host) => (
      <span className="text-sm capitalize">
        {host.location|| "N/A"}
      </span>
    ),
  },
  {
    header: "Interests",
    accessor: (host) => {
      // Handle both possible response structures
      const interests: any = host.interests;
      //  console.log("doctor", doctor)
      if (!interests || interests.length === 0) {
        return <span className="text-xs text-gray-500">No Interests</span>;
      }

      return (
        <div className="flex flex-wrap gap-1">
          {interests.map((item: any, index: any) => {
            // Handle nested interests object
            const interestsId = item.id || item.interestsId || index;

            return (
              <span
                key={interestsId}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                {item}
              </span>
            );
          })}
        </div>
      );
    },
  },

  {
    header: "contactNumber",
    accessor: (host) => (
        <span className="text-sm capitalize">
        {host?.user?.contactNumber|| "N/A"}
      </span>
    ),
  
  },
];