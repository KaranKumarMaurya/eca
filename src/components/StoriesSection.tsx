import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { STORIES } from "@/data/stories";

const previewStories = STORIES.slice(0, 3);

const StoriesSection = () => {
  return (
    <section id="stories" className="section-padding-lg bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Programs That <span className="italic text-primary">Transform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Our core programs address critical needs in Kakuma and Turkana West—education, climate
            action, and livelihoods—designed with communities, not for them.
          </p>
        </div>

        <div className="space-y-16">
          {previewStories.map((story, index) => (
            <div
              key={story.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div
                className={`relative rounded-2xl overflow-hidden group shadow-xl shadow-black/10 ring-1 ring-border/40 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Link to={`/stories/${story.slug}`} className="block">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </Link>
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {story.program}
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  <Link
                    to={`/stories/${story.slug}`}
                    className="transition hover:text-primary hover:underline hover:decoration-primary/40"
                  >
                    {story.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{story.excerpt}</p>
                <p className="text-sm font-semibold text-primary mb-6">
                  {story.name} · {story.location}
                </p>
                <Button asChild variant="outline" className="group/btn">
                  <Link to={`/stories/${story.slug}`}>
                    Read story
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild size="lg" className="shadow-md">
            <Link to="/stories">
              View all stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
