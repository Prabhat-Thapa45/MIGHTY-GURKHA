"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function useIsMediumUp() {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMd;
}

type Story = {
  id: number;
  name: string;
  rank: string;
  photo: string;
  quote: string;
};

export default function SuccessStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const isMd = useIsMediumUp();

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Number of skeleton cards to show
  const skeletonCount = 3;

  // A single skeleton “Card”
  const SkeletonCard = (
    <div className="bg-white rounded-lg shadow-md flex-shrink-0 w-72 md:w-auto animate-pulse">
      <div className="h-80 w-full rounded-t-xl bg-gray-300" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-slate-50 mt-[70px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="mt-[30px] md:mt-0 text-[36px] md:text-[40px] font-extrabold text-green-700 leading-[40px] md:leading-[55px]">
          Success Stories
        </h2>
        <p className="text-gray-600 mb-12 text-[15px] md:text-[18px] leading-[24px]">
          Hear from some of our recent graduates who’re now serving with pride.
        </p>

        <div className="flex gap-10 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
          {loading
            ? // render skeletons
              Array.from({ length: skeletonCount }).map((_, i) => (
                <div key={`skeleton-${i}`}>{SkeletonCard}</div>
              ))
            : // render real cards
              stories.map((s, i) => {
                const Card = (
                  <div className="bg-white rounded-lg shadow-md flex-shrink-0 w-72 md:w-auto">
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
                      <span className="text-[15px] text-gray-500">
                        {s.rank}
                      </span>
                      <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
                        “{s.quote}”
                      </p>
                    </div>
                  </div>
                );

                return isMd ? (
                  <motion.div
                    key={`story-${s.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    {Card}
                  </motion.div>
                ) : (
                  <div key={`story-${s.id}`}>{Card}</div>
                );
              })}
        </div>
      </div>
    </section>
  );
}
