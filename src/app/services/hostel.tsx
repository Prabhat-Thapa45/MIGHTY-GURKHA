// components/Hostel.jsx

import React from "react";
import { Bed, Utensils, Wifi } from "lucide-react";
import Image from "next/image";
import styles from "./hostel.module.css"

export default function Hostel() {
  return (
    <div className={`flex ${styles.hostel} justify-center items-center px-[20px] py-[20px] mt-[60px] max-w-[1200px] mx-auto`}>
      {/* Left: Image */}
      <div className="w-full h-[500px] md:h-[550px]">
        <Image
          src="/hostel.jpg"
          alt="Hostel Facilities"
          width={600}
          height={400}
          className="w-full h-[500px] md:h-[550px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* Right: Content */}
      <div className={`w-full ${styles.hostelText} md:ml-[24px] flex flex-col justify-between`}>
        <h2 className="text-[36px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[55px] text-left">
          HOSTEL
        </h2>

        <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
          Your Home Away From Home
        </h2>

        <p className="mt-[16px] text-[15px] sm:text-[16px] text-gray-700 leading-[26px] text-left">
          Cozy rooms, three wholesome meals, free Wi-Fi and clean common
          areas—plus dedicated spots and tools for study or downtime. Our
          friendly team in Mighty Gurkha Training Center is here to make sure
          you feel supported, energized and ready for whatever comes next.{" "}
          <br />
          <br />
          Whether you&apos;re training, studying, or simply recharging,
          everything is designed to help you feel at ease. From the moment you
          arrive, you&apos;ll find a calm and welcoming space that encourages
          focus, growth and connection with others on the same journey.
        </p>

        {/* Services grid */}
        <div className=" my-[32px]">
          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
          Facilities
        </h2>
          <div className="flex flex-row gap-[16px]">
            <div className="flex gap-[4px] items-center transition-transform duration-300 hover:scale-105">
              <Bed className="text-[32px] mb-[8px] text-green-600" />
              <p className="font-[400] text-[14px]">Cozy Rooms</p>
            </div>
            <div className="flex gap-[4px] items-center transition-transform duration-300 hover:scale-105">
              <Utensils className="text-[32px] mb-[8px] text-green-600" />
              <p className="font-[400] text-[14px]">Fresh Meals</p>
            </div>
            <div className="flex gap-[4px] items-center transition-transform duration-300 hover:scale-105">
              <Wifi className="text-[32px]  mb-[8px] text-green-600" />
              <p className="font-[400] text-[14px]">Free Wi-Fi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
