"use client";
import React from "react";
import Hostel from "./hostel";

const services = [
  {
    name: "Hostel",
    href: "hostel",
    description: "Comfortable accommodation for trainees.",
    content: (
      <Hostel />
    ),
  },
  {
    name: "Education",
    href: "education",
    description: "Guidance and coaching for academic success.",
    content: (
      <>
        <p>We offer structured educational guidance tailored to individual needs, focusing on exam preparation and concept building.</p>
        <ul className="mt-4 list-disc">
          <li>Comprehensive coaching</li>
          <li>Expert tutors with real-world experience</li>
          <li>Interactive study materials</li>
        </ul>
      </>
    ),
  },
  {
    name: "Training Ground",
    href: "training-ground",
    description: "A well-equipped ground for rigorous physical training.",
    content: (
      <>
        <p>Our training ground features state-of-the-art equipment, designed for professional-grade physical conditioning.</p>
        <ul className="mt-4 list-disc">
          <li>High-end fitness equipment</li>
          <li>Outdoor running tracks</li>
          <li>Personalized workout plans</li>
        </ul>
      </>
    ),
  },
  {
    name: "Interview Preparation",
    href: "interview",
    description: "Expert coaching for interviews and recruitment tests.",
    content: (
      <>
        <p>Our program ensures candidates excel in interviews, focusing on confidence-building and industry-specific questions.</p>
        <ul className="mt-4 list-disc">
          <li>Mock interviews with expert feedback</li>
          <li>Personality development sessions</li>
          <li>Resume-building tips</li>
        </ul>
      </>
    ),
  },
  {
    name: "Document Verification",
    href: "document-verification",
    description: "Assistance in verifying official documents for selection.",
    content: (
      <>
        <p>We assist with document verification, ensuring all necessary paperwork is properly formatted and authenticated.</p>
        <ul className="mt-4 list-disc">
          <li>Official document validation</li>
          <li>Guidance on required paperwork</li>
          <li>Support for submission processes</li>
        </ul>
      </>
    ),
  },
  {
    name: "Trainer",
    href: "trainer",
    description: "Experienced instructors for physical and mental preparation.",
    content: (
      <>
        <p>Our trainers help trainees improve their physical strength, endurance, and mental resilience.</p>
        <ul className="mt-4 list-disc">
          <li>Expert-led training sessions</li>
          <li>Custom workout plans</li>
          <li>Mental conditioning techniques</li>
        </ul>
      </>
    ),
  },
  {
    name: "Personality Development",
    href: "personality-development",
    description: "Training for confidence and leadership skills.",
    content: (
      <>
        <p>Our personality development program focuses on improving communication, leadership, and interpersonal skills.</p>
        <ul className="mt-4 list-disc">
          <li>Public speaking sessions</li>
          <li>Confidence-building exercises</li>
          <li>Leadership training</li>
        </ul>
      </>
    ),
  },
  {
    name: "Medical Checkup/Guidance",
    href: "medical",
    description: "Comprehensive health checkups and medical advice.",
    content: (
      <>
        <p>We provide medical checkups and health guidance, ensuring trainees remain in top physical condition.</p>
        <ul className="mt-4 list-disc">
          <li>Routine health assessments</li>
          <li>Diet and nutrition counseling</li>
          <li>Injury prevention strategies</li>
        </ul>
      </>
    ),
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-4 text-white bg-gray-900">
        <ul className="flex justify-center">
          {services.map((service) => (
            <li key={service.href}>
              <a href={`#${service.href}`} className="hover:underline">
                {service.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Service Sections */}
      <div className="pt-16">
        {services.map((service) => (
          <section
            id={service.href}
            key={service.href}
            className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100 border-b-2"
          >
            <h2 className="mb-4 text-3xl font-bold">{service.name}</h2>
            <p className="max-w-xl mb-4 text-lg text-center">{service.description}</p>
            <div className="text-gray-700 max-w-[1100px] mx-auto  text-md">{service.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

