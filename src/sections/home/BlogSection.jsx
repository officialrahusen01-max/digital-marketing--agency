import useBlogs from "../../hooks/useBlogs.js";
import BlogCard from "../../components/ui/BlogCard.jsx";
import { Button, Reveal, SectionHeader } from "../../components/ui/primitives.jsx";

export default function BlogSection() {
  const { blogs } = useBlogs();

  return (
    <section className="bg-night-900 py-20 sm:py-28" aria-labelledby="blog-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader align="left" eyebrow="From the blog" id="blog-title" title="Practical tips to grow your business online" />
          <Button to="/blog" variant="outline" className="shrink-0 self-start md:self-auto" arrow>
            View all articles
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog, index) => (
            <Reveal key={blog._id || blog.slug} delay={index * 0.08}>
              <BlogCard blog={blog} headingLevel="h3" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
