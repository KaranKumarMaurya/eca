import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  Shield,
  Users,
  Building2,
  HeartHandshake,
  CircleDot,
  MapPin,
  Scale,
  Layers,
  Vote,
  XCircle,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import aboutHeroBg from "@/assets/about-hero.jpg";
import storyVisual from "@/assets/about-story.jpg";
import climateVisual from "@/assets/about-climate.jpg";

const toc = [
  { id: "glance", label: "At a glance" },
  { id: "story", label: "Our story" },
  { id: "how-we-work", label: "How we work" },
  { id: "education", label: "Education" },
  { id: "climate", label: "Climate advocacy" },
  { id: "credibility", label: "Trust & partners" },
  { id: "honesty", label: "What we don’t claim" },
  { id: "next", label: "What’s next" },
];

function SectionLabel({ n }: { n: string }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" aria-hidden />
      {n}
    </span>
  );
}

const glanceItems = [
  {
    icon: Scale,
    title: "Legal form",
    blurb: "Kenyan non-profit CBO—not a company or a government agency.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: MapPin,
    title: "Geography",
    blurb: "Kakuma & Turkana West—activities follow where members live.",
    accent: "from-secondary/25 to-secondary/5",
  },
  {
    icon: Layers,
    title: "Twin focus",
    blurb: "Learning + land stewardship in one conversation.",
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Vote,
    title: "Accountability",
    blurb: "Elected leadership; minutes & oversight on request.",
    accent: "from-amber-500/20 to-amber-500/5",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="relative min-h-[min(72vh,820px)] overflow-hidden border-b border-border/80">
          <img
            src={aboutHeroBg}
            alt="Sunset over savanna and acacia trees—land and climate where communities live and learn"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-primary/18"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(ellipse_90%_60%_at_70%_20%,hsl(var(--secondary)/0.25),transparent),radial-gradient(ellipse_70%_50%_at_10%_80%,hsl(var(--primary)/0.2),transparent)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[min(72vh,820px)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:pb-24 md:pt-28 lg:px-8">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
              About us
            </div>
            <h1 className="max-w-4xl font-heading text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              We weave learning and land into one conversation—in Kakuma &amp; Turkana West.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white md:text-xl">
              Education and Climate Advocacy (ECA) is a Kenyan community-based organization rooted in
              Kakuma and Turkana West—where learning and land stewardship belong in the same conversation.
            </p>
          </div>
        </section>

        <div className="mx-auto flex max-w-[90rem] flex-col xl:flex-row xl:items-start">
          <aside className="hidden shrink-0 border-b border-border bg-card/40 px-6 py-10 xl:sticky xl:top-20 xl:block xl:w-[17rem] xl:border-b-0 xl:border-r xl:bg-transparent xl:py-14 xl:pl-8 xl:pr-6">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              On this page
            </p>
            <nav aria-label="About sections">
              <ul className="space-y-1 border-l-2 border-primary/20 pl-4">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-r py-1.5 pl-1 text-sm text-muted-foreground transition hover:bg-primary/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 flex-1">
            {/* At a glance — bento cards */}
            <section
              id="glance"
              className="scroll-mt-24 border-b border-border/70 bg-gradient-to-b from-background to-card/30 px-6 py-14 md:px-10 md:py-16 lg:px-14"
            >
              <SectionLabel n="01" />
              <h2 className="mb-10 font-heading text-3xl font-bold text-foreground md:text-4xl">
                At a glance
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                {glanceItems.map((item) => (
                  <div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br ${item.accent} p-6 shadow-sm transition hover:shadow-md md:p-7`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-background/90 text-primary shadow-sm ring-1 ring-border/60">
                      <item.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Story — image + text + quote card */}
            <section
              id="story"
              className="scroll-mt-24 px-6 py-14 md:px-10 md:py-16 lg:px-14"
            >
              <SectionLabel n="02" />
              <h2 className="mb-10 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Our story
              </h2>
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="relative lg:col-span-5">
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 ring-1 ring-border/60 lg:aspect-[3/4]">
                    <img
                      src={storyVisual}
                      alt="Students learning in a classroom in East Africa"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      width={800}
                      height={1000}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl bg-secondary/90 md:block" aria-hidden />
                </div>
                <div className="space-y-6 lg:col-span-7">
                  <div className="flex flex-wrap gap-2">
                    {["Community-led", "Turkana West", "Kenya-registered"].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <p className="text-[1.02rem] leading-[1.8] text-muted-foreground md:text-lg">
                    Daily life here does not split into “school” and “environment” in separate files.
                    Dry seasons move attendance; charcoal and grazing cross the same ground as
                    children walking to class. ECA keeps one honest conversation—led by people who stay
                    after the tent folds.
                  </p>
                  <div className="relative rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 via-background to-card p-6 md:p-8">
                    <Quote className="absolute right-5 top-5 h-10 w-10 text-secondary/30" aria-hidden />
                    <p className="relative font-heading text-lg italic leading-snug text-foreground md:text-xl">
                      Membership dues, public meetings, and word-of-mouth matter more here than a glossy
                      annual report ever could.
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We grow slowly on purpose—trust is built across seasons, not single fly-in visits.
                  </p>
                </div>
              </div>
            </section>

            {/* How we work — staggered visual cards */}
            <section
              id="how-we-work"
              className="scroll-mt-24 bg-muted/35 px-6 py-14 md:px-10 md:py-16 lg:px-14"
            >
              <SectionLabel n="03" />
              <h2 className="mb-10 font-heading text-3xl font-bold text-foreground md:text-4xl">
                How we work
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Users,
                    title: "Neighbors first",
                    text: "Facilitators come from the communities they serve.",
                    bar: "bg-primary",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Listen, then design",
                    text: "We note what already works before adding anything new.",
                    bar: "bg-secondary",
                  },
                  {
                    icon: Building2,
                    title: "Plain records",
                    text: "Registers and minutes so members—not only donors—can follow along.",
                    bar: "bg-emerald-600",
                  },
                ].map(({ icon: Icon, title, text, bar }, i) => (
                  <div
                    key={title}
                    className="flex gap-0 overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
                  >
                    <div className={`w-1.5 shrink-0 ${bar}`} aria-hidden />
                    <div className="flex flex-1 flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-baseline gap-2">
                          <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                          <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education — split + step checks */}
            <section
              id="education"
              className="scroll-mt-24 px-6 py-14 md:px-10 md:py-16 lg:px-14"
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-background to-primary/[0.06] shadow-lg ring-1 ring-primary/5">
                <div className="grid lg:grid-cols-2">
                  <div className="border-b border-border/60 bg-primary/5 p-8 md:p-10 lg:border-b-0 lg:border-r">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                      <BookOpen className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <SectionLabel n="04" />
                    <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
                      What we mean by education
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      Classrooms where they exist—plus circles and literacy that survives the walk home.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
                    {[
                      "Peer learning—not only top-of-class competition.",
                      "Caregivers heard; teachers & county keep their roles.",
                      "Skills tied to livelihoods without debt for kits.",
                    ].map((line, idx) => (
                      <div
                        key={line}
                        className="flex gap-4 rounded-xl border border-border/60 bg-background/80 p-4"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-sm font-bold text-secondary">
                          {idx + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-muted-foreground">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Climate — split with image */}
            <section
              id="climate"
              className="scroll-mt-24 overflow-hidden bg-foreground text-background"
            >
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center px-6 py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg">
                      <Leaf className="h-7 w-7" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
                      05 — Climate
                    </span>
                  </div>
                  <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
                    Climate advocacy
                  </h2>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {["County letters", "Neighbor agreements", "Plain language"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-primary-foreground/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-background/85 md:text-base">
                    Observations with dates and places. Budgets for water and roads. Agreements on
                    firewood and grazing—so pressure doesn’t always become public fight.
                  </p>
                </div>
                <div className="relative min-h-[300px] lg:min-h-[420px]">
                  <img
                    src={climateVisual}
                    alt="Hands holding soil and a young plant—care for trees and land"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/40 to-transparent lg:bg-gradient-to-t" />
                </div>
              </div>
            </section>

            {/* Credibility — compact icon rows */}
            <section
              id="credibility"
              className="scroll-mt-24 px-6 py-14 md:px-10 md:py-16 lg:px-14"
            >
              <SectionLabel n="06" />
              <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Trust &amp; partners
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Partnership agreements spell out who owns what after a project ends.",
                  "We ask questions before putting logos on banners.",
                  "Mission, vision, and leadership are on the Mission & Vision page.",
                  "Registration and financial questions: reach us through Contact.",
                ].map((line) => (
                  <div
                    key={line}
                    className="flex items-start gap-3 rounded-xl border border-dashed border-border bg-muted/20 p-4 transition hover:border-primary/30 hover:bg-muted/40"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
                    </div>
                    <p className="text-sm leading-snug text-muted-foreground">{line}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Honesty — visual “not” cards */}
            <section
              id="honesty"
              className="scroll-mt-24 border-y border-border bg-muted/25 px-6 py-14 md:px-10 md:py-16 lg:px-14"
            >
              <SectionLabel n="07" />
              <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
                What we don’t claim
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    t: "Not a government school or county water dept.",
                    s: "We complement—not replace—public systems.",
                  },
                  {
                    t: "Not a drought or enrollment fix alone.",
                    s: "No magic promises; we work within mandates members set.",
                  },
                  {
                    t: "Not every voice in Turkana.",
                    s: "We speak for our members; we correct misquotes.",
                  },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
                  >
                    <XCircle className="mx-auto mb-3 h-8 w-8 text-muted-foreground/60" strokeWidth={1.25} />
                    <p className="font-heading text-sm font-semibold text-foreground">{item.t}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.s}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section
              id="next"
              className="scroll-mt-24 px-6 pb-24 pt-10 md:px-10 md:pb-28 lg:px-14"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-900 to-foreground px-8 py-12 text-primary-foreground shadow-2xl md:px-12 md:py-16">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/25 blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-white/10 blur-2xl"
                  aria-hidden
                />
                <div className="relative">
                  <h2 className="font-heading text-2xl font-bold md:text-3xl">What’s next</h2>
                  <p className="mt-3 max-w-xl text-primary-foreground/85">
                    Mission & vision, programs, or a direct conversation.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      asChild
                      size="lg"
                      className="bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90"
                    >
                      <Link to="/mission-vision">
                        Mission &amp; vision
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                    >
                      <Link to="/programs">Our programs</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white/40 bg-transparent text-white hover:bg-white/10"
                    >
                      <Link to="/contact">Contact us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <nav
              className="border-t border-border px-6 py-10 xl:hidden"
              aria-label="Section shortcuts"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Jump to
              </p>
              <div className="flex flex-wrap gap-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-primary hover:bg-primary/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
