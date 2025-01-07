import { copyrightText } from "@/assets";
import Socials from "@/components/Socials";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-primary-900 flex flex-row items-center p-10">
      <p className="text-primary-200 flex grow items-center gap-x-2">
        <span>
          <FaCopyright />
        </span>
        <span>{copyrightText}</span>
      </p>
      <div className="text-primary-200 flex gap-3 text-5xl font-normal">
        <Socials />
      </div>
    </div>
  );
}
