const stats = [
  { value: "02", label: "IEEE Papers", note: "Published" },
  { value: "08+", label: "Major Projects", note: "Production & research" },
  { value: "01", label: "Hackathon Prize", note: "National recognition" },
  { value: "05+", label: "Certifications", note: "AI, cloud, systems" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="editorial-container w-full flex-1 flex flex-col justify-between pt-16 pb-6 md:pt-24 md:pb-8 animate-rise">
        {/* Top Block: Bio and Tagline */}
        <div className="grid grid-cols-12 gap-y-6 md:gap-y-8 md:gap-x-10 pt-6 md:pt-12">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-[44px] leading-[1.02] tracking-[-0.025em] sm:text-6xl md:text-[88px] md:leading-[0.98] text-balance">
              I'm Bhuvanesh.
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

        {/* Bottom Block: Achievements touching bottom */}
        <div className="col-span-12 mt-12 border-t border-rule pt-8 pb-4">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-rule pt-5">
                <dt className="mono-label">{s.label}</dt>
                <dd className="mt-3 font-display text-5xl font-light leading-none tracking-[-0.04em] md:text-6xl">
                  {s.value}
                </dd>
                <p className="mt-3 text-sm text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
