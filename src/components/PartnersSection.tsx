import { Link } from "react-router-dom";
const partners = [
  "Local Schools", "Refugee Youth Groups", "Women-Led Associations", "Farmers Cooperatives",
  "Community Health Volunteers", "Climate Action Clubs", "Faith-Based Networks", "County Stakeholders",
];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-4">
            Community Partners & Supporters
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Working With Local Change-Makers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center h-24 rounded-xl bg-background border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-muted-foreground font-heading font-semibold text-lg">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-10 md:p-16 text-center">
          <h3 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg">
            Join thousands of supporters who are changing the world, 
            one community at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-80"
            />
            <Link to="/contact" className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
