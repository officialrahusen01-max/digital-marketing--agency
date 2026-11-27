import { PageHero } from "../../components/ui/primitives.jsx";
import EnquiryForm from "../../components/EnquiryForm.jsx";
import ContactAside from "../../components/ui/ContactAside.jsx";
import { IconCheck } from "../../components/ui/Icons.jsx";

const perks = ["Free 30-minute strategy call", "Website & marketing review", "Clear plan with a fixed quote"];

export default function EnquirySubmit() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Free Consultation" }]}
        eyebrow="Free consultation"
        title={<>Start your next <span className="text-gradient">growth move</span></>}
        subtitle="Tell us what you want to build, improve or scale. No cost, no obligation."
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-400/15 text-brand-400">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              {perk}
            </li>
          ))}
        </ul>
      </PageHero>
      <section className="bg-night-900 py-16 sm:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-10">
          <EnquiryForm title="Get your free consultation" />
          <ContactAside />
        </div>
      </section>
    </main>
  );
}
