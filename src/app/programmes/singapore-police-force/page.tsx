import Breadcrumbs from "@/app/utils/bg_with_urls";
import Image from "next/image";

export default function SingaporePoliceForce() {
  return (
    <div className="flex flex-col bg-white text-center">
      <Breadcrumbs />

      {/* Main content container */}
      <div className="flex flex-col md:flex-row items-start gap-x-[20px] py-[20px] pt-[30px] max-w-[1200px] mx-auto md:px-[20px]">

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col text-center px-[20px] md:px-0">
          <h2 className="text-[33px] md:text-[45px] font-extrabold text-green-700 leading-[40px] md:leading-[55px] text-left">
            Singapore Police Force
          </h2>

          <h2 className="text-[16px] text-gray-600 md:text-[18px] font-[600] leading-[28px] text-left mt-[8px]">
            Serve with integrity and commitment
          </h2>

          <p className="mt-[16px] text-[15px] sm:text-[18px] text-gray-700 leading-[26px] text-justify">
            The Singapore Police Force plays a crucial role in maintaining law, order, and safety in one of the world’s most advanced urban societies. Joining this respected force offers a meaningful career, steady growth, and the chance to make a real difference in the community. We’ll help guide you through the essential steps to start your journey toward becoming a proud officer.
          </p>
        </div>

        {/* Right: Responsive Image */}
        <div className="w-full md:w-1/2 mt-[30px] md:mt-0 px-[20px] md:px-0">
          <Image
            src="/singapore.jpg" // Replace this with your actual image path
            alt="Singapore Police Force"
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
            Minimum Requirements for Singapore Police Force
          </h3>

          <div className="space-y-[30px] text-[16px] md:text-[18px] text-gray-700 text-left">
            <p><strong>Age:</strong> 17-21 years</p>
            <p><strong>Education:</strong> + 2 level</p>
            <p><strong>Documents:</strong> Valid Passport and Citizenship/Residency Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}
