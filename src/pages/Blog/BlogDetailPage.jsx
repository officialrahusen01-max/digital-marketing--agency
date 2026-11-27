import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs.js";
import BlogCard, { formatBlogDate } from "../../components/ui/BlogCard.jsx";

function renderContent(content = "") {
  return content.split(/\n\s*\n/).map((block, index) => {
    const text = block.trim();
    if (!text) return null;
    if (text.startsWith("## ")) {
      const [heading, ...rest] = text.split("\n");
      return (
        <div key={index}>
          <h2 className="mb-4 mt-12 text-3xl leading-tight tracking-[-0.04em] text-cream">{heading.replace(/^##\s+/, "")}</h2>
          {rest.length > 0 && <p className="mb-6">{rest.join(" ")}</p>}
        </div>
      );
    }
    return <p key={index} className="mb-6">{text}</p>;
  });
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();
  const blog = blogs.find((item) => item.slug === slug);

  useEffect(() => {
    if (blog) document.title = `${blog.title} | Next Life Digital`;
  }, [blog]);

  if (!blog && loading) {
    return <main className="min-h-[60vh] bg-ink px-6 py-24 text-cream">Loading article...</main>;
  }

  if (!blog) {
    return (
      <main className="min-h-[60vh] bg-ink px-6 py-24 text-cream">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Blog</p>
          <h1 className="text-5xl tracking-[-0.06em]">Article not found</h1>
          <Link to="/blog" className="mt-6 inline-flex rounded-full border border-coral px-5 py-3 text-xs uppercase tracking-[0.14em] text-coral">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);
  const date = formatBlogDate(blog.date || blog.createdAt);

  return (
    <main className="bg-ink text-cream">
      <article className="mx-auto max-w-[1100px] px-6 py-24 sm:px-10 lg:px-[6vw]">
        <Link to="/blog" className="mb-8 inline-flex text-xs uppercase tracking-[0.18em] text-coral">
          ← Back to blog
        </Link>

        <p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-coral">{blog.category}</p>
        <h1 className="max-w-[900px] text-[clamp(2.6rem,5.5vw,5.5rem)] leading-[0.95] tracking-[-0.07em]">{blog.title}</h1>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.16em] text-mist">
          <span>{blog.author}</span>
          {date && <span>{date}</span>}
          <span>{blog.readTime}</span>
        </div>

        {blog.image && <img src={blog.image} alt={blog.title} className="mt-12 h-[420px] w-full rounded-[30px] object-cover" />}

        <div className="mt-12 max-w-[760px] text-lg leading-8 text-cream/80">{renderContent(blog.content)}</div>

        <div className="mt-16 flex max-w-[760px] flex-col gap-6 rounded-[28px] border border-coral/30 bg-coral/10 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-coral">Need help with this?</p>
            <p className="mt-3 text-2xl tracking-[-0.04em]">Let the Next Life Digital team do it for you.</p>
          </div>
          <Link to="/enquirisubmit" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-coral px-6 py-3 text-xs uppercase tracking-[0.14em] text-ink transition hover:bg-cream">
            Free quote ↗
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-[#0d0f10] px-6 py-20 sm:px-10 lg:px-[6vw]">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="mb-10 text-4xl tracking-[-0.06em]">Keep reading</h2>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item._id || item.slug} blog={item} headingLevel="h3" />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
