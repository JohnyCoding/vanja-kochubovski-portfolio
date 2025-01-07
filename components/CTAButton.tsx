"use client";
import { FaChevronDown } from "react-icons/fa";

export default function CTAButton() {
  return (
    <button
      onClick={() => document.getElementById("about")?.scrollIntoView()}
      className="border-primary-200 hover:bg-primary-200 text-primary-100 hover:text-primary-600 rounded border-2 border-solid px-6 py-3 font-bold transition-colors"
    >
      <span className="flex items-center gap-2 text-xl font-normal">
        <FaChevronDown />
        <span>More About Me</span>
      </span>
    </button>
  );
}
