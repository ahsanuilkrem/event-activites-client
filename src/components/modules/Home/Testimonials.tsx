'use client' 

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "I moved to the city knowing no one. Through this community, I've found my best friends and hiking buddies. It's been a game changer.",
    author: 'Michael T.',
    role: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Hosting events has allowed me to share my passion for pottery with so many amazing people. The platform makes it incredibly easy to organize.',
    author: 'Jessica L.',
    role: 'Host & Artist',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "The variety of events is unmatched. One weekend I'm at a tech mixer, the next I'm learning to salsa dance. Love the energy here!",
    author: 'Robert K.',
    role: 'Event Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-[#FFFBF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from the people who make our community special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm relative"
            >
              <Quote className="absolute top-8 left-8 w-10 h-10 text-[#FF6B6B]/10" />
              <p className="text-gray-600 italic mb-8 relative z-10 pt-4 leading-relaxed">
                {item.quote}
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.author}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
