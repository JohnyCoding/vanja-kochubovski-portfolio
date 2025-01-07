import SectionHeading from "@/components/SectionHeading";
import Skills from "@/components/Skills";

export default function Profile() {
  return (
    <section className="flex flex-col gap-12 bg-stone-100 py-12 lg:py-20">
      <SectionHeading
        topText="Tools and programming languages"
        bottomText="Never stop learning"
      />
      <Skills />
    </section>
  );
}
