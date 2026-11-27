import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services.js";
import { site, whatsappLink } from "../config/site.js";
import { Button } from "./ui/primitives.jsx";
import { IconCheck, IconShield, IconWhatsApp } from "./ui/Icons.jsx";

const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: services[0].title,
  budget: "",
  message: "",
};

const budgets = ["Under ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000+", "Not sure yet"];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-night-800 px-4 py-3 text-[15px] text-white placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-400/20";

function Field({ label, htmlFor, required, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-slate-100">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function EnquiryForm({ title = "Tell us about your project", subtitle = "Fill in the form and we'll get back to you within one working day." }) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to submit enquiry");

      setStatus({ type: "success", message: `Thank you! Your enquiry has reached ${site.name}. We will get back to you within one working day.` });
      setFormData(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "We couldn’t send your enquiry right now. Please message us on WhatsApp instead — it reaches the same team.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status.type === "success") {
    return (
      <div className="rounded-3xl border border-white/10 bg-night-800 p-8 text-center shadow-lift sm:p-12" role="status">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-400 text-night">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-white">Enquiry received!</h3>
        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">{status.message}</p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus({ type: "idle", message: "" })}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-night-800 p-6 shadow-lift sm:p-9" noValidate={false}>
      <h2 className="text-2xl font-extrabold text-white">{title}</h2>
      <p className="mt-2 text-slate-400">{subtitle}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="enq-name" required>
          <input id="enq-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
        </Field>
        <Field label="Phone number" htmlFor="enq-phone" required>
          <input id="enq-phone" type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className={inputClass} />
        </Field>
        <Field label="Email address" htmlFor="enq-email" required className="sm:col-span-2">
          <input id="enq-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" className={inputClass} />
        </Field>
        <Field label="Service needed" htmlFor="enq-service" required>
          <select id="enq-service" name="service" value={formData.service} onChange={handleChange} required className={inputClass}>
            {services.map((service) => (
              <option key={service.id} value={service.title}>{service.title}</option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
        <Field label="Monthly budget" htmlFor="enq-budget">
          <select id="enq-budget" name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </Field>
        <Field label="Project details" htmlFor="enq-message" className="sm:col-span-2">
          <textarea id="enq-message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your business, audience and goals…" className={`${inputClass} resize-none`} />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full" disabled={isSubmitting} arrow={!isSubmitting}>
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </Button>

      <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
        <IconShield className="h-4 w-4 shrink-0 text-brand-400" />
        <span>
          Your details are safe with us. See our{" "}
          <Link to="/privacy-policy" className="underline decoration-brand-400/50 underline-offset-2 hover:text-brand-300">privacy policy</Link>.
        </span>
      </p>

      {status.type === "error" && (
        <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-5" role="alert">
          <p className="text-sm leading-6 text-rose-200">{status.message}</p>
          <Button
            variant="whatsapp"
            size="sm"
            className="mt-4"
            href={whatsappLink(
              `Hi ${site.name}, I'd like a quote.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nDetails: ${formData.message}`,
            )}
          >
            <IconWhatsApp className="h-4 w-4" /> Send on WhatsApp
          </Button>
        </div>
      )}
    </form>
  );
}
