import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  repositoryLink?: string;
  projectLink?: string;
  repositoryText: string;
  projectText: string;
  index?: number;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  repositoryLink,
  projectLink,
  repositoryText,
  projectText,
  index = 0,
}: ProjectCardProps) => {
  const delayClass = `fade-in-up-${Math.min(index + 2, 4)}`;

  return (
    <div className={`fade-in-up ${delayClass} terminal-card rounded-md p-6 md:p-8`}>

      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs mb-1" style={{ color: "var(--color-faint)" }}>
            <span style={{ color: "var(--color-accent)" }}>project</span>
            /{String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-lg font-semibold tracking-tight" style={{ color: "var(--color-text)" }}>
            {title}
          </h2>
        </div>
        {projectLink && (
          <span className="status-badge flex-shrink-0 mt-1">live</span>
        )}
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-muted)" }}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag">{tech.trim()}</span>
        ))}
      </div>

      <div className="border-t mb-5" style={{ borderColor: "var(--color-border)" }} />

      <div className="flex gap-6 text-sm">
        {repositoryLink && (
          <a
            href={repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 link-retro"
            style={{ color: "var(--color-muted)" }}
          >
            <FaGithub size={14} />
            {repositoryText}
          </a>
        )}
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 link-retro"
            style={{ color: "var(--color-muted)" }}
          >
            <FiExternalLink size={14} />
            {projectText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
