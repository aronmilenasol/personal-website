import { useTranslations } from "next-intl";
const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";
const responsibilityClasses =
  "font-medium text-base sm:text-lg mt-2 text-darker";

const ResumeLanguages = () => {
  const t = useTranslations("Resume");

  return (
    <div className="mt-6 sm:mt-10">
      <h4 className={titleClasses}>{t("languages-title")}</h4>
      <div className="bg-lighter rounded-2xl">
        <ul className="list-disc list-inside mt-2">
          {["english", "spanish"].map((lang, index) => (
            <li key={index} className={`${responsibilityClasses}`}>
              <span>{t(lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeLanguages;
