import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../common/Logo.jsx";
import SplitText from "../motion/SplitText.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import GiantWordmark from "../motion/GiantWordmark.jsx";
import { Button } from "../ui/primitives.jsx";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "../ui/Icons.jsx";
import { site, mailto, whatsappLink } from "../../config/site.js";
import { services } from "../../data/services.js";

const linkClass = "text-slate-400 transition-colors hover:text-brand-300";

const company = [
  { to: "/about", label: "About Us" },
  { to: "/work", label: "Our Work" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const resources = [
  { to: "/blog", label: "Blog" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/insights", label: "Insights" },
  { to: "/faqs", label: "FAQs" },
];

const socials = [
  { href: site.social.instagram, label: "Instagram", short: "IG" },
  { href: site.social.linkedin, label: "LinkedIn", short: "in" },
  { href: site.social.youtube, label: "YouTube", short: "YT" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night pb-24 text-white lg:pb-0">
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-400/10 blur-[120px]" />

      {/* CTA band */}
      <div className="container-x relative pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#00DDCC,#00A99D,#86F0E6,#00C4B4,#00DDCC)] bg-[length:300%_300%] p-8 animate-gradient-x sm:p-12 lg:p-14"
        >
          <div className="bg-grid absolute inset-0 opacity-40" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-night sm:text-4xl lg:text-5xl">
                <SplitText text="Ready to give your business its next life online?" stagger={0.05} />
              </h2>
              <p className="mt-4 text-base leading-7 text-night/75 sm:text-lg">
                Book a free 30-minute strategy call. We&apos;ll review your website and marketing and show you exactly where growth is waiting.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Magnetic>
              <Button to="/enquirisubmit" variant="dark" size="lg" shine arrow>
                Get Free Consultation
              </Button>
              </Magnetic>
              <Button href={whatsappLink(`Hi ${site.name}, I would like to discuss a project.`)} variant="light" size="lg">
                <IconWhatsApp className="h-5 w-5 text-[#25D366]" /> WhatsApp Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Links */}
      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr] lg:gap-8">
        <div>
          <Link to="/" aria-label={`${site.name} home`}>
            <Logo size="md" />
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-7 text-slate-400">
            A full-service digital marketing agency helping growing businesses get found, get trusted and get more customers online.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-bold text-slate-300 transition hover:border-brand-400 hover:bg-brand-400 hover:text-night"
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">Services</h3>
          <ul className="space-y-3 text-[15px]">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`} className={linkClass}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">Company</h3>
          <ul className="space-y-3 text-[15px]">
            {company.map((item) => (
              <li key={item.to}><Link to={item.to} className={linkClass}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">Resources</h3>
          <ul className="space-y-3 text-[15px]">
            {resources.map((item) => (
              <li key={item.to}><Link to={item.to} className={linkClass}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">Get in touch</h3>
          <ul className="space-y-4 text-[15px]">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="flex items-center gap-3 text-slate-300 transition hover:text-brand-300">
                  <IconPhone className="h-4 w-4 shrink-0 text-brand-400" /> {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a href={mailto("Project enquiry")} className="flex items-center gap-3 break-all text-slate-300 transition hover:text-brand-300">
                <IconMail className="h-4 w-4 shrink-0 text-brand-400" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {site.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x">
        <GiantWordmark />
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/privacy-policy" className="transition hover:text-brand-300">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-brand-300">Terms &amp; Conditions</Link>
            <Link to="/faqs" className="transition hover:text-brand-300">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
