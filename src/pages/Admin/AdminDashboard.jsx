import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const initialBlog = {
  title: "",
  slug: "",
  category: "SEO",
  excerpt: "",
  content: "",
  image: "",
  readTime: "4 min read",
  author: "Next Life Digital Team",
  featured: false,
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("nld_admin_token") || "";
  const [blogs, setBlogs] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showEnquiries, setShowEnquiries] = useState(false);
  const [blogForm, setBlogForm] = useState(initialBlog);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const authFetch = async (url, options = {}) => {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Request failed");
    }

    return result;
  };

  const fetchDashboardData = async () => {
    try {
      const [blogsResult, enquiriesResult] = await Promise.all([
        authFetch(`${API_BASE_URL}/api/blogs/getAllBlogs`),
        authFetch(`${API_BASE_URL}/api/enquiries`),
      ]);

      setBlogs(blogsResult.data || []);
      setEnquiries(enquiriesResult.data || []);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to load dashboard" });
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }

    fetchDashboardData();
  }, [token, navigate]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setBlogForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetBlogForm = () => {
    setBlogForm(initialBlog);
    setEditingBlogId(null);
  };

  const handleCreateOrUpdateBlog = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const url = editingBlogId
        ? `${API_BASE_URL}/api/blogs/updateBlog/${editingBlogId}`
        : `${API_BASE_URL}/api/blogs/createBlog`;

      const method = editingBlogId ? "PUT" : "POST";

      const result = await authFetch(url, {
        method,
        body: JSON.stringify(blogForm),
      });

      if (editingBlogId) {
        setBlogs((prev) => prev.map((blog) => (blog._id === editingBlogId ? result.data : blog)));
        setStatus({ type: "success", message: "Blog updated successfully." });
      } else {
        setBlogs((prev) => [result.data, ...prev]);
        setStatus({ type: "success", message: "Blog added successfully." });
      }

      resetBlogForm();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || (editingBlogId ? "Unable to update blog." : "Unable to add blog."),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEditBlog = (blog) => {
    setEditingBlogId(blog._id);
    setBlogForm({
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image || "",
      readTime: blog.readTime || "4 min read",
      author: blog.author || "Next Life Digital Team",
      featured: Boolean(blog.featured),
    });
    setStatus({ type: "idle", message: "" });
  };

  const handleDeleteBlog = async (blogId) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      await authFetch(`${API_BASE_URL}/api/blogs/deleteBlog/${blogId}`, {
        method: "DELETE",
      });

      setBlogs((prev) => prev.filter((blog) => blog._id !== blogId));
      if (editingBlogId === blogId) resetBlogForm();
      setStatus({ type: "success", message: "Blog deleted successfully." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to delete blog." });
    }
  };

  const handleDeleteEnquiry = async (enquiryId) => {
    const confirmed = window.confirm("Delete this enquiry?");
    if (!confirmed) return;

    try {
      await authFetch(`${API_BASE_URL}/api/enquiries/${enquiryId}`, {
        method: "DELETE",
      });

      setEnquiries((prev) => prev.filter((item) => item._id !== enquiryId));
      setStatus({ type: "success", message: "Enquiry deleted successfully." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to delete enquiry." });
    }
  };

  const handleToggleReadStatus = async (enquiry) => {
    try {
      const result = await authFetch(`${API_BASE_URL}/api/enquiries/${enquiry._id}`, {
        method: "PUT",
        body: JSON.stringify({ read: !enquiry.read }),
      });

      setEnquiries((prev) =>
        prev.map((item) => (item._id === enquiry._id ? result.data : item))
      );
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to update enquiry status." });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("nld_admin_token");
    navigate("/admin");
  };

  const filteredEnquiries = selectedDate
    ? enquiries.filter((item) => {
        const date = new Date(item.createdAt);
        return date.toISOString().slice(0, 10) === selectedDate;
      })
    : enquiries;

  const sortedEnquiries = [...filteredEnquiries].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <main className="bg-ink px-6 py-12 text-cream sm:px-10 lg:px-[6vw]">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-mist">Admin dashboard</p>
            <h1 className="mt-3 text-4xl tracking-[-0.06em] sm:text-5xl">Manage content & enquiries</h1>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-xs uppercase tracking-[0.18em] text-coral">View site</Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-cream/15 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-cream"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-cream/10 bg-[#121315] p-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.18em] text-mist">Manage</span>
            <button
              type="button"
              onClick={() => setShowEnquiries((prev) => !prev)}
              className="inline-flex items-center gap-3 rounded-full bg-coral px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110"
            >
              {showEnquiries ? "Hide enquiries" : "View enquiries"}
            </button>
          </div>

          {showEnquiries && (
            <label className="flex items-center gap-3 rounded-full border border-cream/10 bg-ink px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-mist">
              Filter by date
              <input
                type="date"
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                className="rounded-full border border-cream/10 bg-transparent px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-cream"
              />
            </label>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[28px] border border-cream/10 bg-[#121315] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl tracking-[-0.05em]">{editingBlogId ? "Edit blog post" : "Add blog post"}</h2>
              <span className="text-[10px] uppercase tracking-[0.16em] text-coral">{blogs.length} total</span>
            </div>

            <form onSubmit={handleCreateOrUpdateBlog} className="mt-6 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input name="title" value={blogForm.title} onChange={handleChange} placeholder="Blog title" className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
                <input name="slug" value={blogForm.slug} onChange={handleChange} placeholder="Slug (example: seo-guide)" className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input name="category" value={blogForm.category} onChange={handleChange} placeholder="Category" className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
                <input name="readTime" value={blogForm.readTime} onChange={handleChange} placeholder="Read time" className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
              </div>

              <input name="image" value={blogForm.image} onChange={handleChange} placeholder="Image URL" className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
              <input name="author" value={blogForm.author} onChange={handleChange} placeholder="Author name" className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
              <textarea name="excerpt" rows="3" value={blogForm.excerpt} onChange={handleChange} placeholder="Short excerpt" className="resize-none rounded-[24px] border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />
              <textarea name="content" rows="8" value={blogForm.content} onChange={handleChange} placeholder="Blog content paragraph by paragraph" className="resize-none rounded-[24px] border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none" />

              <label className="inline-flex items-center gap-3 text-sm text-mist">
                <input type="checkbox" name="featured" checked={blogForm.featured} onChange={handleChange} className="h-4 w-4 accent-coral" />
                Featured post
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" disabled={loading} className="mt-2 inline-flex w-fit rounded-full bg-coral px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110 disabled:opacity-70">
                  {loading ? (editingBlogId ? "Updating..." : "Adding...") : (editingBlogId ? "Update blog" : "Add blog")}
                </button>

                {editingBlogId && (
                  <button
                    type="button"
                    onClick={resetBlogForm}
                    className="mt-2 inline-flex w-fit rounded-full border border-cream/15 px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-cream"
                  >
                    Cancel edit
                  </button>
                )}
              </div>

              {status.message && (
                <p className={status.type === "success" ? "text-sm text-coral" : "text-sm text-red-300"}>{status.message}</p>
              )}
            </form>
          </section>

          <aside className="rounded-[28px] border border-cream/10 bg-[#121315] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-2xl tracking-[-0.05em]">Published blogs</h2>
              <span className="text-[10px] uppercase tracking-[0.16em] text-coral">Latest</span>
            </div>

            <div className="space-y-4">
              {blogs.length === 0 ? (
                <p className="text-mist">No blogs published yet.</p>
              ) : (
                blogs.map((blog) => (
                  <article key={blog._id} className="rounded-[20px] border border-cream/10 bg-[#17181b] p-4">
                    <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.14em] text-mist">
                      <span>{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl tracking-[-0.04em]">{blog.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-cream/70">{blog.excerpt}</p>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-coral">{blog.author}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleEditBlog(blog)}
                        className="rounded-full border border-coral/40 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-coral"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="rounded-full border border-red-400/40 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))
              )}
            </div>
          </aside>
        </div>

        {showEnquiries && (
          <section className="mt-10 rounded-[28px] border border-cream/10 bg-[#121315] p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl tracking-[-0.05em]">Enquiries</h2>
              {selectedDate && <span className="text-[10px] uppercase tracking-[0.14em] text-coral">Filtered: {selectedDate}</span>}
            </div>

            <div className="space-y-4">
              {sortedEnquiries.length === 0 ? (
                <p className="text-mist">No enquiries found for this date.</p>
              ) : (
                sortedEnquiries.map((item) => (
                  <div key={item._id} className="rounded-2xl border border-cream/10 bg-[#17181b] p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.14em] text-mist">
                          <span>{item.service}</span>
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h3 className="mt-3 text-xl tracking-[-0.04em]">{item.name}</h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.14em] ${item.read ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                          {item.read ? "Read" : "Unread"}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleToggleReadStatus(item)}
                          className="rounded-full border border-coral/40 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-coral"
                        >
                          {item.read ? "Mark unread" : "Mark read"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteEnquiry(item._id)}
                          className="rounded-full border border-red-400/40 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-red-300"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 text-sm text-cream/75 sm:grid-cols-2">
                      <p>{item.email}</p>
                      <p>{item.phone}</p>
                    </div>

                    {item.message && <p className="mt-4 text-sm leading-6 text-cream/70">{item.message}</p>}
                  </div>
                ))
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
