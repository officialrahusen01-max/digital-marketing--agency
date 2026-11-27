import { useState } from "react";
import { services } from "../data/services.js";
import { site, whatsappLink } from "../config/site.js";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "Digital Marketing",
  budget: "",
  message: "",
};

export default function EnquiryForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit enquiry");
      }

      setStatus({
        type: "success",
        message: `Thank you! Your enquiry has reached ${site.name}. We will get back to you within one working day.`,
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: "We couldn’t send your enquiry right now. Please message us on WhatsApp instead — it reaches the same team.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#111214] px-6 py-20 text-cream sm:px-10 lg:px-[6vw] lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-mist">Quick enquiry</p>
          <h2 className="text-[clamp(2.5rem,5vw,4.8rem)] leading-[0.9] tracking-[-0.06em]">
            Tell us about your <span className="text-coral">growth goals.</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 rounded-[28px] border border-cream/10 bg-ink p-6 sm:p-8 lg:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-mist">
            Full name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-mist">
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-mist">
            Phone number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
              className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-mist">
            Service needed
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="rounded-full border border-cream/10 bg-[#17181b] px-4 py-3 text-base text-cream focus:border-coral focus:outline-none"
            >
              {services.map((service) => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-mist lg:col-span-2">
            Budget range
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="For example: ₹50k - ₹1L / monthly"
              className="rounded-full border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-mist lg:col-span-2">
            Project details
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your business, audience, and goals..."
              className="resize-none rounded-[24px] border border-cream/10 bg-transparent px-4 py-3 text-base text-cream placeholder:text-cream/35 focus:border-coral focus:outline-none"
            />
          </label>

          <div className="lg:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-[10px] font-medium uppercase tracking-[0.16em] text-ink transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Send enquiry"}
            </button>

            {status.message && (
              <div className="flex flex-col gap-3 sm:items-end sm:text-right">
                <p role="status" className={status.type === "success" ? "text-sm text-coral" : "text-sm text-red-300"}>
                  {status.message}
                </p>
                {status.type === "error" && (
                  <a
                    href={whatsappLink(
                      `Hi ${site.name}, I'd like a quote.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nDetails: ${formData.message}`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-coral px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-coral transition hover:bg-coral hover:text-ink"
                  >
                    Send on WhatsApp ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
