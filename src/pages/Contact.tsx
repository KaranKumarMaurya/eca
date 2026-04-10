import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import contactHero from "@/assets/get-involved.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-[320px] md:h-[380px] flex items-center text-primary-foreground">
          <img
            src={contactHero}
            alt="Contact us"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-overlay-strong" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Reach Out
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/85 text-lg max-w-3xl">
              We'd love to hear from you. Reach out to learn more about our work or
              explore partnership opportunities.
            </p>
          </div>
        </section>

        <section id="get-in-touch" className="section-padding bg-background">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
            <article className="rounded-xl bg-gradient-to-br from-primary to-foreground text-primary-foreground p-8 shadow-xl shadow-black/20">
              <h2 className="text-3xl font-heading font-semibold mb-6">Get in Touch</h2>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </span>
                  <div>
                    <p className="font-medium">Office Location</p>
                    <p className="text-primary-foreground/80 text-sm">
                      Kakuma, Turkana West County, Kenya
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-secondary" />
                  </span>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-primary-foreground/80 text-sm">+254 115 545 165</p>
                    <p className="text-primary-foreground/80 text-sm">+254 757 215 688</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-secondary" />
                  </span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-primary-foreground/80 text-sm">
                      Educationandclimateadvocacy@gmail.com
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4 text-secondary" />
                  </span>
                  <div>
                    <p className="font-medium">Social Media</p>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-primary-foreground/80 text-sm underline">
                      Follow us on Facebook
                    </a>
                  </div>
                </li>
              </ul>
            </article>

            <article className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-6">
                Send a Message
              </h2>

              <form id="contact-form" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more..."
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href="mailto:Educationandclimateadvocacy@gmail.com?subject=Website%20Inquiry">
                    Send Message
                  </a>
                </Button>
              </form>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
