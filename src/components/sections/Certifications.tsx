const certs = [
  // ── 2026 ──
  { id: "01", title: "Data Analyst", provider: "UDEMY", code: "2026" },

  // ── 2025 ──
  { id: "02", title: "Oracle Cloud Infrastructure Data Science Professional", provider: "ORACLE", code: "2025" },
  { id: "03", title: "MongoDB Basics for Students", provider: "MONGODB", code: "2025" },
  { id: "04", title: "Power BI", provider: "INSPIER SOFT TECH", code: "2025" },
  { id: "05", title: "Oracle Java SE 17", provider: "ORACLE", code: "1Z0-829 · 2025" },
  { id: "06", title: "Azure Cloud Fundamentals", provider: "MICROSOFT", code: "AZ-900 · 2025" },
  { id: "07", title: "SAP Business Data Cloud", provider: "SAP", code: "BDC · 2025" },
  { id: "08", title: "SAP BTP Solution Architect", provider: "SAP", code: "BTP · 2025" },
  { id: "09", title: "OCI Generative AI Associate", provider: "ORACLE", code: "1Z0-1127 · 2025" },

  // ── 2024 ──
  { id: "10", title: "Google AI Essentials", provider: "GOOGLE", code: "2024" },
  { id: "11", title: "Advanced Google Analytics", provider: "GOOGLE", code: "2024" },
];

export const CERTIFICATIONS = () => {
  return (
    <section id="CERTIFICATIONS" className="scroll-mt-24 border-t border-rule">
      <div className="editorial-container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="flex flex-col items-start select-none">
                <span className="font-display text-6xl font-bold leading-none tracking-tighter text-primary/15 md:text-[120px]">
                  03
                </span>
                <span className="font-display text-lg md:text-4xl font-bold tracking-[-0.02em] text-primary -mt-1 mb-3 md:-mt-2 md:mb-4">
                  CERTIFICATIONS
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="divide-y divide-rule border-t border-b border-rule">
              {certs.map((c) => (
                <li key={c.id} className="grid grid-cols-12 items-baseline py-3 md:py-8">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-[10px] text-muted-foreground md:text-xs">{c.id}</span>
                  </div>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-display text-sm font-medium tracking-[-0.015em] md:text-2xl">
                      {c.title}
                    </h3>
                  </div>
                  <div className="col-span-8 col-start-3 md:col-span-3 md:col-start-8">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
                      {c.provider}
                    </span>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-right">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
                      {c.code}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
