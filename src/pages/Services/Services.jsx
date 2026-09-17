import { services } from "../../data/services.js";
import ServiceCard from "../../components/ui/ServiceCard.jsx";

export default function Services() {
  return (
    <main className="bg-ink text-cream">
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-[6vw] lg:pb-36 lg:pt-36" aria-labelledby="services-title">
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(60vw,760px)] w-[min(60vw,760px)] rounded-full border border-coral/15" />
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist"><span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_16px_rgb(0_221_204)]" />03 / What we do</p>
          <h1 id="services-title" className="max-w-[1100px] text-[clamp(4rem,10vw,10rem)] font-medium leading-[0.82] tracking-[-0.085em]">Built for <em className="font-display font-normal text-coral">forward</em> motion.</h1>
          <div className="mt-12 grid gap-8 border-t border-cream/15 pt-6 md:grid-cols-[0.55fr_1fr] md:gap-16">
            <p className="text-[10px] uppercase tracking-[0.18em] text-mist">Strategy / Creative / Growth</p>
            <p className="max-w-2xl text-xl leading-8 text-cream/75 sm:text-2xl sm:leading-9">The right mix of thinking and making to help ambitious brands get noticed, chosen and remembered.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0f0e] px-6 py-20 sm:px-10 lg:px-[6vw] lg:py-28" aria-label="Our services">
        <div className="mx-auto grid max-w-[1600px] gap-5 md:grid-cols-3">
          {services.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
        </div>
      </section>

      <section className="bg-coral px-6 py-24 text-ink sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="services-cta-title">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-[10px] uppercase tracking-[0.2em]">One team / One clear direction</p>
          <h2 id="services-cta-title" className="max-w-5xl text-[clamp(3.5rem,8vw,9rem)] leading-[0.84] tracking-[-0.08em]">Your next chapter needs a <em className="font-display font-normal">point of view.</em></h2>
        </div>
      </section>
    </main>
  );
}
