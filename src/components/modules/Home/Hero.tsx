
"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

export const Hero: FC = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 bg-[#FFFBF5]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFF0F0] rounded-l-[100px] opacity-60" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFF5D6] rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* -------------------- TEXT CONTENT -------------------- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-orange-100">
                            <span className="flex h-2 w-2 rounded-full bg-[#FF6B6B]" />
                            <span className="text-sm font-medium text-gray-600">
                                Over 5,000 active members
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Find your <span className="text-[#FF6B6B]">people</span>. <br />
                            Love your{" "}
                            <span className="text-[#FFD93D] text-shadow-sm">city</span>.
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            Join the most vibrant community of explorers, creators, and doers.
                            Discover local events, meet new friends, and make every weekend count.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/consultation">
                            <Button size="lg">
                                Join the Community
                                <ArrowRight size={20} className="ml-2" />
                            </Button>
                            </Link>
                            {/* <Button variant="outline" size="lg">
                                Browse Events
                            </Button> */}
                        </div>

                        {/* Small stats */}
                        <div className="mt-10 flex items-center gap-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-[#FF6B6B]" />
                                <span>500+ Groups</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#FF6B6B]" />
                                <span>50+ Cities</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* -------------------- IMAGE GRID -------------------- */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-12">
                                {/* Img 1 */}
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <Image
                                        fill
                                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
                                        alt="Concert crowd"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                </div>

                                {/* Img 2 */}
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <Image
                                        fill
                                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                                        alt="Friends laughing"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {/* Img 3 */}
                                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <Image
                                        fill
                                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80"
                                        alt="Dinner party"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Img 4 */}
                                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <Image
                                        fill
                                        src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80"
                                        alt="Group hiking"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 text-center"
                        >
                            <p className="text-3xl font-bold text-[#FF6B6B]">2k+</p>
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                Events this week
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
