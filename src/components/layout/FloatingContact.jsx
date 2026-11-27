import { Link } from "react-router-dom";
import { IconPhone, IconWhatsApp, IconSparkle } from "../ui/Icons.jsx";
import { site, whatsappLink } from "../../config/site.js";

// Desktop: floating WhatsApp bubble. Mobile: sticky bottom action bar.
export default function FloatingContact() {
  const wa = whatsappLink(`Hi ${site.name}, I would like to know more about your services.`);

  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 lg:flex"
      >
        <span className="pointer-events-none translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 opacity-0 shadow-lift transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Chat with us
        </span>
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition group-hover:scale-105">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
          <IconWhatsApp className="relative h-7 w-7" />
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur lg:hidden">
        <a href={site.phones[0].href} className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-slate-700">
          <IconPhone className="h-5 w-5 text-brand-700" /> Call
        </a>
        <a href={wa} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-2.5 text-xs font-semibold text-slate-700">
          <IconWhatsApp className="h-5 w-5 text-[#25D366]" /> WhatsApp
        </a>
        <Link to="/enquirisubmit" className="flex flex-col items-center gap-1 bg-brand-400 py-2.5 text-xs font-bold text-night">
          <IconSparkle className="h-5 w-5" /> Free Quote
        </Link>
      </div>
    </>
  );
}
