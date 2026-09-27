import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export default function Page() {
  return (
    <RevealProvider>
      <ScrollProgress />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </RevealProvider>
  );
}
