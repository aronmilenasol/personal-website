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
        <ProjectCard
          title={t("project2-title")}
          description={t("project2-description")}
          technologies={t("project2-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/persephone-app"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project3-title")}
          description={t("project3-description")}
          technologies={t("project3-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/astrolife-calculator"
          projectLink="https://calculate-astrolife.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project4-title")}
          description={t("project4-description")}
          technologies={t("project4-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/dragdrop-message"
          projectLink="https://dragdrop-message.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project5-title")}
          description={t("project5-description")}
          technologies={t("project5-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/movie-quiz"
          projectLink="https://milenamoviequiz.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
      </div>
    </section>
  );
}
