// components/Hostel.jsx

import React from "react";
import Image from "next/image";
import styles from "./service.module.css";
import { LuBook } from "react-icons/lu";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

export default function Education() {
  return (
    <div className="bg-white">
      <div
        className={`flex ${styles.service} items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]`}
      >
        <div
          className={`w-full ${styles.descText} md:mr-[24px] flex flex-col text-center`}
        >
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[55px] text-left">
            EDUCATION
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
            The most important part of your training
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            Here in Mighty Gurkha Training Center, we give extremely high
            priority to education. Our training program includes curated techniques
            to help you learn and retain information with tips and tricks proven to work.
            <br />
            <br />
            Our team of teachers are trained and well guided to ensure that even the person with 
            very minimum educational background can understand the concepts and
            excel in their training. 
          </p>
          <div className="mt-[32px]">
          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mb-[10px]">
          Facilities
        </h2>
          <div className="flex flex-row gap-[7px] md:gap-[16px]">
            <div className="flex items-center transition-transform duration-300">
              <LuBook className="text-[32px] mb-[8px] text-green-600 mr-[2px]" />
              <p className="font-[400] text-[14px]">Regular Classes</p>
            </div>
            <div className="flex items-center transition-transform duration-300">
              <LiaChalkboardTeacherSolid className="text-[32px] mb-[8px] text-green-600 mr-[2px]" />
              <p className="font-[400] text-[14px]">Skilled Teachers</p>
            </div>
          </div>
        </div>
        </div>
        <div className="w-full h-[450px] md:h-[500px]">
          <Image
            src="/education.jpg"
            alt="Hostel Facilities"
            width={600}
            height={400}
            className="w-full h-[450px] md:h-[500px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </div>
  );
}
