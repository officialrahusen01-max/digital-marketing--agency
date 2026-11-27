import { services } from "../../data/services.js";
import ServiceCard from "../../components/ui/ServiceCard.jsx";
import { Button, PageHero } from "../../components/ui/primitives.jsx";
import ProcessSection from "../../sections/home/ProcessSection.jsx";
import FaqSection from "../../sections/home/FaqSection.jsx";

export default function Services() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Services" }]}
        eyebrow="Our services"
        title="Digital services that grow your business"
        subtitle="Pick one service or combine them into a complete growth plan. Every engagement starts with a free strategy call."
      >
        <Button to="/enquirisubmit" arrow>Get Free Consultation</Button>
        <Button href="#all-services" variant="outline-dark">Browse services</Button>
      </PageHero>

      <section id="all-services" className="scroll-mt-24 bg-night-900 py-20 sm:py-24" aria-label="All services">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
    </main>
  );
}
