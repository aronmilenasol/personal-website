import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";
const jobTitleClasses = "font-bold text-lg sm:text-xl text-darker mb-2";
const jobRoleClasses = "font-bold text-2xl sm:text-2xl text-darker mt-4";
const timelineClasses = "italic text-base sm:text-lg text-darker";
const responsibilityClasses =
  "font-medium text-base sm:text-lg mt-2 text-darker list-disc list-inside";
const locationClasses =
  "text-base sm:text-lg text-darker mb-2 flex items-center";

interface Job {
  company: string;
  role: string;
  location: string;
  timeline: string;
  responsibilities: string[];
}
const jobs: Job[] = [
  {
    company: "job3-company",
    role: "job3-role",
    location: "job3-location",
    timeline: "job3-timeline",
    responsibilities: ["job3-responsibility-1", "job3-responsibility-2"],
  },
  {
    company: "job2-company",
    role: "job2-role",
    location: "job2-location",
    timeline: "job2-timeline",
    responsibilities: ["job2-responsibility-1", "job2-responsibility-2"],
  },
  {
    company: "job1-company",
    role: "job1-role",
    location: "job1-location",
    timeline: "job1-timeline",
    responsibilities: [
      "job1-responsibility-1",
      "job1-responsibility-2",
      "job1-responsibility-3",
      "job1-responsibility-4",
      "job1-responsibility-5",
      "job1-responsibility-6",
    ],
  },
];

const ResumeExperience = () => {
  const t = useTranslations("Resume");
  return (
    <div>
      <h2 className={titleClasses}>{t("experience-title")}</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <p className={jobRoleClasses}>{t(job.role)}</p>
          <p className={`${jobTitleClasses} flex items-center`}>
            {t(job.company)}
          </p>
          <p className={locationClasses}>
            <MapPin className="mr-2" />
            {t(job.location)}
          </p>
          <p className={timelineClasses}>{t(job.timeline)}</p>
          <ul className="mt-2 mb-2">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className={responsibilityClasses}>
                {t(responsibility)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperience;
