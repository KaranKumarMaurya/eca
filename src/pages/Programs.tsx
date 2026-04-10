import { ArrowRight, BookOpenCheck, Leaf, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import healthImg from "@/assets/health-program.jpg";
import waterImg from "@/assets/water-program.jpg";
import communityImg from "@/assets/mission.jpg";

const programs = [
  {
    icon: BookOpenCheck,
    image: healthImg,
    title: "Trauma-Informed Education",
    subtitle: "Education and Child Protection",
    description:
      "This program enables healing and learning for children affected by displacement, family instability, and trauma, especially in refugee settings. We train educators to restore protective learning spaces and to guide children through emotional recovery and classroom participation.",
    bullets: [
      "Trauma-aware classrooms and safe spaces",
      "Psycho-social support for children and caregivers",
      "Parenting sessions and mentorship pathways",
      "Protection-focused school readiness support",
      "Integration support for girls and children at risk",
    ],
  },
  {
    icon: Leaf,
    image: waterImg,
    title: "Environmental Protection and Climate Activism",
    subtitle: "Climate and Sustainability",
    description:
      "Addressing environmental degradation and water stress through climate action led by local communities. The program combines restoration, practical adaptation, and awareness so families can manage climate pressure while protecting future generations.",
    bullets: [
      "Tree growing and restoration drives",
      "Climate education and local action clubs",
      "Water harvesting and conservation training",
      "Advocacy for fair climate adaptation support",
      "Promotion of sustainable practices for homes",
    ],
  },
  {
    icon: Sprout,
    image: communityImg,
    title: "Smart Agriculture & Poultry Farming",
    subtitle: "Livelihoods and Food Security",
    description:
      "Under this programme, we promote smart agriculture techniques to improve food security and income for households in arid conditions. Participants receive hands-on training in modern climate-resilient farming and poultry production to strengthen long-term self-reliance.",
    bullets: [
      "Youth and women-led producer groups",
      "Training in climate-smart farming methods",
      "Tools, inputs, and technical field support",
      "Market linkage and cooperative strengthening",
      "Income growth through poultry value chains",
    ],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-[320px] md:h-[380px] flex items-center text-primary-foreground">
          <img
            src={healthImg}
            alt="Current programs"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-overlay-strong" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Current Programs
            </h1>
            <p className="text-primary-foreground/85 text-lg max-w-3xl">
              Our programs address the most pressing needs of vulnerable communities
              through education, climate action, and sustainable livelihoods.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto space-y-8">
            {programs.map((program) => (
              <article
                key={program.title}
                className="grid lg:grid-cols-2 bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="min-h-[280px] lg:min-h-[340px]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <program.icon className="w-4 h-4 text-primary" />
                    <h2 className="text-2xl font-heading font-semibold text-foreground">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                    {program.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {program.description}
                  </p>

                  <p className="text-xs font-semibold text-foreground mb-2">
                    Community Impact
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground mb-5">
                    {program.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="group">
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
