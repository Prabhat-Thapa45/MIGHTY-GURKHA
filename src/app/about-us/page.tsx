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
              o.unobserve(entry.target);
              break;
            case visionRef.current:
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
    <main className="flex flex-col bg-slate-100">
      <Breadcrumbs />
      <section className="max-w-[1100px] mx-auto rounded-lg p-8 mt-10 bg-white">
        <h1 className="mb-6 text-[30px] md:text-[40px] font-bold text-center text-green-700 leading-[35px]">
  About Mighty Gurkha Training Centre
</h1>

<p className="text-[15px] md:text-[18px] text-gray-700 mb-6 indent-10 text-justify">
  Mighty Gurkha Training Centre in Pokhara focuses on preparing individuals
  for Gurkha service, specifically for the British Army and Singapore Police
  Force.
</p>

<p className="text-[15px] md:text-[18px] text-gray-700 mb-8 indent-10 text-justify">
  We offer physical and educational training, interview preparation, and
  emphasize quality education delivered efficiently. The center highlights a
  high success ratio and provides a supportive environment for aspiring
  recruits.
</p>

<h2 className="mb-4 text-2xl font-semibold text-green-700">Key Aspects</h2>
<div className="grid gap-8 md:grid-cols-2">
  <div className="p-6 bg-slate-100 rounded-lg shadow">
    <h3 className="mb-2 text-xl font-semibold text-green-700">
      Focus on Gurkha Recruitment
    </h3>
    <p className="text-gray-700 text-[15px] md:text-[18px] text-justify">
      The primary goal is to prepare candidates for Gurkha selection processes
      for various forces.
    </p>
  </div>

  <div className="p-6 bg-slate-100 rounded-lg shadow">
    <h3 className="mb-2 text-xl font-semibold text-green-700">
      Physical & Educational Training
    </h3>
    <p className="text-gray-700 text-[15px] md:text-[18px] text-justify">
      The center provides both physical conditioning and academic instruction
      to enhance candidates suitability for Gurkha service.
    </p>
  </div>

  <div className="p-6 bg-slate-100 rounded-lg shadow">
    <h3 className="mb-2 text-xl font-semibold text-green-700">
      Quality Education
    </h3>
    <p className="text-gray-700 text-[15px] md:text-[18px] text-justify">
      Emphasizing effective training in a condensed format for shortcut success,
      as featured on our Facebook page.
    </p>
  </div>

  <div className="p-6 bg-slate-100 rounded-lg shadow">
    <h3 className="mb-2 text-xl font-semibold text-green-700">
      Supportive Environment
    </h3>
    <p className="text-gray-700 text-[15px] md:text-[18px] text-justify">
      A positive and motivating atmosphere that fosters discipline, resilience,
      and camaraderie.
    </p>
  </div>

  <div className="p-6 bg-slate-100 rounded-lg shadow">
    <h3 className="mb-2 text-xl font-semibold text-green-700">
      Success Stories
    </h3>
    <p className="text-gray-700 text-[15px] md:text-[18px] text-justify">
      Highlighting achievements like Kebindra Chhantyal’s first-attempt selection
      into the Gurkha Contingent Singapore Police Force (GCSPF).
    </p>
  </div>

  <div className="p-6 bg-slate-100 rounded-lg shadow">
    <h3 className="mb-2 text-xl font-semibold text-green-700">
      Location & Online Presence
    </h3>
    <p className="text-gray-700 text-[15px] md:text-[18px] text-justify">
      Situated in Bagar, Pokhara, with an active Facebook & Instagram presence
      sharing updates, success stories, and motivation.
    </p>
  </div>
</div>

<p className="text-[15px] md:text-[18px] text-gray-700 mt-8 indent-10 text-justify">
  Overall, we are a dedicated training center 
  focused on providing absolute best training and support for individuals aspiring
  to join the Gurkhas.
</p>


        {/* Message from the Founder */}
        <div tabIndex={0} className="flex items-center justify-center mt-12 ">
          <div
            ref={founderRef}
            className={`
              relative grid grid-cols-2 items-center place-items-center
              rounded-xl
              transition-all duration-700 ${styles.founderMessage}
              ${
                founderVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <div
              className={`relative flex flex-row gap-4  ${
                founderVisible ? styles.animatefadeinleft : "opacity-0"
              } `}
            >
              <div className="h-[400px] md:h-[500px] w-[10px] bg-green-600 hidden sm:block"></div>
              <div className="overflow-hidden h-[430px] md:h-[500px] w-full max-w-[450px] relative">
                <Image
                  src="/founder.jpeg"
                  alt="Founder"
                  width={450}
                  height={500}
                  className={`
                object-cover
                transition-all duration-700 scale-105 hover:scale-100 inset-0 relative
                ${founderVisible ? styles.animatefadeinleft : "opacity-0"}
              `}
                />
                
              </div>
            </div>

            <div
              className={`
    flex flex-col justify-between items-center md:items-start h-full
    transition-all duration-700 ease-in-out
    ${founderVisible ? "opacity-100 translate-y-2" : "opacity-0"}
  `}
            >
              <h3 className="pt-5 md:pt-0 text-[30px] md:text-[40px] font-extrabold text-green-700 leading-[35px] md:leading-[45px] self-start">
                Message from the Founder
              </h3>

              <p className="text-gray-700 pt-6 md:pt-0 text-[15px] md:text-[18px] mb-4 indent-10 text-justify">
                ”At Mighty Gurkha Training Center,” our mission is to nurture
                not just strong candidates, but strong individuals. Every
                journey here is a testament to dedication, discipline, and the
                relentless pursuit of excellence. We believe in forging
                character as much as physical prowess, ensuring our trainees are
                prepared for the rigors of service and the challenges of life
                beyond. I am proud to walk alongside each trainee as they strive
                for greatness, both in service and in life, knowing they will
                carry the Gurkha spirit of honor and resilience.
              </p>
              <span className="font-semibold text-green-700 text-[18px] self-end">
                - Krishna Tamang, Founder
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ”At Mighty Gurkha Training Center,” our mission is to nurture
//                 not just strong candidates, but strong individuals. Every
//                 journey here is a testament to dedication, discipline, and the
//                 relentless pursuit of excellence. We believe in forging
//                 character as much as physical prowess, ensuring our trainees are
//                 prepared for the rigors of service and the challenges of life
//                 beyond. I am proud to walk alongside each trainee as they strive
//                 for greatness, both in service and in life, knowing they will
//                 carry the Gurkha spirit of honor and resilience.