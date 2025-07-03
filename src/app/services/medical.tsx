// components/Hostel.jsx

import React from "react";
import Image from "next/image";
import styles from "./service.module.css";

export default function Medical() {
  return (
    <div className="bg-white">
      <div
        className={`flex ${styles.service} items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]`}
      >
        <div
          className={`w-full ${styles.descText} md:mr-[24px] flex flex-col text-center`}
        >
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[45px] text-left">
            Medical Checkup/Guidence
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
            Providing you with the best medical guidance
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            We have established a very good connection with the best medical
            team in various fields. We will help you with general examination,
            dental checkup, eye checkup and many more. The experts experienced
            dealing with the selection process will guide you through the
            medical checkup and ensure that you are guided with best practices
            to pass the medical examination.
            <br />
            <br />
            They will help you in getting the required treatment or procedure
            for your further selection process.
          </p>
          <div className="mt-[32px]">
            <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mb-[10px]">
              Facilities
            </h2>
            <div className="flex flex-row gap-[7px] md:gap-[16px]">
               <div className="flex items-center transition-transform duration-300">
                <Image
                  src="/health.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="mb-[8px] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px]">Health Assesments</p>
              </div>
              <div className="flex items-center transition-transform duration-300">
                <Image
                  src="/nutrition.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="mb-[8px] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px]">Nutrition Guidance</p>
              </div>
              <div className="flex items-center transition-transform duration-300">
                <Image
                  src="/injury.svg"
                  alt="Pull Up Bar Icon"
                  width={32}
                  height={32}
                  className="mb-[8px] w-[24px] h-[24px] md:w-[32px] md:h-[32px]"
                />
                <p className="font-[400] text-[14px] ml-[4px]">
                  Injury Prevention tips
                </p>
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
