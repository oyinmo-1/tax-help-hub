const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-foreground transition-colors">
              Accessibility
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              FOIA
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Español
            </a>
          </div>
          <div className="text-center text-sm">
            <p>© 2025 Internal Revenue Service | U.S. Department of the Treasury</p>
            <p className="mt-1">
              Official U.S. Government Website | This is a support website inspired by IRS.gov
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;