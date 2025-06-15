"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";




type Story = {
  name: string;
  rank: string;
  photo: string;
  quote: string;
};

const stories: Story[] = [
  {
    name: "Sanjay Gurung",
    rank: "British Army",
    photo: "/Rajat.jpg",
    quote:
      "Thanks to MGTC’s tailored drills and scientific teaching approach, I passed the British Army selection on my first try.",
  },
  {
    name: "Dipesh Thapa",
    rank: "British Army",
    photo: "/Roshan.jpg",
    quote:
      "The interview coaching and fitness routines were next level. Proud to serve in British uniform now.",
  },
  {
    name: "Ram Bahadur",
    rank: "Singapore Police",
    photo: "/Ravi.jpg",
    quote:
      "MGTC nurtured me which made me better everyday. I am fortunate to be where I am now but it was their guidance that made it possible.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-slate-50 mt-[70px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className={` text-[3rem] md:text-[4.2em] font-extrabold text-green-700 tracking-[-.1.5rem]`}>
          Success Stories
        </h2>
        <p className="text-gray-600 mb-12 text-[15px] md:text-[18px]">
          Hear from some of our recent graduates who’re now serving with pride.
        </p>
        
        {/* Grid on md+, horizontal scroll on mobile */}
        <div className="flex gap-10 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md flex-shrink-0 w-72 md:w-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative h-80 w-full rounded-t-xl overflow-hidden">
                <Image
                  src={s.photo}
                  alt={s.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800">
                  {s.name}
                </h3>
                <span className="text-sm text-gray-500">{s.rank}</span>
                <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
                  “{s.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
