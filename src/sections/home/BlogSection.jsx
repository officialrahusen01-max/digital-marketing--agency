import { Link } from "react-router-dom";

const posts = [
  {
    category: "Growth Strategy",
    date: "May 07",
    title: "The brand systems behind higher-converting campaigns",
    excerpt: "A clearer structure for creative, media and storytelling can turn attention into measurable traction.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "SEO",
    date: "Apr 24",
    title: "What actually moves rankings before you spend on content",
    excerpt: "Most teams chase volume too early. The real lift starts with clarity, intent and technical consistency.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Creative Systems",
    date: "Apr 09",
    title: "Making content feel premium without slowing the pipeline",
    excerpt: "A practical operating model for creative teams that need consistency across channels and campaigns.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#121315] px-6 py-24 text-cream sm:px-10 lg:px-[6vw] lg:py-32" aria-labelledby="blog-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">05 / Insights</p>
            <h2 id="blog-title" className="text-[clamp(2.8rem,5vw,6rem)] leading-[0.9] tracking-[-0.07em]">
              Fresh thinking for <em className="font-display font-normal text-coral">growth.</em>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-3 self-start rounded-full border border-cream/15 px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-cream transition hover:border-coral hover:text-coral"
          >
            View all articles <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-[28px] border border-cream/10 bg-[#17181b] transition duration-500 hover:-translate-y-2 hover:border-coral/40"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to="/blog" className="block h-full">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="mb-5 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-mist">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-2xl leading-[1.05] tracking-[-0.06em] text-cream sm:text-[2rem]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-cream/70">{post.excerpt}</p>

                  <span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-coral">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
