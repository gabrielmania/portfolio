import React from "react";
import { motion } from "framer-motion";

type Props<T> = {
  logo: string;
  position: string;
  company: string;
  summary: Array<string>;
  dateStarted: string;
  dateEnded: string;
  technologies: Array<string>;
};

function ExperienceCard<T>({
  logo,
  position,
  company,
  summary,
  dateStarted,
  dateEnded,
  technologies,
}: Props<T>) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={logo}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{position}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {technologies.map((techSrc, i) => (
            <img key={i} className="h-10 w-10 rounded-full" src={techSrc} />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {dateStarted} - {dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summary.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
