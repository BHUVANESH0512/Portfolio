export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="editorial-container w-full py-16 md:py-24">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-[44px] leading-[1.02] tracking-[-0.025em] sm:text-6xl md:text-[88px] md:leading-[0.98] text-balance animate-rise">
              Bhuvanesh.
            </h1>
          </div>

          <div className="col-span-12 md:col-span-4 md:pt-4" />

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
          </div>
        </div>
      </div>
    </section>
  );
};
