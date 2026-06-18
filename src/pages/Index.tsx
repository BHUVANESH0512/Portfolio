import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { StartupJourney } from "@/components/sections/StartupJourney";
import { Skills } from "@/components/sections/Skills";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Metrics />
        <SelectedWork />
        <StartupJourney />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
