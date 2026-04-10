import { Heart, Users, HandHeart, Building2, CircleDot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import involvedImg from "@/assets/get-involved.jpg";
import { Link } from "react-router-dom";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Support education, climate action, and livelihood programs—directly aligned with community priorities.",
    cta: "How to give",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Share skills and time—locally or remotely. We match you with needs that fit community agreements.",
    cta: "Get involved",
    href: "/membership",
  },
  {
    icon: HandHeart,
    title: "Partner",
    description:
      "Organizations, schools, and faith networks: collaborate on shared goals with clear roles and reporting.",
    cta: "Start a conversation",
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Corporate & donors",
    description:
      "Structured partnerships with transparency—no logo-first relationships without accountability.",
    cta: "Contact us",
    href: "/contact",
  },
];

const GetInvolved = () => {
  return (
    <section className="relative">
      <div className="relative min-h-[420px] overflow-hidden md:min-h-[480px]">
        <img
          src={involvedImg}
          alt="Volunteers organizing supplies for community distribution"
          className="absolute inset-0 h-full w-full scale-105 object-cover animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/25 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 py-20 text-center">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
              Join the movement
            </div>
            <h2 className="text-balance font-heading text-3xl font-bold text-white md:text-5xl">
              Every action <span className="italic text-white">counts</span>
            </h2>
            <p className="mt-5 text-lg text-white">
              Donate, volunteer, partner—help us keep programs honest, local, and built for the long
              run.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-secondary px-10 py-6 text-base text-white shadow-xl hover:bg-secondary/90"
              >
                <Link to="/membership" className="gap-2">
                  <Heart className="h-5 w-5" aria-hidden />
                  Membership &amp; involvement
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/45 bg-black/30 px-8 py-6 text-base text-white backdrop-blur-sm hover:bg-white/15"
              >
                <Link to="/contact" className="gap-2">
                  Contact the team
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-12">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
              Ways to help
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Pick what fits your capacity
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ways.map((way) => (
              <div
                key={way.title}
                className="group flex flex-col rounded-2xl border border-border/80 bg-card p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition group-hover:bg-primary/15">
                  <way.icon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">{way.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{way.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-6 w-full border-primary/25">
                  <Link to={way.href}>{way.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
