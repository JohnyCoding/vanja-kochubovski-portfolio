import ContactMotion from "@/components/ContactMotion";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section className="bg-stone-800 bg-gradient-to-b from-primary-800 to-primary-900 py-12 text-stone-200 lg:py-20">
      <SectionHeading
        topText="Contact"
        bottomText="I'd love to hear from you"
      />
      <ContactMotion />
    </section>
  );
}
