"use client";
import { motion } from "framer-motion";

import { games, githubUrl, portfolioFilters, websites } from "@/assets";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGame from "@/components/PortfolioGame";
import { useState } from "react";
import PortfolioWebsite from "@/components/PortfolioWebsite";
import Link from "next/link";

export default function Portfolio() {
  const [filter, setFilter] = useState(portfolioFilters[0]);
  return (
    <section className="bg-primary-50 py-12 lg:py-20">
      <SectionHeading
        topText="Portfolio"
        bottomText="A small sample of my top work."
      />
      <div className="mx-6 mt-6 flex max-w-7xl flex-col items-center justify-center rounded-xl border border-accent xl:mx-auto">
        <ul className="flex gap-x-3 py-4 font-bold">
          {portfolioFilters.map((portFilter) => (
            <li
              key={portFilter}
              onClick={() => setFilter(portFilter)}
              className={`rounded-lg px-2 py-1 tracking-wider hover:cursor-pointer ${portFilter === filter ? "bg-accent text-primary-50" : "text-accent"} transition-colors`}
            >
              {portFilter}
            </li>
          ))}
        </ul>
        {filter === portfolioFilters[0] && (
          <div className="my-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {games.map((game, gameIndex) => (
              <motion.div key={game.name} layout>
                <PortfolioGame game={game} index={gameIndex} />
              </motion.div>
            ))}
          </div>
        )}
        {filter === portfolioFilters[1] && (
          <>
            <div className="my-6 grid gap-6">
              {websites.map((website, websiteIndex) => (
                <PortfolioWebsite
                  key={website.name}
                  website={website}
                  index={websiteIndex}
                />
              ))}
            </div>
            <Link
              href={githubUrl}
              target="_blank"
              className="mb-2 rounded border-2 border-accent px-4 py-2 text-sm font-bold text-accent underline transition-colors hover:bg-accent hover:text-primary-100 sm:text-base"
            >
              Check out my GitHub repos for more
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
