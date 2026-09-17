export default function ProjectCard({ title, category, image }) {
  return (
    <div className="project-card">
      {image ? <img src={image} alt={title} /> : <div className="project-card__placeholder" />}
      <h4>{title}</h4>
      <span>{category}</span>
    </div>
  );
}
