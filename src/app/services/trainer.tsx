// components/Hostel.jsx

import React from "react";
import Image from "next/image";
import styles from "./service.module.css";
import { FaPersonRunning } from "react-icons/fa6";

export default function Trainer() {
  return (
    <div className="bg-white">
      <div
        className={`flex ${styles.service} items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]`}
      >
        <div
          className={`w-full ${styles.descText} md:mr-[24px] flex flex-col text-center`}
        >
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[45px] text-left">
            Trainer
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
            Team of experienced trainers to guide you
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            A good trainer not only teaches you the skills but also inspires you
            to be the best version of yourself. Therefore we make no compromise
            when it comes to hiring trainers. We have separate trainers for both British Gurkha and Singapore Police
            to make sure that you get the best training possible for your desired service.
            <br />
            <br />
            They will provide you with invaluable experience and knowledge to
            help you succeed. We believe that a good trainer is the key to your
            success, and we are committed to providing you with the best
            trainers in the industry.
          </p>
          <div className="mt-[32px]">
            <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mb-[10px]">
              Facilities
            </h2>
            <div className="flex flex-row gap-[7px] md:gap-[16px]">
              <div className="flex items-center transition-transform duration-300">
                <FaPersonRunning className="text-[32px] mb-[8px] text-green-600" />
                <p className="font-[400] text-[14px]">Dedicated Trainer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[450px] md:h-[500px]">
          <Image
            src="/trainer.jpg"
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
