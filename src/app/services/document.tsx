// components/Hostel.jsx

import React from "react";
import Image from "next/image";
import styles from "./service.module.css";
import { HiOutlineDocumentSearch } from "react-icons/hi";

export default function DocumentVerification() {
  return (
    <div className="bg-white">
      <div
        className={`flex ${styles.serviceRev} items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]`}
      ><div className="w-full h-[450px] md:h-[500px]">
          <Image
            src="/education.jpg"
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
            DOCUMENT VERIFICATION
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left">
            We ensure your documents are validated
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            Your documents are the most crucial parts of your selection process. It should be checked and verified letter to letter.
            We have a team of experiened members who will make sure that your documents are ceritified and verified.
            <br />
            <br />
            We will ensure that your documents are in order and ready for submission. This will help you
            avoid any last-minute issues and ensure a smooth journey.
          </p>
          <div className="mt-[32px]">
          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mb-[10px]">
          Facilities
        </h2>
          <div className="flex flex-row gap-[7px] md:gap-[16px]">
            <div className="flex items-center transition-transform duration-300">
              <HiOutlineDocumentSearch className="text-[32px] mb-[8px] text-green-600" />
              <p className="font-[400] text-[14px]">Document Verification & Suggestion</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
