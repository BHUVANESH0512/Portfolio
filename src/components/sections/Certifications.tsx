const certs = [
  { id: "01", title: "Oracle Java SE 17", provider: "ORACLE", code: "1Z0-829" },
  { id: "02", title: "Azure Cloud Fundamentals", provider: "MICROSOFT", code: "AZ-900" },
  { id: "03", title: "SAP Business Data Cloud", provider: "SAP", code: "BDC" },
  { id: "04", title: "SAP BTP Solution Architect", provider: "SAP", code: "BTP" },
  { id: "05", title: "OCI Generative AI Associate", provider: "ORACLE", code: "1Z0-1127" },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="scroll-mt-24 border-t border-rule">
      <div className="editorial-container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-8">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="mono-label">§ 04 — Certifications</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="divide-y divide-rule border-t border-b border-rule">
              {certs.map((c) => (
                <li key={c.id} className="grid grid-cols-12 items-baseline py-6 md:py-8">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-xs text-muted-foreground">{c.id}</span>
                  </div>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-display text-xl font-medium tracking-[-0.015em] sm:text-2xl">
                      {c.title}
                    </h3>
                  </div>
                  <div className="col-span-8 col-start-3 md:col-span-3 md:col-start-8">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {c.provider}
                    </span>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-right">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
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
