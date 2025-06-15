"use client";
import React, { useRef, useEffect, useState } from "react";
import Breadcrumbs from "../utils/bg_with_urls";
import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  const founderRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  const [founderVisible, setFounderVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          switch (entry.target) {
            case founderRef.current:
              setFounderVisible(true);
              o.unobserve(entry.target);
              break;
            case missionRef.current:
              setMissionVisible(true);
              o.unobserve(entry.target);
              break;
            case visionRef.current:
              setVisionVisible(true);
              o.unobserve(entry.target);
              break;
          }
        });
      },
      {
        threshold: 0.25,
        // ← top rootMargin is NEGATIVE so mission/vision must be pulled
        //   DOWN into view before they intersect
        rootMargin: "-100px 0px -50px 0px",
      }
    );

    [founderRef, missionRef, visionRef].forEach((r) => {
      if (r.current) obs.observe(r.current);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      <Breadcrumbs />

      <section className="max-w-[1100px] mx-auto rounded-lg shadow-md p-8 mt-10 bg-white">
        <h1 className="mb-6 text-4xl font-bold text-center text-green-700">
          About Mighty Gurkha Training Center
        </h1>

        <p className="text-[16px] text-gray-700 mb-8 indent-10">
          Mighty Gurkha Training Center (MGTC), proudly established in August
          2022, stands as a beacon of excellence in British Army and Singapore
          Police Force preparation. Situated at Bagar-1, Pokhara, conveniently
          located in front of Machhapuchhre Bank. We offer a holistic and
          intensive training regimen. We are singularly dedicated to preparing
          young men for successful recruitment into the esteemed British Army
          and the highly selective Singapore Police Force.
        </p>

        <p className="text-[16px] text-gray-700 mb-8 indent-10">
          We understand the demanding selection processes of these elite forces.
          Therefore, our commitment extends beyond physical prowess,
          encompassing a rigorous curriculum focused on developing critical
          thinking, mental resilience, and impeccable character. From bespoke
          physical drills to comprehensive interview preparation and fostering a
          strong sense of camaraderie, MGTC provides the tools and guidance
          necessary for our trainees not just to succeed in recruitment, but to
          excel in their future careers, serving with unwavering honor and
          distinction.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Our Mission */}
          <div
            ref={missionRef}
            className={` ${
              missionVisible ? styles.animatefadeinright : ""
            } p-6 rounded-lg shadow bg-slate-100`}
          >
            <h2 className="mb-2 text-2xl font-semibold text-green-700">
              Our Mission
            </h2>
            <p className="text-gray-700 text-[16px]">
              To inspire, train, and equip aspiring candidates with the skills,
              discipline, and confidence required for selection, fostering a
              spirit of excellence and resilience. Beyond recruitment, we are
              committed to developing well-rounded individuals, empowering them
              with the character and tenacity to navigate life’s challenges and
              achieve success in all their future endeavors.
            </p>
          </div>

          {/* Our Vision */}
          <div
            ref={visionRef}
            className={`${
              visionVisible ? styles.animatefadeinleft : ""
            } p-6 rounded-lg shadow bg-slate-100`}
          >
            <h2 className="mb-2 text-2xl font-semibold text-green-700">
              Our Vision
            </h2>
            <p className="text-gray-700 text-[16px]">
              To be the leading training center recognized for producing
              outstanding recruits who embody integrity, leadership, and
              dedication, making a positive impact in their communities and
              beyond.
            </p>
          </div>
        </div>

        {/* Message from the Founder */}
        <div
          tabIndex={0}
          className="flex flex-col items-center justify-center mt-12 md:flex-row"
        >
          <div
            ref={founderRef}
            className={`
              relative flex flex-col items-center p-8
              bg-gradient-to-br from-green-100 via-white to-blue-100
              rounded-xl shadow-lg
              transition-all duration-700
              ${
                founderVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <Image
              src="/founder.jpeg"
              alt="Founder"
              width={270}
              height={270}
              className={`
                object-cover mb-6 border-4 border-white rounded-xl shadow-md
                transition-all duration-700
                ${founderVisible ? styles.animatefadeinleft : "opacity-0"}
              `}
              style={{ maxWidth: "100%", objectFit: "cover" }}
            />

            <div
              className={`
                flex flex-col items-center md:items-start
                transition-all duration-700 ease-in-out
                ${founderVisible ? "opacity-100 translate-x-4" : "opacity-0"}
              `}
            >
              <h3 className="mb-2 text-xl font-bold text-green-800">
                Message from the Founder
              </h3>
              <p className="text-gray-700 text-center md:text-left text-[16px] mb-4 indent-10">
                ”At Mighty Gurkha Training Center, our mission is to nurture not
                just strong candidates, but strong individuals. Every journey
                here is a testament to dedication, discipline, and the
                relentless pursuit of excellence. We believe in forging character
                as much as physical prowess, ensuring our trainees are prepared
                for the rigors of service and the challenges of life beyond. I
                am proud to walk alongside each trainee as they strive for
                greatness, both in service and in life, knowing they will carry
                the Gurkha spirit of honor and resilience.”
              </p>
              <span className="font-semibold text-green-700 text-[16px]">
                - Krishna Tamang, Founder
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
