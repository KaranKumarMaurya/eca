import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
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
              Terms and Conditions
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Last updated: April 11, 2026. Please read these terms carefully before using this
              website or engaging with Education and Climate Advocacy (ECA).
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-3xl space-y-8 text-[0.95rem] leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                1. Introduction
              </h2>
              <p>
                Welcome to the website of Education and Climate Advocacy (“ECA,” “we,” “our,” or
                “us”). By accessing or using this site, you agree to these Terms and Conditions. If
                you do not agree, please do not use the website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                2. Who we are
              </h2>
              <p>
                ECA is a non-profit community-based organization working in Kakuma and Turkana West
                County, Kenya. Contact details appear in our website footer and on the Contact page.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                3. Use of the website
              </h2>
              <p>
                You agree to use this website only for lawful purposes and in a way that does not
                infringe the rights of others or restrict their use of the site. You must not misuse
                the site, attempt unauthorized access to our systems, or introduce harmful material.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                4. Content and accuracy
              </h2>
              <p>
                We aim to keep information accurate and up to date but do not guarantee completeness
                or suitability for any particular purpose. Content may change without notice.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                5. Donations and volunteering
              </h2>
              <p>
                Any donations or volunteer arrangements are subject to separate agreements,
                confirmations, or policies we may provide at the time. Nothing on this site alone
                constitutes a binding commitment until confirmed by ECA in writing where required.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                6. Intellectual property
              </h2>
              <p>
                Text, images, logos, and design elements on this site are owned by ECA or used with
                permission. You may not copy, modify, or distribute them without our prior written
                consent, except as allowed by applicable law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                7. Limitation of liability
              </h2>
              <p>
                To the fullest extent permitted by law, ECA shall not be liable for any indirect,
                incidental, or consequential loss arising from your use of this website or reliance
                on its content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                8. Governing law
              </h2>
              <p>
                These terms are governed by the laws of Kenya. Disputes shall be subject to the
                exclusive jurisdiction of the courts of Kenya, unless otherwise required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                9. Changes
              </h2>
              <p>
                We may update these terms from time to time. The “Last updated” date at the top will
                change when we do. Continued use of the site after changes constitutes acceptance of
                the revised terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
                10. Contact
              </h2>
              <p>
                For questions about these terms, please contact us using the details on our{" "}
                <Link to="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                  Contact
                </Link>{" "}
                page.
              </p>
            </section>

            <p className="border-t border-border pt-8 text-sm italic text-muted-foreground/90">
              This document is provided for general information. ECA recommends obtaining
              independent legal advice for your specific situation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
