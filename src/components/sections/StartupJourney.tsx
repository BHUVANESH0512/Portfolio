const milestones = [
  { year: "2025 · Q1", title: "Founded", body: "LEP Skill Lab begins as a small experiment to teach skills schools rarely cover — built around hands-on, project-first learning." },
  { year: "2025 · Q2", title: "School outreach & partnerships", body: "Conversations with administrators and teachers turn into pilot programs across multiple schools in the region." },
  { year: "2025 · Q3", title: "Startup summit", body: "Selected to present the model at a regional startup summit; the feedback sharpens the curriculum and the operating playbook." },
  { year: "2025 · Q4", title: "Program launches", body: "First full cohorts run end-to-end. Students ship real projects; the program graduates into a repeatable format." },
];

export const StartupJourney = () => {
  return (
    <section id="journey" className="scroll-mt-24 mt-24 md:mt-32 border-t border-rule">
      <div className="editorial-container py-20 md:py-28">
        <div className="grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <p className="mono-label">§ 04 — A founder's notebook</p>
            <h2 className="mt-6 font-display text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
              LEP Skill Lab
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              A practical skill-development initiative focused on helping school students learn
              industry-relevant skills through hands-on experiences. The shape changed often;
              the intent did not.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ol className="relative">
              {milestones.map((m, i) => (
                <li key={i} className="grid grid-cols-12 gap-x-6 border-t border-rule py-8">
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{m.year}</p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-display text-xl font-medium tracking-[-0.015em]">{m.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground text-pretty">{m.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
