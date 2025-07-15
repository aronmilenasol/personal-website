import { useTranslations } from "next-intl";
import ProjectCard from "../components/project/ProjectCard";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section className="bg-light text-dark font-lato flex flex-col justify-center items-center p-8 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-darker leading-tight text-center">
        {t("projects-title")}
      </h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        <ProjectCard
          title={t("project1-title")}
          description={t("project1-description")}
          technologies={t("project1-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/system-monitor"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project2-title")}
          description={t("project2-description")}
          technologies={t("project2-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/carrerait-roadmap"
          projectLink="https://carrerait.lat"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project3-title")}
          description={t("project3-description")}
          technologies={t("project3-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/vwave-challenge"
          projectLink="https://vwavechallenge.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project4-title")}
          description={t("project4-description")}
          technologies={t("project4-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/employee-frontend"
          projectLink="https://milenaemployeelist.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project5-title")}
          description={t("project5-description")}
          technologies={t("project5-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/dragdrop-message"
          projectLink="https://dragdrop-message.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
        <ProjectCard
          title={t("project6-title")}
          description={t("project6-description")}
          technologies={t("project6-technologies").split(",")}
          repositoryLink="https://github.com/aronmilenait/movie-quiz"
          projectLink="https://milenamoviequiz.vercel.app/"
          repositoryText={t("repository")}
          projectText={t("link")}
        />
      </div>
    </section>
  );
}
