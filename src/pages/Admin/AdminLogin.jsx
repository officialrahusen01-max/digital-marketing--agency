import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Invalid login");
      }

      localStorage.setItem("nld_admin_token", result.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 py-20 text-cream">
      <div className="w-full max-w-md rounded-[28px] border border-cream/10 bg-[#121315] p-8 shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-mist">Admin access</p>
        <h1 className="text-4xl tracking-[-0.06em]">Login</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block text-sm text-mist">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@nextlifedigital.com"
              className="mt-2 w-full rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <label className="block text-sm text-mist">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-coral px-6 py-3 text-[10px] uppercase tracking-[0.16em] text-ink transition hover:brightness-110 disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <p className="text-sm text-red-300">{error}</p>}
        </form>
      </div>
    </main>
  );
}
