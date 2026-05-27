import { useTranslations } from "next-intl";
import ResumeExperience from "../components/resume/ResumeExperience";
import ResumeEducation from "../components/resume/ResumeEducation";
import ResumeLanguages from "../components/resume/ResumeLanguages";
import ResumeCertifications from "../components/resume/ResumeCertifications";

export default function Resume() {
  const t = useTranslations("Resume");
  const tt = useTranslations("About");

  return (
    <section
      className="px-6 py-16 md:py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 fade-in-up fade-in-up-1">
          <p className="text-xs mb-2" style={{ color: "var(--color-faint)" }}>
            <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>milena@portfolio</span>
            <span>:~ $ cat resume.md</span>
          </p>
          <h1 className="section-title text-3xl md:text-4xl">{t("resume-title")}</h1>
        </div>
        <div className="fade-in-up fade-in-up-2 terminal-card rounded-md p-8 mb-8">
          <h2
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-faint)" }}
          >
            {t("about-title")}
          </h2>
          <p className="text-sm leading-loose mb-3" style={{ color: "var(--color-text)" }}>
            {tt("introduction")}
          </p>
        </div>
        <div className="fade-in-up fade-in-up-3 terminal-card rounded-md p-8 md:p-10">
          <div className="space-y-12">
            <ResumeExperience />
            <div className="border-t" style={{ borderColor: "var(--color-border)" }} />
            <ResumeEducation />
            <div className="border-t" style={{ borderColor: "var(--color-border)" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ResumeCertifications />
              <ResumeLanguages />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
