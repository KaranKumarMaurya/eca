import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <img
        src={heroImage}
        alt="Volunteers planting trees during golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-overlay-strong" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
            Together We Can Make A Difference
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Empowering Change,{" "}
            <span className="italic text-secondary">Changing Lives</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 animate-fade-up font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
            A refugee-led organization working in Kakuma and Turkana West County to
            advance education, climate resilience, and sustainable livelihoods for
            vulnerable communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 py-6 shadow-lg shadow-black/20">
              <Link to="/contact">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 bg-black/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm text-base px-8 py-6"
            >
              <Link to="/mission-vision">
                Our Impact
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="flex gap-12 mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            {[
              { number: "100+", label: "Youth Trained" },
              { number: "30+", label: "Schools Reached" },
              { number: "5,000+", label: "Lives Impacted" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                  {stat.number}
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
