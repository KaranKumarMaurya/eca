import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import educationImg from "@/assets/education-program.jpg";
import waterImg from "@/assets/water-program.jpg";
import healthImg from "@/assets/health-program.jpg";
import communityImg from "@/assets/community-program.jpg";

const programs = [
  {
    image: educationImg,
    title: "Education for All",
    tag: "Education",
    description:
      "Building schools, training teachers, and providing scholarships to ensure every child has access to quality education regardless of their circumstances. Our schools operate in 28 countries, reaching over 85,000 students annually.",
    stats: "85,000+ Students | 28 Countries",
  },
  {
    image: waterImg,
    title: "Clean Water Access",
    tag: "Water & Sanitation",
    description:
      "Installing wells, water purification systems, and sanitation infrastructure in communities that lack access to clean drinking water. Each well serves an average of 500 people for over 20 years.",
    stats: "1,200+ Wells | 500 People/Well",
  },
  {
    image: healthImg,
    title: "Healthcare & Wellness",
    tag: "Healthcare",
    description:
      "Providing essential medical care, vaccinations, maternal health services, and mental health support to underserved communities. Our mobile clinics reach the most remote populations.",
    stats: "500,000+ Treatments | 15 Clinics",
  },
  {
    image: communityImg,
    title: "Community Empowerment",
    tag: "Development",
    description:
      "Empowering communities through microfinance, vocational training, sustainable agriculture, and infrastructure development — building self-sufficiency and economic resilience from within.",
    stats: "3,200+ Homes | 12,000 Jobs Created",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding-lg bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Programs That <span className="italic text-primary">Transform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Our four core programs address the most critical needs of underserved 
            communities, creating interconnected solutions that drive lasting change.
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`relative rounded-2xl overflow-hidden group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {program.tag}
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {program.description}
                </p>
                <p className="text-sm font-semibold text-primary mb-6">
                  {program.stats}
                </p>
                <Button variant="outline" className="group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
