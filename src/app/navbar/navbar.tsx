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
    const handleResize = () => setIsMobile(window.innerWidth <= 1100);
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
    href?: string;
    subLinks?: SubLink[];
  }

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "Our Programmes",
      subLinks: [
        { name: "British Gurkha Army", href: "/programmes/british-gurkha-army" },
        { name: "Singapore Police Force", href: "/programmes/singapore-police" },
      ],
    },
    {
      name: "Services",
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
        className={`h-[40px] bg-green-600 text-white flex justify-center items-center gap-5 text-xl`}
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
      {/* The height of this part needs to be considered for total navbar height */}
      <div className=""> {/* This div needs an explicit height if h-30 isn't reliable */}
        <div className="flex items-center justify-between h-30"> {/* h-30 = 120px */}
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
            <div className="flex justify-center flex-grow space-x-10 h-30 items-center">
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
                    {link.href ? (
                      <Link href={link.href} className="w-full text-[18px] font-[700] items-center justify-between ">
                         <div className="relative">
                          <span className={`${pathname === link.href ? "text-green-600" : "hover:text-green-600"}`}>
                            {link.name}
                          </span>
                          <span
                            className={`absolute left-0 top-full mt-10 h-0.5 w-full bg-green-600 transform ${pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="w-full h-[90px] py-1 text-[18px] font-[700] flex items-center justify-between cursor-pointer">
                        <div className="relative">
                          <span className={`${link.subLinks?.some(sub => pathname.startsWith(sub.href)) ? "text-green-600" : "hover:text-green-600"}`}>
                            {link.name}
                          </span>
                          <span
                            className={`absolute left-0 top-full mt-10 h-0.5 w-full bg-green-600 transform ${link.subLinks?.some(sub => pathname.startsWith(sub.href)) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-500 origin-left`}
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
              className="z-20 p-2 mr-4 rounded-md focus:outline-none"
            >
              <div className="space-y-1.5">
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
                 <div className="py-3">
                  <button onClick={() => setIsOpen(false)} className="absolute flex items-center justify-center w-10 h-10 top-11 right-4">
                     <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 1.3, ease: "easeInOut" }} className="relative flex items-center justify-center w-6 h-6 p-4 rounded-lg hover:bg-gray-200">
                      <span className="absolute w-6 h-[2px] bg-gray-800 rotate-45"></span>
                      <span className="absolute w-6 h-[2px] bg-gray-800 -rotate-45"></span>
                    </motion.div>
                  </button>
                  <div className="flex items-center justify-start pb-4 pl-5">
                    <Image src="/mgtc.png" alt="Mighty Gurkha Logo" width={50} height={50} priority/>
                    <span className="ml-3 text-2xl font-bold text-black">Mighty<span className="text-green-600">Gurkha</span></span>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>

                {/* Mobile Links */}
                {links.map((link, index) => (
                  <div key={link.name} className="w-full">
                    {link.href ? (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-full block text-left pl-[25px] py-3 text-[16px] font-[700]"
                      >
                         <span className={`${pathname === link.href ? "text-green-600" : "hover:text-green-600"}`}>
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full block text-left pl-[25px] py-3 text-[16px] font-[700] flex justify-between items-center"
                      >
                        <span className={`${link.subLinks?.some(sub => pathname.startsWith(sub.href))? "text-green-600": "hover:text-green-600"}`}>
                          {link.name}
                        </span>
                        {link.subLinks && (
                          <span className="pr-5 text-gray-600 transition-transform duration-300">
                             {openDropdown === link.name ? "▲" : "▼"}
                          </span>
                        )}
                      </button>
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
                                className="block py-2 text-base hover:text-green-600"
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
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
                    <FaPhoneAlt className="text-xl text-white" />
                  </div>
                  <div className="ml-[16px] text-[16px] flex flex-col tracking-wide">
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
                    <div className="w-14 h-14 border-[1px] text-blue-600 border-gray-600 flex items-center justify-center rounded-lg">
                      <FaFacebookF className="text-3xl" />
                    </div>
                  </Link>

                  <Link href="https://instagram.com" target="_blank">
                    <div className="w-14 h-14 border-[1px] text-red-700 border-gray-600 flex items-center justify-center rounded-lg">
                      <FaInstagram className="text-3xl" />
                    </div>
                  </Link>

                  <Link href="https://tiktok.com" target="_blank">
                    <div className="w-14 h-14 border-[1px] text-black border-gray-600  flex items-center justify-center rounded-lg">
                      <FaTiktok className="text-3xl" />
                    </div>
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <div className="w-14 h-14 border-[1px] text-red-600 border-gray-600 flex items-center justify-center rounded-lg">
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