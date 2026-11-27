import { Link } from "react-router-dom";
import { IconArrowRight, IconClock } from "./Icons.jsx";

export function formatBlogDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogCard({ blog, headingLevel = "h2" }) {
  const Heading = headingLevel;
  const date = formatBlogDate(blog.date || blog.createdAt);

  return (
    <article className="group h-full">
      <Link to={`/blog/${blog.slug}`} data-cursor="Read" className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-800 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="relative aspect-[16/10] overflow-hidden bg-night-700">
          {blog.image ? (
            <img src={blog.image} alt={blog.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_70%_20%,rgb(0_221_204_/_35%),transparent_55%)]" />
          )}
          {blog.category && (
            <span className="absolute left-4 top-4 rounded-full bg-night/80 px-3 py-1 text-xs font-semibold text-white shadow-sm">{blog.category}</span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
            {date && <span>{date}</span>}
            {date && blog.readTime && <span className="h-1 w-1 rounded-full bg-slate-300" />}
            {blog.readTime && (
              <span className="flex items-center gap-1">
                <IconClock className="h-3.5 w-3.5" /> {blog.readTime}
              </span>
            )}
          </div>
          <Heading className="mt-3 text-xl font-bold leading-snug text-white transition group-hover:text-brand-300">{blog.title}</Heading>
          <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-slate-400">{blog.excerpt}</p>
          <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-brand-300">
            Read article <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
