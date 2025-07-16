"use client";
import Image from "next/image";
import HeroSection from "./utils/herosection";
import SuccessStories from "./utils/success-stories";
import Link from "next/link";
import styles from "./about-us/about.module.css";
import { useRef, useEffect } from "react";

export default function Home() {
  const imgRef = useRef<HTMLDivElement>(null);
  const txtRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const opts = { threshold: 0.2 };
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.target === imgRef.current) {
          entry.target.classList.add(styles.animatefadeinleft);
        }
        if (entry.target === txtRef.current) {
          entry.target.classList.add(styles.animatefadeinright);
        }
        observer.unobserve(entry.target);
      });
    }, opts);

    if (imgRef.current) obs.observe(imgRef.current);
    if (txtRef.current) obs.observe(txtRef.current);

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <div className="w-screen bg-slate-100">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div className="my-[70px] max-w-[1200px] bg-gray-100 mx-auto px-5">
        <div className={`flex flex-row ${styles.aboutus}`}>
          {/* Left: Image */}
          <div
            ref={imgRef}
            className="flex gap-4 justify-center relative h-[500px] md:h-[550px] sm:h-[510px] w-full max-w-[550px] mt-[16px] group mx-auto opacity-0"
          >
            <div className="md:h-full w-[10px] bg-green-600 hidden sm:block"></div>
            <div className="overflow-hidden md:h-full w-full sm:max-w-[490px] relative">
              <div className="h-full w-full overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="About Us"
                  width={480}
                  height={550}
                  className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100 inset-0 absolute"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-white opacity-10 transition-[transform,opacity] duration-500 group-hover:translate-y-[100%] group-hover:opacity-0"></div>
          </div>

          {/* Right: Text */}
          <div
            ref={txtRef}
            className={`${styles.about_text} flex flex-col md:gap-y-[40px] max-w-[550] opacity-0`}
          >
            <h2 className="md:mt-[0] mt-[30px] text-[36px] md:text-[40px] font-extrabold text-green-700 pd-[30px] leading-[40px] md:leading-[55px]">
              Mighty Gurkha Training Center
            </h2>
            <p className="mt-[30px] md:mt-0 text-[15px] md:text-[18px] text-gray-700 leading-[24px] text-justify">
              Mighty Gurkha Training Center (MGTC), proudly established in
              August 2022, stands as a beacon of excellence in British Army and
              Singapore Police Force preparation. Situated at Bagar-1, Pokhara,
              conveniently located in front of Machhapuchhre Bank. We offer a
              holistic and intensive training regimen. We are singularly
              dedicated to preparing young men for successful recruitment into
              the esteemed British Army and the highly selective Singapore
              Police Force. We understand the demanding selection processes of
              these elite forces. Therefore, our commitment extends beyond
              physical prowess, encompassing a rigorous curriculum focused on
              developing critical
            </p>
            <Link href="/about-us">
              <button className="mt-[30px] rounded py-3 px-[18px] md:py-[18px] lg:w-[170px] font-[900] text-[15px] text-white bg-green-700 lg:rounded-[8px] hover:bg-green-800 transition-all duration-700">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <SuccessStories />
      {/* CTA Section */}
      <div className="py-[30px] text-center text-white bg-green-700">
        <h2 className="text-[30px] md:text-[40px] font-extrabold leading-[40px] md:leading-[55px] pb-[15px]">
          Start Your Journey Today
        </h2>
        {/* Using Next.js Link component */}
        <Link href="/contact-us">
          <span className="inline-block px-6 md:py-2 py-[8px] md:mt-6 mt-4 text-[16px] md:text-[18px] font-bold text-green-700 bg-white rounded-sm hover:bg-gray-200">
            Apply Now
          </span>
        </Link>
      </div>
    </div>
  );
}
