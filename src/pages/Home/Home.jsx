import HeroSection from "../../sections/home/HeroSection.jsx";
import BrandTicker from "../../sections/home/BrandTicker.jsx";
import ServicesPreview from "../../sections/home/ServicesPreview.jsx";
import WhyUs from "../../sections/home/WhyUs.jsx";
import VelocityMarquee from "../../components/motion/VelocityMarquee.jsx";
import Manifesto from "../../sections/home/Manifesto.jsx";
import StatsStrip from "../../sections/home/StatsStrip.jsx";
import ProcessSection from "../../sections/home/ProcessSection.jsx";
import WorkShowcase from "../../sections/home/WorkShowcase.jsx";
import Industries from "../../sections/home/Industries.jsx";
import TestimonialSection from "../../sections/home/TestimonialSection.jsx";
import FaqSection from "../../sections/home/FaqSection.jsx";
import BlogSection from "../../sections/home/BlogSection.jsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandTicker />
      <Manifesto />
      <ServicesPreview />
      <StatsStrip />
      <WhyUs />
      <VelocityMarquee />
      <ProcessSection />
      <Industries />
      <WorkShowcase />
      <TestimonialSection />
      <FaqSection />
      <BlogSection />
    </main>
  );
}
