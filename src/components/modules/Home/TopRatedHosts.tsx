"use client";

import { motion } from "framer-motion";
import { Star, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "../../ui/button";

type Host = {
    name: string;
    role: string;
    rating: number;
    reviews: number;
    events: number;
    image: string;
    bio: string;
};

const hosts: Host[] = [
    {
        name: "Sarah Jenkins",
        role: "Yoga Instructor",
        rating: 4.9,
        reviews: 128,
        events: 45,
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        bio: "Passionate about bringing mindfulness to the community through outdoor yoga sessions.",
    },
    {
        name: "David Chen",
        role: "Tech Meetup Organizer",
        rating: 5.0,
        reviews: 84,
        events: 32,
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        bio: "Connecting developers and designers in the city. Let's build something great together.",
    },
    {
        name: "Elena Rodriguez",
        role: "Culinary Guide",
        rating: 4.8,
        reviews: 215,
        events: 67,
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        bio: "Food lover and local explorer. I host weekly food tours and cooking workshops.",
    },
];

export function TopRatedHosts() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Top Rated Hosts
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Meet the community leaders making these amazing events possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hosts.map((host, index) => (
                        <motion.div
                            key={host.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4 mb-6 rounded-full">
                                <Image
                                    src={host.image}
                                    alt={host.name}
                                    width={64}     
                                    height={64}     
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">
                                        {host.name}
                                    </h3>
                                    <p className="text-[#FF6B6B] text-sm font-medium">
                                        {host.role}
                                    </p>

                                    <div className="flex items-center mt-1">
                                        <Star className="w-4 h-4 text-[#FFD93D] fill-current" />
                                        <span className="ml-1 text-sm font-bold text-gray-900">
                                            {host.rating}
                                        </span>
                                        <span className="ml-1 text-sm text-gray-500">
                                            ({host.reviews})
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                {host.bio}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-50 text-sm">
                                <div className="flex items-center text-gray-500">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {host.events} events hosted
                                </div>
                                <Button className="text-[#FF6B6B] font-semibold hover:underline">
                                    View Profile
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
