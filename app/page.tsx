import { Navbar } from "@/components/navbar";
import { CursorEffects } from "@/components/cursor-effects";
import { Hero } from "@/components/hero";
import { StatsMarquee } from "@/components/stats-marquee";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageLoader } from "@/components/page-loader";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-dark text-light min-h-screen font-sans overflow-x-hidden relative">
        <PageLoader />
        <ScrollProgress />
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
    </SmoothScroll>
  );
}
