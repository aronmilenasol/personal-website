import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

const paragraphClasses =
  "text-base sm:text-lg md:text-xl leading-relaxed text-dark";
const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";

const ResumeAbout = () => {
  const t = useTranslations("Resume");
  return (
    <div className="bg-lighter p-4 sm:p-6 md:p-8 rounded-2xl border-2 border-base">
      <h2 className={titleClasses}>
        <Heart className="mr-2 text-dark w-6 h-6 sm:w-8 sm:h-8" />{" "}
        {t("about-title")}
      </h2>
      <p className={paragraphClasses}>{t("about-1")}</p>
      <p className={`${paragraphClasses} mt-2`}>{t("about-2")}</p>
    </div>
  );
};

export default ResumeAbout;
