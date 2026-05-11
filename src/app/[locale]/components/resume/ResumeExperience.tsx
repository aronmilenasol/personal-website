import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";

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
    responsibilities: [
      "job3-responsibility-1",
      "job3-responsibility-2",
      "job3-responsibility-3",
    ],
  },
  {
    company: "job2-company",
    role: "job2-role",
    location: "job2-location",
    timeline: "job2-timeline",
    responsibilities: ["job2-responsibility-1"],
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
    ],
  },
];

const ResumeExperience = () => {
  const t = useTranslations("Resume");

  return (
    <section>
      <h2 className="text-xl font-medium mb-8 tracking-tight">
        {t("experience-title")}
      </h2>

      {jobs.map((job, index) => (
        <div key={index} className="mb-10">
          <p className="font-medium">{t(job.role)}</p>
          <p className="opacity-90">{t(job.company)}</p>
          <p className="flex items-center gap-2 text-sm opacity-70 mt-1">
            <MapPin size={14} />
            {t(job.location)}
          </p>
          <p className="text-sm italic opacity-60 mt-1">{t(job.timeline)}</p>
          <ul className="mt-3 space-y-1 list-disc list-inside text-sm opacity-85">
            {job.responsibilities.map((responsibility, i) => (
              <li key={i}>{t(responsibility)}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ResumeExperience;
