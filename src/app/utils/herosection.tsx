"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-dm-sans",
});

const images = ["/group.jpg", "/training.jpg", "/hostel.jpg"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const initialTimeout = setTimeout(() => setCurrentIndex(0), 0);

    const startAutoSlide = () =>
      setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 8000);

    const interval = startAutoSlide();
    timerRef.current = interval;

    return () => {
      clearTimeout(initialTimeout);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleImageChange = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
  };

  return (
    <div className="relative w-full" style={{ height: `100vh` }}>
      {/* Image Slideshow */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-transform duration-[9s] ${
              index === currentIndex ? "scale-109 visible" : "scale-100 invisible"
            } brightness-90`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-[8%] flex flex-col gap-5 invisible md:visible -translate-y-1/2">
        {images.map((_, index) => (
          <button
            key={`nav-${index}`}
            onClick={() => handleImageChange(index)}
            className={`w-7 h-7 rounded-full border-2 transition-all duration-700 ${
              index === currentIndex ? "bg-white border-white" : "border-white bg-transparent"
            }`}
          />
        ))}
      </div>

      {/* Hero Text Section */}
      {currentIndex >= 0 && (
        <>
          <motion.div
            key={`fade-${currentIndex}`}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] text-white shadow-lg text-left"
          >
            <motion.span
              transition={{ ease: "easeOut" }}
              className={`block ${dmSans.className} lg:text-[60px] text-[30px] md:text-[1.75rem] font-[900] tracking-[-.02rem] leading-[1.2]`}
            >
              MIGHTY GURKHA TRAINING CENTER
            </motion.span>
            <motion.p
              transition={{ ease: "easeOut" }}
              className="mt-4 text-[1.3rem] font-bold shadow text-green-300"
            >
              Prepare for success with rigorous training and top-tier facilities.
            </motion.p>
          </motion.div>

          <motion.div
            key={`animated-${currentIndex}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.6,
                  delayChildren: 1.3,
                },
              },
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] text-white shadow-lg text-left"
          >
            <motion.span
              variants={textVariants}
              transition={{ duration: 1, ease: "easeInOut" }}
              className={`flex flex-wrap ${dmSans.className} lg:text-[50px] text-[30px] md:text-[1.75rem] font-[900] tracking-[-.02rem] leading-[1.2] gap-2`}
            >
              <span>MIGHTY</span>
              <span>GURKHA</span>
              <span>TRAINING</span>
              <span>CENTER</span>
            </motion.span>

            <motion.div
              variants={textVariants}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-4"
            >
              <motion.p className="text-[1.7rem] font-bold shadow text-green-300">
                Prepare for success with our tailored system for your tough journey.
              </motion.p>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
}
