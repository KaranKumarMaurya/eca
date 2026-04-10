import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  Target,
  Shield,
  TreePine,
  Scale,
  ClipboardCheck,
  Lightbulb,
  Users,
  Building2,
  CircleDot,
  Leaf,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Landmark,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import missionVisionHero from "@/assets/mission-vision-hero.jpg";
import missionVisionAccent from "@/assets/mission-vision-accent.jpg";

const goals = [
  {
    text: "Trauma-informed education for refugee communities and farmers",
    icon: BookOpen,
  },
  {
    text: "Climate-smart livelihoods and environmental sustainability",
    icon: Leaf,
  },
  {
    text: "Resilience through smart agriculture and poultry",
    icon: TreePine,
  },
  {
    text: "Climate justice and equitable resource access",
    icon: Scale,
  },
  {
    text: "Youth and women: skills training and leadership",
    icon: Users,
  },
  {
    text: "Partnerships with local and international stakeholders",
    icon: HeartHandshake,
  },
];

const goalAccent = [
  "border-t-primary",
  "border-t-secondary",
  "border-t-emerald-600",
  "border-t-sky-600",
  "border-t-amber-600",
  "border-t-violet-600",
];

const coreValues = [
  {
    icon: Shield,
    title: "Resilience",
    description: "Adapt and thrive through adversity and climate shocks.",
    accent: "from-primary/30 to-transparent",
  },
  {
    icon: TreePine,
    title: "Stewardship",
    description: "Care for land and water for those who come next.",
    accent: "from-emerald-600/35 to-transparent",
  },
  {
    icon: Scale,
    title: "Equity",
    description: "Fair access to education and opportunity for all.",
    accent: "from-sky-600/35 to-transparent",
  },
  {
    icon: ClipboardCheck,
    title: "Accountability",
    description: "Transparent operations members and partners can follow.",
    accent: "from-amber-600/35 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Practical, climate-smart ideas that fit local reality.",
    accent: "from-violet-600/35 to-transparent",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open books, clear decisions, honest communication.",
    accent: "from-secondary/40 to-transparent",
  },
];

const officeBearers = [
  { role: "Chairperson", name: "Emmanuel Mitima" },
  { role: "Vice Chairperson", name: "Justin Dianda" },
  { role: "Secretary", name: "Nishimwe Cecile" },
  { role: "Vice Secretary", name: "Furaha Zihalirwa" },
  { role: "Treasurer", name: "Judith Mashauri" },
];

