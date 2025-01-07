import Link from "next/link";

import { socials } from "@/assets";

export default function Socials() {
  return (
    <>
      {socials.map((social) => (
        <Link key={social.name} href={social.url} target="_blank">
          <span>
            <social.icon />
          </span>
        </Link>
      ))}
    </>
  );
}
