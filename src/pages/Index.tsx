import { useState, useEffect } from "react";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CERTIFICATIONS } from "@/components/sections/Certifications";
import { StartupJourney } from "@/components/sections/StartupJourney";
import { Skills } from "@/components/sections/Skills";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/FadeIn";
import { IntroSplash } from "@/components/IntroSplash";

// Module-level flag: resets on every page load (refresh or new tab)
// so the Hello! splash always plays when the page is freshly opened.
let _splashPlayed = false;

const Index = () => {
  const [showSplash, setShowSplash] = useState(!_splashPlayed);
  const [heroVisible, setHeroVisible] = useState(_splashPlayed);

  useEffect(() => {
    if (_splashPlayed) return;

    // The splash screen animations run up to 3.9s, then it fades out over 0.8s.
    // It is fully invisible and removed from the DOM after 3.9s + 0.8s = 4.7s.
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
      setHeroVisible(true);
      _splashPlayed = true;
    }, 4700);

    return () => clearTimeout(splashTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to hash anchor when navigating back from a case study (e.g. /#work)
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    // Small delay so the page has painted before we try to scroll
    const t = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showSplash && <IntroSplash />}
      <div
        className={`transition-opacity duration-[800ms] ease-out ${
          heroVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <SiteNav />
        <main>
          <Hero />
          <FadeIn>
            <SelectedWork />
          </FadeIn>
          <FadeIn>
            <CERTIFICATIONS />
          </FadeIn>
          <FadeIn>
            <Skills />
          </FadeIn>
          <FadeIn>
            <Writing />
          </FadeIn>
          <FadeIn>
            <StartupJourney />
          </FadeIn>
          <FadeIn>
            <Contact />
          </FadeIn>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
