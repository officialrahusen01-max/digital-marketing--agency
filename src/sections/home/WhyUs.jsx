import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button, SectionHeader } from "../../components/ui/primitives.jsx";
import { LogoMark } from "../../components/common/Logo.jsx";
import { serviceIcons, IconWhatsApp } from "../../components/ui/Icons.jsx";

const tile = "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-night-800 p-7 transition-colors duration-500 hover:border-brand-400/40 sm:p-8";
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

function TileGlow() {
  return <span className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-400/0 blur-3xl transition duration-700 group-hover:bg-brand-400/20" />;
}

// One team: services orbit around the brand mark
function OrbitVisual() {
  const icons = Object.values(serviceIcons);
  return (
    <div className="relative mx-auto grid h-64 w-64 place-items-center">
      <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-10 rounded-full border border-white/5" />
      <div className="absolute h-24 w-24 rounded-full bg-brand-400/20 blur-2xl" />
      <LogoMark className="relative h-14 w-14" />
      <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
        {icons.map((Icon, i) => {
          const angle = (i / icons.length) * Math.PI * 2;
          const x = 50 + Math.cos(angle) * 50;
          const y = 50 + Math.sin(angle) * 50;
          return (
            <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
              <motion.span
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-night-700 text-brand-300 shadow-lg"
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                <Icon className="h-5 w-5" />
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

// Monthly reports: bars grow when the tile scrolls into view
function ReportVisual() {
  const bars = [30, 45, 38, 60, 72, 90];
  return (
    <div className="mt-8 flex h-32 items-end gap-2.5">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t-lg bg-gradient-to-t from-brand-700 to-brand-300"
          initial={{ height: "6%" }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 120, damping: 12 }}
        />
      ))}
    </div>
  );
}

// No lock-in: the padlock opens
function LockVisual() {
  return (
    <div className="mt-6 grid place-items-center">
      <svg viewBox="0 0 64 64" className="h-28 w-28 overflow-visible" fill="none" aria-hidden="true">
        <motion.path
          d="M20 28V20a12 12 0 0 1 24 0"
          stroke="#00DDCC"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ y: 0, rotate: 0 }}
          whileInView={{ y: -8, rotate: -18 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", stiffness: 160, damping: 9 }}
          style={{ originX: "20px", originY: "28px" }}
        />
        <rect x="12" y="28" width="40" height="30" rx="7" fill="#141A1B" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <circle cx="32" cy="41" r="4" fill="#00DDCC" />
        <path d="M32 44v6" stroke="#00DDCC" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Human support: a short WhatsApp-style exchange plays out
function ChatVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const timers = [setTimeout(() => setStep(1), 300), setTimeout(() => setStep(2), 1300), setTimeout(() => setStep(3), 2600)];
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const bubble = { initial: { opacity: 0, y: 12, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { type: "spring", stiffness: 260, damping: 20 } };

  return (
    <div ref={ref} className="min-h-[200px] space-y-3 rounded-2xl border border-white/5 bg-night/60 p-4">
      <div className="flex items-center gap-2 border-b border-white/5 pb-3 text-xs text-slate-500">
        <IconWhatsApp className="h-4 w-4 text-[#25D366]" /> Next Life Digital · online
      </div>
      {step >= 1 && (
        <motion.p {...bubble} className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand-400 px-4 py-2 text-sm font-medium text-night">
          Hi! Can you help with Google Ads for my clinic?
        </motion.p>
      )}
      {step === 2 && (
        <motion.div {...bubble} className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-night-700 px-4 py-3">
          {[0, 1, 2].map((d) => (
            <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-slate-400" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }} />
          ))}
        </motion.div>
      )}
      {step >= 3 && (
        <motion.p {...bubble} className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-night-700 px-4 py-2 text-sm text-slate-200">
          Absolutely! Let&apos;s set up a free 30-minute call today and look at your local market.
        </motion.p>
      )}
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="relative bg-night py-20 sm:py-28" aria-labelledby="why-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader align="left" eyebrow="Why Next Life Digital" id="why-title" title="A growth partner, not just another agency" />
          <Button to="/about" variant="outline" className="shrink-0 self-start md:self-auto" arrow>More about us</Button>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <motion.div {...reveal(0)} className={`${tile} lg:col-span-2`}>
            <TileGlow />
            <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold text-brand-300">01</p>
                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">One team, every channel</h3>
                <p className="mt-3 max-w-md leading-7 text-slate-400">SEO, ads, social, your website and apps are planned together — no juggling five vendors who never talk to each other.</p>
              </div>
              <OrbitVisual />
            </div>
          </motion.div>

          <motion.div {...reveal(0.1)} className={tile}>
            <TileGlow />
            <p className="relative text-sm font-semibold text-brand-300">02</p>
            <h3 className="relative mt-3 text-2xl font-extrabold text-white">Clear monthly reports</h3>
            <p className="relative mt-3 leading-7 text-slate-400">Leads, calls, rankings and spend in plain language.</p>
            <ReportVisual />
          </motion.div>

          <motion.div {...reveal(0.15)} className={tile}>
            <TileGlow />
            <p className="relative text-sm font-semibold text-brand-300">03</p>
            <h3 className="relative mt-3 text-2xl font-extrabold text-white">No lock-in contracts</h3>
            <p className="relative mt-3 leading-7 text-slate-400">Month to month after the first 3 months. Results keep us together.</p>
            <LockVisual />
          </motion.div>

          <motion.div {...reveal(0.2)} className={`${tile} lg:col-span-2`}>
            <TileGlow />
            <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold text-brand-300">04</p>
                <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Fast, human support</h3>
                <p className="mt-3 leading-7 text-slate-400">Talk directly to the people doing the work — on call, WhatsApp or email. Every enquiry gets a reply within one working day.</p>
              </div>
              <ChatVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
