import { useTranslations } from "next-intl";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="bg-gradient-to-r from-orange-50 to-pink-100 font-lato flex flex-col justify-center items-center p-8 text-pink-900 min-h-screen">
      <h1 className="font-bold text-5xl md:text-7xl text-pink-600 text-center mb-12">
        {t("projects-title")}
      </h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        <ProjectCard
          title={t("project1-title")}
          description={t("project1-description")}
          technologies={t("project1-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/carrerait-roadmap"
          projectLink="https://carrerait.lat"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
      </div>
    </section>
  );
}
