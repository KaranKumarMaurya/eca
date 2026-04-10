import {
  ArrowRight,
  BookOpenCheck,
  Leaf,
  Sprout,
  CircleDot,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import programsHero from "@/assets/programs-hero.jpg";
import educationImg from "@/assets/education-program.jpg";
import waterImg from "@/assets/water-program.jpg";
import agricultureImg from "@/assets/story-3.jpg";

const programs = [
  {
    icon: BookOpenCheck,
    image: educationImg,
    title: "Trauma-Informed Education",
    subtitle: "Education and Child Protection",
    accent: "border-t-primary",
    iconBg: "from-primary/20 to-primary/5",
    description:
      "Healing and learning for children affected by displacement, instability, and trauma—especially in refugee settings. We train educators to keep classrooms protective and to support emotional recovery alongside participation.",
    bullets: [
      "Trauma-aware classrooms and safe spaces",
      "Psycho-social support for children and caregivers",
      "Parenting sessions and mentorship pathways",
      "Protection-focused school readiness support",
      "Integration support for girls and children at risk",
    ],
  },
  {
    icon: Leaf,
    image: waterImg,
    title: "Environmental Protection and Climate Activism",
    subtitle: "Climate and Sustainability",
    accent: "border-t-emerald-600",
    iconBg: "from-emerald-600/20 to-emerald-600/5",
    description:
      "Addressing environmental stress and water scarcity through climate action led by local communities—combining restoration, practical adaptation, and awareness so families can respond to pressure while protecting the next generation.",
    bullets: [
      "Tree growing and restoration drives",
      "Climate education and local action clubs",
      "Water harvesting and conservation training",
      "Advocacy for fair climate adaptation support",
      "Sustainable practices for households",
    ],
  },
  {
    icon: Sprout,
    image: agricultureImg,
    title: "Smart Agriculture & Poultry Farming",
    subtitle: "Livelihoods and Food Security",
    accent: "border-t-secondary",
    iconBg: "from-secondary/25 to-secondary/5",
    description:
      "Climate-smart farming and poultry in arid conditions—hands-on training, inputs, and follow-up so households improve food security and income without taking on unsustainable debt.",
    bullets: [
      "Youth and women-led producer groups",
      "Training in climate-smart farming methods",
      "Tools, inputs, and technical field support",
      "Market linkage and cooperative strengthening",
      "Income growth through poultry value chains",
    ],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section
          id="programs-top"
          className="relative min-h-[min(58vh,640px)] overflow-hidden border-b border-border/80"
        >
          <img
            src={programsHero}
            alt="Golden field at sunset—livelihoods, land, and climate-resilient futures"
            className="absolute inset-0 h-full w-full scale-105 object-cover object-center animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/22 to-primary/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[min(58vh,640px)] max-w-6xl flex-col justify-end px-6 pb-12 pt-24 md:justify-center md:pb-20 md:pt-28 lg:px-8">
            <div className="animate-fade-in motion-reduce:animate-none">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
                What we do
              </div>
              <h1 className="max-w-4xl text-balance font-heading text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                Current programs
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white md:text-xl">
                Education, climate action, and livelihoods—designed with communities in Kakuma and
                Turkana West, not copied from a generic playbook.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Education & protection", "Climate & water", "Livelihoods & food"].map((chip) => (
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
              href="#program-list"
              className="mt-10 inline-flex items-center gap-2 self-start text-sm font-medium text-white transition hover:text-white/90 md:mt-12"
            >
              <span>See all programs</span>
              <ChevronDown className="h-5 w-5 motion-safe:animate-float" aria-hidden />
            </a>
          </div>
        </section>

        {/* Program cards */}
        <section
          id="program-list"
          className="scroll-mt-24 bg-gradient-to-b from-background via-muted/15 to-background px-6 py-16 md:px-10 md:py-20 lg:px-14"
        >
          <div className="mx-auto max-w-6xl space-y-12 md:space-y-16 lg:space-y-20">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
                Three pillars
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Programs at a glance
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Each program has its own activities and partners; together they match how families
                actually live—learning, land, and income in the same week.
              </p>
            </div>

            {programs.map((program, index) => {
              const isReversed = index % 2 === 1;
              return (
                <article
                  key={program.title}
                  className={`group relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-xl shadow-black/[0.04] ring-1 ring-border/40 transition hover:shadow-2xl hover:ring-primary/10 ${program.accent} border-t-[5px]`}
                >
                  <div className="grid lg:grid-cols-2 lg:gap-0">
                    <div
                      className={`relative min-h-[260px] overflow-hidden sm:min-h-[300px] lg:min-h-[380px] ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <img
                        src={program.image}
                        alt={program.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] motion-reduce:transition-none"
                        loading={index === 0 ? "eager" : "lazy"}
                        width={1200}
                        height={800}
                        decoding="async"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card/90"
                        aria-hidden
                      />
                      <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                          {program.subtitle}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-center p-6 md:p-10 lg:p-12 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <div
                        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.iconBg} text-primary ring-1 ring-primary/15`}
                      >
                        <program.icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                        {program.title}
                      </h3>
                      <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                        {program.subtitle}
                      </p>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                        {program.description}
                      </p>

                      <div className="mt-8">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Community impact
                        </p>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-1">
                          {program.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm text-muted-foreground">
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                strokeWidth={2}
                                aria-hidden
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button asChild className="group/btn shadow-md">
                          <Link to="/contact">
                            Partner or learn more
                            <ArrowRight className="ml-2 h-4 w-4 transition group-hover/btn:translate-x-0.5" />
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" className="text-muted-foreground">
                          <Link to="/mission-vision">How this fits our mission</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-border/60 bg-primary px-6 py-14 text-primary-foreground md:py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">
                Want to support or volunteer?
              </h2>
              <p className="mt-2 max-w-xl text-primary-foreground/85">
                Tell us how you&apos;d like to get involved—we&apos;ll route you to the right contact.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90"
              >
                <Link to="/contact">Contact us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/stories">Read stories</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
