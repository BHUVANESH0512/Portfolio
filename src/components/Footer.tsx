export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="editorial-container grid grid-cols-1 gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mono-label">Colophon</p>
          <p className="mt-4 max-w-md font-display text-lg leading-snug">
            Set in IBM Plex Sans and Source Sans 3. Hand-built, slowly improved, last revised {new Date().getFullYear()}.
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="mono-label">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-base">
            <li><a className="link-underline" href="https://github.com/BHUVANESH0512" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="link-underline" href="https://www.linkedin.com/in/bhuvaneshravi57/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="link-underline" href="mailto:contact@bhuvaneshravi.dev">Email</a></li>
          </ul>
        </div>
        <div className="md:col-span-3 md:text-right">
          <p className="mono-label">© {new Date().getFullYear()}</p>
          <p className="mt-4 text-sm text-muted-foreground">Bhuvanesh Ravi.<br />All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
