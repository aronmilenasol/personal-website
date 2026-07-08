import { useTranslations } from "next-intl";
import ProjectCard from "../components/project/ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: t("project1-title"),
      description: t("project1-description"),
      technologies: t("project1-technologies").split(","),
      repositoryLink: "https://github.com/aronmilenasol/homelab",
    },
    {
      title: t("project2-title"),
      description: t("project2-description"),
      technologies: t("project2-technologies").split(","),
      repositoryLink: "https://github.com/aronmilenasol/system-monitor",
    },
    {
      title: t("project3-title"),
      description: t("project3-description"),
      technologies: t("project3-technologies").split(","),
      repositoryLink: "https://github.com/aronmilenasol/carrerait-roadmap",
      projectLink: "https://carrerait.vercel.app",
    },
    {
      title: t("project4-title"),
      description: t("project4-description"),
      technologies: t("project4-technologies").split(","),
      projectLink: "https://voxades.com",
    },
  ];

  return (
    <section
      className="px-6 py-16 md:py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up fade-in-up-1">
          <p className="text-xs mb-2" style={{ color: "var(--color-faint)" }}>
            <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>
              milena@portfolio
            </span>
            <span>:~ $ </span>
            <span>ls projects/</span>
          </p>
          <h1
            className="section-title text-3xl md:text-4xl"
            style={{ fontSize: "" }}
          >
            {t("projects-title")}
          </h1>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              repositoryLink={project.repositoryLink}
              projectLink={project.projectLink}
              repositoryText={t("repository")}
              projectText={t("link")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
