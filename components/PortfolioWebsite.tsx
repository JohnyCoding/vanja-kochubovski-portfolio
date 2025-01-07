"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  website: {
    name: string;
    description: string;
    link: string;
    src: StaticImageData;
  };
  index: number;
};

export default function PortfolioWebsite({ website, index }: Props) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((curr) => !curr)}
      className="relative cursor-pointer"
    >
      <Image
        src={website.src}
        alt={`Image of ${website.name}`}
        width={900}
        height={500}
        className="rounded-2xl"
        placeholder="blur"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ scale: show ? 1 : 0, opacity: show ? 1 : 0 }}
        className="group absolute left-0 top-0 flex h-full w-full flex-col rounded-2xl bg-accent/95 p-4 tracking-wider text-primary-50"
      >
        <h3 className="text-center text-lg font-bold sm:text-2xl">
          {website.name}
        </h3>
        <p className="flex grow items-center justify-center sm:text-lg">
          {website.description}
        </p>
        <Link
          href={website.link}
          target="_blank"
          className="flex items-center justify-center rounded-md bg-primary-50 p-1 text-accent sm:text-xl"
        >
          {website.link}
        </Link>
      </motion.div>
    </motion.div>
  );
}
