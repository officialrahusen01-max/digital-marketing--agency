import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import AppRoutes from "./router/AppRoutes.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import FloatingContact from "./components/layout/FloatingContact.jsx";
import Preloader from "./components/motion/Preloader.jsx";
import PageTransition from "./components/motion/PageTransition.jsx";
import ScrollProgress from "./components/motion/ScrollProgress.jsx";
import Cursor from "./components/motion/Cursor.jsx";
import { services } from "./data/services.js";
import { site } from "./config/site.js";

const pageTitles = {
  "/": `${site.name} | Digital Marketing, SEO & Web Development Agency`,
  "/about": `About Us | ${site.name}`,
  "/services": `Services | ${site.name}`,
  "/work": `Our Work | ${site.name}`,
  "/blog": `Blog | ${site.name}`,
  "/contact": `Contact Us | ${site.name}`,
  "/enquirisubmit": `Get a Free Consultation | ${site.name}`,
  "/enquiry": `Get a Free Consultation | ${site.name}`,
  "/careers": `Careers | ${site.name}`,
  "/case-studies": `Case Studies | ${site.name}`,
  "/insights": `Insights | ${site.name}`,
  "/faqs": `FAQs | ${site.name}`,
  "/privacy-policy": `Privacy Policy | ${site.name}`,
  "/terms": `Terms & Conditions | ${site.name}`,
};

const pageDescriptions = {
  "/about": `${site.name} is a digital marketing and technology agency in ${site.city} helping growing businesses get found, get trusted and get more customers online.`,
  "/services": "SEO, Google Ads, social media marketing, website and mobile app development — one team, one growth plan. Free strategy call.",
  "/work": `Selected projects from ${site.name}: brand launches, e-commerce growth, social campaigns and websites.`,
  "/blog": "Practical guides on SEO, Google Ads, Meta ads, social media and websites for growing businesses.",
  "/contact": `Contact ${site.name} — call, WhatsApp or email. We reply to every enquiry within one working day.`,
  "/enquirisubmit": "Book a free 30-minute strategy call and website review with Next Life Digital. No cost, no obligation.",
  "/faqs": "Answers to common questions about SEO timelines, ad budgets, website costs, contracts and reporting.",
  "/privacy-policy": `How ${site.name} collects, uses and protects your information.`,
  "/terms": `Terms and conditions for using the ${site.name} website and services.`,
};

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function usePageTitle(pathname) {
  useEffect(() => {
    const service = services.find((item) => pathname === `/services/${item.id}`);
    const title = service
      ? `${service.title} Services | ${site.name}`
      : pageTitles[pathname] || (pathname.startsWith("/blog/") ? `Blog | ${site.name}` : site.name);
    const description = service ? `${service.description} ${service.overview}` : pageDescriptions[pathname] || site.description;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
  }, [pathname]);
}

function App() {
  const location = useLocation();
  const { pathname } = location;
  usePageTitle(pathname);
  const isAdmin = pathname.startsWith("/admin");

  // Skip the curtain "reveal" on the very first page load (the preloader handles that).
  const [initialPath] = useState(pathname);
  const [navigated, setNavigated] = useState(false);
  if (!navigated && pathname !== initialPath) setNavigated(true);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-night">
        Skip to content
      </a>
      {!isAdmin && <Preloader />}
      {!isAdmin && <ScrollProgress />}
      {!isAdmin && <Cursor />}
      {!isAdmin && <Navbar />}
      <div id="main">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}>
          <motion.div key={pathname}>
            {isAdmin ? (
              <AppRoutes location={location} />
            ) : (
              <PageTransition reveal={navigated}>
                <AppRoutes location={location} />
              </PageTransition>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingContact />}
    </MotionConfig>
  );
}

export default App;
