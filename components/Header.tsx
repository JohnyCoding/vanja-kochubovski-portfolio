import { heroSubTitle, heroTitle } from "@/assets";
import CTAButton from "@/components/CTAButton";
import Socials from "@/components/Socials";
import TypingH1 from "@/components/TypingH1";

export default function Header() {
  return (
    <header
      className="header relative h-screen text-center after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black/70 after:content-['']"
      style={{
        backgroundImage: "url('/intro-bg-1.jpg')",
        backgroundColor: "#151515",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 flex h-screen flex-col items-center justify-center">
        <h5 className="text-accent mb-5 text-3xl font-bold uppercase">
          Hello, World.
        </h5>
        <TypingH1 textToType={heroTitle} typingDelay={100} />

        <p className="text-primary-200 my-5 text-2xl uppercase">
          <span>{heroSubTitle}</span>
        </p>

        <CTAButton />

        <div className="text-primary-200 absolute bottom-8 flex gap-3 text-5xl font-normal">
          <Socials />
        </div>
      </div>
    </header>
  );
}
