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
            <div className="md:sticky md:top-24">
              <div className="flex flex-col items-start select-none">
                <span className="font-display text-6xl font-bold leading-none tracking-tighter text-primary/15 md:text-[120px]">
                  06
                </span>
                <span className="font-display text-lg md:text-4xl font-bold tracking-[-0.02em] text-primary -mt-1 mb-3 md:-mt-2 md:mb-4">
                  A FOUNDER'S NOTEBOOK
                </span>
              </div>
              <h2 className="mt-4 font-display text-xl leading-tight tracking-[-0.02em] md:mt-6 md:text-5xl">
                LEP Skill Lab
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty md:mt-6 md:text-base">
                A practical skill-development initiative focused on helping school students learn
                industry-relevant skills through hands-on experiences. The shape changed often;
                the intent did not.
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ol className="relative">
              {milestones.map((m, i) => (
                <li key={i} className="grid grid-cols-12 gap-x-6 border-t border-rule py-5 md:py-8">
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">{m.year}</p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-display text-lg font-medium tracking-[-0.015em] md:text-xl">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty md:mt-2 md:text-base">{m.body}</p>
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
