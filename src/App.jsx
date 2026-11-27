import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AppRoutes from "./router/AppRoutes.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CustomCursor from "./components/common/CustomCursor.jsx";
import { useSmoothScroll } from "./hooks/useSmoothScroll.js";
import { services } from "./data/services.js";
import { site } from "./config/site.js";
import "./App.css";

const pageTitles = {
  "/": `${site.name} | Digital Marketing, SEO & Web Development Agency`,
  "/about": `About Us | ${site.name}`,
  "/services": `Services | ${site.name}`,
  "/work": `Our Work | ${site.name}`,
  "/blog": `Blog | ${site.name}`,
  "/contact": `Contact Us | ${site.name}`,
  "/enquirisubmit": `Get a Free Quote | ${site.name}`,
  "/enquiry": `Get a Free Quote | ${site.name}`,
  "/careers": `Careers | ${site.name}`,
  "/case-studies": `Case Studies | ${site.name}`,
  "/insights": `Insights | ${site.name}`,
  "/faqs": `FAQs | ${site.name}`,
};

function usePageSetup() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const service = services.find((item) => pathname === `/services/${item.id}`);
    document.title = service
      ? `${service.title} Services | ${site.name}`
      : pageTitles[pathname] || (pathname.startsWith("/blog/") ? `Blog | ${site.name}` : site.name);
  }, [pathname]);
}

function App() {
  // Initializes Lenis smooth scroll for the whole app
  useSmoothScroll();
  usePageSetup();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
