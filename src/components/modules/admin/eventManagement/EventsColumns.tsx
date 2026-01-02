
"use client";

import { DateCell } from "@/src/components/shared/cell/DateCell";
import { Column } from "@/src/components/shared/ManagementTable";
import { IEvent } from "@/src/types/event.interface";
import { Star } from "lucide-react";

export const EventsColumns: Column<IEvent>[] = [

  {
    header: "EventName ",
    accessor: (event) => (
      <div className="flex flex-col">
        <span className="text-sm">{event.EventName}</span>
      </div>
    ),
  },
  {
    header: "location",
    accessor: (event) => (
      <span className="text-sm font-medium">
        {event.location}
      </span>
    ),
  },
  {
    header: "Category",
    accessor: (event) => (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">
          {event?.category}
        </span>
      </div>
    ),

  },
  {
    header: "Date",
    accessor: (event) => (
      <span className="text-sm font-medium">
        <DateCell date={event.date} />
      </span>
    ),
  },
  {
    header: "Fee",
    accessor: (event) => (
      <span className="text-sm font-semibold text-green-600">
        ${event.fee}
      </span>
    ),
    sortKey: "fee"
  },
  {
    header: "Rating",
    accessor: (event) => (
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium">
          {event.averageRating!.toFixed(1)}
        </span>
      </div>
    ),
    sortKey: "averageRating",
  },
  {
    header: "Status",
    accessor: (event) => (
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium">
          {event?.status}
        </span>
      </div>
    ),
  },

];