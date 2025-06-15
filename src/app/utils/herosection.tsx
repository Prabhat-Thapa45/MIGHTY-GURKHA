"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion"; // Import motion
import { Link } from "lucide-react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-dm-sans",
});

const images = ["/group.jpg", "/training.jpg", "/hostel.jpg"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  // textVisible state is no longer needed as Framer Motion will handle text animation
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Define the variants for the text elements
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    // Initial display for the first image and text
    const initialLoadTimeout = setTimeout(() => {
      setCurrentIndex(0);
      // textVisible is no longer used here, Framer Motion takes over
    }, 0);

    // Function to start the automatic slideshow timer
    const startAutoSlide = () => {
      return setInterval(() => {
        // We'll re-trigger Framer Motion animation by changing `key` on the text container
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 8000); // Image changes every 8 seconds
    };

    const intervalId = startAutoSlide();
    setTimer(intervalId);

    // Cleanup function: Clear any pending timeouts and intervals on component unmount
    return () => {
      clearTimeout(initialLoadTimeout);
      clearInterval(intervalId);
      if (timer) clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const handleImageChange = (index: number) => {
    if (index === currentIndex) return; // Prevent unnecessary re-renders

    setCurrentIndex(index); // Change image, which will re-trigger text animation via `key`

    // Clear previous auto-slide timer and start a new one to reset the cycle
    if (timer) clearInterval(timer);
    const newInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    setTimer(newInterval);
  };

  return (
    <div
      className="relative w-screen"
      style={{ height: `calc(100vh - 130px)` }}
    >
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
              index === currentIndex
                ? "scale-109 visible"
                : "scale-100 invisible"
            } brightness-90`}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-[8%] flex flex-col gap-5 invisible md:visible -translate-y-1/2">
        {" "}
        {/* Added -translate-y-1/2 for perfect vertical centering */}
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`w-7 h-7 rounded-full border-2 transition-all duration-700 ${
              index === currentIndex
                ? "bg-white border-white "
                : "border-white bg-transparent "
            }`}
          />
        ))}
      </div>

      {/* Hero Text Section - Now powered by Framer Motion */}
      <motion.div
        key={currentIndex} // Remount on image change
        initial={{ opacity: 1, y: 0 }} // Start fully visible and in place
        animate={{ opacity: 0, y: 50 }} // Move down and fade out at the same time
        transition={{
          duration: 0.3,
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] text-white shadow-lg text-left"
      >
        {/* Heading */}
        <motion.span
          transition={{ ease: "easeOut" }}
          className={`block ${dmSans.className} lg:text-[60px] text-[30px] md:text-[1.75rem] font-[900] tracking-[-.02rem] leading-[1.2]`}
        >
          MIGHTY GURKHA TRAINING CENTER
        </motion.span>

        {/* Subheading */}
        <motion.p
          transition={{ ease: "easeOut" }}
          className="mt-4 text-[1.3rem] font-bold shadow"
        >
          Prepare for success with rigorous training and top-tier facilities.
        </motion.p>

        {/* Button */}

        <motion.button
          transition={{ ease: "easeOut" }}
          className="block px-10 py-3 lg:py-6 mt-6 text-xl text-white bg-green-600 rounded-lg hover:bg-green-700 text-center"
        >
          <Link href="/contact" className="no-underline">
            Contact Us
          </Link>
        </motion.button>
      </motion.div>

      {/* now text will appear */}

      <motion.div
        key={currentIndex} // Remounts on image change
        initial="hidden" // Parent initial state
        animate="visible" // Parent animate state
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.6, // Stagger the children
              delayChildren: 1.3, // Delay before children start animating
            },
          },
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] text-white shadow-lg text-left"
      >
        {/* Heading */}
        <motion.span
          variants={textVariants}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`block ${dmSans.className} lg:text-[60px] text-[30px] md:text-[1.75rem] font-[900] tracking-[-.02rem] leading-[1.2]`}
        >
          MIGHTY GURKHA TRAINING CENTER
        </motion.span>

        {/* Combined Subheading and Button as one child */}
        <motion.div
          variants={textVariants} // Same variants for the grouped block
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-4"
        >
          {/* Subheading */}
          <motion.p className="text-[1.3rem] font-bold shadow">
            Prepare for success with rigorous training and top-tier facilities.
          </motion.p>

          {/* Button */}
          <motion.button className="px-10 py-6 mt-6 text-xl text-white bg-green-600 rounded-lg hover:bg-green-700">
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
