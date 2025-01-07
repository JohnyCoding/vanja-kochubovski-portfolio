"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { skills } from "@/assets";

export default function Skills() {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <ul className="mx-auto grid max-w-5xl grid-cols-2 justify-center gap-10 sm:grid-cols-3 sm:px-20 md:grid-cols-4 lg:grid-cols-5">
      {skills.map((skill, index) => (
        <motion.li
          custom={index}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "50px", once: true }}
          key={skill.name}
          className="group relative flex justify-center"
        >
          <Image
            src={skill.src}
            alt={skill.alt}
            className="h-32 w-32 cursor-pointer rounded-3xl transition-all hover:shadow-lg hover:shadow-accent/60 group-hover:-translate-y-2"
          />
          <span className="absolute top-[7rem] scale-0 rounded bg-accent p-2 text-xs text-primary-100 transition-all group-hover:scale-100">
            {skill.name}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
