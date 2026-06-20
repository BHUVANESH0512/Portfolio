import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  const contacts = [
    {
      label: "EMAIL",
      value: "bhuvaneshravi1957@gmail.com",
      href: "mailto:bhuvaneshravi1957@gmail.com",
      icon: <Mail className="h-6 w-6 text-primary" />,
    },
    {
      label: "GITHUB",
      value: "@BHUVANESH0512",
      href: "https://github.com/BHUVANESH0512",
      icon: <Github className="h-6 w-6 text-primary" />,
    },
    {
      label: "LINKEDIN",
      value: "in/bhuvaneshravi57",
      href: "https://www.linkedin.com/in/bhuvaneshravi57/",
      icon: <Linkedin className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-16 border-t border-rule bg-background text-foreground">
      <div className="editorial-container pt-8 pb-6 md:pt-10 md:pb-8">
        <div className="flex flex-col">
          <div className="flex flex-col items-start select-none mb-3 md:mb-4">
            <span className="font-display text-6xl font-bold leading-none tracking-tighter text-primary/15 md:text-[120px]">
              07
            </span>
            <span className="font-display text-xl md:text-4xl font-bold tracking-[-0.02em] text-primary -mt-1 mb-1 md:-mt-2 md:mb-2">
              CONTACT
            </span>
          </div>

          <h2 className="font-display text-2xl leading-[1.02] tracking-[-0.025em] md:text-7xl lg:text-[80px] text-primary text-balance animate-rise">
            Let's build something durable.
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground text-pretty animate-rise md:mt-4 md:text-xl">
            I take on a small number of collaborations each year — research, founding work,
            and product engagements where care for the craft is shared. If that sounds
            like the kind of thing you're working on, I'd like to hear about it.
          </p>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 border border-rule divide-y sm:divide-y-0 sm:divide-x divide-rule rounded-sm bg-card/10 overflow-hidden md:mt-8">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col justify-between p-4 md:p-10 h-32 md:h-56 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  {c.icon}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground md:h-5 md:w-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/80 block md:text-[11px]">
                    {c.label}
                  </span>
                  <span className="font-display text-sm font-medium text-foreground mt-1 block break-all md:mt-2 md:text-xl group-hover:text-primary transition-colors duration-300">
                    {c.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
