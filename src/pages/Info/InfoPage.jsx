import { Link } from "react-router-dom";

const pageContent = {
  careers: {
    eyebrow: "Company / Careers",
    title: "Build what moves business forward.",
    intro: "We are always looking for thoughtful strategists, makers and growth-minded people who care about the details.",
    items: ["Creative roles", "Growth and performance", "Technology and product", "Internships and collaborations"],
    cta: "Send your introduction",
    href: "mailto:officialrahusen01@gmail.com?subject=Careers%20at%20Vertexo",
  },
  contact: {
    eyebrow: "Company / Contact",
    title: "Have a good idea? Let’s make it real.",
    intro: "Tell us what you are building, where you are stuck or what you want to make impossible to ignore.",
    items: ["+91 97726 09110", "+91 96604 39686", "officialrahusen01@gmail.com", "Jaipur, India / Working worldwide"],
    cta: "Start a conversation",
    href: "mailto:officialrahusen01@gmail.com",
  },
  blog: {
    eyebrow: "Resources / Blog",
    title: "Useful thinking for the next move.",
    intro: "Notes on digital growth, creative systems, technology and the work behind stronger brands.",
    items: ["How to build a digital growth system", "What makes a brand memorable", "The practical SEO starting point", "Creative that earns attention"],
    cta: "Get in touch for the latest",
    href: "mailto:officialrahusen01@gmail.com?subject=Vertexo%20Blog",
  },
  "case-studies": {
    eyebrow: "Resources / Case Studies",
    title: "Proof you can feel and measure.",
    intro: "Explore the decisions, systems and outcomes behind the work we build with ambitious teams.",
    items: ["Aster House / Brand strategy", "Morrow Studio / E-commerce", "Common Ground / Social growth", "Vertexo / Digital peak"],
    cta: "View selected work",
    href: "/work",
  },
  insights: {
    eyebrow: "Resources / Insights",
    title: "Clearer signals. Better decisions.",
    intro: "A practical point of view on where marketing, technology and business growth meet.",
    items: ["Innovation with a commercial reason", "Digital expertise without the jargon", "Growth that compounds over time", "The human side of technology"],
    cta: "Talk to Vertexo",
    href: "mailto:officialrahusen01@gmail.com?subject=Vertexo%20Insights",
  },
  faqs: {
    eyebrow: "Resources / FAQs",
    title: "Good questions make better work.",
    intro: "A few useful answers before we begin. Still curious? Our team is one message away.",
    items: ["What does a project usually start with?", "Can you work with an existing team?", "Do you support businesses outside India?", "How do we measure success?"],
    cta: "Ask us anything",
    href: "mailto:officialrahusen01@gmail.com?subject=Question%20for%20Vertexo",
  },
};

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
          <div className="border-t border-ink/15">
            {content.items.map((item, index) => (
              <div key={item} className="group flex items-center gap-5 border-b border-ink/15 py-6 sm:py-8">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/20 text-[10px] transition group-hover:border-coral group-hover:bg-coral">0{index + 1}</span>
                <h2 className="text-2xl tracking-[-0.05em] transition group-hover:translate-x-2 sm:text-4xl">{item}</h2>
                <span className="ml-auto text-xl text-coral transition group-hover:translate-x-2">↗</span>
              </div>
            ))}
          </div>
          {content.href.startsWith("/") ? (
            <Link to={content.href} className="mt-12 inline-flex items-center gap-5 rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-coral hover:text-ink">
              {content.cta} <span className="text-lg">↗</span>
            </Link>
          ) : (
            <a href={content.href} className="mt-12 inline-flex items-center gap-5 rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.14em] text-cream transition duration-500 hover:-translate-y-1 hover:bg-coral hover:text-ink">
              {content.cta} <span className="text-lg">↗</span>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
