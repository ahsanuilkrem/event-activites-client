"use client"

import { IEvent } from "@/src/types/event.interface";
import { Calendar, Eye, Heart, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import { DateCell } from "../../shared/cell/DateCell";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event: IEvent;
}

export default function EventCard({ event }: EventCardProps) {

  const router = useRouter();
  const handleContinue = () => {
    if (event) {
      router.push(
        `/dashboard/join-event/${event.id}`
      );
    }
  };


  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-xl mt-0 pt-0">
        {/* Image */}
        <div className="relative w-full h-48 ">
          <Image
            src={event?.image ?? "/fallback.png"}
            alt={event.EventName}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
          />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
            {event.category}
          </span>

          {/* Heart */}
          <button className="absolute top-3 right-3 p-2 bg-white/40 backdrop-blur-md rounded-full hover:bg-white hover:text-red-500 text-white transition">
            <Heart size={16} />
          </button>
        </div>

        <CardContent className="p-5">
          {/* Date */}
          <div className="flex items-center text-sm text-red-500 font-medium mb-2">
            <Calendar size={14} className="mr-2" />
            <DateCell date={event.date} />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 hover:text-red-500 transition">
            {event.EventName}
          </h3>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <MapPin size={14} className="mr-2" />
            {event.location}
          </div>

          {/* Participants + Fee */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-600">
              <Users size={14} className="mr-2" />
              {event.minParticipants}
            </div>

            <span className="text-sm font-bold text-gray-900">
              Free: {event.fee}
            </span>
          </div>
        </CardContent>

        {/* Footer Buttons */}
        <CardFooter className="p-4 border-t flex gap-2">
          <Link href={`/consultation/event/${event.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
          <Button className="flex-1" onClick={handleContinue}>
            join event
          </Button>

        </CardFooter>
      </Card>
    </>
  );
}
