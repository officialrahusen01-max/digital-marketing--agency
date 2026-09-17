export default function TestimonialCard({ name, company, quote }) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <p className="testimonial-card__author">
        {name} — {company}
      </p>
    </div>
  );
}
