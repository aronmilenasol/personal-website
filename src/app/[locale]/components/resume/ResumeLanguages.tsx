import { useTranslations } from "next-intl";

const ResumeLanguages = () => {
  const t = useTranslations("Resume");

  return (
    <section className="mt-10">
      <h2 className="text-xl font-medium mb-6 tracking-tight">
        {t("languages-title")}
      </h2>

      <ul className="space-y-1 text-sm opacity-85">
        {["english", "spanish"].map((lang, index) => (
          <li key={index}>{t(lang)}</li>
        ))}
      </ul>
    </section>
  );
};

export default ResumeLanguages;
