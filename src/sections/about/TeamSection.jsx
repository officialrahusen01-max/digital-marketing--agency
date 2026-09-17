import { motion } from "framer-motion";

const team = [
  { name: "Anika Mehra", role: "Strategy & Partnerships", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85" },
  { name: "Rohan Shah", role: "Creative Direction", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85" },
  { name: "Maya Kapoor", role: "Growth & Performance", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85" },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-cream sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="team-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-cream/15 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">The people behind the work</p>
            <h2 id="team-title" className="text-[clamp(3rem,6vw,7rem)] leading-[0.86] tracking-[-0.08em]">Small team.<br /><em className="font-display font-normal text-coral">Full attention.</em></h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-mist">Strategists, makers and optimists working closely with people who care about what they put into the world.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.article key={member.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="group">
              <div className="relative aspect-[0.82] overflow-hidden rounded-[1.5rem] bg-[#151817]">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover grayscale transition duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-80" />
                <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-cream/30 text-lg text-coral transition duration-500 group-hover:rotate-45 group-hover:bg-coral group-hover:text-ink">↗</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-cream/15 py-5">
                <h3 className="text-xl tracking-[-0.04em]">{member.name}</h3>
                <span className="max-w-[130px] text-right text-[9px] uppercase leading-4 tracking-[0.16em] text-mist">{member.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
