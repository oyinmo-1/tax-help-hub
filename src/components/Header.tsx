import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About IRS" },
    { path: "/faq", label: "FAQs" },
    { path: "/refund-status", label: "Refund Status" },
    { path: "/forms", label: "Forms Help" },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-xl">IRS</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-serif font-bold text-xl">Internal Revenue Service</h1>
              <p className="text-sm opacity-90">Official Support Portal</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-accent transition-colors ${
                  location.pathname === item.path ? "text-accent border-b-2 border-accent" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button variant="secondary" className="hidden md:flex">
            Contact Support
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;