import { Heart, Megaphone, UserRound, UserRoundPlus, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
            <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
              Join The Movement
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get Involved</h1>
            <p className="text-primary-foreground/85 text-lg max-w-3xl">
              Join a community of changemakers working to build a resilient future for
              Kakuma and Turkana West County.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-center mb-8">
              Membership Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <article className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">General Members</h3>
                <p className="text-muted-foreground text-sm">
                  Community members aged 18 and above who share ECA&apos;s vision and are
                  committed to education and climate advocacy.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Youth Members</h3>
                <p className="text-muted-foreground text-sm">
                  Young people between 15-35 years who are passionate about
                  environmental stewardship and community development.
                </p>
              </article>

              <article className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <UserRoundPlus className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Associate Members</h3>
                <p className="text-muted-foreground text-sm">
                  Organizations, partners, and supporters who wish to collaborate with
                  ECA on shared goals and initiatives.
                </p>
              </article>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 mb-10">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Member Rights & Responsibilities
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="font-semibold mb-2">Rights</p>
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li>• Participate in all general meetings and vote</li>
                    <li>• Stand for election to leadership positions</li>
                    <li>• Access organizational resources and benefits</li>
                    <li>• Receive regular updates on activities</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Responsibilities</p>
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li>• Uphold ECA&apos;s mission, vision, and values</li>
                    <li>• Actively participate in programs</li>
                    <li>• Contribute to a positive culture</li>
                    <li>• Respect democratic governance</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-heading font-semibold text-center mb-6">
              Ways to Support ECA
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="font-heading font-semibold mb-1">Volunteer</p>
                <p className="text-muted-foreground text-sm">
                  Contribute your time and skills to support ECA programs.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="font-heading font-semibold mb-1">Donate</p>
                <p className="text-muted-foreground text-sm">
                  Help sustain education, climate action, and youth initiatives.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="font-heading font-semibold mb-1">Partner</p>
                <p className="text-muted-foreground text-sm">
                  Collaborate with ECA as an organization through shared programs.
                </p>
              </article>
              <article className="rounded-xl border border-border bg-card p-6">
                <p className="font-heading font-semibold mb-1">Spread the Word</p>
                <p className="text-muted-foreground text-sm">
                  Follow and share our mission to raise awareness in Turkana West.
                </p>
              </article>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Reach Out to Us
                <Megaphone className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Membership;
