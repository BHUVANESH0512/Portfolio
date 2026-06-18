export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="editorial-container py-14 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bhuvanesh. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a className="link-underline" href="https://github.com/BHUVANESH0512" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link-underline" href="https://www.linkedin.com/in/bhuvaneshravi57/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link-underline" href="mailto:bhuvaneshravi1957@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
