import { Link } from "react-router-dom";
import EnquiryForm from "../../components/EnquiryForm.jsx";
import { site, mailto, whatsappLink } from "../../config/site.js";

const pageContent = {
  careers: {
    eyebrow: "Company / Careers",
    title: "Build what moves business forward.",
    intro: "We are always looking for thoughtful marketers, designers and developers who care about the details and like seeing their work drive real results.",
    items: [
      { title: "SEO & content", text: "Keyword research, on-page SEO, content writing and link building." },
      { title: "Performance marketing", text: "Google Ads, Meta ads, tracking and reporting." },
      { title: "Design & development", text: "UI/UX, React websites, mobile apps and landing pages." },
      { title: "Internships", text: "Learn digital marketing on live client projects with a senior mentor." },
    ],
    cta: "Send your CV",
    href: mailto(`Careers at ${site.name}`),
  },
  contact: {
    eyebrow: "Company / Contact",
    title: "Have a good idea? Let’s make it real.",
    intro: "Call, WhatsApp or email us — or fill in the form below. We reply to every enquiry within one working day.",
    items: [
      ...site.phones.map((phone) => ({ title: phone.label, text: "Call us directly", href: phone.href })),
      { title: "WhatsApp us", text: "Quickest way to reach the team", href: whatsappLink(`Hi ${site.name}, I would like to discuss a project.`) },
      { title: site.email, text: "Email for proposals and partnerships", href: mailto("Project enquiry") },
      { title: site.city, text: "Working with clients across India and worldwide" },
    ],
    cta: "Get a free quote",
    href: "/enquirisubmit",
  },
  "case-studies": {
    eyebrow: "Resources / Case Studies",
    title: "Proof you can feel and measure.",
    intro: "Every engagement starts with a goal we can measure — more leads, more sales, more visibility. Explore how we approach the work.",
    items: [
      { title: "Local business SEO", text: "Google Business Profile, local keywords and reviews to win the map pack." },
      { title: "Lead generation with Google Ads", text: "High-intent search campaigns with landing pages built to convert." },
      { title: "Social media growth", text: "Content calendars, reels and paid social that build an audience that buys." },
      { title: "Website rebuilds", text: "Fast, mobile-first websites that turn visitors into enquiries." },
    ],
    cta: "View selected work",
    href: "/work",
  },
  insights: {
    eyebrow: "Resources / Insights",
    title: "Clearer signals. Better decisions.",
    intro: "A practical point of view on where marketing, technology and business growth meet.",
    items: [
      { title: "Track before you spend", text: "If you can’t measure a lead, you can’t improve the campaign that brought it." },
      { title: "Your website is your best salesperson", text: "Speed, clarity and trust signals do more than any single ad." },
      { title: "SEO compounds, ads accelerate", text: "The strongest plans use both — ads for today, SEO for next year." },
      { title: "Consistency beats virality", text: "A steady content rhythm builds more trust than one lucky post." },
    ],
    cta: "Read the blog",
    href: "/blog",
  },
  faqs: {
    eyebrow: "Resources / FAQs",
    title: "Good questions make better work.",
    intro: "A few useful answers before we begin. Still curious? Our team is one message away.",
    faqs: [
      { q: "What does a project usually start with?", a: "A free 30-minute call. We understand your business, goals and budget, look at your current website and channels, and then send a clear proposal with scope, timeline and pricing." },
      { q: "How long does SEO take to show results?", a: "Most websites start seeing movement in 3–4 months, with stronger results by 6 months. Technical fixes and local SEO often show results sooner." },
      { q: "What budget do I need for Google Ads or Meta ads?", a: "It depends on your industry, location and goals. After a quick look at your market and competitors, we recommend a starting ad budget you are comfortable with — and scale only what is working." },
      { q: "How much does a website cost?", a: "It depends on the number of pages, features and integrations. After a short discovery call we send a fixed, itemised quote — no hidden costs." },
      { q: "Can you work with my existing team or agency?", a: "Yes. We can own one channel (say, SEO or ads) and coordinate with your in-house team or other partners." },
      { q: "Do you work with businesses outside Jaipur or India?", a: "Yes. We work remotely with clients across India and abroad over calls, WhatsApp and shared reports." },
      { q: "How do we measure success?", a: "We agree on KPIs up front — leads, sales, calls, rankings or cost per lead — and share a simple monthly report with what we did and what changed." },
      { q: "Is there a long-term contract?", a: "No lock-ins. Monthly services run month to month after an initial 3-month period, so results — not contracts — keep us working together." },
    ],
    cta: "Ask us anything",
    href: whatsappLink(`Hi ${site.name}, I have a question.`),
  },
};

const ctaClass = "mt-12 inline-flex items-center gap-5 rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-coral hover:text-ink";

function SmartLink({ href, className, children }) {
  if (href.startsWith("/")) return <Link to={href} className={className}>{children}</Link>;
  const external = href.startsWith("http");
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export default function InfoPage({ type }) {
  const content = pageContent[type];

  return (
    <main className="bg-ink text-cream">
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-[6vw] lg:pb-36 lg:pt-36" aria-labelledby={`${type}-title`}>
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(60vw,760px)] w-[min(60vw,760px)] rounded-full border border-coral/15" />
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist">
            <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_16px_rgb(0_221_204)]" />
            {content.eyebrow}
          </p>
          <h1 id={`${type}-title`} className="max-w-[1150px] text-[clamp(3.6rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.085em]">{content.title}</h1>
          <p className="mt-12 max-w-2xl border-t border-cream/15 pt-6 text-xl leading-8 text-cream/75 sm:text-2xl sm:leading-9">{content.intro}</p>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 text-ink sm:px-10 lg:px-[6vw] lg:py-28">
        <div className="mx-auto max-w-[1100px]">
          {content.faqs ? (
            <div className="border-t border-ink/15">
              {content.faqs.map((faq, index) => (
                <details key={faq.q} className="group border-b border-ink/15 py-6 sm:py-8" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-5 [&::-webkit-details-marker]:hidden">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/20 text-[10px] transition group-open:border-coral group-open:bg-coral">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="text-xl tracking-[-0.04em] sm:text-3xl">{faq.q}</h2>
                    <span className="ml-auto text-2xl text-coral transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-5 max-w-3xl pl-14 text-base leading-7 text-ink/70 sm:text-lg">{faq.a}</p>
                </details>
              ))}
            </div>
          ) : (
            <div className="border-t border-ink/15">
              {content.items.map((item, index) => {
                const row = (
                  <>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/20 text-[10px] transition group-hover:border-coral group-hover:bg-coral">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h2 className="break-all text-2xl tracking-[-0.05em] transition group-hover:translate-x-2 sm:break-normal sm:text-4xl">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-ink/60 transition group-hover:translate-x-2 sm:text-base">{item.text}</p>
                    </div>
                    <span className="ml-auto text-xl text-coral transition group-hover:translate-x-2">↗</span>
                  </>
                );
                const rowClass = "group flex items-center gap-5 border-b border-ink/15 py-6 sm:py-8";
                return item.href ? (
                  <SmartLink key={item.title} href={item.href} className={rowClass}>{row}</SmartLink>
                ) : (
                  <div key={item.title} className={rowClass}>{row}</div>
                );
              })}
            </div>
          )}
          <SmartLink href={content.href} className={ctaClass}>
            {content.cta} <span className="text-lg">↗</span>
          </SmartLink>
        </div>
      </section>

      {(type === "contact" || type === "faqs") && <EnquiryForm />}
    </main>
  );
}
