import { useTranslations } from "next-intl";

const languages = [
  { key: "english", level: 5 },
  { key: "spanish", level: 5 },
];

const ResumeLanguages = () => {
  const t = useTranslations("Resume");

  return (
    <section>
      <h2 className="section-title mb-8">{t("languages-title")}</h2>

      <div className="space-y-5">
        {languages.map(({ key, level }) => {
          const parts = t(key).split(": ");
          const name = parts[0];
          const proficiency = parts[1];
          return (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                  {name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-faint)" }}>
                  {proficiency}
                </p>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`skill-pip${i < level ? " filled" : ""}`} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResumeLanguages;
