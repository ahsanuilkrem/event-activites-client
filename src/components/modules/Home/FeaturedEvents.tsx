
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users, Heart, Eye } from "lucide-react";
import { IEvent } from "@/src/types/event.interface";
import Link from "next/link";
import { Button } from "../../ui/button";
import { DateCell } from "../../shared/cell/DateCell";

interface EventGridProps {
  events: IEvent[];
}

export function FeaturedEvents({ events }: EventGridProps) {
 
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending this week
            </h2>
            <p className="text-lg text-gray-600">
              Don&apos;t miss out on what everyone&apos;s talking about.
            </p>
          </div>

          <Link
            href="/consultation"
            className="hidden md:block text-[#FF6B6B] font-semibold hover:text-[#FF5252] transition-colors"
          >
            View all events →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events?.slice(0, 4).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              
              {/* Image container */}
              <div className="relative w-full h-48">
                <Image
                  src={event?.image ?? "/fallback.png"}
                  alt={event.EventName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category */}
                <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {event.category}
                </span>

                {/* Like */}
                <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#FF6B6B] transition">
                  <Heart size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Date */}
                <div className="flex items-center text-sm text-[#FF6B6B] font-medium mb-2">
                  <Calendar size={14} className="mr-2" />
                  <DateCell date={event.date} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#FF6B6B] transition">
                  {event.EventName}
                </h3>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={14} className="mr-2" />
                  {event.location}
                </div>

                {/* Footer Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={14} className="mr-2" />
                    {event.minParticipants} going
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    Free: {event.fee}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <Link href={`/consultation/event/${event.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/consultation"
            className="text-[#FF6B6B] font-semibold hover:text-[#FF5252] transition-colors"
          >
            View all events →
          </Link>
        </div>

      </div>
    </section>
  );
}
