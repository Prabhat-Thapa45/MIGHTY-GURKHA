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
      <div className="mt-[70px] max-w-[1200px] bg-gray-100 mx-auto">
        <div className={`flex flex-row ${styles.aboutus}`}>
          {/* Left: Image */}
          <div
            ref={imgRef}
            className="flex gap-4 justify-center relative h-[500px] md:h-[600px] sm:h-[510px] w-full max-w-[550px] mt-4 group mx-auto opacity-0"
          >
            <div className="md:h-full w-[10px] bg-green-600 hidden sm:block"></div>
            <div className="overflow-hidden md:h-full w-full sm:max-w-[490px] relative">
              <Image
                src="/about.jpg"
                alt="About Us"
                width={480}
                height={550}
                className="object-cover transition-transform duration-500 scale-105 group-hover:scale-100 inset-0 absolute"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-10 transition-[transform,opacity] duration-500 group-hover:translate-y-[100%] group-hover:opacity-0"></div>
          </div>

          {/* Right: Text */}
          <div
            ref={txtRef}
            className={`${styles.about_text} flex flex-col justify-between px-[15px] max-w-3xl opacity-0`}
          >
            <h2 className="text-[3rem] md:text-[4.2em] font-extrabold text-green-700 pb-[50px] leading-[3.5rem] md:leading-[5rem]">
              Mighty Gurkha Training Center
            </h2>
            <p className="mt-6 text-[16px] md:text-[18px] text-gray-700 leading-relaxed">
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
              <button className="mt-6 px-6 py-8 w-[200px] font-bold text-xl text-white bg-green-700 rounded-xl hover:bg-green-800 transition-all duration-700">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <SuccessStories />
      {/* CTA Section */}
      <div className="py-10 text-center text-white bg-green-700">
        <h2 className="text-3xl font-bold">Start Your Journey Today</h2>
        <button className="px-6 py-2 mt-6 text-lg text-green-700 bg-white rounded-lg hover:bg-gray-200">
          Apply Now
        </button>
      </div>
    </div>
  );
}
