import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  { title: "Signal / 01", src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85" },
  { title: "Form / 02", src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85" },
  { title: "Peak / 03", src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85" },
  { title: "Motion / 04", src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" },
  { title: "Culture / 05", src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85" },
  { title: "Focus / 06", src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=85" },
  { title: "Craft / 07", src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" },
  { title: "Context / 08", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85" },
  { title: "Energy / 09", src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85" },
  { title: "Future / 10", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85" },
];

// Wrap helper (koi extra package ki zarurat nahi)
function wrap(min, max, v) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

// ---- Scroll-velocity se driven infinite marquee ----
function VelocityMarqueeRow({ images, baseVelocity = 2, tilt = 0 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  // 4 copies hain, isliye 25% shift karne pe hi seamless loop milta hai
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const skew = useTransform(velocityFactor, (v) => `${v * -1.2}deg`);
  const scale = useTransform(velocityFactor, [-5, 0, 5], [1.04, 1, 1.04], { clamp: true });

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const looped = [...images, ...images, ...images, ...images];

  return (
    <div className="overflow-hidden py-3" style={{ rotate: `${tilt}deg` }}>
      <motion.div className="flex w-max gap-5" style={{ x, skewX: skew }}>
        {looped.map((image, i) => (
          <motion.figure
            key={`${image.title}-${i}`}
            style={{ scale }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group/card relative w-[220px] flex-shrink-0 overflow-hidden rounded-[1.25rem] bg-[#e8dfd3] shadow-[0_18px_40px_-22px_rgba(20,16,12,0.4)] sm:w-[300px] lg:w-[360px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={`${image.title} for Vertexo Digital Solutions`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
            </div>
            <figcaption className="flex items-center justify-between px-5 py-4 text-[10px] uppercase tracking-[0.18em] text-ink/60">
              <span>{image.title}</span>
              <span>Vertexo</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
}

// ---- Featured banner: wipe reveal + parallax ----
function FeaturedImageCard({ image }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.25, 1.02, 1.25]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 0.5, 0.5, 0.9]);

  return (
    <motion.figure
      ref={cardRef}
      initial={{ clipPath: "inset(0% 50% 0% 50% round 1.5rem)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative aspect-[16/8] min-h-[320px] overflow-hidden rounded-[1.5rem] bg-[#e8dfd3] sm:min-h-[460px]">
        <motion.img
          style={{ scale: imageScale, y: imageY }}
          src={image.src}
          alt={`${image.title} for Vertexo Digital Solutions`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"
        />
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 text-cream sm:bottom-10 sm:left-10 sm:right-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-coral">Dedicated scroll study</p>
            <h3 className="mt-3 text-4xl tracking-[-0.06em] sm:text-6xl">{image.title}</h3>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-cream/70 sm:block">Roll / Up / Down</span>
        </div>
      </div>
    </motion.figure>
  );
}

export default function ImageScrollGallery() {
  const featuredImage = galleryImages[2];
  const rowImages = galleryImages.filter((_, index) => index !== 2);
  const rowA = rowImages.slice(0, 5);
  const rowB = rowImages.slice(5);

  return (
    <section className="overflow-hidden bg-cream py-24 text-ink sm:py-36" aria-labelledby="image-gallery-title">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col justify-between gap-6 border-t border-ink/15 pt-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-ink/55">04 / Image studies</p>
            <h2 id="image-gallery-title" className="max-w-3xl text-[clamp(2.8rem,6vw,7rem)] leading-[0.88] tracking-[-0.07em]">
              Scroll into the <em className="font-display font-normal text-coral">work.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-ink/60">
            Nine visual directions for Vertexo — the strip speeds up, tilts and reverses with your scroll.
          </p>
        </motion.div>
      </div>

      <div className="-mx-6 space-y-6 sm:-mx-10 lg:-mx-[6vw]">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <VelocityMarqueeRow images={rowA} baseVelocity={2.2} tilt={-1.5} />
        </div>
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <VelocityMarqueeRow images={rowB} baseVelocity={-2.2} tilt={1.5} />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1600px] px-6 sm:px-10 lg:px-[6vw]">
        <div className="rounded-[1.5rem] bg-ink text-cream">
          <FeaturedImageCard image={featuredImage} />
        </div>
      </div>
    </section>
  );
}