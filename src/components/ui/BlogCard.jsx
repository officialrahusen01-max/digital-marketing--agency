import { Link } from "react-router-dom";

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
    <article className="group overflow-hidden rounded-[28px] border border-cream/10 bg-[#17181b] transition duration-500 hover:-translate-y-2 hover:border-coral/40">
      <Link to={`/blog/${blog.slug}`} className="flex h-full flex-col">
        <div className="overflow-hidden">
          {blog.image ? (
            <img src={blog.image} alt={blog.title} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
          ) : (
            <div className="h-64 w-full bg-[radial-gradient(circle_at_70%_20%,rgb(0_221_204_/_35%),transparent_55%)]" />
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-mist">
            <span className="text-coral">{blog.category}</span>
            <span>{date || blog.readTime}</span>
          </div>
          <Heading className="text-2xl leading-[1.08] tracking-[-0.05em] text-cream sm:text-[1.9rem]">{blog.title}</Heading>
          <p className="mt-4 text-base leading-7 text-cream/70">{blog.excerpt}</p>
          <div className="mt-auto flex items-center justify-between border-t border-cream/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-mist">
            <span>{blog.readTime}</span>
            <span className="text-coral transition-transform group-hover:translate-x-1">Read article →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
