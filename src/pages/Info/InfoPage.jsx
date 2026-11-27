import { Button, PageHero, Reveal } from "../../components/ui/primitives.jsx";
import FaqList from "../../components/ui/FaqList.jsx";
import { IconChart, IconCode, IconSearch, IconSocial, IconSparkle, IconTarget, IconUsers, IconWhatsApp } from "../../components/ui/Icons.jsx";
import { faqs } from "../../data/faqs.js";
import { site, mailto, whatsappLink } from "../../config/site.js";

const pageContent = {
  careers: {
    crumb: "Careers",
    eyebrow: "Careers",
    title: "Build what moves businesses forward",
    intro: "We're always looking for thoughtful marketers, designers and developers who care about the details and like seeing their work drive real results.",
    items: [
      { Icon: IconSearch, title: "SEO & content", text: "Keyword research, on-page SEO, content writing and link building." },
      { Icon: IconTarget, title: "Performance marketing", text: "Google Ads, Meta ads, tracking and reporting." },
      { Icon: IconCode, title: "Design & development", text: "UI/UX, React websites, mobile apps and landing pages." },
      { Icon: IconUsers, title: "Internships", text: "Learn digital marketing on live client projects with a senior mentor." },
    ],
    cta: { label: "Send your CV", href: mailto(`Careers at ${site.name}`) },
  },
  "case-studies": {
    crumb: "Case Studies",
    eyebrow: "Case studies",
    title: "Proof you can feel and measure",
    intro: "Every engagement starts with a goal we can measure — more leads, more sales, more visibility. Here's how we approach the work.",
    items: [
      { Icon: IconSearch, title: "Local business SEO", text: "Google Business Profile, local keywords and reviews to win the map pack." },
      { Icon: IconTarget, title: "Lead generation with Google Ads", text: "High-intent search campaigns with landing pages built to convert." },
      { Icon: IconSocial, title: "Social media growth", text: "Content calendars, reels and paid social that build an audience that buys." },
      { Icon: IconCode, title: "Website rebuilds", text: "Fast, mobile-first websites that turn visitors into enquiries." },
    ],
    cta: { label: "View our work", to: "/work" },
  },
  insights: {
    crumb: "Insights",
    eyebrow: "Insights",
    title: "Clearer signals. Better decisions.",
    intro: "A practical point of view on where marketing, technology and business growth meet.",
    items: [
      { Icon: IconChart, title: "Track before you spend", text: "If you can't measure a lead, you can't improve the campaign that brought it." },
      { Icon: IconCode, title: "Your website is your best salesperson", text: "Speed, clarity and trust signals do more than any single ad." },
      { Icon: IconSearch, title: "SEO compounds, ads accelerate", text: "The strongest plans use both — ads for today, SEO for next year." },
      { Icon: IconSparkle, title: "Consistency beats virality", text: "A steady content rhythm builds more trust than one lucky post." },
    ],
    cta: { label: "Read the blog", to: "/blog" },
  },
  faqs: {
    crumb: "FAQs",
    eyebrow: "FAQs",
    title: "Frequently asked questions",
    intro: "A few useful answers before we begin. Still curious? Our team is one message away.",
  },
};

export default function InfoPage({ type }) {
  const content = pageContent[type];

  return (
    <main>
      <PageHero crumbs={[{ label: content.crumb }]} eyebrow={content.eyebrow} title={content.title} subtitle={content.intro} />

      {type === "faqs" ? (
        <section className="bg-night-900 py-16 sm:py-24">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px]">
            <FaqList items={faqs} />
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl bg-night p-7 text-white">
                <h2 className="text-xl font-bold">Still have questions?</h2>
                <p className="mt-2 leading-7 text-slate-400">Message us and a real person from our team will reply.</p>
                <Button href={whatsappLink(`Hi ${site.name}, I have a question.`)} variant="whatsapp" className="mt-6 w-full">
                  <IconWhatsApp className="h-5 w-5" /> Ask on WhatsApp
                </Button>
                <Button to="/enquirisubmit" variant="outline-dark" className="mt-3 w-full">Book a free call</Button>
              </div>
            </aside>
          </div>
        </section>
      ) : (
        <section className="bg-night-900 py-16 sm:py-24">
          <div className="container-x">
            <div className="grid gap-6 sm:grid-cols-2">
              {content.items.map(({ Icon, title, text }, index) => (
                <Reveal key={title} delay={index * 0.06} className="flex gap-5 rounded-3xl border border-white/10 bg-night-800 p-7 shadow-card transition hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-lift">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-400/10 text-brand-300 ring-1 ring-brand-400/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-white">{title}</h2>
                    <p className="mt-1.5 leading-7 text-slate-400">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button to={content.cta.to} href={content.cta.href} variant="dark" size="lg" arrow>
                {content.cta.label}
              </Button>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
