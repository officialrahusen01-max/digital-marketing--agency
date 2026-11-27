import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { services } from "../../data/services.js";
import ServiceCard from "../../components/ui/ServiceCard.jsx";
import { Button, Eyebrow, SectionHeader } from "../../components/ui/primitives.jsx";
import SplitText from "../../components/motion/SplitText.jsx";
import { IconArrowRight, IconCheck, serviceIcons } from "../../components/ui/Icons.jsx";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function HorizontalCard({ service, index, progress, total }) {
  const Icon = serviceIcons[service.id];
  // each card lifts a little as it passes the centre of the screen
  const center = (index + 1) / (total + 1);
  const y = useTransform(progress, [center - 0.25, center, center + 0.25], [40, 0, 40]);
  const rotate = useTransform(progress, [center - 0.25, center, center + 0.25], [4, 0, -4]);

  return (
    <motion.div style={{ y, rotate }} className="w-[400px] shrink-0 xl:w-[430px]">
      <Link
        to={`/services/${service.id}`}
        data-cursor="Open"
        className="group relative flex h-[520px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-night-800 p-9 text-white transition duration-500 hover:border-brand-400/60"
      >
        <span className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl transition duration-700 group-hover:scale-150 group-hover:bg-brand-400/30" />
        <span className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,221,204,0.18),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute -bottom-10 -right-4 text-[11rem] font-extrabold leading-none text-white/[0.04] transition duration-700 group-hover:-translate-y-4 group-hover:text-brand-400/10">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative flex items-center justify-between">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-400 text-night shadow-glow transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </span>
          <span className="text-sm font-semibold text-slate-500">{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>

        <h3 className="relative mt-10 text-3xl font-extrabold tracking-tight">{service.title}</h3>
        <p className="relative mt-4 leading-7 text-slate-400">{service.description}</p>

        <ul className="relative mt-6 space-y-3">
          {service.deliverables.slice(0, 3).map((item) => (
            <li key={item} className="flex items-center gap-3 text-[15px] text-slate-200">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-400/15 text-brand-400">
                <IconCheck className="h-3 w-3" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <span className="relative mt-auto inline-flex items-center gap-3 font-semibold text-brand-300">
          Explore service
          <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-400/40 transition duration-500 group-hover:translate-x-2 group-hover:bg-brand-400 group-hover:text-night">
            <IconArrowRight className="h-4 w-4" />
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

function HorizontalServices() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const barScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative bg-night" style={{ height: `calc(100vh + ${distance}px)` }} aria-labelledby="services-title">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-400/10 blur-[140px]" />

        <motion.div ref={trackRef} style={{ x }} className="relative flex w-max items-center gap-8 pl-[max(1.25rem,calc((100vw_-_80rem)/2_+_2rem))] pr-[10vw]">
          <div className="w-[440px] shrink-0 pr-6 text-white">
            <Eyebrow dark>What we do</Eyebrow>
            <h2 id="services-title" className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight xl:text-6xl">
              <SplitText text="Everything you need to grow online" highlightFrom={4} />
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">Six services, one team, one growth plan. Keep scrolling →</p>
            <Button to="/services" variant="outline-dark" className="mt-8" arrow>All services</Button>
          </div>
          {services.map((service, index) => (
            <HorizontalCard key={service.id} service={service} index={index} progress={smooth} total={services.length} />
          ))}
        </motion.div>

        <div className="container-x relative mt-12">
          <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
            <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-gradient-to-r from-brand-600 to-brand-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

function GridServices() {
  return (
    <section className="relative bg-night-900 py-20 sm:py-28" aria-labelledby="services-title">
      <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_40%)]" />
      <div className="container-x relative">
        <SectionHeader
          eyebrow="What we do"
          id="services-title"
          title="Everything you need to grow online — under one roof"
          subtitle="From getting found on Google to turning visitors into customers, our services work together as one growth system."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button to="/services" variant="outline" arrow>Explore all services</Button>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPreview() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return isDesktop ? <HorizontalServices /> : <GridServices />;
}
