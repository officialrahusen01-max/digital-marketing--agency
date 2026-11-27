import { IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from "./Icons.jsx";
import { site, mailto, whatsappLink } from "../../config/site.js";

const nextSteps = [
  "We review your enquiry and website",
  "We call you to understand your goals",
  "You get a clear plan and fixed quote",
];

export default function ContactAside() {
  const items = [
    ...site.phones.map((phone) => ({ Icon: IconPhone, label: "Call us", value: phone.label, href: phone.href })),
    { Icon: IconWhatsApp, label: "WhatsApp", value: "Chat with the team", href: whatsappLink(`Hi ${site.name}, I would like to discuss a project.`) },
    { Icon: IconMail, label: "Email", value: site.email, href: mailto("Project enquiry") },
    { Icon: IconPin, label: "Location", value: site.location },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-night p-7 text-white">
        <h3 className="text-lg font-bold">Talk to us directly</h3>
        <ul className="mt-6 space-y-5">
          {items.map(({ Icon, label, value, href }) => {
            const content = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-brand-400 ring-1 ring-white/10 transition group-hover:bg-brand-400 group-hover:text-night">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</span>
                  <span className="block break-words font-semibold text-slate-100">{value}</span>
                </span>
              </>
            );
            return (
              <li key={`${label}-${value}`}>
                {href ? (
                  <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} className="group flex items-center gap-4">
                    {content}
                  </a>
                ) : (
                  <div className="group flex items-center gap-4">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 bg-night-800 p-7">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
          <IconClock className="h-5 w-5 text-brand-400" /> What happens next?
        </h3>
        <ol className="mt-5 space-y-4">
          {nextSteps.map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-400/10 text-sm font-bold text-brand-300 ring-1 ring-brand-400/30">{index + 1}</span>
              <span className="pt-0.5 text-[15px] text-slate-300">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
