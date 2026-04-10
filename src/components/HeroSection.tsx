import { ArrowRight, ChevronDown, CircleDot, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";
import { Link } from "react-router-dom";

const heroStats = [
  { number: "100+", label: "Youth trained" },
  { number: "30+", label: "Schools reached" },
  { number: "5,000+", label: "Lives touched" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Community and landscape in Turkana West—education and climate resilience"
        className="absolute inset-0 h-full w-full scale-105 object-cover animate-ken-burns motion-reduce:animate-none motion-reduce:scale-100"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 gradient-overlay-strong" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-foreground/25 to-primary/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm animate-fade-up">
            <CircleDot className="h-3.5 w-3.5 text-white" strokeWidth={2.5} aria-hidden />
            Together we grow
          </div>
          <h1
            className="animate-fade-up text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Empowering change, changing lives
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-up text-pretty text-lg font-light leading-relaxed text-white md:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            A community-based organization in Kakuma and Turkana West—advancing education, climate
            resilience, and sustainable livelihoods alongside refugee and host communities.
          </p>
          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary px-8 py-6 text-base text-white shadow-xl shadow-black/25 hover:bg-secondary/90"
            >
              <Link to="/contact" className="gap-2">
                <Heart className="h-5 w-5" aria-hidden />
                Support our work
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/45 bg-black/25 px-8 py-6 text-base text-white backdrop-blur-md hover:bg-white/15 hover:text-white"
            >
              <Link to="/programs" className="gap-2">
                See programs
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>

          <div
            className="mt-14 flex flex-wrap gap-4 animate-fade-up sm:gap-6 md:gap-10"
            style={{ animationDelay: "0.32s" }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <p className="font-heading text-3xl font-bold text-white md:text-4xl">{stat.number}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="mt-14 inline-flex animate-fade-up items-center gap-2 text-sm font-medium text-white transition hover:text-white/90"
            style={{ animationDelay: "0.4s" }}
          >
            <span>Discover ECA</span>
            <ChevronDown className="h-5 w-5 motion-safe:animate-float" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
