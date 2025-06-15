import React from "react";
import { Bed, Utensils, Wifi} from "lucide-react"; // Using lucide-react for icons
import Image from "next/image";

function Hostel() {
  return (
    <div className="relative w-full h-[450px]">
     <Image 
  src="/hostel.jpg" 
  alt="Hostel Facilities" 
  width={600} 
  height={400} 
    className="object-cover w-full h-auto rounded-lg shadow-lg"
/>
      <div className="absolute p-5 transform -translate-y-1/2 bg-white bg-opacity-75 rounded-lg shadow-lg top-1/2 left-10">
        <h1 className="text-4xl font-bold text-green-700">
          Mighty Gurkha Training Center Hostel
        </h1>
        <p className="mt-2 text-lg text-gray-700">Your Home Away From Home!</p>
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

export default Hostel;
