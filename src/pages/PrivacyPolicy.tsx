import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Legal
            </p>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Last updated: April 11, 2026. This policy describes how Education and Climate Advocacy
              (“ECA,” “we,” “our,” or “us”) handles information when you use our website.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-3xl space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                1. Scope
              </h2>
              <p>
                This policy applies to information collected through this website and related
                communications where we link to this policy. It does not cover third-party sites we
                may link to; their policies apply when you leave our site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                2. Information we may collect
              </h2>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <span className="text-foreground/90">Contact details</span> you provide (for
                  example name, email address, phone number) when you reach out via forms or email.
                </li>
                <li>
                  <span className="text-foreground/90">Message content</span> you send in
                  inquiries, partnership requests, or volunteer interest.
                </li>
                <li>
                  <span className="text-foreground/90">Technical data</span> such as browser type,
                  device type, and approximate region derived from standard server logs, where
                  applicable.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                3. How we use information
              </h2>
              <p>We use information to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Respond to your questions and requests.</li>
                <li>Coordinate programs, volunteering, and partnerships where relevant.</li>
                <li>Improve our website and understand how it is used in aggregate.</li>
                <li>Comply with legal obligations and protect our community and organization.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                4. Legal bases (where applicable)
              </h2>
              <p>
                Where data protection law requires a legal basis, we rely on consent where we ask for
                it, our legitimate interests in operating a non-profit and communicating with
                supporters (balanced against your rights), and legal obligations where they apply.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                5. Sharing of information
              </h2>
              <p>
                We do not sell your personal information. We may share data with service providers
                who help us host the website or send communications, under confidentiality
                obligations, or when required by law or to protect rights and safety.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                6. Data retention
              </h2>
              <p>
                We keep information only as long as needed for the purposes above, unless a longer
                period is required for legal, accounting, or safeguarding reasons.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                7. Security
              </h2>
              <p>
                We take reasonable technical and organizational measures to protect information
                against unauthorized access, loss, or misuse. No online transmission is completely
                secure; please use discretion when sharing sensitive information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                8. Your choices and rights
              </h2>
              <p>
                Depending on applicable law, you may have rights to access, correct, delete, or
                restrict processing of your personal data, or to object to certain processing. To
                exercise these rights, contact us using the details in the footer or on our Contact
                page. We will respond within a reasonable time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                9. Children
              </h2>
              <p>
                Our website is not directed at collecting information from children without
                appropriate guardian involvement. If you believe we have received a child’s
                information improperly, please contact us so we can address it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                10. Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will revise the “Last
                updated” date and, where appropriate, provide additional notice on the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                11. Contact
              </h2>
              <p>
                For privacy-related questions, contact us via the information on our{" "}
                <Link to="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                  Contact
                </Link>{" "}
                page or the email listed in the site footer.
              </p>
            </section>

            <p className="border-t border-border pt-8 text-sm italic text-muted-foreground/90">
              This policy is for general transparency. ECA may update practices; seek professional
              advice for specific legal questions.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
