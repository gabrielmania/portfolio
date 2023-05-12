"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="heroImage.jpeg"
        alt="Hero Image"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          I'm Gabriel Mania, a Full-Stack Web, Rust, and Blockchain Developer
          passionate about creating innovative digital solutions. I excel in
          developing dynamic web applications using the MERN stack and
          Rust-based high-performance systems. In the blockchain realm, I
          develop decentralized applications, create smart contracts, and
          educate future developers as a Junior Blockchain Instructor at
          247CodeCamp. My expertise can help realize your vision for dynamic web
          applications, Rust solutions, or blockchain-based business
          advancements. Let's collaborate to shape your digital future.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
