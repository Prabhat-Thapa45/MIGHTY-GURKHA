"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Detects if screen width is medium or larger
function useIsMediumUp() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = (e: MediaQueryListEvent) => setIsMd(e.matches);

    setIsMd(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMd;
}

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
      "MGTC nurtured me which made me better everyday. I am fortunate to be where I am now.",
  },
];

export default function SuccessStories() {
  const isMd = useIsMediumUp();

  return (
    <section className="py-16 bg-slate-50 mt-[70px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="md:mt-[0] mt-[30px] text-[36px] md:text-[40px] font-extrabold text-green-700 pd-[30px] leading-[40px] md:leading-[55px]">
          Success Stories
        </h2>
        <p className="text-gray-600 mb-12 text-[15px] md:text-[18px] leading-[24px]">
          Hear from some of our recent graduates who’re now serving with pride.
        </p>

        <div className="flex gap-10 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
          {stories.map((s, i) => {
            const Card = (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md flex-shrink-0 w-72 md:w-auto"
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
                  <h3 className="text-[20px] font-semibold text-green-800">
                    {s.name}
                  </h3>
                  <span className="text-[15px] text-gray-500">{s.rank}</span>
                  <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
                    “{s.quote}”
                  </p>
                </div>
              </div>
            );

            return isMd ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                {Card}
              </motion.div>
            ) : (
              Card
            );
          })}
        </div>
      </div>
    </section>
  );
}
