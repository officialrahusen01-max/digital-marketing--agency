import { Link, useParams } from "react-router-dom";
import { services } from "../../data/services.js";
import NotFound from "../NotFound.jsx";
import { Button, Eyebrow, PageHero, Reveal, SectionHeader } from "../../components/ui/primitives.jsx";
import { IconArrowRight, IconCheck, IconPhone, IconWhatsApp, serviceIcons } from "../../components/ui/Icons.jsx";
import ServiceCard from "../../components/ui/ServiceCard.jsx";
import { site, whatsappLink } from "../../config/site.js";

const serviceImages = {
  "digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  seo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
  "social-media-marketing": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80",
  "google-ads": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  "web-development": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  "mobile-app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
};

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) return <NotFound />;

  const Icon = serviceIcons[service.id];
  const others = services.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]}
        eyebrow={service.shortLabel.replace(/^\d+\s*\/\s*/, "")}
        title={service.title}
        subtitle={service.description + " " + service.statement}
      >
        <Button to="/enquirisubmit" arrow>Get a Free Quote</Button>
        <Button href={whatsappLink(`Hi ${site.name}, I'm interested in ${service.title}.`)} variant="outline-dark">
          <IconWhatsApp className="h-5 w-5 text-[#25D366]" /> Discuss on WhatsApp
        </Button>
      </PageHero>

      <section className="bg-night-800 py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          {/* Main content */}
          <div>
            <Reveal>
              <div className="overflow-hidden rounded-3xl">
                <img src={serviceImages[service.id]} alt={`${service.title} by ${site.name}`} className="aspect-[16/8] w-full object-cover" />
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{service.statement}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">{service.overview}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl font-bold text-white">What&apos;s included</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-night-900 p-5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-400 text-night">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-bold text-white">How we deliver it</h2>
              <ol className="mt-6 space-y-4">
                {service.process.map((step, index) => (
                  <li key={step.title} className="flex gap-5 rounded-2xl border border-white/10 p-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-night text-base font-extrabold text-brand-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-1.5 leading-7 text-slate-400">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-night p-7 text-white">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/25 blur-3xl" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-400 text-night">
                <Icon className="h-7 w-7" />
              </span>
              <p className="relative mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">The goal</p>
              <p className="relative mt-2 text-3xl font-extrabold">{service.stat}</p>
              <p className="relative mt-3 leading-7 text-slate-400">{service.result}</p>
              <Button to="/enquirisubmit" className="relative mt-6 w-full" arrow>Get a Free Quote</Button>
              <a href={site.phones[0].href} className="relative mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-brand-300">
                <IconPhone className="h-4 w-4" /> or call {site.phones[0].label}
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">All services</h3>
              <ul className="mt-4 space-y-1">
                {services.map((item) => {
                  const ItemIcon = serviceIcons[item.id];
                  const active = item.id === service.id;
                  return (
                    <li key={item.id}>
                      <Link to={`/services/${item.id}`} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition ${active ? "bg-brand-400/10 text-brand-200" : "text-slate-300 hover:bg-white/5"}`}>
                        <ItemIcon className={`h-4 w-4 ${active ? "text-brand-300" : "text-slate-400"}`} />
                        {item.title}
                        <IconArrowRight className="ml-auto h-4 w-4 opacity-40" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-night-900 py-20 sm:py-24">
        <div className="container-x">
          <SectionHeader eyebrow="Explore more" title="Services that work well together" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {others.map((item, index) => (
              <ServiceCard key={item.id} service={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
