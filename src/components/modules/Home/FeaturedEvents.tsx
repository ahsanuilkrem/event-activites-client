"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, MapPin, Users, Heart } from "lucide-react";

type EventItem = {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  image: string;
  category: string;
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Sunset Yoga in the Park",
    date: "Sat, Jun 12 • 6:00 PM",
    location: "Central Park, NY",
    attendees: 42,
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
  },
  {
    id: 2,
    title: "Pottery Workshop for Beginners",
    date: "Sun, Jun 13 • 2:00 PM",
    location: "Clay Studio, Brooklyn",
    attendees: 12,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80",
    category: "Arts",
  },
  {
    id: 3,
    title: "Tech Networking Mixer",
    date: "Tue, Jun 15 • 7:00 PM",
    location: "The Hive, Downtown",
    attendees: 128,
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    category: "Tech",
  },
  {
    id: 4,
    title: "Sunday Morning Hike",
    date: "Sun, Jun 20 • 8:00 AM",
    location: "Bear Mountain",
    attendees: 24,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    category: "Outdoors",
  },
];

export function FeaturedEvents() {
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

          <a
            href="#"
            className="hidden md:block text-[#FF6B6B] font-semibold hover:text-[#FF5252] transition-colors"
          >
            View all events →
          </a>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {event.category}
                </div>

                {/* Heart button */}
                <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-[#FF6B6B] transition-colors">
                  <Heart size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center text-sm text-[#FF6B6B] font-medium mb-2">
                  <Calendar size={14} className="mr-2" />
                  {event.date}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#FF6B6B] transition-colors">
                  {event.title}
                </h3>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin size={14} className="mr-2" />
                  {event.location}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={14} className="mr-2" />
                    {event.attendees} going
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    Free
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile “View all” */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="text-[#FF6B6B] font-semibold hover:text-[#FF5252] transition-colors"
          >
            View all events →
          </a>
        </div>
      </div>
    </section>
  );
}
