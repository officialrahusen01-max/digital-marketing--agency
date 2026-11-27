import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs.js";
import BlogCard from "../../components/ui/BlogCard.jsx";

export default function BlogSection() {
  const { blogs } = useBlogs();

  return (
    <section className="bg-[#121315] px-6 py-24 text-cream sm:px-10 lg:px-[6vw] lg:py-32" aria-labelledby="blog-title">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">06 / Insights</p>
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
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog._id || blog.slug} blog={blog} headingLevel="h3" />
          ))}
        </div>
      </div>
    </section>
  );
}
