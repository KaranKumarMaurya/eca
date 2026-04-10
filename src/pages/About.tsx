import Navbar from "@/components/Navbar";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/mission.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="relative h-[320px] md:h-[380px] flex items-center">
          <img
            src={aboutHero}
            alt="About ECA"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-overlay-strong" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-primary-foreground">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Who We Are
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">About ECA</h1>
            <p className="text-primary-foreground/85 max-w-2xl text-lg">
              A non-profit Community Based Organization dedicated to transforming lives
              in Kakuma and Turkana West County, Kenya.
            </p>
          </div>
        </section>
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
