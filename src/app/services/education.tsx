// components/Hostel.jsx (or wherever your Hostel component is located)

import React from "react";
import { Bed, Utensils, Wifi } from "lucide-react"; // Using lucide-react for icons
import Image from "next/image";

export default function Education() {
  return (
    <div className="relative w-full bg-white p-10">
      {" "}
      {/* Removed h-[450px] here */}
      <Image
        src="/education.jpg"
        alt="Hostel Facilities"
        width={600}
        height={400}
        className="object-cover w-full h-auto rounded-lg shadow-lg"
      />
      <div className="mt-6">
        {" "}
        {/* Added some top margin for spacing */}
        <p className="mt-2 text-lg text-gray-700">
          Your Home Away From Home! Here we try to offer you with every needs
          and amenities required for you to achieve the goals. We have a
          wonderful staffs working for your best intrest. From good food to
          maitain your hygiene and also to train we provide you with all the
          tools you need.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-3">
        <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-green-100 rounded-lg shadow-md hover:scale-105">
          <Bed className="mb-2 text-5xl text-green-600" />
          <p className="font-semibold">Comfortable Accommodation</p>
        </div>
        <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-green-100 rounded-lg shadow-md hover:scale-105">
          <Utensils className="mb-2 text-5xl text-green-600" />
          <p className="font-semibold">Nutritious Meals</p>
        </div>
        <div className="flex flex-col items-center p-4 transition-transform duration-300 bg-green-100 rounded-lg shadow-md hover:scale-105">
          <Wifi className="mb-2 text-5xl text-green-600" />
          <p className="font-semibold">Free Wi-Fi Access</p>
        </div>
      </div>
    </div>
  );
}


