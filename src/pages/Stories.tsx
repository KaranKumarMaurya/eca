import Navbar from "@/components/Navbar";
import StoriesSection from "@/components/StoriesSection";
import Footer from "@/components/Footer";
import storiesHero from "@/assets/story-2.jpg";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="relative h-[320px] md:h-[380px] flex items-center text-primary-foreground">
          <img
            src={storiesHero}
            alt="Impact stories"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-overlay-strong" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Impact Stories
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Voices of Impact
            </h1>
            <p className="text-primary-foreground/85 text-lg max-w-3xl">
              Behind every statistic is a human story from communities in Kakuma and
              Turkana West County.
            </p>
          </div>
        </section>
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
