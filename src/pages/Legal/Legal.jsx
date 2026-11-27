import { Link } from "react-router-dom";
import { PageHero } from "../../components/ui/primitives.jsx";
import { site, mailto } from "../../config/site.js";

const UPDATED = "27 November 2026";

const content = {
  privacy: {
    title: "Privacy Policy",
    intro: `How ${site.name} collects, uses and protects your information.`,
    sections: [
      {
        h: "Information we collect",
        p: [
          "When you fill in an enquiry form, contact us on WhatsApp, call or email us, we collect the details you share — such as your name, phone number, email address, business details, budget range and message.",
          "Like most websites, we may also collect basic technical information automatically, such as your browser type, device, pages visited and approximate location, through cookies and analytics tools.",
        ],
      },
      {
        h: "How we use your information",
        p: [
          "To respond to your enquiry, prepare proposals and provide the services you request.",
          "To communicate with you about your project, including by phone, WhatsApp and email.",
          "To understand how visitors use our website so we can improve it and our marketing.",
          "We do not sell or rent your personal information to anyone.",
        ],
      },
      {
        h: "Sharing your information",
        p: [
          "We share information only with trusted service providers who help us run our business (for example website hosting, email, analytics and advertising platforms), and only as needed to provide our services, or when required by law.",
        ],
      },
      {
        h: "Cookies & analytics",
        p: [
          "We may use cookies and similar technologies, including tools such as Google Analytics and advertising pixels from platforms like Google and Meta, to measure website performance and the effectiveness of our campaigns. You can block or delete cookies through your browser settings.",
        ],
      },
      {
        h: "Data retention & security",
        p: [
          "We keep enquiry and client information only as long as needed for the purposes above or as required by law, and we take reasonable technical and organisational measures to protect it.",
        ],
      },
      {
        h: "Your rights",
        p: [
          `You can ask us to access, correct or delete the personal information we hold about you, or to stop contacting you, by emailing ${site.email}.`,
        ],
      },
      {
        h: "Changes to this policy",
        p: ["We may update this policy from time to time. The latest version will always be available on this page."],
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: `The terms that apply when you use the ${site.name} website and services.`,
    sections: [
      {
        h: "Using this website",
        p: [
          `By using this website you agree to these terms. The content on this site is for general information about ${site.name} and our services and may change without notice.`,
        ],
      },
      {
        h: "Proposals & engagements",
        p: [
          "Any project or ongoing service is governed by the specific proposal, quotation or agreement we share with you, including scope, timelines, fees and payment terms. If anything in that agreement differs from these terms, the agreement applies.",
        ],
      },
      {
        h: "Results",
        p: [
          "Digital marketing outcomes depend on many factors outside our control, such as competition, platform algorithms, budgets and market conditions. We work hard to deliver strong results but cannot guarantee specific rankings, leads or sales.",
        ],
      },
      {
        h: "Third-party platforms",
        p: [
          "Our work often uses third-party platforms such as Google, Meta, hosting providers and app stores. Their own terms and policies also apply, and we are not responsible for changes or outages on those platforms.",
        ],
      },
      {
        h: "Intellectual property",
        p: [
          `The ${site.name} name, logo and website content belong to us and may not be copied without permission. Ownership of work we create for clients is set out in each client agreement.`,
        ],
      },
      {
        h: "Limitation of liability",
        p: [
          "To the extent permitted by law, we are not liable for indirect or consequential losses arising from use of this website.",
        ],
      },
      {
        h: "Governing law",
        p: ["These terms are governed by the laws of India, and courts in Jaipur, Rajasthan will have jurisdiction."],
      },
    ],
  },
};

export default function Legal({ type }) {
  const page = content[type];

  return (
    <main>
      <PageHero crumbs={[{ label: page.title }]} eyebrow="Legal" title={page.title} subtitle={page.intro} />
      <section className="bg-night-900 py-16 sm:py-24">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-slate-500">Last updated: {UPDATED}</p>
          <div className="mt-8 space-y-10">
            {page.sections.map((section, index) => (
              <div key={section.h}>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  <span className="mr-2 text-brand-400">{index + 1}.</span>
                  {section.h}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.p.map((text) => (
                    <p key={text} className="leading-7 text-slate-400">{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-white/10 bg-night-800 p-6 text-slate-400">
            Questions? Email us at{" "}
            <a href={mailto(page.title)} className="font-semibold text-brand-300 hover:underline">{site.email}</a>{" "}
            or visit our <Link to="/contact" className="font-semibold text-brand-300 hover:underline">contact page</Link>.
          </div>
        </div>
      </section>
    </main>
  );
}
