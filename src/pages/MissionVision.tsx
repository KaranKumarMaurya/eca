import {
  Eye,
  Flag,
  Target,
  Shield,
  TreePine,
  Scale,
  ClipboardCheck,
  Lightbulb,
  Users,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import missionHero from "@/assets/hero-main.jpg";

const goals = [
  "Provide trauma-informed education programs for refugee communities and farmers",
  "Promote climate-smart livelihoods and environmental sustainability",
  "Build community resilience through smart agriculture and poultry farming",
  "Advocate for climate justice and equitable resource access",
  "Empower youth and women through skills training and leadership development",
  "Foster partnerships with local and international stakeholders",
];

const coreValues = [
  {
    icon: Shield,
    title: "Resilience",
    description:
      "Building the capacity of communities to adapt, recover, and thrive in the face of adversity and climate challenges.",
  },
  {
    icon: TreePine,
    title: "Stewardship",
    description:
      "Responsibly managing resources and the environment for the benefit of current and future generations.",
  },
  {
    icon: Scale,
    title: "Equity",
    description:
      "Ensuring fair access to education, resources, and opportunities for all members of the community regardless of background.",
  },
  {
    icon: ClipboardCheck,
    title: "Accountability",
    description:
      "Maintaining the highest standards of transparency and responsibility in all our operations and programs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Embracing creative, climate-smart solutions that address the evolving needs of vulnerable communities.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Operating with openness and honesty, ensuring stakeholders have clear visibility into our work and impact.",
  },
];

const officeBearers = [
  { role: "Chairperson", name: "Emmanuel Mitima" },
  { role: "Vice Chairperson", name: "Justin Dianda" },
  { role: "Secretary", name: "Nishimwe Cecile" },
  { role: "Vice Secretary", name: "Furaha Zihalirwa" },
  { role: "Treasurer", name: "Judith Mashauri" },
];

const MissionVision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="relative h-[320px] md:h-[380px] flex items-center text-primary-foreground">
          <img
            src={missionHero}
            alt="Mission and Vision"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-overlay-strong" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Our Direction
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Mission, Vision & Goals
            </h1>
            <p className="text-primary-foreground/85 text-lg">
              Guided by purpose, driven by impact.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <article className="rounded-xl p-8 bg-primary text-primary-foreground shadow-xl shadow-black/10">
                <Target className="w-6 h-6 text-secondary mb-5" />
                <h2 className="text-3xl font-heading font-semibold mb-4">Our Mission</h2>
                <p className="text-primary-foreground/90 leading-relaxed">
                  To empower the marginalized communities through education and livelihood
                  programs that promote self-reliance and restore environmental health.
                </p>
              </article>

              <article className="rounded-xl p-8 bg-sky-700 text-white shadow-xl shadow-black/10">
                <Eye className="w-6 h-6 text-white/90 mb-5" />
                <h2 className="text-3xl font-heading font-semibold mb-4">Our Vision</h2>
                <p className="text-white/90 leading-relaxed">
                  We envision a world where vulnerable populations are not victims of
                  circumstances but the leading architects of their own resilient,
                  sustainable futures.
                </p>
              </article>
            </div>

            <div>
              <h3 className="text-3xl font-heading font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-2">
                <Flag className="w-5 h-5 text-primary" />
                Our Goals
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {goals.map((goal, index) => (
                  <div
                    key={goal}
                    className="bg-card border border-border rounded-xl px-5 py-4 flex items-start gap-3 hover:shadow-md transition-shadow"
                  >
                    <span className="w-7 h-7 shrink-0 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              What Guides Us
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Core Values
            </h2>
            <p className="text-primary-foreground/85 text-lg max-w-3xl">
              These values guide every decision we make and every program we deliver.
            </p>
          </div>
        </section>

        <section id="core-values" className="section-padding bg-background">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card p-8 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Leadership & Governance
            </h2>
            <p className="text-primary-foreground/85 text-lg max-w-3xl">
              ECA is led by a team of youth changemakers - both refugees and host
              community - dedicated to transparency and democratic governance.
            </p>
          </div>
        </section>

        <section id="leadership" className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <article className="rounded-xl bg-card border border-border p-8 mb-12 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-4xl font-heading font-semibold text-foreground">
                  Governance
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                ECA is led by a team of youth changemakers - both refugees and host
                community - dedicated to transparency and democratic governance. The
                organization is governed by a constitution that ensures checks and
                balances, participatory decision-making, and accountability to both
                members and the communities we serve.
              </p>
            </article>

            <h3 className="text-4xl font-heading font-semibold text-foreground text-center mb-8 flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Office Bearers
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeBearers.map((member) => (
                <article key={member.role} className="rounded-xl border border-border bg-card p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xl font-heading font-semibold text-foreground mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">{member.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionVision;
