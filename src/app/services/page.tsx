"use client";
import React from "react";
import Hostel from "./hostel";
import Breadcrumbs from "../utils/bg_with_urls";
import Education from "./education";
import TrainingGround from "./trainingGround";
import Interview from "./interview";
import DocumentVerification from "./document";
import Trainer from "./trainer";
import PersonalityDevelopment from "./personality";
import Medical from "./medical";

const services = [
  {
    href: "hostel",
    content: <Hostel />,
  },
  {
    href: "education",
    content: <Education />,
  },
  {
    href: "training-ground",
    content: <TrainingGround />,
  },
  {
    href: "interview",
    content: <Interview />,
  },
  {
    href: "document-verification",
    content: <DocumentVerification />,
  },
  {
    href: "trainer",
    content: <Trainer />,
  },
  {
    href: "personality-development",
    content: <PersonalityDevelopment />,
  },
  {
    href: "medical",
    content: <Medical />,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Service Sections */}
      <div className="flex flex-col bg-slate-100 text-center">
        <Breadcrumbs />
        {services.map((service) => (
          <section
            id={service.href}
            key={service.href}
            className="scroll-mt-[120px] text-gray-700 "
          >
            {service.content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
