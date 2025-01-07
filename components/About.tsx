import AboutMotion from "@/components/AboutMotion";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-primary-50 py-12 lg:py-20">
      <SectionHeading
        topText="About Me"
        bottomText="Let me introduce myself."
      />
      <AboutMotion />
    </section>
  );
}
