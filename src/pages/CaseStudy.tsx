import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getProject, PROJECTS } from "@/lib/projects";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Main router component
───────────────────────────────────────────────────────────── */
const CaseStudy = () => {
  const navigate = useNavigate();
  const { slug = "" } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} — Bhuvanesh`;
    sessionStorage.setItem("splash-seen", "true");
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <div className="editorial-container py-16 sm:py-24 md:py-40 text-center">
          <p className="mono-label text-[9px] sm:text-[10px]">Not found</p>
          <h1 className="mt-4 sm:mt-6 font-display text-2xl sm:text-4xl">This case study doesn't exist.</h1>
          <Link to="/" className="mt-4 sm:mt-8 inline-block link-underline font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em]">
            ← Back home
          </Link>
        </div>
      </div>
    );
  }

  // Screenshot-first layout: minimal gallery page
  if (project.screenshots && project.screenshots.length > 0) {
    return <ScreenshotGalleryPage project={project} />;
  }

  const next = PROJECTS[(PROJECTS.findIndex((p) => p.slug === slug) + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <article>
        {/* Header */}
        <header className="border-b border-rule">
          <div className="editorial-container pt-8 sm:pt-12 md:pt-24 pb-8 sm:pb-12 md:pb-24">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground cursor-pointer bg-transparent touch-target"
            >
              <ArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Back to work
            </button>

            <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-12 gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-4 sm:gap-y-6 md:gap-y-8">
              <div className="col-span-12 md:col-span-8">
                <p className="mono-label text-[9px] sm:text-[10px]">
                  Case {project.number} · {project.category} · {project.year}
                </p>
                <h1 className="mt-3 sm:mt-4 md:mt-6 font-display text-2xl sm:text-3xl md:text-5xl leading-[1.02] tracking-[-0.025em] md:text-7xl text-balance">
                  {project.title}
                </h1>
              </div>
              <div className="col-span-12 md:col-span-4 md:pt-2">
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
                  {project.description}
                </p>
                {project.github && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.18em] text-foreground hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-1 touch-target"
                    >
                      View Repository <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        {project.heroImage && (
          <div className="editorial-container pt-6 sm:pt-8 md:pt-10 pb-0 px-2 sm:px-4 md:px-0">
            <div
              style={{
                background: "#111",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 1px #7ec8b030, 0 20px 60px rgba(126,200,176,0.08)",
                padding: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={project.heroImage}
                alt={`${project.title} screenshot`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "520px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  display: "block",
                  animation: "heroZoomIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              />
            </div>
            <style>{`
              @keyframes heroZoomIn {
                from { transform: scale(1.02); opacity: 0; }
                to   { transform: scale(1);    opacity: 1; }
              }
            `}</style>
          </div>
        )}

        {/* Sections */}
        <div className="editorial-container py-12 sm:py-16 md:py-28">
          <Section label="01" title="Overview">
            <p>{project.overview}</p>
          </Section>

          <Section label="02" title="Challenge">
            <p>{project.challenge}</p>
          </Section>

          <Section label="03" title="Process">
            <ol className="space-y-4 sm:space-y-6">
              {project.process.map((step, i) => (
                <li key={i} className="grid grid-cols-12 gap-x-3 sm:gap-x-6">
                  <span className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 md:col-span-11 text-sm sm:text-base">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section label="04" title="Outcome">
            <p>{project.outcome}</p>
          </Section>

          <Section label="05" title="Technologies">
            <ul className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-sm border border-rule px-2 py-1 sm:px-3 sm:py-1.5 font-mono text-[10px] sm:text-xs text-foreground/80"
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
            <div className="editorial-container grid grid-cols-12 items-baseline gap-x-3 sm:gap-x-6 md:gap-x-6 py-12 sm:py-16 md:py-16">
              <span className="col-span-12 md:col-span-3 mono-label text-[9px] sm:text-[10px]">Next case study</span>
              <span className="col-span-10 md:col-span-8 font-display text-xl sm:text-2xl md:text-4xl tracking-[-0.02em] transition-colors group-hover:text-primary md:text-5xl">
                {next.title}
              </span>
              <ArrowUpRight className="col-span-2 md:col-span-1 ml-auto h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Screenshot Gallery Page — minimal, arrows, tech stack
───────────────────────────────────────────────────────────── */
const ScreenshotGalleryPage = ({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const imgs = project.screenshots as string[];
  const techs = project.technologies;
  const githubUrl = project.github;
  const githubLabel = project.githubLabel;

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % imgs.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (idx: number) => {
    setActive(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .gallery-img-active {
          animation: fadeSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .github-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 8px 16px;
          font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 500;
          letter-spacing: 0.01em;
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          white-space: nowrap;
          min-height: 40px;
          display: inline-flex;
        }
        .github-pill:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.28);
          color: #fff;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 8px 14px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          min-height: 40px;
          touch-action: manipulation;
        }
        .back-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }
        .nav-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(40px, 10vw, 48px);
          height: clamp(40px, 10vw, 48px);
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          flex-shrink: 0;
          touch-action: manipulation;
        }
        .nav-arrow:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.35);
          color: #fff;
          transform: scale(1.08);
        }
        .nav-arrow:active { transform: scale(0.95); }
        .dot-btn {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
          padding: 0;
          min-width: 32px;
          min-height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot-btn::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: block;
        }
        .dot-btn.active::after { background: #fff; transform: scale(1.3); }
        .dot-btn:not(.active)::after { background: rgba(255,255,255,0.25); }
        .dot-btn:not(.active):hover::after { background: rgba(255,255,255,0.5); }
        .tech-chip {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          font-family: 'JetBrains Mono', 'Fira Mono', monospace;
          font-size: clamp(10px, 1.5vw, 11px);
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.6);
          transition: background 0.18s, color 0.18s, border-color 0.18s;
          text-transform: uppercase;
        }
        .tech-chip:hover {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,0.22);
        }
      `}</style>

      {/* ── Top bar ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(12px, 3vw, 20px) clamp(16px, 4vw, 32px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <button onClick={() => navigate(-1)} className="back-btn">
          <ArrowLeft style={{ width: 16, height: 16 }} />
          Back
        </button>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="github-pill"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-1.02-1.5.015-.765.555-1.095 1.005-1.23.45-.135 1.14-.18 1.62.135.45.315 1.065.885 1.18 1.32.12.63.765 1.29 1.35 1.395.54.105 1.045.03 1.38-.2.135-.765.555-1.44 1.08-1.98-3.3-.3-6.7-1.64-6.7-7.215 0-1.59.465-3.09 1.335-4.29-.135-.3-.6-1.5.135-3.12 0 0 1.08-.345 3.54 1.34.96-.27 2.04-.405 3.12-.405 1.08 0 2.16.135 3.12.405 2.46-1.685 3.54-1.34 3.54-1.34.735 1.62.27 2.82.135 3.12.87 1.2 1.335 2.7 1.335 4.29 0 5.58-3.4 6.915-6.7 7.215.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {githubLabel ?? `${project.title}  ·  Read Documentation on Github`}
            <ExternalLink style={{ width: 14, height: 14, opacity: 0.6 }} />
          </a>
        )}
      </div>

      {/* ── Gallery ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(20px, 5vw, 40px) clamp(16px, 4vw, 24px) clamp(30px, 8vw, 52px)",
        }}
      >
        {/* Left arrow · image · right arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 3vw, 20px)",
            width: "100%",
            maxWidth: "1080px",
          }}
        >
          <button
            className="nav-arrow"
            onClick={() => goTo((active - 1 + imgs.length) % imgs.length)}
            aria-label="Previous screenshot"
          >
            <ArrowLeft style={{ width: 22, height: 22 }} />
          </button>

          <div
            style={{
              flex: 1,
              background: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              boxShadow: "0 0 0 1px rgba(126,200,176,0.10), 0 32px 80px rgba(0,0,0,0.55)",
              overflow: "hidden",
              padding: "10px",
            }}
          >
            <img
              key={active}
              src={imgs[active]}
              alt={`Screenshot ${active + 1}`}
              className="gallery-img-active"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "64vh",
                objectFit: "contain",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </div>

          <button
            className="nav-arrow"
            onClick={() => goTo((active + 1) % imgs.length)}
            aria-label="Next screenshot"
          >
            <ArrowUpRight style={{ width: 22, height: 22, transform: "rotate(45deg)" }} />
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "22px", flexWrap: "wrap", justifyContent: "center" }}>
          {imgs.map((_, i) => (
            <button
              key={i}
              className={`dot-btn${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>

        {/* Tech stack */}
        {techs && techs.length > 0 && (
          <div
            style={{
              marginTop: "44px",
              width: "100%",
              maxWidth: "960px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                margin: 0,
              }}
            >
              Tech Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
              {techs.map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   Section component (editorial layout)
───────────────────────────────────────────────────────────── */
const Section = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="grid grid-cols-12 gap-x-3 sm:gap-x-6 md:gap-x-10 gap-y-4 sm:gap-y-6 border-t border-rule py-8 sm:py-12 md:py-14 first:border-t-0 first:pt-0">
    <div className="col-span-12 md:col-span-3">
      <p className="mono-label text-[9px] sm:text-[10px]">§ {label}</p>
      <h2 className="mt-2 sm:mt-3 font-display text-lg sm:text-xl md:text-2xl tracking-[-0.015em]">{title}</h2>
    </div>
    <div className="col-span-12 md:col-span-9 text-sm sm:text-base md:text-lg leading-relaxed text-foreground/85 text-pretty">
      {children}
    </div>
  </section>
);

export default CaseStudy;
