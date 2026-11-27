import { PageHero } from "../../components/ui/primitives.jsx";
import EnquiryForm from "../../components/EnquiryForm.jsx";
import ContactAside from "../../components/ui/ContactAside.jsx";

export default function Contact() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact us"
        title="Let’s talk about your growth"
        subtitle="Call, WhatsApp or email us — or fill in the form. We reply to every enquiry within one working day."
      />
      <section className="bg-night-900 py-16 sm:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-10">
          <EnquiryForm title="Send us a message" />
          <ContactAside />
        </div>
      </section>
    </main>
  );
}
