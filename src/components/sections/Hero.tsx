export const Hero = () => {
  return (
    <section className="relative">
      <div className="editorial-container pt-16 md:pt-28 lg:pt-36 pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3 animate-rise">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="mono-label text-foreground/70">Available for select collaborations · 2026</span>
            </div>

            <h1 className="mt-10 font-display text-[44px] leading-[1.02] tracking-[-0.025em] sm:text-6xl md:text-[88px] md:leading-[0.98] text-balance animate-rise">
              Bhuvanesh<br />Ravi.
            </h1>
          </div>

          <div className="col-span-12 md:col-span-4 md:pt-4">
            <p className="mono-label">Issue 01 — Portfolio</p>
            <p className="mt-4 text-sm text-muted-foreground">Chennai, India</p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-1">
            <p className="font-display text-2xl leading-snug tracking-[-0.015em] sm:text-3xl md:text-[34px] md:leading-[1.2] text-balance">
              Building products at the intersection of{" "}
              <span className="text-primary">AI, automation, and infrastructure.</span>
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-3">
            <p className="text-base leading-relaxed text-muted-foreground text-pretty">
              AI & ML student, product builder, and startup founder focused on creating
              practical systems that combine automation, infrastructure, and real-world impact.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a href="#work" className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground link-underline">
                Selected work ↓
              </a>
              <a href="#contact" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground link-underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
