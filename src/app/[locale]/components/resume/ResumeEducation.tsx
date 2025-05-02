import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const paragraphClasses =
  "text-base sm:text-lg md:text-xl leading-relaxed text-dark";
const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";
const jobTitleClasses = "font-bold text-xl sm:text-2xl text-darker mt-4";
const jobRoleClasses = "font-bold text-lg sm:text-xl text-dark mb-2";
const timelineClasses = "italic text-base sm:text-lg text-dark";

const ResumeEducation = () => {
  const t = useTranslations("Resume");
  return (
    <div className="mt-6 sm:mt-10">
      <h3 className={titleClasses}>
        <Star className="mr-2 text-dark w-6 h-6 sm:w-8 sm:h-8" />{" "}
        {t("education-title")}
      </h3>
      <div className="bg-lighter p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border-2 border-base">
        {/* UTN */}
        <p className={jobTitleClasses}>{t("education1-institution")}</p>
        <p className={jobRoleClasses}>{t("education1-area")}</p>
        <p className={timelineClasses}>{t("education1-timeline")}</p>
        <p className={paragraphClasses}>{t("education1-description")}</p>
      </div>
    </div>
  );
};

export default ResumeEducation;
