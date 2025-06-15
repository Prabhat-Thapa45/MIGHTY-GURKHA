"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppButtonProps {
  buttonText?: string; 
  phoneNumber: string; 
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  buttonText = "Chat on WhatsApp",
  phoneNumber,
}) => {
  const [translateY, setTranslateY] = useState(-50); // Initially hidden
  const [opacity, setOpacity] = useState(0); // Initially invisible

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 90) {
        setTranslateY(30); // Moves up smoothly
        setOpacity(1); // Fully visible
      } else {
        setTranslateY(-50); // Moves down smoothly
        setOpacity(0); // Fades out gradually
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile =
    /android|iphone|ipod/i.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); 

  const whatsappUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${phoneNumber}` 
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: `${translateY}px`,
        right: "20px",
        transition: "bottom 0.6s ease-in-out, opacity 0.6s ease-in-out", // Smooth transition for both movement & visibility
        opacity,
        pointerEvents: opacity > 0 ? "auto" : "none",
      }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shadow-lg h-[50px] px-7 py-2 text-[15px] flex items-center rounded-lg text-white bg-green-600 hover:bg-green-700"
      >
        <FaWhatsapp className="mr-2 text-2xl" />
        {buttonText}
      </a>
    </div>
  );
};

export default WhatsAppButton;
