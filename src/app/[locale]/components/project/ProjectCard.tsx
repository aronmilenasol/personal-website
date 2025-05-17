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
  const cardClasses = "bg-lighter p-6 rounded-2xl mb-6 shadow-lg";
  const titleClasses = "text-2xl font-bold mb-2";
  const paragraphClasses = "text-lg mb-4";
  const technologiesClasses =
    "bg-light text-darker px-2 py-1 rounded-lg mr-2 mb-2";
  const buttonBaseClasses =
    "px-4 py-2 rounded-lg mr-2 font-semibold text-md mt-4 inline-block transition-transform transform hover:scale-105";
  const repositoryButtonClasses = `${buttonBaseClasses} bg-light text-darker flex items-center`;
  const linkButtonClasses = `${buttonBaseClasses} bg-base text-lighter flex items-center`;

  return (
    <div className={cardClasses}>
      <p className={titleClasses}>{title}</p>
      <p className={paragraphClasses}>{description}</p>
      <div className="mt-4 flex flex-wrap">
        {technologies.map((tech) => (
          <span key={tech} className={technologiesClasses}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex">
        {repositoryLink && (
          <a
            href={repositoryLink}
            className={repositoryButtonClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" />
            {repositoryText}
          </a>
        )}
        {projectLink && (
          <a
            href={projectLink}
            className={linkButtonClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="mr-2" />
            {projectText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
