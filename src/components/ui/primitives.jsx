import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconArrowRight } from "./Icons.jsx";
import SplitText from "../motion/SplitText.jsx";

// ---------- Button ----------
const variants = {
  primary: "bg-brand-400 text-night hover:bg-brand-300 shadow-glow",
  dark: "bg-night text-white ring-1 ring-white/15 hover:bg-night-700 hover:ring-brand-400/60",
  light: "bg-white text-night hover:bg-brand-50",
  outline: "border border-white/20 text-white hover:border-brand-400 hover:text-brand-300 bg-white/[0.02]",
  "outline-dark": "border border-white/20 text-white hover:border-brand-400 hover:text-brand-300",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb857]",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

const shineVariants = new Set(["primary", "dark", "whatsapp", "light"]);

export function Button({ to, href, variant = "primary", size = "md", className = "", children, arrow = false, shine = false, ...rest }) {
  const classes = `group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {shineVariants.has(variant) && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-0 -z-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent ${
            shine ? "animate-shine" : "-translate-x-[120%] skew-x-[-20deg] transition-transform duration-700 group-hover:translate-x-[220%]"
          }`}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {arrow && <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </>
  );

  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noreferrer" } : {})} {...rest}>
        {content}
      </a>
    );
  }
  return <button className={classes} {...rest}>{content}</button>;
}

// ---------- Reveal on scroll ----------
export function Reveal({ children, delay = 0, y = 48, scale = 0.94, className = "", as = "div" }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y, scale, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ---------- Section header ----------
export function Eyebrow({ children, dark = false }) {
  return (
    <span className={`eyebrow border-white/15 bg-white/5 text-brand-300`}>
      <span className={`h-1.5 w-1.5 rounded-full bg-brand-400`} />
      {children}
    </span>
  );
}

export function SectionHeader({ id, eyebrow, title, subtitle, align = "center", dark = false, className = "" }) {
  dark = true;
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";
  const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <motion.div initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <h2 id={id} className={`text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-slate-900"}`}>
        {typeof title === "string" ? <SplitText text={title} delay={0.1} /> : title}
      </h2>
      {subtitle && (
        <motion.p {...fade(0.35)} className={`text-base leading-7 sm:text-lg ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ---------- Inner page hero ----------
function handleSpotlight(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

export function GlowOrbs() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 80, -40, 0], y: [0, 40, 80, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-[-10%] -z-10 h-[460px] w-[460px] rounded-full bg-brand-400/25 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -60, 40, 0], y: [0, -30, 30, 0], scale: [1, 0.85, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 left-[-10%] -z-10 h-[380px] w-[380px] rounded-full bg-brand-700/30 blur-[120px]"
      />
    </>
  );
}

export function PageHero({ eyebrow, title, subtitle, crumbs = [], children }) {
  const enter = (delay) => ({
    initial: { opacity: 0, y: 24, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section onPointerMove={handleSpotlight} className="relative isolate overflow-hidden bg-night pb-16 pt-14 text-white sm:pb-20 sm:pt-20">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
      <div className="spotlight pointer-events-none absolute inset-0 -z-10" />
      <GlowOrbs />
      <div className="container-x">
        {crumbs.length > 0 && (
          <motion.nav {...enter(0.3)} aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link to="/" className="transition hover:text-brand-300">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <span className="text-slate-600">/</span>
                {crumb.to ? (
                  <Link to={crumb.to} className="transition hover:text-brand-300">{crumb.label}</Link>
                ) : (
                  <span className="text-slate-200">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.35 }}>
              <Eyebrow dark>{eyebrow}</Eyebrow>
            </motion.div>
          )}
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {typeof title === "string" ? (
              <SplitText text={title} onMount delay={0.45} stagger={0.07} />
            ) : (
              <motion.span {...enter(0.45)} className="block">{title}</motion.span>
            )}
          </h1>
          {subtitle && (
            <motion.p {...enter(0.75)} className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div {...enter(0.9)} className="mt-8 flex flex-wrap gap-3">
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
