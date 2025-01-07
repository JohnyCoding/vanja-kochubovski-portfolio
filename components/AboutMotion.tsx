"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { aboutDescription, photoOfMe } from "@/assets";

export default function AboutMotion() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-8 py-5 sm:px-20 md:flex-row">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 grid min-h-44 min-w-44 origin-left place-content-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-44 before:w-44 before:animate-spin-slow before:rounded-full before:bg-gradient-to-br before:from-primary-200/50 before:to-primary-900/50 before:content-['']"
      >
        <Image
          src={photoOfMe}
          alt="A picture of me"
          className="h-40 w-40 rounded-full"
        />
      </motion.div>

      <motion.p
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}
        className="text-lg tracking-wider text-primary-600 first-letter:pl-2 md:text-justify"
      >
        {aboutDescription}
      </motion.p>
    </div>
  );
}
