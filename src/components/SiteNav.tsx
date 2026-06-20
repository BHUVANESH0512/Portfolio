import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#writing", label: "Research" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export const SiteNav = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="editorial-container flex h-14 sm:h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-muted-foreground">BR</span>
          <span className="hidden font-display text-xs sm:text-sm font-medium sm:inline">Bhuvanesh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={onHome ? l.href : `/${l.href}`}
              className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-foreground link-underline sm:inline"
          >
            Get in touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 touch-target"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-rule bg-background/95">
          <div className="editorial-container flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={onHome ? l.href : `/${l.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors py-2 px-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-primary transition-colors py-2 px-2"
            >
              Get in touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
