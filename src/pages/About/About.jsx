import { Button, PageHero, Reveal, SectionHeader } from "../../components/ui/primitives.jsx";
import { IconCheck, IconHandshake, IconReport, IconRocket, IconShield } from "../../components/ui/Icons.jsx";
import WhyUs from "../../sections/home/WhyUs.jsx";
import { site } from "../../config/site.js";

const values = [
  { Icon: IconReport, title: "Results over vanity", text: "We focus on leads, sales and growth — not likes and impressions for their own sake." },
  { Icon: IconShield, title: "Honest advice", text: "If a channel isn't right for your business, we'll tell you — even if it means less work for us." },
  { Icon: IconHandshake, title: "Partnership", text: "We work as an extension of your team, with direct access to the people doing the work." },
  { Icon: IconRocket, title: "Keep improving", text: "Every campaign is tested, measured and improved. Good is never the finish line." },
];

const teams = [
  { name: "Strategy & SEO", role: "Research, keywords, content and local SEO", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" },
  { name: "Design & Development", role: "Websites, apps, landing pages and brand creative", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80" },
  { name: "Ads & Social", role: "Google Ads, Meta ads, content and community", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80" },
];

export default function About() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "About" }]}
        eyebrow="About us"
        title={<>We give businesses their <span className="text-gradient">next life</span> online</>}
        subtitle={`${site.name} is a digital marketing and technology agency based in ${site.city}. We help growing businesses get found, get trusted and get more customers online.`}
      />

      {/* Story */}
      <section className="bg-night-800 py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover" />
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" alt="Planning a marketing strategy" loading="lazy" className="mt-12 aspect-[3/4] w-full rounded-3xl object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeader align="left" eyebrow="Our story" title="Built for businesses that are ready for their next chapter" />
            <Reveal className="mt-6 space-y-5 text-lg leading-8 text-slate-400">
              <p>
                Most businesses don&apos;t need more marketing jargon — they need more customers. We started {site.name} in {site.founded} to give growing businesses the kind of joined-up digital marketing that used to be available only to big brands.
              </p>
              <p>
                Instead of juggling separate freelancers for SEO, ads, social media and the website, our clients get one team and one plan — with every channel working towards the same goal.
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Free strategy call", "Transparent pricing", "Monthly reporting", "No lock-in contracts"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold text-slate-100">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-400 text-night">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-night py-20 text-white sm:py-28">
        <div className="container-x">
          <SectionHeader dark eyebrow="What we believe" title="The values behind every project" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.08} className="rounded-3xl border border-white/10 bg-night-800 p-7 transition hover:border-brand-400/50">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-400/10 text-brand-400">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-slate-400">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-night-900 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeader eyebrow="Our teams" title="Three focused teams under one roof" subtitle="So your SEO, ads, social media and website all work from the same plan." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {teams.map((team, index) => (
              <Reveal key={team.name} delay={index * 0.08} className="group overflow-hidden rounded-3xl border border-white/10 bg-night-800 shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={team.image} alt={team.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{team.name}</h3>
                  <p className="mt-1.5 text-slate-400">{team.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button to="/careers" variant="outline" arrow>Join our team</Button>
          </div>
        </div>
      </section>

      <WhyUs />
    </main>
  );
}
