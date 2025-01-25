import { useTranslations } from "next-intl";
import ResumeAbout from "../components/resume/ResumeAbout";
import ResumeExperience from "../components/resume/ResumeExperience";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeLanguages from "../components/resume/ResumeLanguages";

export default function Resume() {
  const t = useTranslations("Resume");

  return (
    <section className="bg-light text-paragraph flex flex-col justify-center items-center p-4 sm:p-8 min-h-screen">
      <h1 className="text-darker text-4xl md:text-5xl font-bold mb-12 text-heading leading-tight text-center">
        {t("resume-title")}
      </h1>
      <div className="bg-white space-y-6 sm:space-y-8 w-full max-w-4xl mx-auto bg-card p-4 sm:p-8 md:p-10 rounded-3xl shadow-2xl ">
        <ResumeAbout />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeLanguages />
      </div>
    </section>
  );
}
