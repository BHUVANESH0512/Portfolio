import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export const SiteNav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="editorial-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">BR</span>
          <span className="hidden font-display text-sm font-medium sm:inline">Bhuvanesh Ravi</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={onHome ? l.href : `/${l.href}`}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-foreground link-underline sm:inline"
          >
            Get in touch
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
