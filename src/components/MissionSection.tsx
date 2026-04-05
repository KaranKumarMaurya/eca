import { Target, Eye, Compass } from "lucide-react";
import missionImage from "@/assets/mission.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower underserved communities worldwide through sustainable programs in education, healthcare, clean water access, and economic development — creating lasting change from the ground up.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every individual has access to quality education, healthcare, and clean water — where communities thrive with dignity, opportunity, and hope for future generations.",
  },
  {
    icon: Compass,
    title: "Our Values",
    description:
      "Transparency, compassion, sustainability, and community-led development guide every decision we make. We believe in empowering people, not creating dependency.",
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
            A Legacy of <span className="italic text-primary">Compassion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Founded in 2005, HopeBridge has grown from a small grassroots initiative 
            to an internationally recognized organization, reaching millions of people 
            across the globe with life-changing programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden">
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
              Building bridges between those who want to help and those who need it most
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At HopeBridge, we believe that lasting change happens when communities 
              are empowered to lead their own development. Our approach centers on 
              partnering with local leaders, understanding cultural contexts, and 
              building sustainable solutions that continue to create impact long 
              after our direct involvement ends.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every program we run is designed with measurable outcomes, full 
              transparency, and a commitment to ensuring that at least 95 cents 
              of every dollar donated goes directly to the people and communities 
              we serve. We are accountable to our donors and, most importantly, 
              to the communities we work alongside.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">18</p>
                <p className="text-sm text-muted-foreground">Years Active</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">350+</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-primary">$120M+</p>
                <p className="text-sm text-muted-foreground">Funds Deployed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
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
