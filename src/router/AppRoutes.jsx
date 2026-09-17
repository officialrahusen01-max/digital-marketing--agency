import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Services from "../pages/Services/Services.jsx";
import DigitalMarketing from "../pages/Services/DigitalMarketing.jsx";
import SEO from "../pages/Services/SEO.jsx";
import SocialMediaMarketing from "../pages/Services/SocialMediaMarketing.jsx";
import Work from "../pages/Work/Work.jsx";
import ServicePage from "../pages/Services/ServicePage.jsx";
import InfoPage from "../pages/Info/InfoPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/seo" element={<SEO />} />
      <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
      <Route path="/services/google-ads" element={<ServicePage />} />
      <Route path="/services/web-development" element={<ServicePage />} />
      <Route path="/services/mobile-app-development" element={<ServicePage />} />
      <Route path="/careers" element={<InfoPage type="careers" />} />
      <Route path="/contact" element={<InfoPage type="contact" />} />
      <Route path="/blog" element={<InfoPage type="blog" />} />
      <Route path="/case-studies" element={<InfoPage type="case-studies" />} />
      <Route path="/insights" element={<InfoPage type="insights" />} />
      <Route path="/faqs" element={<InfoPage type="faqs" />} />
    </Routes>
  );
}
