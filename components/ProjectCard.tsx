import React from "react";
import { motion } from "framer-motion";

type Props = {
  imageSrc: string;
  projectId: number;
  projectsLength: number;
  projectTitle: string;
  projectDescription: string;
  projectUrl: string;
};

function ProjectCard({
  imageSrc,
  projectId,
  projectsLength,
  projectTitle,
  projectDescription,
  projectUrl,
}: Props) {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={imageSrc}
        className="xl:w-7/12"
      />

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#f7ab0a]">
            Case Study {projectId} of {projectsLength}:
          </span>{" "}
          {projectTitle}
        </h4>

        <p className="text-lg text-center md:text-left">{projectDescription}</p>
        <a href={projectUrl}>
          <p className="text-center mt-5 underline text-[#f7ab0a]">
            Click me to go to the website!
          </p>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
