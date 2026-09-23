import { Link } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs.js";

export default function BlogListPage() {
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return <main className="bg-ink px-6 py-24 text-cream">Loading blogs...</main>;
  }

  if (error) {
    return <main className="bg-ink px-6 py-24 text-cream">{error}</main>;
  }

  return (
    <main className="bg-ink text-cream">
      <section className="px-6 pb-16 pt-28 sm:px-10 lg:px-[6vw] lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-6 text-[10px] uppercase tracking-[0.24em] text-mist">Resources / Blog</p>
          <h1 className="max-w-[1100px] text-[clamp(3.4rem,7vw,7rem)] leading-[0.9] tracking-[-0.08em]">
            Ideas that help brands <span className="text-coral">grow smarter.</span>
          </h1>
        </div>
      </section>

      <section className="bg-[#121315] px-6 py-20 sm:px-10 lg:px-[6vw] lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.length === 0 ? (
            <p className="text-mist">No blog posts available yet.</p>
          ) : (
            blogs.map((blog) => (
              <article key={blog._id} className="group overflow-hidden rounded-[28px] border border-cream/10 bg-[#17181b] transition hover:-translate-y-2 hover:border-coral/40">
                <Link to={`/blog/${blog.slug}`} className="block h-full">
                  <img src={blog.image} alt={blog.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-mist">
                      <span>{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h2 className="text-3xl leading-[1.05] tracking-[-0.06em] text-cream">{blog.title}</h2>
                    <p className="mt-4 text-base leading-7 text-cream/70">{blog.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4 text-[10px] uppercase tracking-[0.16em] text-coral">
                      <span>{blog.author}</span>
                      <span>Read more →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
