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
    <section id="skills" className="scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-24 border-t border-rule">
      <div className="editorial-container py-12 sm:py-16 md:py-28">
        <div className="grid grid-cols-12 gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-4 sm:gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <div className="flex flex-col items-start select-none">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tighter text-primary/15 md:text-[120px]">
                  04
                </span>
                <span className="font-display text-sm sm:text-base md:text-4xl font-bold tracking-[-0.02em] text-primary -mt-1 mb-2 md:-mt-2 md:mb-4">
                  PRACTICE AREAS
                </span>
              </div>
              <h2 className="mt-2 sm:mt-4 font-display text-sm sm:text-base md:text-4xl leading-tight tracking-[-0.02em] md:mt-6">
                The tools and methods I lean on.
              </h2>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
              {groups.map((g) => (
                <li key={g.title} className="bg-background p-3 sm:p-5 md:p-7">
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-primary md:text-[11px]">{g.title}</p>
                  <ul className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5 md:mt-4 md:gap-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-sm border border-rule px-1.5 sm:px-2 py-0.5 text-[11px] sm:text-xs text-foreground/80 md:px-2.5 md:py-1 md:text-[13px] whitespace-nowrap"
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
