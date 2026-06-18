import { Link } from "react-router-dom";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const SelectedWork = () => {
  return (
    <section id="work" className="scroll-mt-24">
      <div className="editorial-container pt-24 md:pt-32 pb-8">
        <div className="grid grid-cols-12 gap-x-10 gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="mono-label">§ 02 — Projects</p>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-3xl leading-tight tracking-[-0.02em] sm:text-4xl md:text-5xl text-balance">
              Three projects that capture how I think about products, systems, and the people who use them.
            </h2>
            
            <ul className="hairline mt-12">
              {projects.map((p) => (
                <li key={p.slug} className="border-b border-rule">
                  <Link
                    to={`/work/${p.slug}`}
                    className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-3 py-10 md:py-14 transition-colors"
                  >
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-mono text-xs text-muted-foreground">{p.number}</span>
                    </div>
                    <div className="col-span-10 md:col-span-5">
                      <h3 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] transition-colors group-hover:text-primary md:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {p.category} · {p.year}
                      </p>
                    </div>
                    <div className="col-span-10 col-start-3 md:col-span-5 md:col-start-7">
                      <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                        {p.description}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-1 md:text-right">
                      <ArrowUpRight className="inline-block h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
