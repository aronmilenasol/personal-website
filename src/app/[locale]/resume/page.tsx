import { useTranslations } from "next-intl";
import ResumeExperience from "../components/resume/ResumeExperience";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeLanguages from "../components/resume/ResumeLanguages";
import ResumeCertifications from "../components/resume/ResumeCertifications";

export default function Resume() {
  const t = useTranslations("Resume");

  return (
    <section className="bg-light text-dark px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-medium mb-16 text-center tracking-tight">
          {t("resume-title")}
        </h1>

        <div className="bg-lighter border border-dark/20 p-8 md:p-10 space-y-12 rounded-md">
          <ResumeExperience />
          <ResumeEducation />
          <ResumeCertifications />
          <ResumeLanguages />
        </div>
      </div>
    </section>
  );
}
