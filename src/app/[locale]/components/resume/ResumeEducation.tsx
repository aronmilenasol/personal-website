import { useTranslations } from "next-intl";

const ResumeEducation = () => {
  const t = useTranslations("Resume");

  return (
    <section className="mt-10">
      <h2 className="text-xl font-medium mb-8 tracking-tight">
        {t("education-title")}
      </h2>
      <div className="mb-10">
        <p className="font-medium">{t("education1-area")}</p>

        <p className="opacity-90">{t("education1-institution")}</p>

        <p className="text-sm opacity-70 mt-1">{t("education1-country")}</p>

        <p className="text-sm italic opacity-60 mt-1">
          {t("education1-timeline")}
        </p>
      </div>
    </section>
  );
};

export default ResumeEducation;
