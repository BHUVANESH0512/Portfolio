import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Certifications } from "@/components/sections/Certifications";
import { StartupJourney } from "@/components/sections/StartupJourney";
import { Skills } from "@/components/sections/Skills";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";
import { FadeIn } from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <FadeIn>
          <SelectedWork />
        </FadeIn>
        <FadeIn>
          <Certifications />
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
  );
};

export default Index;
