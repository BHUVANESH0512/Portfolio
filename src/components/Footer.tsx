export const Footer = () => {
  return (
    <footer className="mt-4 border-t border-rule py-6 bg-background">
      <div className="editorial-container flex justify-center sm:justify-start items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Bhuvanesh. All rights reserved.</p>
      </div>
    </footer>
  );
};
