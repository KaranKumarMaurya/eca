import { Sprout, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "Educationandclimateadvocacy@gmail.com";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link
              to="/"
              className="group mb-6 flex items-center gap-2 rounded-lg outline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Sprout className="h-5 w-5 text-secondary-foreground" strokeWidth={2} aria-hidden />
              </div>
              <span className="text-xl font-heading font-bold">Education and Climate Advocacy</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Advocacy for a Resilient Society. Empowering youth, children, and
              vulnerable communities in Kakuma and Turkana West County, Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-secondary transition-colors">Programs</Link></li>
              <li><Link to="/mission-vision#core-values" className="hover:text-secondary transition-colors">Core Values</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Get Started</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/mission-vision" className="hover:text-secondary transition-colors">Mission & Vision</Link></li>
              <li><Link to="/mission-vision#leadership" className="hover:text-secondary transition-colors">Leadership</Link></li>
              <li><Link to="/membership" className="hover:text-secondary transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kakuma%2C%20Turkana%20West%20County%2C%20Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-secondary hover:underline"
                >
                  Kakuma, Turkana West County, Kenya
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" aria-hidden />
                <span className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <a
                    href="tel:+254115545165"
                    className="underline-offset-4 transition-colors hover:text-secondary hover:underline"
                  >
                    +254 115 545 165
                  </a>
                  <span className="text-background/35" aria-hidden>
                    /
                  </span>
                  <a
                    href="tel:+254757215688"
                    className="underline-offset-4 transition-colors hover:text-secondary hover:underline"
                  >
                    +254 757 215 688
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" aria-hidden />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all underline-offset-4 transition-colors hover:text-secondary hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 border-t border-background/10 pt-8 md:flex-row md:justify-between md:gap-4">
          <p className="text-center text-sm text-background/40 md:text-left">
            © {new Date().getFullYear()} Education and Climate Advocacy (ECA). All rights reserved.
          </p>

          <div className="flex justify-center md:order-none">
            <a
              href="https://navikx.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Designed by NavikX Technologies — opens navikx.com in a new tab"
              className="group inline-flex max-w-[calc(100vw-3rem)] items-center gap-2 rounded-full border border-background/20 bg-background/10 px-2 py-1.5 pl-1.5 shadow-sm backdrop-blur-sm transition hover:border-secondary/40 hover:bg-background/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:gap-2.5 sm:px-2.5 sm:py-2 sm:pl-2"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 text-[11px] font-bold tracking-tight text-white shadow-inner ring-1 ring-white/20 sm:h-9 sm:w-9 sm:text-xs"
                aria-hidden
              >
                NX
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-background/55 sm:text-[10px]">
                  Designed by
                </span>
                <span className="block truncate font-body text-sm font-bold text-background sm:text-[0.95rem]">
                  NavikX Technologies
                </span>
              </span>
              <Sparkles
                className="h-3.5 w-3.5 shrink-0 text-amber-400/95 transition group-hover:text-amber-300 sm:h-4 sm:w-4"
                strokeWidth={1.5}
                aria-hidden
              />
            </a>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end"
            aria-label="Legal links"
          >
            <Link
              to="/terms-and-conditions"
              className="text-sm font-medium text-background/55 underline-offset-4 transition-colors hover:text-secondary hover:underline"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/privacy-policy"
              className="text-sm font-medium text-background/55 underline-offset-4 transition-colors hover:text-secondary hover:underline"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
