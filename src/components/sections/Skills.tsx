const groups = [
  {
    title: "AI Systems",
    items: ["LLM orchestration", "Retrieval pipelines", "Evaluation harnesses", "Model context protocol"],
  },
  {
    title: "Automation",
    items: ["Multi-agent workflows", "Event-driven orchestration", "Document intelligence", "Workflow design"],
  },
  {
    title: "Cloud Infrastructure",
    items: ["AWS", "Terraform", "Kubernetes", "Observability"],
  },
  {
    title: "Backend Development",
    items: ["Python", "TypeScript / Node", "PostgreSQL", "API design"],
  },
  {
    title: "Product Building",
    items: ["Discovery", "Prototyping", "Founding teams", "Shipping early"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-rule">
      <div className="editorial-container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <p className="mono-label">§ 05 — Practice areas</p>
            <h2 className="mt-6 font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              The tools, methods, and disciplines I lean on.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
              {groups.map((g) => (
                <li key={g.title} className="bg-background p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{g.title}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-sm border border-rule px-2.5 py-1 text-[13px] text-foreground/80"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
