import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission & Vision", href: "/mission-vision" },
  { label: "Programs", href: "/programs" },
  { label: "Stories", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground">
              Education and Climate Advocacy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary px-3 py-1.5 rounded-md shadow-sm"
                    : "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                }
                end={link.href === "/"}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/membership">Volunteer</Link>
            </Button>
            <Button asChild size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link to="/contact">
                <Heart className="w-4 h-4 mr-1" />
                Donate
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "block text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-md px-3 py-2"
                    : "block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                }
                onClick={() => setIsOpen(false)}
                end={link.href === "/"}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-3">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link to="/membership" onClick={() => setIsOpen(false)}>Volunteer</Link>
              </Button>
              <Button asChild size="sm" className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
