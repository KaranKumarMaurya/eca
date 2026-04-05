import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">HopeBridge</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Empowering communities worldwide through sustainable development, 
              education, healthcare, and clean water programs since 2005.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-background/70" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {["About Us", "Our Programs", "Impact Reports", "Annual Report", "Careers", "Press & Media"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {["Donate", "Volunteer", "Sponsor a Child", "Corporate Partners", "Fundraise", "Events"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-background/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>1250 Hope Avenue, Suite 400<br />New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>+1 (800) 555-HOPE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>info@hopebridge.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © 2025 HopeBridge Foundation. All rights reserved. EIN: 47-1234567
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
