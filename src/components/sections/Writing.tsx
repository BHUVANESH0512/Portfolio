const articles = [
  {
    n: "01",
    title: "Building AI Systems That Scale",
    dek: "On the difference between a demo and a system, and why most AI products live or die in the gap.",
    read: "8 min read",
    date: "Forthcoming",
  },
  {
    n: "02",
    title: "Why Infrastructure Matters",
    dek: "The unglamorous decisions that decide whether a product can keep its promises a year from now.",
    read: "6 min read",
    date: "Forthcoming",
  },
  {
    n: "03",
    title: "Lessons from Building Student-Focused Products",
    dek: "Notes from running programs with school students — what works, what doesn't, and what surprised me.",
    read: "10 min read",
    date: "Forthcoming",
  },
];

export const Writing = () => {
  return (
    <section id="writing" className="scroll-mt-24 border-t border-rule">
      <div className="editorial-container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="mono-label">§ 05 — Journal</p>
              <h2 className="mt-6 font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
                Writing & insights.
              </h2>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Slow essays on the work — published when they are ready, not before.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <ul className="hairline">
              {articles.map((a) => (
                <li key={a.n} className="border-b border-rule">
                  <article className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-8">
                    <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">{a.n}</span>
                    <div className="col-span-10 md:col-span-8">
                      <h3 className="font-display text-2xl font-medium leading-snug tracking-[-0.015em] text-balance">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground text-pretty">{a.dek}</p>
                    </div>
                    <div className="col-span-12 md:col-span-3 md:text-right">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{a.date}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{a.read}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
