import HeroSection from "../../sections/home/HeroSection.jsx";
import BrandTicker from "../../sections/home/BrandTicker.jsx";
import AboutPreview from "../../sections/home/AboutPreview.jsx";
import ServicesPreview from "../../sections/home/ServicesPreview.jsx";
import WorkShowcase from "../../sections/home/WorkShowcase.jsx";
import ProcessSection from "../../sections/home/ProcessSection.jsx";
import TestimonialSection from "../../sections/home/TestimonialSection.jsx";
import CtaSection from "../../sections/home/CtaSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandTicker />
      <AboutPreview />
      <ServicesPreview />
      <WorkShowcase />
      <ProcessSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}
