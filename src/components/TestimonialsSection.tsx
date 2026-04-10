import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "\"ECA's education program transformed my children's lives. They now have access to quality learning in a safe and supportive environment. I am grateful for everything this organization does for our community.\"",
    name: "Amina Hassan",
    role: "Community Member",
    initials: "A",
  },
  {
    quote:
      "\"My experience volunteering with ECA in Kakuma was life-changing. The team was welcoming, organized, and passionate about their mission. They truly value their volunteers and I felt empowered to contribute my skills.\"",
    name: "Sarah Mitchell",
    role: "Volunteer",
    initials: "S",
  },
];

const testimonialTrack = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="section-padding-lg bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            What People Say
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />
          <div className="testimonial-track flex gap-6 w-max">
            {testimonialTrack.map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                className="w-[88vw] md:w-[62vw] lg:w-[48vw] xl:w-[42vw] p-4 md:p-6"
              >
                <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
                <p className="text-xl md:text-2xl text-foreground/80 italic leading-relaxed text-center mb-6">
                  {item.quote}
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-600 text-primary-foreground flex items-center justify-center font-semibold shadow-sm">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-lg">{item.name}</p>
                    <p className="text-primary/80 text-sm">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
