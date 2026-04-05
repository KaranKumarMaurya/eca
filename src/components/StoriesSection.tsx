import { Quote } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    image: story1,
    name: "Maria Santos",
    location: "Philippines",
    quote:
      "Before HopeBridge came to our village, I had to walk 3 hours every day to fetch water. Now, with the well they built, my children can go to school instead of carrying water. Our whole community has been transformed.",
    program: "Clean Water",
  },
  {
    image: story2,
    name: "Amara Osei",
    location: "Ghana",
    quote:
      "I was the first girl in my family to attend school, thanks to the HopeBridge scholarship. Now I'm studying to become a doctor so I can come back and serve my community. Education changed everything for me.",
    program: "Education",
  },
  {
    image: story3,
    name: "Raj Patel",
    location: "India",
    quote:
      "The agricultural training program taught me sustainable farming techniques that tripled my harvest. I can now feed my family and sell the surplus at market. We went from surviving to thriving.",
    program: "Community Development",
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
            Voices of <span className="italic text-primary">Hope</span>
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
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
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
