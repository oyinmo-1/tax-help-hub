import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">IRS</span>
            </div>
            <div>
              <h1 className="text-xl font-merriweather font-bold">Internal Revenue Service</h1>
              <p className="text-sm opacity-90">Official Support Portal</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`}
            >
              About IRS
            </Link>
            <Link 
              to="/faq" 
              className={`hover:text-accent transition-colors ${isActive('/faq') ? 'text-accent' : ''}`}
            >
              FAQs
            </Link>
            <Link 
              to="/refund-status" 
              className={`hover:text-accent transition-colors ${isActive('/refund-status') ? 'text-accent' : ''}`}
            >
              Refund Status
            </Link>
            <Link 
              to="/forms" 
              className={`hover:text-accent transition-colors ${isActive('/forms') ? 'text-accent' : ''}`}
            >
              Forms Help
            </Link>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
              Contact Support
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" className="md:hidden border-accent text-accent">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;