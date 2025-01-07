"use client";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

export default function ContactMotion() {
  return (
    <div className="mx-auto mt-12 flex justify-center">
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        href="mailto&#58;vanj%61&#46;%6Bocu%6&#50;&#111;&#37;&#55;6s%6&#66;&#37;6&#57;&#64;gm%&#54;1i%6&#67;%2E%63o%6&#68;"
        className="flex items-center gap-2 rounded-md border-2 border-primary-200 px-5 py-3 text-lg font-bold transition-colors hover:bg-primary-200 hover:text-primary-600"
      >
        <MdEmail />{" "}
        <span>vanj&#97;&#46;kocubovs&#107;i&#64;gmail&#46;co&#109;</span>
      </motion.a>
    </div>
  );
}
