import { Users, Droplets, GraduationCap, Stethoscope, Home, Globe } from "lucide-react";

const stats = [
  { icon: Users, number: "100+", label: "Youth Trained", description: "Young people equipped with practical life and leadership skills" },
  { icon: Droplets, number: "30+", label: "Schools Reached", description: "Schools supported through education and community programs" },
  { icon: GraduationCap, number: "5,000+", label: "Lives Impacted", description: "Community members reached across Kakuma and Turkana West" },
  { icon: Stethoscope, number: "3", label: "Core Programs", description: "Education, climate action, and livelihood strengthening" },
  { icon: Home, number: "1", label: "County Focus", description: "Serving communities in Turkana West County, Kenya" },
  { icon: Globe, number: "100%", label: "Community Driven", description: "Programs designed with and for local communities" },
];

const ImpactStats = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Our Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Numbers That Tell <span className="italic">Our Story</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            These numbers reflect community-led progress in education, resilience,
            and sustainable livelihoods across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2">
                {stat.number}
              </p>
              <p className="text-secondary font-semibold text-sm mb-1">{stat.label}</p>
              <p className="text-primary-foreground/50 text-xs leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
