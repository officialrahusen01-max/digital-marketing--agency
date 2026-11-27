import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs.js";
import BlogCard from "../../components/ui/BlogCard.jsx";

export default function BlogListPage() {
  const { blogs } = useBlogs();
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(blogs.map((blog) => blog.category).filter(Boolean))], [blogs]);
  const visible = category === "All" ? blogs : blogs.filter((blog) => blog.category === category);

  return (
    <main className="bg-ink text-cream">
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:px-[6vw] lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[min(60vw,760px)] w-[min(60vw,760px)] rounded-full border border-coral/15" />
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-mist">
            <span className="h-2 w-2 rounded-full bg-coral shadow-[0_0_16px_rgb(0_221_204)]" />
            Resources / Blog
          </p>
          <h1 className="max-w-[1100px] text-[clamp(3.4rem,7vw,7rem)] leading-[0.9] tracking-[-0.08em]">
            Ideas that help brands <span className="text-coral">grow smarter.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/70">
            Practical guides on SEO, paid ads, social media and websites — written by the Next Life Digital team.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition ${
                  category === item ? "border-coral bg-coral text-ink" : "border-cream/15 text-mist hover:border-coral hover:text-coral"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0f10] px-6 py-20 sm:px-10 lg:px-[6vw] lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((blog) => (
            <BlogCard key={blog._id || blog.slug} blog={blog} />
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-[1600px] text-center">
          <Link to="/enquirisubmit" className="inline-flex items-center gap-4 rounded-full bg-coral px-6 py-4 text-xs uppercase tracking-[0.14em] text-ink transition hover:-translate-y-1 hover:bg-cream">
            Want this done for you? Get a free quote <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
