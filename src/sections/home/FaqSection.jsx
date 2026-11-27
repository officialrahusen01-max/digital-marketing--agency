import { faqs } from "../../data/faqs.js";
import FaqList from "../../components/ui/FaqList.jsx";
import { Button, SectionHeader } from "../../components/ui/primitives.jsx";
import { IconWhatsApp } from "../../components/ui/Icons.jsx";
import { site, whatsappLink } from "../../config/site.js";

export default function FaqSection() {
  return (
    <section className="bg-night py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            align="left"
            eyebrow="FAQs"
            id="faq-title" title="Questions we hear a lot"
            subtitle="Can't find what you're looking for? Message us — a real person will reply."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappLink(`Hi ${site.name}, I have a question.`)} variant="whatsapp">
              <IconWhatsApp className="h-5 w-5" /> Ask on WhatsApp
            </Button>
            <Button to="/faqs" variant="outline">All FAQs</Button>
          </div>
        </div>
        <FaqList items={faqs.slice(0, 5)} />
      </div>
    </section>
  );
}
