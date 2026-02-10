import { Navbar } from "@/components/navbar";
import { CursorEffects } from "@/components/cursor-effects";
import { Hero } from "@/components/hero";
import { StatsMarquee } from "@/components/stats-marquee";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-dark text-light min-h-screen font-sans overflow-x-hidden relative">
      <CursorEffects />
      <Navbar />
      <Hero />
      <StatsMarquee />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
