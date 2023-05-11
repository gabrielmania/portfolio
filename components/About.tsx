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
        src="https://media.licdn.com/dms/image/C5603AQFqEOzBsgfxqQ/profile-displayphoto-shrink_800_800/0/1517004252742?e=1689206400&v=beta&t=uPM9o0UmEFu8t9pTCfBr2ctNlXcoiAQDJj-u8qxBw3M"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm a Full-Stack Web Developer and Blockchain Expert who creates
          innovative solutions that push the digital space boundaries. With
          expertise in MERN, Solidity, and Rust programming, I transform the
          digital landscape with complex projects. I've developed decentralized
          applications and smart contracts for cutting-edge blockchain
          platforms. My passion for the latest technologies and staying ahead of
          the curve lets me create transformative solutions for my clients. I
          can bring your vision to life by creating dynamic web applications or
          leveraging the blockchain's power for your business. Let's work
          together to create a brighter digital future.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
