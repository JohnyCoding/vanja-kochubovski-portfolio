import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Profile from "@/components/Profile";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Profile />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
