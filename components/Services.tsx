import SectionHeading from "@/components/SectionHeading";
import ServicesMotion from "@/components/ServicesMotion";

export default function Services() {
  return (
    <section
      className="relative py-12 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-primary-900/70 after:content-['']"
      style={{
        backgroundImage: "url('/bg-1.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-primary-100">
        <SectionHeading
          topText="Services"
          bottomText="What Can I Do For You?"
        />
        <ServicesMotion />
      </div>
    </section>
  );
}
