import { ArrowUpRight } from "lucide-react";

const channels = [
  { label: "Email", value: "bhuvaneshravi1957@gmail.com", href: "mailto:bhuvaneshravi1957@gmail.com" },
  { label: "GitHub", value: "github.com/BHUVANESH0512", href: "https://github.com/BHUVANESH0512" },
  { label: "LinkedIn", value: "linkedin.com/in/bhuvaneshravi57", href: "https://www.linkedin.com/in/bhuvaneshravi57/" },
];

export const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-rule bg-primary text-primary-foreground">
      <div className="editorial-container py-24 md:py-36">
        <div className="grid grid-cols-12 gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">§ 07 — Contact</p>
            <h2 className="mt-8 font-display text-5xl leading-[1.02] tracking-[-0.025em] md:text-7xl text-balance">
              Let's build something meaningful.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75 text-pretty">
              I take on a small number of collaborations each year — research, founding work,
              and product engagements where care for the craft is shared. If that sounds
              like the kind of thing you're working on, I'd like to hear about it.
            </p>
            <a
              href="mailto:bhuvaneshravi1957@gmail.com"
              className="mt-12 inline-flex items-center gap-3 border-b border-primary-foreground/40 pb-1 font-display text-lg transition-colors hover:border-primary-foreground"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="col-span-12 md:col-span-5 md:pt-8">
            <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
                      {c.label}
                    </span>
                    <span className="flex items-center gap-3 font-display text-base">
                      {c.value}
                      <ArrowUpRight className="h-4 w-4 opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
