"use client";

import { motion } from "framer-motion";
import { Search, UserPlus, Camera } from "lucide-react";
import type { ReactNode } from "react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Browse Events",
    description:
      "Explore a wide range of activities happening in your local area, from hiking to pottery classes.",
    icon: <Search className="w-8 h-8 text-white" />,
    color: "bg-[#FF6B6B]",
  },
  {
    id: 2,
    title: "Join & Connect",
    description:
      "RSVP to events that interest you and connect with like-minded people who share your passions.",
    icon: <UserPlus className="w-8 h-8 text-white" />,
    color: "bg-[#FFD93D]",
  },
  {
    id: 3,
    title: "Create Memories",
    description:
      "Show up, have fun, and make lasting memories. Share your experiences with the community.",
    icon: <Camera className="w-8 h-8 text-white" />,
    color: "bg-[#4ECDC4]",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is easy. Join our community in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Horizontal line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon Bubble */}
              <div
                className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center shadow-lg mb-8 relative z-10`}
              >
                {step.icon}

                {/* step number badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 font-bold text-gray-400">
                  {step.id}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
