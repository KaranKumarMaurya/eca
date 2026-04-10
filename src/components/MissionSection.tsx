import { Target, Eye, Compass } from "lucide-react";
import missionImage from "@/assets/mission.jpg";

const values = [
  {
    icon: Target,
    title: "Where We Work",
    description:
      "Based in Kakuma, Turkana West County, we serve one of the most climate-vulnerable and underserved regions in Kenya.",
  },
  {
    icon: Eye,
    title: "Our Commitment",
    description:
      "We are deeply committed to education as a tool for empowerment, climate justice, and a path to sustainability.",
  },
  {
    icon: Compass,
    title: "Community First",
    description:
      "Every program we run is designed with and for the community, with youth and vulnerable groups at the grassroots center.",
  },
];

const MissionSection = () => {
  return (
    <section id="about" className="section-padding-lg bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About <span className="italic text-primary">ECA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A non-profit Community Based Organization dedicated to transforming lives
            in Kakuma and Turkana West County, Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-black/10 ring-1 ring-border/40">
            <img
              src={missionImage}
              alt="Hands joined together in unity"
              className="w-full h-[400px] object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Education and Climate Advocacy (ECA)</strong> was founded to
              address the intersecting challenges of education, climate change, and
              community resilience in Kakuma and Turkana West County, Kenya.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Formed out of the urgent need to empower farmers and refugee
              communities - particularly youth and vulnerable groups - ECA works at
              the grassroots level to create lasting, positive change through
              education, environmental stewardship, and sustainable livelihood
              programs.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">1</p>
                <p className="text-sm text-muted-foreground">County Focus</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground">Core Priorities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Community Driven</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
