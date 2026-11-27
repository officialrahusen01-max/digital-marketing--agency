import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../common/Logo.jsx";
import { Button } from "../ui/primitives.jsx";
import { IconChevronDown, IconClose, IconMail, IconMenu, IconPhone, serviceIcons } from "../ui/Icons.jsx";
import { services } from "../../data/services.js";
import { site, mailto } from "../../config/site.js";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services", dropdown: true },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const navClass = ({ isActive }) =>
  `relative isolate inline-flex h-10 items-center gap-1 rounded-full px-3.5 text-[15px] font-medium transition-colors ${
    isActive ? "text-white" : "text-slate-400 hover:text-white"
  }`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close menus when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden border-b border-white/5 bg-night text-[13px] text-slate-400 lg:block">
        <div className="container-x flex h-10 items-center justify-between">
          <p>Digital marketing, SEO &amp; web development agency — {site.city}</p>
          <div className="flex items-center gap-6">
            <a href={site.phones[0].href} className="flex items-center gap-2 transition hover:text-brand-300">
              <IconPhone className="h-3.5 w-3.5" /> {site.phones[0].label}
            </a>
            <a href={mailto("Project enquiry")} className="flex items-center gap-2 transition hover:text-brand-300">
              <IconMail className="h-3.5 w-3.5" /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-night/85 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl" : "border-b border-transparent bg-night"}`}>
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo size="sm" className="sm:hidden" />
            <Logo size="md" className="hidden sm:inline-flex" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {links.map((link) =>
              link.dropdown ? (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setIsServicesOpen(false);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setIsServicesOpen(false);
                  }}
                >
                  <NavLink to={link.to} className={navClass} aria-haspopup="true" aria-expanded={isServicesOpen} onFocus={() => setIsServicesOpen(true)}>
                    {({ isActive }) => (
                      <>
                        {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                        {link.label}
                        <IconChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                      </>
                    )}
                  </NavLink>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-3"
                      >
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-night-800 p-3 shadow-lift">
                          {services.map((service) => {
                            const Icon = serviceIcons[service.id];
                            return (
                              <Link key={service.id} to={`/services/${service.id}`} className="group flex gap-3 rounded-xl p-3 transition hover:bg-brand-400/10">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-400/10 text-brand-300 transition group-hover:bg-brand-400 group-hover:text-night">
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-white">{service.title}</span>
                                  <span className="mt-0.5 block text-[13px] leading-5 text-slate-500">{service.description}</span>
                                </span>
                              </Link>
                            );
                          })}
                          <Link to="/services" className="col-span-2 mt-1 flex items-center justify-between rounded-xl bg-night px-4 py-3 text-sm font-semibold text-white transition hover:bg-night-700">
                            View all services
                            <span className="text-brand-400">→</span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
                  {({ isActive }) => (
                    <>
                      {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                      {link.label}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button to="/enquirisubmit" size="sm" className="hidden sm:inline-flex" arrow>
              Free Consultation
            </Button>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:text-brand-300 lg:hidden"
            >
              {isMenuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-night lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="container-x flex flex-col py-4">
                {links.map((link) => (
                  <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => `border-b border-white/5 py-3.5 text-base font-medium ${isActive ? "text-brand-400" : "text-slate-200"}`}>
                    {link.label}
                  </NavLink>
                ))}
                <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Services</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const Icon = serviceIcons[service.id];
                    return (
                      <Link key={service.id} to={`/services/${service.id}`} className="flex items-center gap-2 rounded-xl border border-white/10 p-3 text-sm text-slate-300">
                        <Icon className="h-4 w-4 shrink-0 text-brand-400" />
                        {service.title}
                      </Link>
                    );
                  })}
                </div>
                <Button to="/enquirisubmit" className="mt-6 w-full" arrow>
                  Get a Free Consultation
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
