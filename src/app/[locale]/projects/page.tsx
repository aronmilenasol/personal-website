import { useTranslations } from "next-intl";
import ProjectCard from "../components/project/ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="bg-light text-dark px-6 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium mb-16 text-darker text-center tracking-tight">
          {t("projects-title")}
        </h1>

        {/* Projects list */}
        <div className="space-y-14">
          <ProjectCard
            title={t("project1-title")}
            description={t("project1-description")}
            technologies={t("project1-technologies").split(",")}
            repositoryLink="https://github.com/aronmilenasol/homelab"
            repositoryText={t("repository")}
            projectText={t("link")}
          />

          <ProjectCard
            title={t("project2-title")}
            description={t("project2-description")}
            technologies={t("project2-technologies").split(",")}
            repositoryLink="https://github.com/aronmilenasol/system-monitor"
            repositoryText={t("repository")}
            projectText={t("link")}
          />

          <ProjectCard
            title={t("project3-title")}
            description={t("project3-description")}
            technologies={t("project3-technologies").split(",")}
            repositoryLink="https://github.com/aronmilenasol/carrerait-roadmap"
            repositoryText={t("repository")}
            projectText={t("link")}
            projectLink="https://carrerait.vercel.app"
          />
        </div>
      </div>
    </section>
  );
}
