"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumbs from "../utils/bg_with_urls";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  "/about.jpg",
  "/about.jpg",
  "/about.jpg",
  "/about.jpg",
  "/about.jpg",
  "/about.jpg",
  // add more image paths here
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-slate-100 min-h-screen text-center py-8">
      <Breadcrumbs />

      <h1 className="text-3xl md:text-5xl mt-6 font-bold text-green-700">
        Our Gallery
      </h1>
      <p className="text-gray-600 mb-8">
        Beautiful moments from Mighty Gurkha Training Centre
      </p>

      {/* Masonry-style grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4">
        {photos.map((src, i) => (
          <motion.div
            key={src}
            onClick={() => setSelected(src)}
            className="mb-4 cursor-pointer break-inside rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="relative w-full h-64">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-[90vw] h-[80vh] md:w-[60vw] md:h-[80vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selected}
                alt="Enlarged gallery image"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
