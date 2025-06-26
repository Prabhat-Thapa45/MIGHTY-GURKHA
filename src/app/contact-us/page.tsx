import { FaRegClock } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import Breadcrumbs from "../utils/bg_with_urls";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 ">
        <Breadcrumbs />
      {/* Contact Info & Map Container */}
      <div
        className={`flex flex-col md:flex-row justify-center lg:w-[860px] mt-10 sm:mt-16 lg:mt-20 gap-[40px] mb-4`}
      >
        {/* Contact Details */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-gray-100 p-2px md:p-6 flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <IoLocationOutline className="text-white text-6xl bg-green-600 rounded-full p-3 w-[60px] h-[60px]" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700`}
                >
                  OFFICE ADDRESS
                </h2>
                <p
                  className={`${roboto.className} text-[16px] font-medium text-gray-700`}
                >
                  Pokhara, Bagar-1, Kaski, Nepal
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gray-100 p-2px md:p-6 flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <MdOutlineLocalPhone className="text-white text-6xl bg-green-600 rounded-full p-3 w-[60px] h-[60px]" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700`}
                >
                  PHONE NUMBER
                </h2>
                <p
                  className={`${roboto.className} text-[16px] font-medium text-gray-700`}
                >
                  +977 9815143272 <br/>
                  +977 9745450709
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-100 p-2px md:p-6 flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <div className="rounded-full p-3 w-[60px] h-[60px] bg-green-600 text-center flex justify-center items-center">
                <GoMail className="text-white text-7xl" />
              </div>

              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700`}
                >
                  EMAIL ADDRESS
                </h2>
                <p
                  className={`${roboto.className} text-[16px] font-medium text-gray-700`}
                >
                  mightygurkha@gmail.com
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-100 p-2px md:p-6 flex items-center gap-6 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
              <FaRegClock className="text-white text-6xl bg-green-600 rounded-full p-3 w-[60px] h-[60px]" />
              <div>
                <h2
                  className={`${poppins.className} text-xl font-extrabold text-gray-700 `}
                >
                  OFFICE HOURS
                </h2>
                <p
                  className={`${roboto.className} text-[16px] font-medium text-gray-700`}
                >
                  Sunday-Friday, 10AM - 4:30PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 transition-transform duration-500 hover:translate-z-16 hover:scale-105 hover:shadow-xl">
          <iframe
            className={` w-full h-full shadow-lg`}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4265.41811002342!2d83.98483567619608!3d28.24220257588009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595e3bd2344e7%3A0x2bd350ab43d5680e!2sMighty%20Gurkha%20Training%20Centre!5e1!3m2!1sen!2snp!4v1750091140633!5m2!1sen!2snp"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
