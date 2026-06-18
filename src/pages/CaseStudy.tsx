import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProject, projects } from "@/lib/projects";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} — Bhuvanesh Ravi`;
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <div className="editorial-container py-40 text-center">
          <p className="mono-label">Not found</p>
          <h1 className="mt-6 font-display text-4xl">This case study doesn't exist.</h1>
          <Link to="/" className="mt-8 inline-block link-underline font-mono text-[11px] uppercase tracking-[0.18em]">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  const next = projects[(projects.findIndex((p) => p.slug === slug) + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <article>
        {/* Header */}
        <header className="border-b border-rule">
          <div className="editorial-container pt-16 md:pt-24 pb-16 md:pb-24">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to work
            </Link>

            <div className="mt-10 grid grid-cols-12 gap-x-10 gap-y-8">
              <div className="col-span-12 md:col-span-8">
                <p className="mono-label">
                  Case {project.number} · {project.category} · {project.year}
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-[-0.025em] md:text-7xl text-balance">
                  {project.title}
                </h1>
              </div>
              <div className="col-span-12 md:col-span-4 md:pt-2">
                <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Sections */}
        <div className="editorial-container py-20 md:py-28">
          <Section label="01" title="Overview">
            <p>{project.overview}</p>
          </Section>

          <Section label="02" title="Challenge">
            <p>{project.challenge}</p>
          </Section>

          <Section label="03" title="Process">
            <ol className="space-y-6">
              {project.process.map((step, i) => (
                <li key={i} className="grid grid-cols-12 gap-x-6">
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 md:col-span-11">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section label="04" title="Outcome">
            <p>{project.outcome}</p>
          </Section>

          <Section label="05" title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-sm border border-rule px-3 py-1.5 font-mono text-xs text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Next */}
        <div className="border-t border-rule">
          <Link to={`/work/${next.slug}`} className="group block">
            <div className="editorial-container grid grid-cols-12 items-baseline gap-x-6 py-16">
              <span className="col-span-12 md:col-span-3 mono-label">Next case study</span>
              <span className="col-span-10 md:col-span-8 font-display text-4xl tracking-[-0.02em] transition-colors group-hover:text-primary md:text-5xl">
                {next.title}
              </span>
              <ArrowUpRight className="col-span-2 md:col-span-1 ml-auto h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

const Section = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="grid grid-cols-12 gap-x-10 gap-y-6 border-t border-rule py-14 first:border-t-0 first:pt-0">
    <div className="col-span-12 md:col-span-3">
      <p className="mono-label">§ {label}</p>
      <h2 className="mt-3 font-display text-2xl tracking-[-0.015em]">{title}</h2>
    </div>
    <div className="col-span-12 md:col-span-9 text-lg leading-relaxed text-foreground/85 text-pretty">
      {children}
    </div>
  </section>
);

export default CaseStudy;
