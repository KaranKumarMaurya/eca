import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "ECA's education program transformed my children's lives. They now have access to quality learning in a safe and supportive environment. I am grateful for everything this organization does for our community.",
    name: "Amina Hassan",
    role: "Community Member · Kakuma",
    initials: "A",
  },
  {
    quote:
      "My experience volunteering with ECA in Kakuma was life-changing. The team was welcoming, organized, and passionate about their mission. They truly value their volunteers and I felt empowered to contribute my skills.",
    name: "Sarah Mitchell",
    role: "Volunteer",
    initials: "S",
  },
  {
    quote:
      "Through ECA's climate and livelihood initiatives, families are building resilience and restoring dignity. Youth and women are gaining practical skills that strengthen both income and food security.",
    name: "Community Voices",
    role: "Turkana West County",
    initials: "C",
  },
];

const AUTOPLAY_MS = 9000;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const onSelect = useCallback((carousel: CarouselApi) => {
    setCurrent(carousel.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api || prefersReducedMotion || isPaused) {
      return;
    }

    const id = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [api, prefersReducedMotion, isPaused]);

  return (
    <section
      id="testimonials"
      className="section-padding-lg relative overflow-hidden border-t border-border bg-card"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.12) 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)`,
        }}
        aria-hidden
      />

      <div className="relative z-[1] mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground md:text-sm">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mb-4 font-heading text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl"
          >
            What people say
          </h2>
          <p className="text-balance font-body text-base text-muted-foreground md:text-lg">
            Voices from Kakuma, volunteers, and partners we serve alongside.
          </p>
        </div>

        <div
          className="mx-auto w-full max-w-4xl px-1 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <p id="testimonials-live" className="sr-only" aria-live="polite" aria-atomic="true">
            {`Showing testimonial ${current + 1} of ${testimonials.length}: ${testimonials[current]?.name ?? ""}.`}
          </p>

          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              watchDrag: true,
              skipSnaps: false,
            }}
            className="w-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Testimonials"
            tabIndex={0}
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {testimonials.map((item, idx) => (
                <CarouselItem
                  key={item.name}
                  className="basis-full pl-3 md:basis-full md:pl-4"
                  aria-label={`Testimonial ${idx + 1} of ${testimonials.length}: ${item.name}`}
                >
                  <article className="outline-none">
                    <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-background via-background to-primary/[0.07] shadow-[0_4px_28px_-6px_hsl(160_30%_10%_/_0.1),0_18px_44px_-16px_hsl(152_45%_22%_/_0.14)] ring-1 ring-black/[0.04] backdrop-blur-[2px] dark:border-primary/25 dark:from-card dark:via-background dark:to-primary/10 dark:ring-white/10">
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.65] dark:opacity-40"
                        style={{
                          backgroundImage: `radial-gradient(ellipse 90% 80% at 100% 0%, hsl(var(--primary) / 0.11) 0%, transparent 55%),
                            radial-gradient(ellipse 70% 60% at 0% 100%, hsl(var(--secondary) / 0.08) 0%, transparent 50%)`,
                        }}
                        aria-hidden
                      />
                      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 dark:via-primary/40" aria-hidden />

                      <div className="relative px-6 py-7 sm:px-8 sm:py-8 md:px-10">
                        <div className="flex items-start gap-3.5 sm:gap-4">
                          <Quote
                            className="mt-1 h-8 w-8 shrink-0 text-primary/50 sm:h-9 sm:w-9"
                            strokeWidth={1.35}
                            aria-hidden
                          />
                          <blockquote className="min-w-0 flex-1 text-left">
                            <p className="text-pretty font-body text-lg font-medium leading-relaxed tracking-normal text-foreground/95 md:text-xl md:leading-relaxed">
                              {item.quote}
                            </p>
                          </blockquote>
                        </div>

                        <footer className="mt-5 flex flex-row items-center gap-4 border-t-2 border-primary/15 pt-5 sm:mt-6 sm:gap-5 dark:border-primary/25">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-800 text-base font-bold text-primary-foreground shadow-md ring-2 ring-primary/25 sm:h-14 sm:w-14 sm:text-lg"
                            aria-hidden
                          >
                            {item.initials}
                          </div>
                          <div className="min-w-0 text-left">
                            <p className="font-body text-lg font-semibold leading-snug text-foreground md:text-xl">
                              {item.name}
                            </p>
                            <p className="mt-0.5 font-body text-sm font-medium text-muted-foreground md:text-[0.95rem]">
                              {item.role}
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex flex-col items-center gap-5 sm:mt-10">
              <div
                className="flex flex-wrap items-center justify-center gap-2"
                role="group"
                aria-label="Choose a testimonial"
              >
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-current={current === i ? "true" : undefined}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                      i === current
                        ? "w-9 bg-primary"
                        : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/55",
                    )}
                    aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                    onClick={() => api?.scrollTo(i)}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <CarouselPrevious
                  variant="outline"
                  size="icon"
                  className="static inset-auto h-11 w-11 translate-x-0 translate-y-0 rounded-full border-border bg-background shadow-sm hover:bg-muted"
                />
                <CarouselNext
                  variant="outline"
                  size="icon"
                  className="static inset-auto h-11 w-11 translate-x-0 translate-y-0 rounded-full border-border bg-background shadow-sm hover:bg-muted"
                />
              </div>

            </div>
          </Carousel>
        </div>

        <div className="mt-12 flex justify-center md:mt-14">
          <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30">
            <Link to="/stories">
              Read more impact stories
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
