import { Quote } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    image: story1,
    name: "Amina Hassan",
    location: "Kakuma",
    quote:
      "ECA's education program transformed my children's lives. They now have access to quality learning in a safe and supportive environment. I am grateful for everything this organization does for our community.",
    program: "Education",
  },
  {
    image: story2,
    name: "Sarah Mitchell",
    location: "Volunteer",
    quote:
      "My experience volunteering with ECA in Kakuma was life-changing. The team was welcoming, organized, and passionate about their mission. They truly value their volunteers and I felt empowered to contribute my skills.",
    program: "Community Support",
  },
  {
    image: story3,
    name: "Community Voices",
    location: "Turkana West County",
    quote:
      "Through ECA's climate and livelihood initiatives, families are building resilience and restoring dignity. Youth and women are gaining practical skills that strengthen both income and food security.",
    program: "Livelihoods",
  },
];

const StoriesSection = () => {
  return (
    <section id="stories" className="section-padding-lg bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Impact Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Voices of <span className="italic text-primary">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Behind every statistic is a human story. Meet some of the incredible 
            people whose lives have been transformed through our programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {story.program}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <Quote className="w-8 h-8 text-secondary/40 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{story.quote}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
