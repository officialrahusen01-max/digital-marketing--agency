import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Services from "../pages/Services/Services.jsx";
import DigitalMarketing from "../pages/Services/DigitalMarketing.jsx";
import SEO from "../pages/Services/SEO.jsx";
import SocialMediaMarketing from "../pages/Services/SocialMediaMarketing.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/seo" element={<SEO />} />
      <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
    </Routes>
  );
}
