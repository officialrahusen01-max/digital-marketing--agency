import { useEffect, useState } from "react";
import { localBlogs } from "../data/blogs.js";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

// Admin-published posts (API) first, then built-in posts. If the API is
// unreachable the built-in posts are still shown, so the blog is never empty.
export default function useBlogs() {
  const [blogs, setBlogs] = useState(localBlogs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs/getAllBlogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");

        const data = await response.json();
        const remote = (data.data || []).filter((blog) => blog?.slug && blog?.title);
        const remoteSlugs = new Set(remote.map((blog) => blog.slug));

        if (!cancelled) setBlogs([...remote, ...localBlogs.filter((blog) => !remoteSlugs.has(blog.slug))]);
      } catch {
        // Keep built-in posts on failure.
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchBlogs();
    return () => {
      cancelled = true;
    };
  }, []);

  return { blogs, loading };
}
