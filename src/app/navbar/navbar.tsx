// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string | null) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 1240);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  interface SubLink {
    name: string;
    href: string;
  }

  interface NavLink {
    name: string;
    href?: string; // Make href optional
    subLinks?: SubLink[];
  }

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "Our Programmes",
      href: "/programmes", // Added href for the main programmes page
      subLinks: [
        { name: "British Gurkha Army", href: "/programmes/british-gurkha-army" },
        { name: "Singapore Police Force", href: "/programmes/singapore-police-force" },
      ],
    },
    {
      name: "Services",
      href: "/services", // Added href for the main services page
      subLinks: [
        { name: "Hostel", href: "/services/#hostel" },
        { name: "Education", href: "/services/#education" },
        { name: "Training Ground", href: "/services/#training-ground" },
        { name: "Interview Preparation", href: "/services/#interview" },
        { name: "Document Verification", href: "/services/#document-verification" },
        { name: "Trainer", href: "/services/#trainer" },
        { name: "Personality Development", href: "/services/#personality-development" },
        { name: "Medical Checkup/Guidance", href: "/services/#medical" },
      ],
    },
    { name: "About Us", href: "/about-us" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Team", href: "/our-team" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="fixed z-30 w-full text-gray-800 bg-white">
      {/* Top Bar - This div now gets the safe area padding */}
      <div
        className={`h-[40px] bg-green-600 text-white flex justify-center items-center gap-5 text-[15px] lg:text-[18px]`}
       style={{
          paddingTop: 'env(safe-area-inset-top)',
        }}
      >
        <div className="flex flex-row items-center gap-2">
          <FaPhoneAlt />
          :-
          <Link href="tel:+977 9851054333">
            <span>+977 9851054333</span>
          </Link>
          ,
          <Link href="tel:+977 9851054333">
            <span>+977 9851054333</span>
          </Link>
        </div>
        <div className={`items-center gap-2 ${styles.hide_contact}`}>
          <FaEnvelope />
          :-
          <Link href="mailto:mightygurkha@gmail.com">
            <span>mightygurkha@gmail.com</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo + Title */}
          <div className="flex items-center">
            <Link className="flex flex-row items-center justify-center pl-10" href="/">
              <Image
                src="/mgtc.png"
                alt="mighty gurkha logo"
                width={60}
                height={60}
                priority
              />
              <span className={`text-3xl font-bold text-black ml-4`}>
                Mighty<span className="text-green-600">Gurkha</span>
              </span>
            </Link>
          </div>

          {/* === DESKTOP NAVIGATION === */}
          {isClient && !isMobile && (
            <div className="flex justify-center flex-grow space-x-10 h-[90px] items-center">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div
                    onMouseEnter={() => link.subLinks && setOpenDropdown(link.name)}
                    className="relative group"
                  >
                    {/* Always render a Link if href exists, otherwise render a div */}
                    {link.href ? (
                      <Link href={link.href} className="w-full text-[18px] font-[700] items-center justify-between ">
                         <div className="relative flex items-center"> {/* Added flex and items-center here */}
                          <span className={`${pathname === link.href || (link.subLinks && link.subLinks.some(sub => pathname.startsWith(sub.href))) ? "text-green-600" : "hover:text-green-600"}`}>
                            {link.name}
                          </span>
                          <span
                            className={`absolute left-0 top-full mt-[30px] h-0.5 w-full bg-green-600 transform ${pathname === link.href || (link.subLinks && link.subLinks.some(sub => pathname.startsWith(sub.href))) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
                          />
                           {link.subLinks && (
                            <motion.div
                              animate={{ rotate: openDropdown === link.name ? -180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-2"
                            >
                              <FaChevronDown />
                            </motion.div>
                          )}
                        </div>
                      </Link>
                    ) : (
                      // Fallback for links without a direct href (though all current links have one now)
                      <div className="w-full h-[90px] py-1 text-[18px] font-[700] flex items-center justify-between cursor-pointer">
                        <div className="relative">
                          <span className={`${link.subLinks?.some(sub => pathname.startsWith(sub.href)) ? "text-green-600" : "hover:text-green-600"}`}>
                            {link.name}
                          </span>
                          <span
                            className={`absolute left-0 top-full mt-[30px] z-10 h-0.5 w-full bg-green-600 transform ${link.subLinks?.some(sub => pathname.startsWith(sub.href)) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
                          />
                        </div>

                        {link.subLinks && (
                          <motion.div
                            animate={{ rotate: openDropdown === link.name ? -180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-2"
                          >
                            <FaChevronDown />
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>

                  <AnimatePresence>
                    {link.subLinks && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 w-auto bg-white shadow-lg"
                      >
                        {link.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-[18px] whitespace-nowrap hover:bg-green-600 hover:text-white"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* === MOBILE HAMBURGER ICON === */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-20 p-[5px] mr-[6px] rounded-md focus:outline-none"
            >
              <div className="space-y-[4px]">
                  <span className={`block w-[20px] h-[2px] bg-gray-800 transition-transform duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block w-[20px] h-[2px] bg-gray-800 transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                  <span className={`block w-[20px] h-[2px] bg-gray-800 transition-transform duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          )}
        </div>

        {/* === MOBILE NAVIGATION MENU === */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-10 bg-black"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-[300px] h-screen bg-white shadow-md flex flex-col py-5 z-20"
                style={{
                  // Push mobile menu content down by safe area
                  paddingTop: 'env(safe-area-inset-top)',
                }}
              >
                 <div className="py-[15px] flex flex-row items-center justify-between ">

                  <div className="flex items-center justify-start pl-5">
                    <Image src="/mgtc.png" alt="Mighty Gurkha Logo" width={48} height={48} priority/>
                    <span className="ml-[4px] text-[18px] font-bold text-black">Mighty<span className="text-green-600">Gurkha</span></span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className=" w-[20px] h-[20px] mr-[8px]">
                     <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 1.3, ease: "easeInOut" }} className="relative flex items-center justify-center rounded-lg hover:bg-gray-200">
                      <span className="absolute w-6 h-[2px] bg-gray-800 rotate-45"></span>
                      <span className="absolute w-6 h-[2px] bg-gray-800 -rotate-45"></span>
                    </motion.div>
                  </button>
                </div>

                <div className="w-full h-[1px] bg-gray-300"></div>

                {/* Mobile Links */}
                {links.map((link, index) => (
                  <div key={link.name} className="w-full">
                    {/* Conditional rendering for links based on whether they have sub-links */}
                    {link.subLinks ? (
                      <button
                        onClick={() => toggleDropdown(link.name)} // Only toggle dropdown
                        className="w-full block text-left pl-[25px] py-3 text-[15px] font-[700] flex justify-between items-center"
                      >
                        <span className={`${link.subLinks?.some(sub => pathname.startsWith(sub.href)) ? "text-green-600" : "hover:text-green-600"}`}>
                          {link.name}
                        </span>
                        <span className="pr-5 text-gray-600 transition-transform duration-300">
                           {openDropdown === link.name ? "▲" : "▼"}
                        </span>
                      </button>
                    ) : (
                      // For links without sub-links, continue to use Link for navigation
                      <Link
                        href={link.href!} // Use non-null assertion since we're in the 'no subLinks' case
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="w-full block text-left pl-[25px] py-3 text-[15px] font-[700] flex justify-between items-center"
                      >
                         <span className={`${pathname === link.href ? "text-green-600" : "hover:text-green-600"}`}>
                          {link.name}
                        </span>
                        {/* No chevron for links without sub-links */}
                      </Link>
                    )}

                    <AnimatePresence>
                      {link.subLinks && openDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-100"
                        >
                          <div className="py-2 pl-12 rounded-md">
                            {link.subLinks.map((subLink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subLink.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenDropdown(null);
                                }}
                                className="block py-2 text-[15px] hover:text-green-600"
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {index < links.length - 1 && (
                      <div className="w-full h-[1px] bg-gray-300"></div>
                    )}
                  </div>
                ))}

                 <div
                  className={`${isOpen} ? w-full h-[1px] bg-gray-300 : ""`}
                ></div>

                {/* Call Icon & Phone Numbers */}
                <div className="flex items-center ml-[10px] px-5 py-4 mt-5">
                  <div className="flex items-center justify-center w-[45px] h-[45px] bg-green-600 rounded-full">
                    <FaPhoneAlt className="text-xl text-white" />
                  </div>
                  <div className="ml-[16px] text-[15px] flex flex-col tracking-wide">
                    <Link
                      href="tel:+977 9851054333"
                      className="font-bold text-gray-800"
                    >
                      +977 9851 054 333
                    </Link>

                    <Link
                      href="tel:+977 9768730989"
                      className="font-bold text-gray-800 "
                    >
                      +977 9768 730 989
                    </Link>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center px-5 py-4 space-x-6">
                  <Link href="https://facebook.com" target="_blank">
                    <div className="w-[40px] h-[40px] border-[1px] text-blue-600 border-gray-600 flex items-center justify-center rounded-lg">
                      <FaFacebookF className="text-3xl" />
                    </div>
                  </Link>

                  <Link href="https://instagram.com" target="_blank">
                    <div className="w-[40px] h-[40px] border-[1px] text-red-700 border-gray-600 flex items-center justify-center rounded-lg">
                      <FaInstagram className="text-3xl" />
                    </div>
                  </Link>

                  <Link href="https://tiktok.com" target="_blank">
                    <div className="w-[40px] h-[40px] border-[1px] text-black border-gray-600  flex items-center justify-center rounded-lg">
                      <FaTiktok className="text-3xl" />
                    </div>
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <div className="w-[40px] h-[40px] border-[1px] text-red-600 border-gray-600 flex items-center justify-center rounded-lg">
                      <FaYoutube className="text-3xl" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}