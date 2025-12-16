// "use client";
// import { IEvent } from "@/src/types/event.interface";
// import { Calendar, Eye, Heart, MapPin, Users } from "lucide-react";
// import Link from "next/link";
// import { Card, CardContent, CardFooter } from "../../ui/card";
// import { Button } from "../../ui/button";
// import Image from "next/image";

// // import BookAppointmentDialog from "./BookAppointmentDialog";

// interface EventCard {
//   event: IEvent;
// }

// export default function EventCard({ event }: EventCard) {

//   return (
//     <>
//       <Card className="overflow-hidden hover:shadow-lg transition-shadow">
//           <CardContent>
//           <div className="flex items-start gap-4">
//             <div className="relative h-48 overflow-hidden">
//                 <Image
//                   src={event?.image ?? "/fallback.png"}
//                   alt={event.EventName}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Category badge */}
//                 <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
//                   {event.category}
//                 </div>

//                 {/* Heart button */}
//                 <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#FF6B6B] transition-colors">
//                   <Heart size={16} />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <div className="flex items-center text-sm text-[#FF6B6B] font-medium mb-2">
//                   <Calendar size={14} className="mr-2" />
//                   {event.date}
//                 </div>

//                 <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#FF6B6B] transition-colors">
//                   {event.EventName}
//                 </h3>

//                 <div className="flex items-center text-sm text-gray-500 mb-4">
//                   <MapPin size={14} className="mr-2" />
//                   {event.location}
//                 </div>

//                 <div className="flex items-center justify-between pt-4 border-t border-gray-50">
//                   <div className="flex items-center text-sm text-gray-600">
//                     <Users size={14} className="mr-2" />
//                     {event.minParticipants} going
//                   </div>
//                   <span className="text-sm font-semibold text-gray-900">
//                     Free: {event.fee}
//                   </span>
//                 </div>
              
//               </div>

//           </div>
//         </CardContent>

//         <CardFooter className="pt-3 border-t flex gap-2">
//           <Link className="flex-1" href={`/consultation/event/${event.id}`}>
//             <Button variant="outline" className="w-full">
//               <Eye className="h-4 w-4 mr-2" />
//               View Details
//             </Button>
//           </Link>
//           <Button
//           //  onClick={() => setShowScheduleModal(true)}
//             className="flex-1">
//             Book Appointment
//           </Button>
//         </CardFooter>
//       </Card>

//       {/* <BookAppointmentDialog
//         doctor={doctor}
//         isOpen={showScheduleModal}
//         onClose={() => setShowScheduleModal(false)}
//       /> */}
//     </>
//   );
// }


"use client";

import { IEvent } from "@/src/types/event.interface";
import { Calendar, Eye, Heart, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "../../ui/card";
import { Button } from "../../ui/button";
import Image from "next/image";
import { DateCell } from "../../shared/cell/DateCell";

interface EventCardProps {
  event: IEvent;
}

export default function EventCard({ event }: EventCardProps) {
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
            {event.minParticipants} going
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

        <Button className="flex-1">
         join event
        </Button>
      </CardFooter>
    </Card>
   </>
  );
}
