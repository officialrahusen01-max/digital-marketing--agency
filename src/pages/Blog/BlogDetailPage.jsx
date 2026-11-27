import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs.js";
import BlogCard, { formatBlogDate } from "../../components/ui/BlogCard.jsx";
import { Button, SectionHeader } from "../../components/ui/primitives.jsx";
import { IconClock, IconWhatsApp } from "../../components/ui/Icons.jsx";
import { LogoMark } from "../../components/common/Logo.jsx";
import { site, whatsappLink } from "../../config/site.js";

function renderContent(content = "") {
  return content.split(/\n\s*\n/).map((block, index) => {
    const text = block.trim();
    if (!text) return null;
    if (text.startsWith("## ")) {
      const [heading, ...rest] = text.split("\n");
      return (
        <div key={index}>
          <h2>{heading.replace(/^##\s+/, "")}</h2>
          {rest.length > 0 && <p>{rest.join(" ")}</p>}
        </div>
      );
    }
    return <p key={index}>{text}</p>;
  });
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const { blogs, loading } = useBlogs();
  const blog = blogs.find((item) => item.slug === slug);

  useEffect(() => {
    if (blog) document.title = `${blog.title} | ${site.name}`;
  }, [blog]);

  if (!blog) {
    return (
      <main className="bg-night-800 py-24">
        <div className="container-x max-w-2xl text-center">
          {loading ? (
            <p className="text-slate-500">Loading article…</p>
          ) : (
            <>
              <h1 className="text-4xl font-extrabold text-white">Article not found</h1>
              <p className="mt-3 text-slate-400">It may have been moved or removed.</p>
              <Button to="/blog" className="mt-8" arrow>Back to blog</Button>
            </>
          )}
        </div>
      </main>
    );
  }

  const related = blogs.filter((item) => item.slug !== blog.slug).slice(0, 3);
  const date = formatBlogDate(blog.date || blog.createdAt);

  return (
    <main className="bg-night-800">
      <header className="relative isolate overflow-hidden bg-night pb-40 pt-14 text-white sm:pt-20">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
        <div className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link to="/" className="hover:text-brand-300">Home</Link>
            <span className="text-slate-400">/</span>
            <Link to="/blog" className="hover:text-brand-300">Blog</Link>
          </nav>
          <span className="mt-8 inline-block rounded-full bg-brand-400/15 px-3 py-1 text-sm font-semibold text-brand-300">{blog.category}</span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{blog.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2 font-semibold text-slate-200">
              <LogoMark className="h-6 w-6" /> {blog.author}
            </span>
            {date && <span>{date}</span>}
            {blog.readTime && (
              <span className="flex items-center gap-1.5"><IconClock className="h-4 w-4" /> {blog.readTime}</span>
            )}
          </div>
        </div>
      </header>

      <article className="container-x max-w-4xl">
        {blog.image && <img src={blog.image} alt={blog.title} className="-mt-28 aspect-[16/8] w-full rounded-3xl object-cover shadow-lift" />}
        {blog.excerpt && <p className="mx-auto mt-12 max-w-3xl text-xl font-medium leading-8 text-slate-100">{blog.excerpt}</p>}
        <div className="prose-article mx-auto mt-8 max-w-3xl">{renderContent(blog.content)}</div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-6 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-extrabold text-night">Want us to do this for you?</p>
            <p className="mt-1 text-night/75">Get a free strategy call with the {site.name} team.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button to="/enquirisubmit" variant="dark">Free Consultation</Button>
            <Button href={whatsappLink(`Hi ${site.name}, I just read "${blog.title}" and would like help.`)} variant="light">
              <IconWhatsApp className="h-5 w-5 text-[#25D366]" />
            </Button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-20 bg-night-900 py-20">
          <div className="container-x">
            <SectionHeader align="left" title="Keep reading" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
