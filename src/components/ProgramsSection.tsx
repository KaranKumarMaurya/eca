import { ArrowRight, BookOpenCheck, Leaf, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import educationImg from "@/assets/education-program.jpg";
import waterImg from "@/assets/water-program.jpg";
import agricultureImg from "@/assets/story-3.jpg";

const programs = [
  {
    icon: BookOpenCheck,
    image: educationImg,
    title: "Trauma-informed education",
    tag: "Education & protection",
    description:
      "Healing and learning for children affected by displacement and trauma—training educators, safe spaces, and support for caregivers in refugee settings.",
    accentBar: "bg-primary",
  },
  {
    icon: Leaf,
    image: waterImg,
    title: "Climate & environment",
    tag: "Climate action",
    description:
      "Tree growing, water harvesting, and local advocacy—so families can respond to drought and pressure without losing dignity or future options.",
    accentBar: "bg-emerald-600",
  },
  {
    icon: Sprout,
    image: agricultureImg,
    title: "Smart agriculture & poultry",
    tag: "Livelihoods",
    description:
      "Climate-smart farming and poultry in arid conditions—hands-on training and follow-up so households improve food security and income.",
    accentBar: "bg-secondary",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding-lg border-t border-border/60 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center md:mb-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/80">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-5xl">
            Three pillars <span className="italic text-primary">in one place</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Education, climate action, and livelihoods—designed with communities in Kakuma and Turkana
            West. See the full detail on our Programs page.
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {programs.map((program, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={program.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div
                  className={`group relative overflow-hidden rounded-3xl shadow-2xl shadow-black/10 ring-1 ring-border/50 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100 md:h-[400px]"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 text-primary shadow-md ring-1 ring-border/60">
                      <program.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground shadow">
                      {program.tag}
                    </span>
                  </div>
                </div>

                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <div className={`h-1 w-16 rounded-full ${program.accentBar} opacity-90`} />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                    {program.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{program.description}</p>
                  <Button asChild variant="outline" size="lg" className="mt-8 gap-2 border-primary/30 shadow-sm">
                    <Link to="/programs">
                      Full program detail
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/programs">
              View all programs
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
