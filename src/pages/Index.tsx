import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ImpactStats from "@/components/ImpactStats";
import ProgramsSection from "@/components/ProgramsSection";
import StoriesSection from "@/components/StoriesSection";
import GetInvolved from "@/components/GetInvolved";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ImpactStats />
      <ProgramsSection />
      <StoriesSection />
      <GetInvolved />
      <PartnersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
