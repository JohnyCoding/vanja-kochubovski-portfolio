"use client";
import { motion } from "framer-motion";

import { services } from "@/assets";

export default function ServicesMotion() {
  return (
    <div className="mx-auto grid max-w-7xl grid-rows-3 gap-6 px-12 py-6 lg:grid-cols-3 lg:grid-rows-1 lg:py-20">
      {services.map((service, index) => (
        <motion.div
          initial={{
            x: index === 0 ? -200 : index === 2 ? 200 : 0,
            y: index === 1 ? 200 : 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
          }}
          whileHover={{
            scale: 1.05,
          }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
          key={service.name}
          className="group flex flex-col items-center gap-3 rounded-xl border border-accent px-4 py-12 transition-colors hover:cursor-pointer hover:bg-accent"
        >
          <div>
            <span>
              <service.icon className="h-16 w-16 text-accent transition-colors group-hover:text-primary-50" />
            </span>
          </div>
          <h3 className="text-center font-press-start text-lg font-bold text-primary-100 transition-colors">
            {service.name}
          </h3>
          <hr className="w-4/12 border-primary-100 transition-colors" />
          <p className="text-pretty text-center font-medium tracking-wider text-primary-50 transition-colors first-letter:pl-2">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
