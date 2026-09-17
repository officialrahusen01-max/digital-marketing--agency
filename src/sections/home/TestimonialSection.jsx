import { testimonials } from "../../data/testimonials.js";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="bg-cream px-6 py-24 text-ink sm:px-10 lg:px-[6vw] lg:py-36" aria-labelledby="testimonial-title">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-ink/55">05 / The good word</p>
          <h2 id="testimonial-title" className="text-[clamp(2.8rem,5vw,6rem)] tracking-[-0.06em]">
            Good work travels <em className="font-display font-normal text-coral">far.</em>
          </h2>

          <div className="premium-panel mt-10 p-6 sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink/60">Average review</p>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-4xl font-medium tracking-[-0.06em]">4.9</span>
              <span className="text-lg text-coral">★★★★★</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-ink/65">Clients stay because the work feels clear, strong and impossible to ignore.</p>
          </div>
        </div>

        <div className="space-y-5">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              className="rounded-[2rem] border border-ink/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.015),rgba(0,0,0,0.03))] p-6 sm:p-8"
            >
              <div className="mb-5 text-lg text-coral">★★★★★</div>
              <blockquote className="max-w-3xl text-2xl leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 text-[10px] uppercase tracking-[0.17em] text-ink/60">
                {testimonial.name} / {testimonial.company}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
