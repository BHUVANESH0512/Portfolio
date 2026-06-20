import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const SelectedWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scroll animations on mobile (under 768px) for better performance
    if (window.innerWidth < 768) return;

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

          // Calculate progress of next card covering this card
          let p = (nextCardTop - stickyTop) / distance;
          p = Math.max(0, Math.min(1, p)); // Clamp between 0 and 1

          const scale = 0.95 + 0.05 * p;
          const opacity = 0.6 + 0.4 * p;

          htmlCard.style.transform = `scale(${scale})`;
          htmlCard.style.opacity = `${opacity}`;
        } else {
          // Last card remains fully visible and scale 1
          htmlCard.style.transform = "scale(1)";
          htmlCard.style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section id="work" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-24">
      <div className="editorial-container pt-12 sm:pt-16 md:pt-32 pb-4 sm:pb-8">
        <div className="grid grid-cols-12 gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-4 sm:gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="flex flex-col items-start select-none">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tighter text-primary/15 md:text-[120px]">
                  02
                </span>
                <span className="font-display text-base sm:text-lg md:text-4xl font-bold tracking-[-0.02em] text-primary -mt-1 mb-2 md:-mt-2 md:mb-4">
                  PROJECTS
                </span>
              </div>
              <h2 className="mt-2 sm:mt-4 font-display text-sm sm:text-base md:text-4xl leading-tight tracking-[-0.02em] md:mt-6 text-pretty">
                Work that reflects my product thinking and human‑centered approach
              </h2>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div ref={containerRef} className="relative flex flex-col gap-4 sm:gap-6 md:gap-8 pb-4 sm:pb-8 md:gap-[60vh] md:pb-[40vh] md:mt-2">
              {PROJECTS.map((p, idx) => (
                <div
                  key={p.slug}
                  className="relative md:sticky md:top-[20vh] z-[10+idx] w-full"
                >
                  <div className="sticky-card bg-[#1a1a1a] border border-white/[0.08] rounded-lg sm:rounded-xl md:rounded-[16px] p-4 sm:p-5 md:p-8 md:p-10 shadow-lg md:shadow-2xl origin-center transition-all duration-100 ease-out">
                    <Link
                      to={`/work/${p.slug}`}
                      className="group block"
                    >
                      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground">{p.number}</span>
                            <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-white">
                              {p.category} · {p.year}
                            </span>
                          </div>
                          <h3 className="font-display text-base sm:text-lg md:text-3xl font-bold text-white tracking-[-0.02em] group-hover:text-[#7ec8b0] transition-colors duration-300 truncate md:truncate-none">
                            {p.title}
                          </h3>
                          <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-sm md:text-base text-gray-400 text-pretty line-clamp-2 md:line-clamp-none">
                            {p.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-end flex-shrink-0">
                          <div className="rounded-full bg-white/5 p-2 sm:p-3 md:p-3 group-hover:bg-[#7ec8b0]/10 transition-colors duration-300">
                            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-400 group-hover:text-[#7ec8b0] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
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
