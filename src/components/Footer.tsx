import { Heart, Mail, Phone, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">Education and Climate Advocacy</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Advocacy for a Resilient Society. Empowering youth, children, and
              vulnerable communities in Kakuma and Turkana West County, Kenya.
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
            >
              <Facebook className="w-4 h-4 text-background/70" />
            </a>
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
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>Kakuma, Turkana West County, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>+254 115 545 165 / +254 757 215 688</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>Educationandclimateadvocacy@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-secondary shrink-0" />
                <span>Follow us on Facebook</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2026 Education and Climate Advocacy (ECA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
