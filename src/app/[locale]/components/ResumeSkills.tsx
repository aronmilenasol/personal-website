import { useTranslations } from "next-intl";
import { Star, Sparkles } from "lucide-react";

const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-pink-600 flex items-center";
const jobTitleClasses = "font-bold text-xl sm:text-2xl text-pink-500 mt-4";
const responsibilityClasses =
  "font-medium text-base sm:text-lg mt-2 text-pink-700";

const ResumeSkills = () => {
  const t = useTranslations("Resume");
  return (
    <div className="mt-6 sm:mt-10">
      <h3 className={titleClasses}>
        <Star className="mr-2 text-pink-500 w-6 h-6 sm:w-8 sm:h-8" />{" "}
        {t("skills-title")}
      </h3>
      <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border-2 border-pink-200">
        {/* Programming Languages*/}
        <p className={jobTitleClasses}>{t("skills-subtitle1")}</p>
        <ul className="list-none mt-3">
          {["JavaScript", "TypeScript", "Python"].map((lang, index) => (
            <li
              key={index}
              className={`${responsibilityClasses} flex items-start mb-2`}
            >
              <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
              <span>{lang}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-pink-50 p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border-2 border-pink-200">
        {/* Frameworks, Libraries and Tools */}
        <p className={jobTitleClasses}>{t("skills-subtitle2")}</p>
        <ul className="list-none mt-3">
          {[
            "Tailwind CSS",
            "Next.js",
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "SQLite",
            "Postman",
            "Git/GitHub",
            "Puppeteer",
            "Docker",
            "Nest.js",
          ].map((tool, index) => (
            <li
              key={index}
              className={`${responsibilityClasses} flex items-start mb-2`}
            >
              <Sparkles className="mr-2 text-pink-400 flex-shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5" />
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeSkills;
