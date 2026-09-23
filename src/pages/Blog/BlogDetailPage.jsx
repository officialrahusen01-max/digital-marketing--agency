import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs/getAllBlogs`);

        if (!response.ok) {
          throw new Error("Blog not found");
        }

        const data = await response.json();
        const matchingBlog = (data.data || []).find((item) => item.slug === slug);

        if (!matchingBlog) {
          throw new Error("Blog not found");
        }

        setBlog(matchingBlog);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <main className="bg-ink px-6 py-24 text-cream">Loading article...</main>;
  }

  if (error || !blog) {
    return (
      <main className="bg-ink px-6 py-24 text-cream">
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

  return (
    <main className="bg-ink text-cream">
      <article className="mx-auto max-w-[1100px] px-6 py-24 sm:px-10 lg:px-[6vw]">
        <Link to="/blog" className="mb-8 inline-flex text-xs uppercase tracking-[0.18em] text-coral">
          ← Back to blog
        </Link>

        <p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-mist">{blog.category}</p>
        <h1 className="max-w-[900px] text-[clamp(2.8rem,6vw,6rem)] leading-[0.9] tracking-[-0.08em]">
          {blog.title}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.16em] text-mist">
          <span>{blog.author}</span>
          <span>{blog.readTime}</span>
        </div>

        <img src={blog.image} alt={blog.title} className="mt-12 h-[420px] w-full rounded-[30px] object-cover" />

        <div className="prose prose-invert mt-12 max-w-[800px] text-lg leading-8 text-cream/80">
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={`${blog.slug}-${index}`} className="mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
