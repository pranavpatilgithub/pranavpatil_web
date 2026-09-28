import Shell from "@/components/Shell";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <Shell>
      <Hero />
      <About />
      <Work />
      <Toolkit />
      <Contact />
    </Shell>
  );
}
