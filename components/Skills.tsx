"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill imageSrc="expressjs.png" progress="70%" directionLeft={true} />
        <Skill imageSrc="mongodb.png" progress="70%" directionLeft={true} />
        <Skill imageSrc="nextjs.png" progress="80%" directionLeft={true} />
        <Skill imageSrc="nodejs.png" progress="70%" directionLeft={true} />
        <Skill imageSrc="reactjs.png" progress="80%" directionLeft={true} />
        <Skill imageSrc="rust.png" progress="60%" directionLeft={true} />
        <Skill imageSrc="solidity.png" progress="80%" directionLeft={true} />
        <Skill imageSrc="tailwindcss.png" progress="90%" directionLeft={true} />
        <Skill imageSrc="autocad.png" progress="90%" directionLeft={false} />
        <Skill imageSrc="solidworks.png" progress="80%" directionLeft={false} />
        <Skill imageSrc="msoffice.png" progress="80%" directionLeft={false} />
      </div>
    </motion.div>
  );
}

export default Skills;
