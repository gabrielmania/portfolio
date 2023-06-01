"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly ms-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ProjectCard
          imageSrc="messenger-clone.png"
          projectId={1}
          projectsLength={4}
          projectTitle="Messenger Clone"
          projectDescription="Messenger Clone is a real-time chat application developed with Next.js and React. It features a modern interface, secure authentication, and dynamic interactions, offering a seamless user experience across all devices."
          projectUrl="https://messenger-clone-ruddy.vercel.app/"
        />
        <ProjectCard
          imageSrc="airbnb_clone.png"
          projectId={2}
          projectsLength={4}
          projectTitle="Airbnb Clone"
          projectDescription="This project is a simplified clone of the Airbnb application. It's built using Next.js, Prisma, React, and several other technologies to provide a functional and interactive user interface."
          projectUrl="https://windbnb-rose.vercel.app/"
        />
        <ProjectCard
          imageSrc="vertuze_digital.png"
          projectId={3}
          projectsLength={4}
          projectTitle="Vertuze Digital"
          projectDescription="Vertuze Digital is a responsive online store for digital goods like movies, music, and games, built with NextJS, MongoDB, and TailwindCSS. This modern web application offers fast page loads, enhanced SEO, flexible data handling, and customizable design for a seamless user experience."
          projectUrl="https://vertuze-digital.vercel.app/"
        />
        <ProjectCard
          imageSrc="yelpcamp.png"
          projectId={4}
          projectsLength={4}
          projectTitle="YelpCamp"
          projectDescription="YelpCamp is a user-friendly web application for sharing and reviewing campsites, built with HTML, Bootstrap, JavaScript, NodeJS, ExpressJS, and MongoDB. It features a navigable interface, reliable server-side infrastructure, and scalable data handling. With user authentication and authorization, it offers full access to logged-in users. It effectively connects camping enthusiasts and aids in discovering new sites."
          projectUrl="https://yelpcamp-dl1i.onrender.com/"
        />
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
