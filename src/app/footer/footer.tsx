"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaChevronDown } from "react-icons/fa";


type SubLink = {
  name: string;
  href: string;
};
type NavLink = {
  name: string;
  href?: string;
  subLinks?: SubLink[];
};
const Footer = () => {
  const [expandedLinks, setExpandedLinks] = useState<{ [key: string]: boolean }>({});

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "Our Programmes",
      subLinks: [
        {
          name: "British Gurkha Army",
          href: "/programmes/british-gurkha-army",
        },
        {
          name: "Singapore Police Force",
          href: "/programmes/singapore-police",
        },
      ],
    },
    {
      name: "Services", href: "/services",
    },
    { name: "About Us", href: "/about-us" },
    { name: "Gallery", href: "/gallery" },
    { name: "Our Team", href: "/ourteam" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleExpand = (linkName: string) => {
    setExpandedLinks((prevState) => ({
      ...prevState,
      [linkName]: !prevState[linkName],
    }));
  };

  return (
    <footer className="py-8 mt-10 text-white bg-gray-900 md:h-[320px] h-auto">
      <div className="flex flex-col justify-between px-6 mx-auto md:flex-row">
        
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleExpand(link.name)}>
                  {link.href ? (
                    <Link href={link.href} className="hover:text-green-400">
                      {link.name}
                    </Link>
                  ) : (
                    <span className="hover:text-green-400">{link.name}</span>
                  )}
                  {link.subLinks && (
                    <FaChevronDown
                      className={`ml-2 transition-transform ${
                        expandedLinks[link.name] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </div>
                {link.subLinks && expandedLinks[link.name] && (
                  <ul className="mt-2 ml-4 text-lg">
                    {link.subLinks.map((subLink: SubLink, subIndex: number ) => (
                      <li key={subIndex}>
                        <Link href={subLink.href} className="hover:text-green-400">
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="mb-6 md:mb-0">
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-green-400" />
            <span>Pokhara, Nepal</span>
          </div>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 text-green-400" />
            <span>+977 985-1234567</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-green-400" />
            <Link href="mailto:info@example.com">
              <span>info@example.com</span>
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/" target="_blank">
              <FaFacebookF className="text-2xl text-blue-500 hover:scale-110" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-2xl text-pink-500 hover:scale-110" />
            </Link>
            <Link href="https://www.tiktok.com/" target="_blank">
              <FaTiktok className="text-2xl text-black hover:scale-110" />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <FaYoutube className="text-2xl text-red-500 hover:scale-110" />
            </Link>
          </div>
        </div>

      </div>
      <div className="items-end mt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Mighty Gurkha Training Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
