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
}

const ProjectCard = ({
  title,
  description,
  technologies,
  repositoryLink,
  projectLink,
  repositoryText,
  projectText,
}: ProjectCardProps) => {
  return (
    <div className="bg-lighter p-6 mb-8 border border-dark/20 rounded-md">
      {/* Title */}
      <p className="text-xl font-medium mb-3 tracking-tight">{title}</p>

      {/* Description */}
      <p className="text-sm opacity-80 leading-relaxed mb-4">{description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 border border-dark/30 rounded-sm opacity-80"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm">
        {repositoryLink && (
          <a
            href={repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 hover:opacity-100 underline underline-offset-4"
          >
            <FaGithub />
            {repositoryText}
          </a>
        )}

        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 hover:opacity-100 underline underline-offset-4"
          >
            <FiExternalLink />
            {projectText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
