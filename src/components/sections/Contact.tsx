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
    <section id="contact" className="scroll-mt-24 border-t border-rule bg-background text-foreground">
      <div className="editorial-container pt-24 pb-12 md:pt-36 md:pb-16">
        <div className="flex flex-col">
          <div className="border-b border-rule pb-4 mb-12">
            <p className="mono-label">§ 07 — Contact</p>
          </div>
          
          <h2 className="font-display text-5xl leading-[1.02] tracking-[-0.025em] sm:text-6xl md:text-7xl lg:text-[80px] text-primary text-balance animate-rise">
            Let's build something durable.
          </h2>
          
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty animate-rise">
            I take on a small number of collaborations each year — research, founding work,
            and product engagements where care for the craft is shared. If that sounds
            like the kind of thing you're working on, I'd like to hear about it.
          </p>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border border-rule divide-y sm:divide-y-0 sm:divide-x divide-rule rounded-sm bg-card/10 overflow-hidden">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col justify-between p-8 md:p-10 h-48 md:h-56 hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  {c.icon}
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div>
                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground/80 block">
                    {c.label}
                  </span>
                  <span className="font-display text-lg md:text-xl font-medium text-foreground mt-2 block break-all group-hover:text-primary transition-colors duration-300">
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
