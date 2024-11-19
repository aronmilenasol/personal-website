import { useTranslations } from "next-intl";

export default function Resume() {
  const t = useTranslations("Resume");
  const paragraphClasses = "text-lg md:text-xl leading-relaxed";
  const titleClasses = "font-bold text-3xl md:text-3xl mb-2 text-pink-900";
  const jobTitleClasses = "font-bold text-2xl md:text-2xl text-pink-700 mt-4";
  const jobRoleClasses = "font-bold text-2xl md:text-2xl text-pink-800 mb-2";
  const timelineClasses = "italic text-xl md:text-xl text-pink-600";
  const responsibilityClasses = "font-medium text-lg md:text-lg mt-4";

  return (
    <section className="bg-gradient-to-r from-orange-50 to-pink-100 font-lato flex flex-col justify-center items-center p-4 text-pink-900">
      <h1 className="font-bold text-4xl md:text-6xl m-8">
        {t("resume-title")}
      </h1>
      <div className="space-y-6 max-w-2xl bg-white p-8 rounded-xl shadow-md">
        {/* About */}
        <p className={paragraphClasses}>{t("about-1")}</p>
        <p className={paragraphClasses}>{t("about-2")}</p>
        <p className={paragraphClasses}>{t("about-3")}</p>

        {/* Work Experience */}
        <div className="mt-8">
          <h2 className={titleClasses}>{t("experience-title")}</h2>
          {/* Founder at CarreraIT */}

          <p className={jobTitleClasses}>{t("job3-company")}</p>
          <p className={jobRoleClasses}>{t("job3-role")}</p>
          <p className={timelineClasses}>{t("job3-timeline")}</p>
          <p className="font-medium text-lg md:text-lg mt-4">
            {t("job3-clarification")}
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>
              {t("job3-responsibility-1")}
            </li>
            <li className={responsibilityClasses}>
              {t("job3-responsibility-2")}
            </li>
            <li className={responsibilityClasses}>
              {t("job3-responsibility-3")}
            </li>
            <li className={responsibilityClasses}>
              {t("job3-responsibility-4")}
            </li>
          </ul>

          {/* Full Stack Developer at bitbug */}

          <p className={jobTitleClasses}>{t("job2-company")}</p>
          <p className={jobRoleClasses}>{t("job2-role")}</p>
          <p className={timelineClasses}>{t("job2-timeline")}</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>
              {t("job2-responsibility-1")}
            </li>
            <li className={responsibilityClasses}>
              {t("job2-responsibility-2")}
            </li>
            <li className={responsibilityClasses}>
              {t("job2-responsibility-3")}
            </li>
          </ul>

          {/* Front End Developer at Bigger */}

          <p className={jobTitleClasses}>{t("job1-company")}</p>
          <p className={jobRoleClasses}>{t("job1-role")}</p>
          <p className={timelineClasses}>{t("job1-timeline")}</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>
              {t("job1-responsibility-1")}
            </li>
            <li className={responsibilityClasses}>
              {t("job1-responsibility-2")}
            </li>
            <li className={responsibilityClasses}>
              {t("job1-responsibility-3")}
            </li>
            <li className={responsibilityClasses}>
              {t("job1-responsibility-4")}
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h3 className={titleClasses}>{t("education-title")}</h3>

          {/* OSSU */}
          <p className={jobTitleClasses}>{t("education2-institution")}</p>
          <p className={jobRoleClasses}>{t("education2-area")}</p>
          <p className={timelineClasses}>{t("education2-timeline")}</p>

          {/* UTN */}
          <p className={jobTitleClasses}>{t("education1-institution")}</p>
          <p className={jobRoleClasses}>{t("education1-area")}</p>
          <p className={timelineClasses}>{t("education1-timeline")}</p>
        </div>

        {/* Languages */}
        <div className="mt-8">
          <h4 className={titleClasses}>{t("languages-title")}</h4>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>{t("english")}</li>
            <li className={responsibilityClasses}>{t("spanish")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
