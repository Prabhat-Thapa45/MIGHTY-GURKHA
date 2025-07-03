// components/Hostel.jsx

import React from "react";
import Image from "next/image";
import styles from "./service.module.css";


export default function PersonalityDevelopment() {
  return (
    <div className="bg-white">
      <div
        className={`flex ${styles.serviceRev} items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]`}
      >
        <div className="w-full h-[450px] md:h-[500px]">
          <Image
            src="/persona.jpg"
            alt="Hostel Facilities"
            width={600}
            height={400}
            className="w-full h-[450px] md:h-[500px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          />
        </div>
        <div
          className={`w-full ${styles.descText} md:mr-[24px] flex flex-col text-center`}
        >
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[55px] text-left">
            PERSONALITY DEVELOPMENT
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
            To make you capable for every steps of your journey
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            We make sure to develop the leader in you. Confident and bold
            personality is the key to success in any field. Our personality
            development program is designed to help you build the confidence and
            skills you need to succeed in your selection process and beyond.
            <br />
            <br />
            We will ensure that your future is bright and you are well prepared
            for the challenges ahead.
          </p>
          <div className="mt-[32px]">
            <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mb-[10px]">
              Facilities
            </h2>
            <div className="flex flex-row gap-[7px] md:gap-[16px]">
              <div className="flex items-center transition-transform duration-300">
                <Image
                  src="/speaking.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="mb-[8px] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px]">Public Speaking</p>
              </div>
              <div className="flex gap-[4px] items-center transition-transform duration-300">
                <div className="flex gap-[4px] items-center transition-transform duration-300">
                <Image
                  src="/confidence.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="mb-[8px] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px]">Confidence Building</p>
              </div>
              </div>
              <div className="flex gap-[4px] items-center transition-transform duration-300">
                <div className="flex gap-[4px] items-center transition-transform duration-300">
                <Image
                  src="/leadership.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="mb-[8px] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px]">Leadership Training</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
