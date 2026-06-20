import { useEffect, useRef } from "react";

const articles = [
  {
    n: "01",
    title: "Artificial Photoreceptors: A Natural Solution to the Dark Side of Tech",
    tag: "IEEE · IConSCEPT 2025",
    dek: "A bio-inspired sensor that mimics bat photoreceptors to detect objects in the dark — designed to improve on LiDAR for drones, autonomous vehicles, and surveillance robots.",
    read: "Published · Mar 2026",
    href: "https://doi.org/10.1109/IConSCEPT66142.2025.11436975",
  },
  {
    n: "02",
    title: "Automated IoT-Based Pill Dispenser with Real-Time Remote Monitoring for Dementia Patients",
    tag: "IEEE · IConSCEPT 2025",
    dek: "An IoT-enabled smart pill dispenser with a caregiver mobile app — automates scheduled pill delivery, detects missed doses, and sends real-time alerts to reduce medication errors in dementia care.",
    read: "Published · Mar 2026",
    href: "https://doi.org/10.1109/IConSCEPT66142.2025.11436320",
  },
];

export const Writing = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".sticky-card");
      const stickyTop = window.innerHeight * 0.2; // 20vh
      const distance = window.innerHeight - stickyTop;

      cards.forEach((card, index) => {
        const htmlCard = card as HTMLElement;
        const nextCard = cards[index + 1] as HTMLElement;

        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect();
          const nextCardTop = nextRect.top;

          let p = (nextCardTop - stickyTop) / distance;
          p = Math.max(0, Math.min(1, p));

          const scale = 0.95 + 0.05 * p;
          const opacity = 0.6 + 0.4 * p;

          htmlCard.style.transform = `scale(${scale})`;
          htmlCard.style.opacity = `${opacity}`;
        } else {
          htmlCard.style.transform = "scale(1)";
          htmlCard.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="writing" className="scroll-mt-24 border-t border-rule">
      <div className="editorial-container pt-24 md:pt-32 pb-8">
        <div className="grid grid-cols-12 gap-x-10 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="flex flex-col items-start select-none">
                <span className="font-display text-6xl font-bold leading-none tracking-tighter text-primary/15 md:text-[120px]">
                  05
                </span>
                <span className="font-display text-lg md:text-4xl font-bold tracking-[-0.02em] text-primary -mt-1 mb-3 md:-mt-2 md:mb-4">
                  RESEARCH PAPERS
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg leading-tight tracking-[-0.02em] md:mt-6 md:text-4xl">
                IEEE publications.
              </h2>
              <p className="mt-3 max-w-sm text-xs text-muted-foreground md:mt-4 md:text-sm">
                Peer-reviewed research published at IEEE IConSCEPT 2025 — spanning bio-inspired sensing and IoT-driven healthcare.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div ref={containerRef} className="relative flex flex-col gap-8 pb-8 md:gap-[60vh] md:pb-[40vh] md:mt-2">
              {articles.map((a, idx) => (
                <div
                  key={a.n}
                  className="relative md:sticky md:top-[20vh] w-full"
                  style={{ zIndex: 10 + idx }}
                >
                  <div className="sticky-card bg-[#1a1a1a] border border-white/[0.08] rounded-2xl md:rounded-[16px] p-5 md:p-8 md:p-10 shadow-2xl origin-center transition-all duration-100 ease-out">
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-mono text-xs text-muted-foreground">{a.n}</span>
                            <span
                              className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold px-2 py-0.5 rounded"
                              style={{ color: "#7ec8b0", border: "1px solid #7ec8b0" }}
                            >
                              IEEE PUBLISHED
                            </span>
                          </div>
                          <h3 className="font-display text-base md:text-3xl font-bold text-white tracking-[-0.02em] group-hover:text-[#7ec8b0] transition-colors duration-300">
                            {a.title}
                          </h3>
                          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
                            {a.tag}
                          </p>
                          <p className="mt-2 text-sm text-gray-400 text-pretty leading-relaxed md:mt-3 md:text-base">
                            {a.dek}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground whitespace-nowrap">
                            {a.read}
                          </p>
                          <div className="rounded-full bg-white/5 p-3 group-hover:bg-[#7ec8b0]/10 transition-colors duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-400 group-hover:text-[#7ec8b0] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
