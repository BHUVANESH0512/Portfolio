const stats = [
  { value: "02", label: "IEEE Papers", note: "Published" },
  { value: "08+", label: "Major Projects", note: "Production & research" },
  { value: "01", label: "Hackathon Prize", note: "National recognition" },
  { value: "05+", label: "Certifications", note: "AI, cloud, systems" },
];

export const Metrics = () => {
  return (
    <section className="border-y border-rule bg-muted/30">
      <div className="editorial-container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="col-span-12 md:col-span-3">
            <p className="mono-label">§ <span className="font-bold">03</span></p>
            <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.015em]">
              A short ledger of the last few years.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-9">
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
      </div>
    </section>
  );
};
