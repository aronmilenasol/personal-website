import { useTranslations } from "next-intl";
import { Calendar, MapPin } from "lucide-react";

const ResumeEducation = () => {
  const t = useTranslations("Resume");

  return (
    <section>
      <h2 className="section-title mb-8">{t("education-title")}</h2>

      <div
        className="relative pl-5"
        style={{ borderLeft: "2px solid var(--color-border)" }}
      >
        <div className="timeline-dot absolute -left-[5px] top-1.5" />

        <p className="font-semibold text-base" style={{ color: "var(--color-text)" }}>
          {t("education1-area")}
        </p>
        <p className="text-sm mt-0.5" style={{ color: "var(--color-muted)" }}>
          {t("education1-institution")}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-2 mb-3"
          style={{ color: "var(--color-faint)" }}>
          <span className="flex items-center gap-1.5">
            <MapPin size={11} />{t("education1-country")}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={11} />{t("education1-timeline")}
          </span>
        </div>

        <p className="text-sm leading-relaxed flex gap-2" style={{ color: "var(--color-muted)" }}>
          <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }}>›</span>
          {t("education1-description")}
        </p>
      </div>
    </section>
  );
};

export default ResumeEducation;
