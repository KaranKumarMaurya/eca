import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const partners = [
  "Local schools",
  "Refugee youth groups",
  "Women-led associations",
  "Farmers cooperatives",
  "Community health volunteers",
  "Climate action clubs",
  "Faith-based networks",
  "County stakeholders",
];

const PartnersSection = () => {
  return (
    <section className="section-padding border-t border-border bg-gradient-to-b from-card to-background">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-14">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Ecosystem
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-4xl">
            Working with local change-makers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            ECA doesn&apos;t work alone—these are the kinds of groups and networks we learn alongside in
            Turkana West.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex min-h-[5.5rem] items-center justify-center rounded-2xl border border-border/80 bg-background px-4 py-4 text-center shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <span className="font-heading text-sm font-semibold leading-snug text-foreground md:text-base">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-primary/20 bg-primary p-8 text-center shadow-xl md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
            aria-hidden
          />
          <Handshake className="mx-auto mb-4 h-10 w-10 text-secondary" strokeWidth={1.25} aria-hidden />
          <h3 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
            Want to collaborate?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80">
            Tell us who you represent and what you hope to build—we&apos;ll respond with clear next
            steps and honest questions.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90"
          >
            <Link to="/contact" className="gap-2">
              Start a partnership inquiry
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
