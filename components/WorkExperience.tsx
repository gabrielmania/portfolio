"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ExperienceCard
          logo="freelance.png"
          position="Freelance Web Developer"
          company="Freelance"
          dateStarted="March 2023"
          dateEnded="Present"
          summary={[
            "Develops responsive, modern websites",
            "Integrates third-party APIs",
            "Applies UX/UI for intuitive design",
            "Liaises effectively with clients",
          ]}
          technologies={[
            "nextjs.png",
            "reactjs.png",
            "tailwindcss.png",
            "nodejs.png",
            "expressjs.png",
            "mongodb.png",
            "prisma.png",
            "javascript.png",
            "typescript.png",
          ]}
        />
        <ExperienceCard
          logo="247codecamp.jpeg"
          position="Blockchain Instructor"
          company="OneCodeCamp"
          dateStarted="January 2023"
          dateEnded="Present"
          summary={[
            "Develop educational content on Solidity smart contracts",
            "Create real-world project-based learning experiences",
            "Guide and mentor students",
            "Collaborate to improve the curriculum and learning experiences",
          ]}
          technologies={[
            "solidity.png",
            "nextjs.png",
            "reactjs.png",
            "tailwindcss.png",
            "nodejs.png",
            "expressjs.png",
            "mongodb.png",
            "rust.png",
          ]}
        />
        <ExperienceCard
          logo="iee.jpg"
          position="Staff Engineer"
          company="International Elevator & Equipment, Inc."
          dateStarted="December 2014"
          dateEnded="July 2017"
          summary={[
            "Created elevator and escalator layout plans.",
            "Led technical stakeholder meetings.",
            "Conducted on-site system inspections.",
            "Ensured compliance with industry standards.",
          ]}
          technologies={["autocad.png", "solidworks.png", "msoffice.png"]}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
