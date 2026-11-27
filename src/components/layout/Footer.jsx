import { Link } from "react-router-dom";
import Logo from "../common/Logo.jsx";
import { site, mailto, whatsappLink } from "../../config/site.js";
import { services } from "../../data/services.js";

const linkClass = "transition-colors hover:text-coral";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-8 pt-20 text-cream sm:px-10 lg:px-[6vw] lg:pt-28">
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full border border-coral/20 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-8 top-28 h-44 w-44 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-12 border-b border-cream/15 pb-16 lg:flex-row lg:items-end lg:gap-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-coral">
              <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_18px_rgb(0_221_204)]" />
              Ready for the next chapter?
            </p>
            <h2 className="max-w-4xl text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.08em]">
              Let&apos;s give your brand its <em className="font-display font-normal text-coral">next life.</em>
            </h2>
          </div>

          <div className="w-full max-w-md rounded-[1.5rem] border border-coral/30 bg-coral p-6 text-ink shadow-[0_24px_80px_rgb(0_221_204_/_14%)] sm:p-8">
            <p className="mb-7 text-[10px] uppercase tracking-[0.2em] text-ink/60">Start a conversation</p>
            <div className="space-y-3">
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="group flex items-center justify-between border-b border-ink/20 pb-3 text-lg tracking-[-0.03em] transition-transform duration-300 hover:translate-x-2">
                  <span>{phone.label}</span>
                  <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:rotate-45">↗</span>
                </a>
              ))}
              <a href={mailto("Project enquiry")} className="group flex items-center justify-between gap-4 pt-1 text-sm tracking-[-0.02em] transition-transform duration-300 hover:translate-x-2 sm:text-base">
                <span className="break-all">{site.email}</span>
                <span aria-hidden="true" className="shrink-0 text-xl transition-transform duration-300 group-hover:rotate-45">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-cream/15 py-10 text-sm sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:py-14">
          <div>
            <Link to="/" data-cursor="Home" className="group inline-flex" aria-label="Next Life Digital home">
              <Logo size="md" className="transition-transform duration-500 group-hover:scale-[1.03]" />
            </Link>
            <p className="mt-5 max-w-xs leading-6 text-mist">
              SEO, ads, social, websites and apps — one team that gives growing businesses their next life online.
            </p>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Services</p>
            <div className="flex flex-col items-start gap-3 text-cream/80">
              {services.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`} className={linkClass}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Company</p>
            <div className="flex flex-col items-start gap-3 text-cream/80">
              <Link to="/about" className={linkClass}>About Us</Link>
              <Link to="/work" className={linkClass}>Our Work</Link>
              <Link to="/careers" className={linkClass}>Careers</Link>
              <Link to="/contact" className={linkClass}>Contact</Link>
              <Link to="/enquirisubmit" className={linkClass}>Free Quote</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Resources</p>
            <div className="flex flex-col items-start gap-3 text-cream/80">
              <Link to="/blog" className={linkClass}>Blog</Link>
              <Link to="/case-studies" className={linkClass}>Case Studies</Link>
              <Link to="/insights" className={linkClass}>Insights</Link>
              <Link to="/faqs" className={linkClass}>FAQs</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Connect</p>
            <div className="flex flex-col items-start gap-3 text-cream/80">
              <a href={site.social.instagram} target="_blank" rel="noreferrer" className={linkClass}>Instagram</a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
              <a href={whatsappLink(`Hi ${site.name}, I would like to discuss a project.`)} target="_blank" rel="noreferrer" className={linkClass}>WhatsApp</a>
              <a href={site.social.youtube} target="_blank" rel="noreferrer" className={linkClass}>YouTube</a>
            </div>
          </div>
        </div>

        <div className="grid gap-3 pt-6 text-[10px] uppercase tracking-[0.15em] text-mist sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <p>{site.city}</p>
          <a href={mailto()} className={`${linkClass} normal-case tracking-normal`}>{site.email}</a>
          <a href={site.phones[0].href} className={linkClass}>{site.phones[0].label}</a>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
