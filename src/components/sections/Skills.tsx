const groups = [
  {
    title: "Languages / Database",
    items: ["Python", "Java", "C++", "SQL", "MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "MLOps & AI Framework",
    items: [
      "HuggingFace",
      "Scikit-learn",
      "Spark",
      "LangChain",
      "LLM",
      "GenAI",
      "NLP",
      "Deep Learning",
      "LLM Fine Tuning",
      "Prompt Engineering",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: ["Microsoft Azure", "Docker", "ERP Software"],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Roboflow",
      "Flowwise",
      "Jtheata AI",
      "Ultralytics",
      "Tabnine",
      "Ollama",
      "FastAPI",
      "FastMCP",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-rule">
      <div className="editorial-container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="mono-label">§ 04 — Practice areas</p>
              <h2 className="mt-6 font-display text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
                The tools and methods I lean on.
              </h2>
            </div>
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
