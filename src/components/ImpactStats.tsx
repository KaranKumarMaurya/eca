import { Users, Droplets, GraduationCap, Leaf, Home, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "100+",
    label: "Youth trained",
    description: "Practical skills and leadership alongside programs",
  },
  {
    icon: Droplets,
    number: "30+",
    label: "Schools reached",
    description: "Education and outreach connected to communities",
  },
  {
    icon: GraduationCap,
    number: "5,000+",
    label: "Lives touched",
    description: "People engaged across Kakuma and Turkana West",
  },
  {
    icon: Leaf,
    number: "3",
    label: "Core programs",
    description: "Education, climate action, and livelihoods",
  },
  {
    icon: Home,
    number: "1",
    label: "County focus",
    description: "Turkana West County, Kenya",
  },
  {
    icon: Globe,
    number: "100%",
    label: "Community-driven",
    description: "Designed with and for local members",
  },
];

const ImpactStats = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-7xl">
        <div className="mb-14 text-center md:mb-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
            Our impact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-5xl">
            Numbers that tell <span className="italic text-primary-foreground/95">our story</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/75">
            Context matters—use these figures alongside stories and programs, not instead of them.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center backdrop-blur-sm transition hover:bg-primary-foreground/10"
            >
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-secondary" strokeWidth={1.5} aria-hidden />
              <p className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm font-semibold text-secondary">{stat.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-primary-foreground/55">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
