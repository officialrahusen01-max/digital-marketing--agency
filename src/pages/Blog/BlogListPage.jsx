import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs.js";
import BlogCard, { formatBlogDate } from "../../components/ui/BlogCard.jsx";
import { PageHero, Reveal } from "../../components/ui/primitives.jsx";
import { IconArrowRight } from "../../components/ui/Icons.jsx";

export default function BlogListPage() {
  const { blogs } = useBlogs();
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(blogs.map((blog) => blog.category).filter(Boolean))], [blogs]);
  const filtered = category === "All" ? blogs : blogs.filter((blog) => blog.category === category);
  const [featured, ...rest] = filtered;

  return (
    <main>
      <PageHero
        crumbs={[{ label: "Blog" }]}
        eyebrow="Blog & insights"
        title="Ideas that help businesses grow smarter"
        subtitle="Practical guides on SEO, paid ads, social media and websites — written by the Next Life Digital team."
      />

      <section className="bg-night-900 py-16 sm:py-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item ? "bg-brand-400 text-night" : "border border-white/10 bg-night-800 text-slate-400 hover:border-brand-400 hover:text-brand-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {featured && (
            <Reveal className="mt-10">
              <Link to={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-white/10 bg-night-800 shadow-card transition hover:shadow-lift lg:grid-cols-2">
                <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                  <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="rounded-full bg-brand-400/10 px-3 py-1 font-semibold text-brand-300">{featured.category}</span>
                    <span className="text-slate-500">{formatBlogDate(featured.date || featured.createdAt)}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold leading-tight text-white transition group-hover:text-brand-300 sm:text-3xl">{featured.title}</h2>
                  <p className="mt-4 leading-7 text-slate-400">{featured.excerpt}</p>
                  <span className="mt-6 flex items-center gap-2 font-semibold text-brand-300">
                    Read article <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog, index) => (
              <Reveal key={blog._id || blog.slug} delay={(index % 3) * 0.08}>
                <BlogCard blog={blog} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
