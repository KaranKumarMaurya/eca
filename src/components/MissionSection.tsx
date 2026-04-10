import { Target, Eye, Compass, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import missionImage from "@/assets/mission.jpg";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Where we work",
    description:
      "Rooted in Kakuma and Turkana West—one of Kenya's most climate-stressed and underserved regions.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: Eye,
    title: "Our commitment",
    description:
      "Education, climate justice, and livelihoods in one honest conversation—not three separate silos.",
    accent: "from-secondary/25 to-transparent",
  },
  {
    icon: Compass,
    title: "Community first",
    description:
      "Programs are designed with and for members—youth and vulnerable groups at the center of decisions.",
    accent: "from-emerald-600/20 to-transparent",
  },
];

const MissionSection = () => {
  return (
    <section id="about" className="section-padding-lg scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center md:mb-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
            Who we are
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            About <span className="italic text-primary">ECA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A Kenyan community-based organization building resilience through learning, land stewardship,
            and livelihoods.
          </p>
        </div>

        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 ring-1 ring-border/50">
            <img
              src={missionImage}
              alt="Community hands joined in solidarity"
              className="h-[380px] w-full object-cover lg:h-[440px]"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-background/85 p-4 backdrop-blur-sm md:bottom-6 md:left-6 md:right-auto md:max-w-xs">
              <p className="font-heading text-sm font-semibold text-foreground">Kenya-registered CBO</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Democratic governance · member-led · transparent records
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">Our story</h3>
            <p className="leading-relaxed text-muted-foreground">
              <strong>Education and Climate Advocacy (ECA)</strong> exists where education, climate
              pressure, and daily survival intersect—in Kakuma and Turkana West County.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We work with farmers, refugee and host communities, youth, and women—through schools
              where they exist, through land and water where it matters, and through livelihoods that
              survive dry seasons.
            </p>
            <div className="flex flex-wrap gap-4 border-y border-border/60 py-6">
              {[
                { n: "1", l: "County focus" },
                { n: "3", l: "Program pillars" },
                { n: "100%", l: "Community-driven design" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">{s.n}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="default" className="gap-2 shadow-md">
              <Link to="/about">
                Read the full About page
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                aria-hidden
              />
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition group-hover:bg-primary/15">
                <item.icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
