// Single source of truth for brand + contact details.
// Update values here and they change across the whole site.
export const site = {
  name: "Next Life Digital",
  shortName: "Next Life",
  tagline: "Give your business its next life online.",
  description:
    "Next Life Digital is a full-service digital marketing agency offering SEO, Google Ads, social media marketing, website and mobile app development for growing businesses.",
  city: "Jaipur, Rajasthan, India",
  location: "Jaipur, India / Working worldwide",
  founded: "2024",
  phones: [
    { label: "+91 97726 09110", href: "tel:+919772609110" },
    { label: "+91 96604 39686", href: "tel:+919660439686" },
  ],
  email: "officialrahusen01@gmail.com",
  whatsapp: "919772609110",
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const mailto = (subject) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
