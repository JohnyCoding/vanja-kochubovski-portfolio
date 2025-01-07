"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

type Props = {
  game: {
    name: string;
    description: string;
    links: string[];
    src: StaticImageData;
  };
  index: number;
};

export default function PortfolioGame({ game, index }: Props) {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((curr) => !curr)}
      className="relative cursor-pointer"
    >
      <Image
        src={game.src}
        alt={`Icon of ${game.name}`}
        width={256}
        height={256}
        placeholder="blur"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: show ? 1 : 0 }}
        className="group absolute left-0 top-0 flex h-full w-full flex-col rounded-2xl bg-accent/95 p-4 text-sm text-primary-50 transition-colors"
      >
        <h3 className="text-center font-bold">{game.name}</h3>
        <p className="flex grow items-center justify-center text-xs">
          {game.description}
        </p>
        <div className="flex grow items-end justify-end gap-x-2 self-start">
          {game.links.map((gameLink, gameLinkIndex) => (
            <Link
              key={gameLinkIndex}
              href={gameLink}
              target="_blank"
              className="flex items-center justify-center rounded-md bg-primary-50 p-1 text-xl"
            >
              {gameLinkIndex === 0 ? (
                <FaGooglePlay className="text-accent" />
              ) : (
                <FaAppStoreIos className="text-accent" />
              )}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
