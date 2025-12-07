"use client";

import React, { cloneElement } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Palette,
  Utensils,
  Briefcase,
  Mountain,
  Music,
  Gamepad2,
  Heart,
} from "lucide-react";
import type { ReactElement } from "react";
import type { LucideProps } from "lucide-react";

type Category = {
  name: string;
  icon: ReactElement<LucideProps>;   // ✔ FIXED
  count: string;
  color: string;
};

const categories: Category[] = [
  { name: "Sports & Fitness", icon: <Dumbbell />, count: "120+ events", color: "bg-orange-50 text-orange-600" },
  { name: "Arts & Culture", icon: <Palette />, count: "85+ events", color: "bg-purple-50 text-purple-600" },
  { name: "Food & Drink", icon: <Utensils />, count: "200+ events", color: "bg-red-50 text-red-600" },
  { name: "Tech & Business", icon: <Briefcase />, count: "64+ events", color: "bg-blue-50 text-blue-600" },
  { name: "Outdoor Adventures", icon: <Mountain />, count: "150+ events", color: "bg-green-50 text-green-600" },
  { name: "Music & Nightlife", icon: <Music />, count: "90+ events", color: "bg-pink-50 text-pink-600" },
  { name: "Games & Hobbies", icon: <Gamepad2 />, count: "45+ events", color: "bg-indigo-50 text-indigo-600" },
  { name: "Health & Wellness", icon: <Heart />, count: "110+ events", color: "bg-teal-50 text-teal-600" },
];

export function PopularCategories() {
  return (
    <section className="py-20 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-gray-600">
              Find events that match your interests.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:block text-[#FF6B6B] font-semibold hover:text-[#FF5252] transition-colors"
          >
            View all categories →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {/* NOW VALID */}
                {cloneElement(category.icon, { size: 24 })}
              </div>

              <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
