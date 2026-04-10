import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  CircleDot,
  ArrowRight,
  Clock,
  MessageSquare,
  Loader2,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import contactHero from "@/assets/get-involved.jpg";

const EMAIL = "Educationandclimateadvocacy@gmail.com";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }

    const subj = subject.trim() || "Website inquiry — ECA";
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
      const href = `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      toast.message("Opening your email app…", {
        description: `Add VITE_WEB3FORMS_ACCESS_KEY to send from the site without mailto. Get a free key at web3forms.com → ${EMAIL}.`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: subj,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again or email us directly.");
      }

      toast.success("Message sent", {
        description: "We’ll get back to you as soon as we can.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Please try again or use the email address on the left.";
      toast.error("Could not send", { description: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[min(52vh,560px)] overflow-hidden border-b border-border/80">
          <img
            src={contactHero}
            alt="Volunteers organizing supplies for community distribution"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/20 to-primary/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-secondary/15 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[min(52vh,560px)] max-w-6xl flex-col justify-end px-6 pb-12 pt-24 md:justify-center md:pb-16 md:pt-28 lg:px-8">
            <div className="animate-fade-in motion-reduce:animate-none">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
                Reach out
              </div>
              <h1 className="max-w-3xl text-balance font-heading text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.15rem]">
                Contact us
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white md:text-xl">
                We&apos;d love to hear from you—whether you&apos;re exploring partnerships, volunteering,
                media, or a simple question about our work in Kakuma and Turkana West.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Partnerships
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Volunteering
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Programs &amp; visits
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="border-b border-border/60 bg-muted/25 px-6 py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 text-sm md:justify-between">
            <p className="text-muted-foreground">
              Looking for context first? Browse our work, then write to us.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm" className="gap-1.5">
                <Link to="/programs">
                  Programs
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-1.5">
                <Link to="/stories">
                  Stories
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-1.5">
                <Link to="/mission-vision">
                  Mission &amp; vision
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="get-in-touch" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Get in touch */}
            <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-foreground p-8 text-primary-foreground shadow-2xl shadow-primary/20 ring-1 ring-primary/30 md:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-heading text-3xl font-bold md:text-4xl">Get in touch</h2>
                <p className="mt-3 max-w-sm text-sm text-primary-foreground/80">
                  Prefer WhatsApp or phone for something urgent? Call the numbers below. For longer
                  requests, use the form—it sends straight to our inbox.
                </p>

                <ul className="mt-10 space-y-6">
                  <li className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/12 ring-2 ring-secondary/35">
                      <MapPin className="h-5 w-5 text-secondary" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-secondary/90">
                        Office location
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-primary-foreground/90">
                        Kakuma, Turkana West County, Kenya
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/12 ring-2 ring-secondary/35">
                      <Phone className="h-5 w-5 text-secondary" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-secondary/90">
                        Phone
                      </p>
                      <a
                        href="tel:+254115545165"
                        className="mt-1 block text-sm text-primary-foreground/90 transition hover:text-secondary"
                      >
                        +254 115 545 165
                      </a>
                      <a
                        href="tel:+254757215688"
                        className="mt-1 block text-sm text-primary-foreground/90 transition hover:text-secondary"
                      >
                        +254 757 215 688
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/12 ring-2 ring-secondary/35">
                      <Mail className="h-5 w-5 text-secondary" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-secondary/90">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-1 break-all text-sm text-primary-foreground/90 underline-offset-4 transition hover:text-secondary hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 flex flex-wrap gap-3 border-t border-primary-foreground/15 pt-8">
                  <div className="flex items-center gap-2 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-3 text-sm">
                    <Clock className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                    <span className="text-primary-foreground/85">
                      We aim to reply within a few working days.
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-3 text-sm">
                    <MessageSquare className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                    <span className="text-primary-foreground/85">
                      Mention partnerships or media in your subject line.
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Form */}
            <article className="rounded-3xl border border-border/80 bg-card p-6 shadow-xl ring-1 ring-border/50 md:p-10">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Send a message
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Your details are only used to respond to this inquiry. Submit sends the message to our
                team.
              </p>

              <form id="contact-form" className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject (optional)</Label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Partnership, volunteering, media…"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us how we can help…"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[140px] resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2 shadow-lg shadow-primary/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden />
                      Send message
                    </>
                  )}
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