function initials(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts[parts.length - 1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-3 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
      <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" aria-hidden />
      {children}
    </span>
  );
}

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section
          id="mission-top"
          className="relative min-h-[min(62vh,680px)] overflow-hidden border-b border-border/80"
        >
          <img
            src={missionVisionHero}
            alt="Community gathered outdoors in rural Kenya"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
            width={1920}
            height={1280}
            fetchPriority="high"
          />
          <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/20 to-primary/12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[min(62vh,680px)] max-w-6xl flex-col justify-end px-6 pb-10 pt-24 md:justify-center md:pb-16 md:pt-28 lg:px-8">
            <div className="animate-fade-in motion-reduce:animate-none">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
                Our direction
              </div>
              <h1 className="max-w-4xl text-balance font-heading text-[2.25rem] font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
                Mission, vision &amp; goals
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white md:text-xl">
                Rooted in Kakuma and Turkana West—where education, livelihoods, and the land are part
                of the same story.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { n: "6", l: "Strategic goals" },
                  { n: "6", l: "Core values" },
                  { n: "5", l: "Office bearers" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 backdrop-blur-sm"
                  >
                    <span className="font-heading text-2xl font-bold text-white">{s.n}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-white">
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#mission-pillars"
              className="mt-10 inline-flex items-center gap-2 self-start text-sm font-medium text-white transition hover:text-white/90 md:mt-12"
            >
              <span>Explore mission &amp; vision</span>
              <ChevronDown className="h-5 w-5 motion-safe:animate-float" aria-hidden />
            </a>
          </div>
        </section>

        {/* Mission | visual | Vision */}
        <section
          id="mission-pillars"
          className="scroll-mt-24 border-b border-border/70 bg-gradient-to-b from-background via-card/30 to-background px-6 py-16 md:px-10 md:py-20 lg:px-14"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 md:mb-12">
              <SectionLabel>Mission &amp; vision</SectionLabel>
              <h2 className="mt-1 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl">
                Why we exist—and what we&apos;re building toward
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-0 lg:overflow-hidden lg:rounded-[1.75rem] lg:border lg:border-border/80 lg:shadow-2xl lg:shadow-primary/5 lg:ring-1 lg:ring-primary/5">
              <article className="relative flex flex-col justify-center overflow-hidden border border-border/80 bg-card p-8 shadow-sm lg:col-span-4 lg:border-0 lg:shadow-none">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,hsl(var(--primary)/0.08),transparent)]"
                  aria-hidden
                />
                <div className="relative border-l-4 border-secondary pl-5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary ring-1 ring-secondary/25">
                    <Target className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                    Our mission
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {[
                      "Marginalized communities first",
                      "Education and livelihoods together",
                      "Self-reliance and environmental health",
                    ].map((line) => (
                      <li key={line} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-sm shadow-primary/40"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                    We empower marginalized communities through education and livelihood programs that
                    promote self-reliance and restore environmental health.
                  </p>
                </div>
              </article>

              <div className="group relative min-h-[240px] overflow-hidden lg:col-span-4 lg:min-h-[400px]">
                <img
                  src={missionVisionAccent}
                  alt="Fresh produce and hands at work—livelihoods and food in the community"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  loading="lazy"
                  width={1600}
                  height={1067}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent lg:from-foreground/20"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Livelihoods &amp; food
                  </p>
                  <p className="mt-1 max-w-sm text-sm font-medium text-white/95">
                    Learning and the land meet in kitchens, fields, and market days—not only in
                    classrooms.
                  </p>
                </div>
              </div>

              <article className="relative flex flex-col justify-center overflow-hidden border border-sky-800/50 bg-gradient-to-br from-sky-900 via-sky-950 to-slate-950 p-8 text-white shadow-sm lg:col-span-4 lg:border-0">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
                  aria-hidden
                />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sky-100 ring-1 ring-white/20">
                    <Eye className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-heading text-2xl font-bold md:text-3xl">Our vision</h3>
                  <p className="mt-6 text-sm leading-relaxed text-white/90 md:text-[0.9375rem]">
                    A world where vulnerable people are not victims of circumstance but the leading
                    architects of their own resilient, sustainable futures.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/15 pt-6">
                    {["Dignity", "Agency", "Long-term change"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/95 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section
          id="goals"
          className="scroll-mt-24 px-6 py-16 md:px-10 md:py-20 lg:px-14"
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-muted/50 via-background to-primary/[0.04] p-8 shadow-inner ring-1 ring-border/40 md:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
                aria-hidden
              />
              <div className="relative mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
                <div>
                  <SectionLabel>Goals</SectionLabel>
                  <h2 className="mt-1 font-heading text-3xl font-bold text-foreground md:text-4xl">
                    What we work toward
                  </h2>
                  <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                    Six focus areas—each reflected in programs and community priorities.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="shrink-0 border-primary/40 bg-background/80 hover:bg-primary/5"
                >
                  <Link to="/programs" className="gap-2">
                    View programs
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
              <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {goals.map(({ text, icon: Icon }, index) => (
                  <div
                    key={text}
                    className={`group flex gap-4 rounded-2xl border border-border/70 bg-card/90 p-5 shadow-sm ring-1 ring-border/30 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg md:p-6 ${goalAccent[index]} border-t-4`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner ring-1 ring-primary/10 transition group-hover:from-primary/20">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                        Goal {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-2 text-sm font-semibold leading-snug text-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core values intro strip */}
        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--secondary))_1px,transparent_0)] [background-size:20px_20px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <div className="flex flex-wrap items-center gap-3">
              <Sparkles className="h-5 w-5 text-secondary" strokeWidth={1.5} aria-hidden />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
                What guides us
              </p>
            </div>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold md:text-4xl">
              Core values
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/88">
              Shared standards for how ECA shows up in programs and partnerships.
            </p>
            <div className="mt-10 grid gap-4 border-t border-primary-foreground/15 pt-10 sm:grid-cols-3">
              {[
                { k: "Kenya CBO", d: "Community-based, member-led" },
                { k: "Youth at the center", d: "Refugee & host leadership" },
                { k: "Accountable", d: "Governance you can ask about" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 backdrop-blur-sm"
                >
                  <p className="font-heading text-lg font-semibold text-secondary">{item.k}</p>
                  <p className="mt-1 text-sm text-primary-foreground/75">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="core-values"
          className="scroll-mt-24 bg-muted/20 px-6 py-16 md:px-10 md:py-20 lg:px-14"
        >
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`}
                  aria-hidden
                />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition group-hover:bg-primary/15">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Leadership intro */}
        <section className="border-y border-border/60 bg-gradient-to-b from-background to-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16 lg:px-14">
            <div className="flex flex-wrap items-center gap-3">
              <Landmark className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                Our team
              </p>
            </div>
            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold text-foreground md:text-4xl">
              Leadership &amp; governance
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Youth-led, refugee and host community together—governed by a constitution with checks,
              participation, and accountability to members and the communities we serve.
            </p>
          </div>
        </section>

        <section id="leadership" className="scroll-mt-24 px-6 py-14 md:px-10 md:pb-24 md:pt-10 lg:px-14">
          <div className="mx-auto max-w-6xl">
            <article className="relative mb-12 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-lg ring-1 ring-primary/5">
              <div className="h-2 bg-gradient-to-r from-primary via-secondary to-emerald-700" aria-hidden />
              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                      <Building2 className="h-7 w-7" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground">Governance</h3>
                      <p className="mt-1 text-sm text-muted-foreground">How decisions are made</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  Participatory decision-making, clear roles, and accountability—to members first, then
                  partners and the public where appropriate.
                </p>
              </div>
            </article>

            <div className="mb-8 flex items-center justify-between gap-4">
              <h3 className="flex items-center gap-3 font-heading text-2xl font-semibold text-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Users className="h-5 w-5" aria-hidden />
                </div>
                Office bearers
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {officeBearers.map((member) => (
                <div
                  key={member.role}
                  className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-sm ring-1 ring-border/40 transition hover:border-primary/25 hover:shadow-md"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/90 to-primary font-heading text-sm font-bold text-primary-foreground shadow-inner ring-2 ring-primary/20"
                    aria-hidden
                  >
                    {initials(member.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {member.role}
                    </p>
                    <p className="mt-0.5 font-heading text-base font-semibold text-foreground">
                      {member.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionVision;
