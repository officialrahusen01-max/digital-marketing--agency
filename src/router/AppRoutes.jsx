import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Services from "../pages/Services/Services.jsx";
import ServicePage from "../pages/Services/ServicePage.jsx";
import Work from "../pages/Work/Work.jsx";
import InfoPage from "../pages/Info/InfoPage.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import EnquirySubmit from "../pages/Enquiry/EnquirySubmit.jsx";
import BlogListPage from "../pages/Blog/BlogListPage.jsx";
import BlogDetailPage from "../pages/Blog/BlogDetailPage.jsx";
import AdminLogin from "../pages/Admin/AdminLogin.jsx";
import AdminDashboard from "../pages/Admin/AdminDashboard.jsx";
import NotFound from "../pages/NotFound.jsx";
import Legal from "../pages/Legal/Legal.jsx";

export default function AppRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServicePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/enquirisubmit" element={<EnquirySubmit />} />
      <Route path="/enquiry" element={<EnquirySubmit />} />
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/careers" element={<InfoPage type="careers" />} />
      <Route path="/case-studies" element={<InfoPage type="case-studies" />} />
      <Route path="/insights" element={<InfoPage type="insights" />} />
      <Route path="/faqs" element={<InfoPage type="faqs" />} />
      <Route path="/privacy-policy" element={<Legal type="privacy" />} />
      <Route path="/terms" element={<Legal type="terms" />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
