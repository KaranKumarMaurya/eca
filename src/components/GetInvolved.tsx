import { Heart, Users, HandHeart, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import involvedImg from "@/assets/get-involved.jpg";
import { Link } from "react-router-dom";

const ways = [
  {
    icon: Heart,
    title: "Make a Donation",
    description: "100% of your donation goes directly to our programs. Choose a one-time gift or become a monthly supporter to create sustained impact.",
    cta: "Donate Now",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Volunteer With Us",
    description: "Join our global network of 5,000+ volunteers. From field missions to remote support, there's a role for everyone who wants to help.",
    cta: "Apply Today",
    href: "/membership",
  },
  {
    icon: HandHeart,
    title: "Sponsor a Child",
    description: "For $35/month, you can provide a child with education, healthcare, and nutrition. You'll receive updates and letters from your sponsored child.",
    cta: "Start Sponsoring",
    href: "/contact",
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    description: "Partner with ECA through local collaboration, youth initiatives, and climate-action campaigns. Together, we can amplify impact at scale.",
    cta: "Partner With Us",
    href: "/contact",
  },
];

const GetInvolved = () => {
  return (
    <section className="relative">
      <div className="relative h-[500px]">
        <img
          src={involvedImg}
          alt="Volunteers distributing supplies"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-overlay-strong" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Join The Movement
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 max-w-3xl">
              Every Action Counts.{" "}
              <span className="italic">Your Help Matters.</span>
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg mb-8">
              Whether you donate, volunteer, or simply spread the word — you 
              become part of a global community creating lasting change.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-10 py-6">
              <Link to="/membership">
                <Heart className="w-5 h-5 mr-2" />
                Get Involved Today
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ways.map((way) => (
              <div
                key={way.title}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <way.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {way.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {way.description}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to={way.href}>{way.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
