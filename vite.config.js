import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Public routes for sitemap.xml (blog posts are added from src/data/blogs.js).
const staticRoutes = ["/", "/about", "/services", "/work", "/blog", "/contact", "/enquirisubmit", "/careers", "/case-studies", "/insights", "/faqs", "/privacy-policy", "/terms"];
const serviceRoutes = ["digital-marketing", "seo", "social-media-marketing", "google-ads", "web-development", "mobile-app-development"].map((id) => `/services/${id}`);

// Writes sitemap.xml + robots.txt at build time when VITE_SITE_URL is set (e.g. https://www.yourdomain.com).
function seoFiles(siteUrl) {
  return {
    name: "seo-files",
    apply: "build",
    async generateBundle() {
      const base = (siteUrl || "").replace(/\/$/, "");
      const robots = ["User-agent: *", "Allow: /", "Disallow: /admin"];

      if (base) {
        const { localBlogs } = await import("./src/data/blogs.js");
        const routes = [...staticRoutes, ...serviceRoutes, ...localBlogs.map((post) => `/blog/${post.slug}`)];
        const today = new Date().toISOString().slice(0, 10);
        const urls = routes
          .map((route) => `  <url><loc>${base}${route}</loc><lastmod>${today}</lastmod><priority>${route === "/" ? "1.0" : "0.7"}</priority></url>`)
          .join("\n");
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
        robots.push(`Sitemap: ${base}/sitemap.xml`);
      }

      this.emitFile({ type: "asset", fileName: "robots.txt", source: `${robots.join("\n")}\n` });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), seoFiles(env.VITE_SITE_URL)],
  };
});
