import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Button, Eyebrow, GlowOrbs } from "../../components/ui/primitives.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import Magnetic from "../../components/motion/Magnetic.jsx";
import ParticleField from "../../components/motion/ParticleField.jsx";
import { introDelay } from "../../components/motion/intro.js";
import { IconCheck, IconSearch, IconTarget, IconWhatsApp, IconChart } from "../../components/ui/Icons.jsx";
import { site, whatsappLink } from "../../config/site.js";

const trustPoints = ["Free strategy call", "No lock-in contracts", "Reply within 24 hours"];
const rotatingWords = ["SEO.", "Google Ads.", "Social Media.", "Websites.", "Mobile Apps."];
const ease = [0.22, 1, 0.36, 1];

function RotatingWord({ start }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2200);
    }, start * 1000 + 800);
    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [start]);

  return (
    <span className="relative block h-[1.15em] overflow-hidden" style={{ perspective: 600 }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={rotatingWords[index]}
          className="text-gradient absolute left-0 top-0 inline-block whitespace-nowrap"
          initial={{ y: "100%", rotateX: -80, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", rotateX: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", rotateX: 80, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function DashboardMock({ d }) {
  const bars = [38, 52, 46, 64, 58, 76, 88];
  return (
    <div className="relative mx-auto w-full max-w-[520px]" style={{ transformStyle: "preserve-3d" }}>
      {/* rotating glow ring */}
      <div aria-hidden="true" className="absolute -inset-6 -z-10 animate-spin-slow rounded-[2.5rem] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(0,221,204,0.55)_60deg,transparent_120deg,transparent_360deg)] opacity-70 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-night-800/90 p-5 shadow-[0_40px_120px_-30px_rgba(0,221,204,0.45)] backdrop-blur sm:p-6">
        {/* scanning sheen */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "400%" }}
          transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut", delay: d + 1.5 }}
        />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Growth overview</p>
            <p className="mt-1 text-lg font-bold text-white">Your business, online</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-400/10 px-3 py-1 text-xs font-semibold text-brand-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            Live
          </span>
        </div>

        <svg viewBox="0 0 400 160" className="mt-6 w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#00DDCC" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00DDCC" stopOpacity="0" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[40, 80, 120].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" />
          ))}
          <motion.path
            d="M0 130 C40 125 60 110 100 108 S160 95 200 80 S260 70 300 48 S360 30 400 18 L400 160 L0 160 Z"
            fill="url(#heroArea)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: d + 1.2, duration: 1 }}
          />
          <motion.path
            d="M0 130 C40 125 60 110 100 108 S160 95 200 80 S260 70 300 48 S360 30 400 18"
            fill="none"
            stroke="#00DDCC"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#heroGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: d + 0.6, duration: 1.8, ease: "easeInOut" }}
          />
          <motion.circle cx="400" cy="18" r="6" fill="#00DDCC" filter="url(#heroGlow)" initial={{ scale: 0 }} animate={{ scale: [0, 1.6, 1] }} transition={{ delay: d + 2.3, duration: 0.5 }} />
          <motion.circle cx="400" cy="18" r="6" fill="none" stroke="#00DDCC" initial={{ scale: 1, opacity: 0 }} animate={{ scale: [1, 3.2], opacity: [0.8, 0] }} transition={{ delay: d + 2.6, duration: 1.6, repeat: Infinity }} />
        </svg>
        <div className="mt-2 flex justify-between text-[11px] text-slate-600">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => <span key={m}>{m}</span>)}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: "Search", Icon: IconSearch },
            { label: "Ads", Icon: IconTarget },
            { label: "Leads", Icon: IconChart },
          ].map(({ label, Icon }, card) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: d + 0.9 + card * 0.12, type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ y: -4, borderColor: "rgba(0,221,204,0.4)" }}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-3"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-4 w-4 text-brand-400" />
                <motion.span
                  className="text-[11px] font-semibold text-emerald-400"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: card * 0.3 }}
                >
                  ▲
                </motion.span>
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{label}</p>
              <div className="mt-2 flex h-6 items-end gap-0.5">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-600 to-brand-300"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: d + 1.1 + card * 0.12 + i * 0.05, type: "spring", stiffness: 200, damping: 14 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* floating chips */}
      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: d + 1.4, type: "spring", stiffness: 200, damping: 15 }}
        style={{ translateZ: 60 }}
        className="absolute -left-4 top-[44%] hidden sm:block lg:-left-12"
      >
        <div className="animate-float rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lift">
          <div className="flex items-center gap-3">
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/20" />
              <IconWhatsApp className="relative h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">New enquiry</p>
              <p className="text-xs text-slate-500">just now</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: d + 1.7, type: "spring", stiffness: 200, damping: 15 }}
        style={{ translateZ: 80 }}
        className="absolute -bottom-6 right-2 hidden sm:block xl:-right-8"
      >
        <div className="animate-float-slow rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lift">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-brand-700">
              <IconCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">Campaign live</p>
              <p className="text-xs text-slate-500">Google Ads · Meta Ads</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [d] = useState(() => introDelay());

  // Mouse-driven 3D tilt for the dashboard + spotlight position
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 18 });

  // Scroll-out parallax
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
    if (event.pointerType !== "mouse") return;
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const enter = (delay) => ({
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.8, delay: d + delay, ease },
  });

  return (
    <section ref={sectionRef} onPointerMove={handleMove} onPointerLeave={reset} className="relative isolate overflow-hidden bg-night text-white" aria-labelledby="hero-title">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <div className="spotlight pointer-events-none absolute inset-0 -z-10" />
      <GlowOrbs />

      {/* interactive constellation */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_35%,transparent_85%)]">
        <ParticleField />
      </div>

      <div className="container-x grid items-center gap-16 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pb-28 lg:pt-24">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: d, type: "spring", stiffness: 300, damping: 16 }}>
            <Eyebrow dark>Digital marketing agency · Jaipur</Eyebrow>
          </motion.div>

          <h1 id="hero-title" aria-label="Grow your business with smarter digital marketing" className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            <span aria-hidden="true">
              <SplitText text="Grow your business with smarter" onMount delay={d + 0.1} stagger={0.08} />
              <motion.span {...enter(0.45)} className="block">
                <RotatingWord start={d} />
              </motion.span>
            </span>
          </h1>

          <motion.p {...enter(0.6)} className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            SEO, Google Ads, social media, websites and apps — planned and run by one team, so more of the right people find you, trust you and buy from you.
          </motion.p>

          <motion.div {...enter(0.75)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <Button to="/enquirisubmit" size="lg" shine arrow className="w-full sm:w-auto">
                Get Free Consultation
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button href={whatsappLink(`Hi ${site.name}, I would like to grow my business online.`)} variant="outline-dark" size="lg" className="w-full sm:w-auto">
                <IconWhatsApp className="h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
              </Button>
            </Magnetic>
          </motion.div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {trustPoints.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: d + 0.95 + index * 0.12, duration: 0.5, ease }}
                className="flex items-center gap-2"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: d + 1.05 + index * 0.12, type: "spring", stiffness: 300, damping: 14 }}
                  className="grid h-5 w-5 place-items-center rounded-full bg-brand-400/15 text-brand-400"
                >
                  <IconCheck className="h-3.5 w-3.5" />
                </motion.span>
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div style={{ y: visualY, scale: visualScale, perspective: 1200 }}>
          <motion.div
            initial={{ opacity: 0, y: 80, rotate: -4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: d + 0.3, ease }}
          >
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
              <DashboardMock d={d} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
