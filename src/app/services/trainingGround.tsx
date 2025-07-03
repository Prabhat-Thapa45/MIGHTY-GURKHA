// components/Hostel.jsx

import React from "react";
import Image from "next/image";
import styles from "./service.module.css";
import { GiSoccerField } from "react-icons/gi";
import { BsConeStriped } from "react-icons/bs";
import { LiaPeopleCarrySolid } from "react-icons/lia";

export default function TrainingGround() {
  return (
    <div className="bg-white">
      <div
        className={`flex ${styles.serviceRev} items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]`}
      >
        {/* Left: Image */}
        <div className="w-full h-[450px] md:h-[500px]">
          <Image
            src="/training.jpeg"
            alt="Hostel Facilities"
            width={600}
            height={400}
            className="w-full h-[450px] md:h-[500px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Right: Content */}
        <div
          className={`w-full ${styles.descText} md:ml-[24px] flex flex-col text-center`}
        >
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[55px] text-left">
            TRAINING GROUND
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
            To best simulate your selection process
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            Our training ground has enough space and all the necessary equipment
            to simulate the real selection process. For running, pull ups, jerry
            can carry, bag lift and run and many more, we have all the necessary
            equipment to ensure that you are well prepared for your journey.
            <br />
            <br />
            You will be guided by our experienced trainers who have been through
            the selection process themselves, ensuring that you receive the best
            training possible. They will provide you with invaluable experience
            and knowledge to help you succeed.
          </p>
          <div className="mt-[32px]">
            <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mb-[10px]">
              Facilities
            </h2>
            <div className="flex flex-row gap-[7px] md:gap-[16px]">
              <div className="flex gap-[4px] items-center transition-transform duration-300">
                <GiSoccerField className="text-[32px] mb-[8px] text-green-600 mr-[2px]" />
                <p className="font-[400] text-[14px]">Spacious Ground</p>
              </div>
              <div className="flex gap-[4px] items-center transition-transform duration-300">
                <LiaPeopleCarrySolid className="text-[32px] mb-[8px] text-green-600 mr-[2px]" />
                <p className="font-[400] text-[14px]">Carry bags</p>
              </div>
              <div className="flex gap-[4px] items-center transition-transform duration-300">
                <BsConeStriped className="text-[32px]  mb-[8px] text-green-600 mr-[2px]" />
                <p className="font-[400] text-[14px]">Agility Cones</p>
              </div>
              <div className="flex gap-[4px] items-center transition-transform duration-300">
                <Image
                  src="/pullup.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px]">Pull up bars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
