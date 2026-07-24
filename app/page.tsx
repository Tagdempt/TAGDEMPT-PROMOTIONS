export const dynamic = "force-dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Stats from "@/components/Stats";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import Investment from "@/components/Investment";
import Projects from "@/components/Projects";
import News from "@/components/News";
import Strategy from "@/components/Strategy";
import Governance from "@/components/Governance";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import ParticlesBackground from "@/components/ParticlesBackground";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <Loader />

      <ScrollProgress />

      <main className="relative isolate overflow-hidden bg-white">

        <ParticlesBackground />

        <Hero />

        <About />

        <WhyUs />

        <Stats />

        <Founder />

        <Services />

        <Projects />

        <News />

        <Investment />

        <Strategy />

        <Governance />

        <Contact />

      </main>

      <BackToTop />
    </>
  );
}