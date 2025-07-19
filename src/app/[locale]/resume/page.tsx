import { useTranslations } from "next-intl";
import ResumeExperience from "../components/resume/ResumeExperience";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeLanguages from "../components/resume/ResumeLanguages";
import ResumeCertifications from "../components/resume/ResumeCertifications";

export default function Resume() {
  const t = useTranslations("Resume");

  return (
    <section className="bg-light text-paragraph text-darker flex flex-col justify-center items-center p-4 sm:p-8 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-heading leading-tight text-center">
        {t("resume-title")}
      </h1>
      <div className="bg-lighter space-y-6 sm:space-y-8 w-full max-w-4xl mx-auto p-4 sm:p-8 md:p-10 rounded-3xl shadow-2xl mb-8">
        <ResumeExperience />
        <ResumeEducation />
        <ResumeCertifications />
        <ResumeLanguages />
      </div>
    </section>
  );
}
