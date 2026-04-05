import { Users, Droplets, GraduationCap, Stethoscope, Home, Globe } from "lucide-react";

const stats = [
  { icon: Users, number: "2,500,000+", label: "Lives Impacted", description: "People directly benefiting from our programs worldwide" },
  { icon: Droplets, number: "1,200+", label: "Wells Built", description: "Clean water sources installed in water-scarce regions" },
  { icon: GraduationCap, number: "85,000+", label: "Students Educated", description: "Children receiving quality education through our schools" },
  { icon: Stethoscope, number: "500,000+", label: "Medical Treatments", description: "Healthcare consultations and treatments provided" },
  { icon: Home, number: "3,200+", label: "Homes Built", description: "Safe, permanent housing constructed for families" },
  { icon: Globe, number: "42", label: "Countries Served", description: "Nations where our programs are actively running" },
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
            Every number represents real lives changed, real communities transformed, 
            and real hope restored. Here's the impact we've made together.
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
