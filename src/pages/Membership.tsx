import type { ReactNode } from "react";
import {
  Heart,
  Megaphone,
  UserRoundPlus,
  Users,
  CircleDot,
  ChevronDown,
  CheckCircle2,
  Building2,
  HandHeart,
  Gift,
  Share2,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import membershipHero from "@/assets/get-involved.jpg";

const categories = [
  {
    icon: Users,
    title: "General members",
    accent: "from-primary/25 to-primary/5",
    border: "border-t-primary",
    description:
      "Community members aged 18 and above who share ECA's vision and are committed to education and climate advocacy.",
    detail: "Vote in general meetings, stand for leadership, and help shape program priorities.",
  },
  {
    icon: Heart,
    title: "Youth members",
    accent: "from-secondary/30 to-secondary/5",
    border: "border-t-secondary",
    description:
      "Young people aged 15–35 who care about environmental stewardship and community development.",
    detail: "Peer learning, youth-led activities, and pathways into governance over time.",
  },
  {
    icon: Building2,
    title: "Associate members",
    accent: "from-emerald-600/25 to-emerald-600/5",
    border: "border-t-emerald-600",
    description:
      "Organizations, partners, and supporters who collaborate with ECA on shared goals and initiatives.",
    detail: "Structured collaboration—clear roles, timelines, and accountability on both sides.",
  },
];

const joinSteps = [
  {
    n: "01",
    title: "Read our mission & values",
    text: "Make sure ECA's approach fits how you want to contribute—in Kakuma, Turkana West, or as a partner.",
    href: "/mission-vision",
  },
  {
    n: "02",
    title: "Choose your membership type",
    text: "General, youth, or associate—each has different rights and ways to participate.",
    href: "#categories",
  },
  {
    n: "03",
    title: "Reach out to get started",
    text: "We’ll walk you through registration, dues (if any), and meeting rhythms.",
    href: "/contact",
  },
];

const supportWays = [
  {
    icon: HandHeart,
    title: "Volunteer",
    text: "Share time and skills with programs that match your capacity.",
    to: "/contact",
    cta: "Offer your skills",
  },
  {
    icon: Gift,
    title: "Donate",
    text: "Help sustain education, climate action, and youth-led initiatives.",
    to: "/contact",
    cta: "Ask how to give",
  },
  {
    icon: UserRoundPlus,
    title: "Partner",
    text: "Collaborate as an organization on shared programs and reporting.",
    to: "/contact",
    cta: "Start a conversation",
  },
  {
    icon: Share2,
    title: "Spread the word",
    text: "Follow and share our mission to raise awareness in Turkana West and beyond.",
    to: "/stories",
    cta: "Read stories",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" aria-hidden />
      {children}
    </span>
  );
}

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[min(50vh,520px)] overflow-hidden border-b border-border/80">
          <img
            src={membershipHero}
            alt="Volunteers preparing supplies and community support materials"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/22 to-primary/12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-secondary/15 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[min(50vh,520px)] max-w-6xl flex-col justify-end px-6 pb-12 pt-24 md:justify-center md:pb-16 md:pt-28 lg:px-8">
            <div className="animate-fade-in motion-reduce:animate-none">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
                Join the movement
              </div>
              <h1 className="max-w-4xl text-balance font-heading text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.15rem]">
                Get involved
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white md:text-xl">
                Join a community of changemakers building a more resilient future for Kakuma and
                Turkana West—through education, climate action, and accountable local governance.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Membership", "Volunteering", "Partnerships"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="#categories"
              className="mt-10 inline-flex items-center gap-2 self-start text-sm font-medium text-white transition hover:text-white/90 md:mt-12"
            >
              <span>Explore membership types</span>
              <ChevronDown className="h-5 w-5 motion-safe:animate-float" aria-hidden />
            </a>
          </div>
        </section>

        {/* Intro */}
        <section className="border-b border-border/60 bg-gradient-to-b from-background to-muted/20 px-6 py-10 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Community first</SectionLabel>
            <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Membership is how we stay accountable
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              ECA is a Kenyan community-based organization. Members set direction, elect leadership,
              and keep programs honest—especially when resources are tight and seasons are hard.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="scroll-mt-24 px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center md:mb-14">
              <SectionLabel>Choose your path</SectionLabel>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Membership categories
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Three ways to belong—each with clear expectations. Ask us if you&apos;re unsure which
                fits best.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 md:gap-5">
              {categories.map((cat) => (
                <article
                  key={cat.title}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg ring-1 ring-border/40 transition hover:-translate-y-1 hover:shadow-2xl hover:ring-primary/20 ${cat.border} border-t-[5px]`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-90`}
                    aria-hidden
                  />
                  <div className="relative flex flex-1 flex-col p-7 md:p-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-background/90 text-primary shadow-inner ring-1 ring-border/60 transition group-hover:scale-105">
                      <cat.icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
                      {cat.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    <p className="mt-4 border-t border-border/60 pt-4 text-sm font-medium text-foreground/90">
                      {cat.detail}
                    </p>
                    <Button asChild className="mt-6 w-full shadow-md" variant="default">
                      <Link to="/contact" className="gap-2">
                        Enquire about this category
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rights & responsibilities */}
        <section className="border-y border-border/60 bg-muted/25 px-6 py-14 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-xl ring-1 ring-border/50">
              <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-emerald-700" aria-hidden />
              <div className="p-8 md:p-10">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ClipboardList className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                      Member rights &amp; responsibilities
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Summarized for clarity—full detail lives in our constitution and bylaws.
                    </p>
                  </div>
                </div>
                <div className="grid gap-10 md:grid-cols-2 md:gap-12">
                  <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">
                      Rights
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Participate in general meetings and vote",
                        "Stand for election to leadership positions",
                        "Access organizational information and benefits as defined by policy",
                        "Receive updates on activities that affect members",
                      ].map((line) => (
                        <li key={line} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary">
                      Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Uphold ECA's mission, vision, and values",
                        "Participate constructively in programs and meetings",
                        "Contribute to a respectful, safe culture for all members",
                        "Respect democratic governance and agreed decisions",
                      ].map((line) => (
                        <li key={line} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to join */}
        <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 md:mb-12">
              <SectionLabel>Process</SectionLabel>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                How to join
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                No surprise steps—reach out, ask questions, then formalize membership with the team.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {joinSteps.map((step) => (
                <div
                  key={step.n}
                  className="relative rounded-2xl border border-border/80 bg-gradient-to-br from-card to-background p-6 shadow-sm ring-1 ring-border/40 transition hover:border-primary/25 hover:shadow-md md:p-7"
                >
                  <span className="font-mono text-xs font-bold text-muted-foreground">{step.n}</span>
                  <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  <Link
                    to={step.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Go
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to support */}
        <section className="border-t border-border/60 bg-gradient-to-b from-muted/30 to-background px-6 py-14 md:py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Ways to support ECA
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
              Membership is one path—you can also help without joining formally.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {supportWays.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.text}</p>
                  <Button asChild variant="outline" size="sm" className="mt-5 w-full">
                    <Link to={item.to}>{item.cta}</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-primary px-6 py-12 text-primary-foreground md:py-14">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">Ready to take the next step?</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/85">
                Tell us whether you&apos;re interested in membership, volunteering, or partnership—we&apos;ll
                respond with clear next steps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90"
              >
                <Link to="/contact" className="gap-2">
                  Contact us
                  <Megaphone className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/programs">Explore programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Membership;
