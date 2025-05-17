import { useTranslations } from "next-intl";
import { Star, Sparkles } from "lucide-react";

const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";
const responsibilityClasses =
  "font-medium text-base sm:text-lg mt-2 text-darker";

const ResumeLanguages = () => {
  const t = useTranslations("Resume");

  return (
    <div className="mt-6 sm:mt-10">
      <h4 className={titleClasses}>
        <Star className="mr-2 text-darker w-6 h-6 sm:w-8 sm:h-8" />{" "}
        {t("languages-title")}
      </h4>
      <div className="bg-lighter p-4 sm:p-6 rounded-2xl">
        <ul className="list-none mt-2">
          {["english", "spanish"].map((lang, index) => (
            <li
              key={index}
              className={`${responsibilityClasses} flex items-center mb-2`}
            >
              <Sparkles className="mr-2 text-darker w-4 h-4 sm:w-5 sm:h-5" />
              <span>{t(lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeLanguages;
