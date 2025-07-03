import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/app/utils/bg_with_urls";
import WhatsappButton from "../../utils/whatsapp";

// Assuming Breadcrumbs is a component that doesn't need to be defined here
// import Breadcrumbs from "@/app/utils/bg_with_urls";
// Removed import Image from "next/image"; as it's not supported in this environment

export default function BritishGurkhaArmy() {
  return (
    <div className="flex flex-col bg-white text-center">
      {/* Assuming Breadcrumbs component exists and is imported correctly */}
      <Breadcrumbs />

      {/* Main content container: flex-col on small screens, flex-row on medium and larger */}
      <div className="flex flex-col md:flex-row items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col text-center px-[20px] md:px-0">
          {" "}
          {/* Added padding for mobile */}
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[55px] text-left">
            British Gurkha Army
          </h2>
          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mt-[8px]">
            Join the elite British Gurkha Army
          </h2>
          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            The British Gurkha Army is one of the most prestigious and respected
            military forces in the world. Once you join it will be the most
            valuable gift not just for you but to your whole family. Joining
            this elite force requires dedication, discipline, and a strong sense
            of duty. We are here to guide you through the selection process and
            help you achieve your dream of serving in the British Gurkha Army.
          </p>
        </div>

        {/* Right: Responsive Image */}
        <div className="w-full md:w-1/2 mt-[30px] md:mt-0 px-[20px] md:px-0">
          {" "}
          {/* Added padding for mobile, adjusted margin */}
          <Image
            // Placeholder image for demonstration. Replace with your actual image path.
            // Example: src="/path/to/your/gurkha-army-image.jpg"
            src="/british.jpg"
            alt="British Gurkha Army"
            // width and height attributes are not strictly necessary for <img> with Tailwind,
            // but can be useful for browser rendering optimization.
            // Keeping them here for consistency, though they won't directly control the displayed size
            // when w-full and h-[...] classes are applied.
            width={600}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
      {/* Minimum Requirements Section */}
      <div className="bg-gray-50 py-[30px] mt-[20px]">
        <div className="max-w-[1200px] mx-auto px-[20px]">
          <h3 className="text-[24px] md:text-[32px] font-bold text-green-700 mb-[20px] text-left">
            Minimum Requirements For British Gurkha Army
          </h3>

          <div className="space-y-[30px] text-[16px] md:text-[18px] text-gray-700 text-left">
            <p>
              <strong>Age:</strong> 17-21 years
            </p>
            <p>
              <strong>Education:</strong> +2 level
            </p>
            <p>
              <strong>Documents:</strong> Nepali Citizenship required
            </p>
          </div>
        </div>
      </div>
      <WhatsappButton phoneNumber="919663759007" />
    </div>
  );
}
