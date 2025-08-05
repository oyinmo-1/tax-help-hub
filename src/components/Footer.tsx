const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-sm">
            © 2025 Internal Revenue Service | U.S. Department of the Treasury
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Official U.S. Government Website</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Accessibility</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">FOIA</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Español</a>
          </div>
          <div className="text-xs text-gray-300 pt-4">
            This is a support website inspired by IRS.gov
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;