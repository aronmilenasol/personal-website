import { useTranslations } from "next-intl";
import { MapPin, Calendar } from "lucide-react";

interface Role {
  role: string;
  timeline: string;
  responsibilities: string[];
}

interface Job {
  company: string;
  location: string;
  roles: Role[];
}

const jobs: Job[] = [
  {
    company: "job3-company",
    location: "job3-location",
    roles: [
      {
        role: "job3-role-1",
        timeline: "job3-timeline-1",
        responsibilities: [
          "job3-responsibility-1-1",
          "job3-responsibility-1-2",
          "job3-responsibility-1-3",
          "job3-responsibility-1-4",
          "job3-responsibility-1-5",
        ],
      },
      {
        role: "job3-role-2",
        timeline: "job3-timeline-2",
        responsibilities: [
          "job3-responsibility-2-1",
          "job3-responsibility-2-2",
          "job3-responsibility-2-3",
        ],
      },
    ],
  },
  {
    company: "job2-company",
    location: "job2-location",
    roles: [
      {
        role: "job2-role",
        timeline: "job2-timeline",
        responsibilities: ["job2-responsibility-1"],
      },
    ],
  },
  {
    company: "job1-company",
    location: "job1-location",
    roles: [
      {
        role: "job1-role",
        timeline: "job1-timeline",
        responsibilities: [
          "job1-responsibility-1",
          "job1-responsibility-2",
        ],
      },
    ],
  },
];

const ResumeExperience = () => {
  const t = useTranslations("Resume");

  return (
    <section>
      <h2 className="section-title mb-8">{t("experience-title")}</h2>

      <div className="space-y-10">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="relative pl-5"
            style={{ borderLeft: "2px solid var(--color-border)" }}
          >
            <div className="timeline-dot absolute -left-[5px] top-1.5" />
            <p className="font-semibold text-base" style={{ color: "var(--color-text)" }}>
              {t(job.company)}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs mt-1 mb-4"
              style={{ color: "var(--color-faint)" }}>
              <span className="flex items-center gap-1.5">
                <MapPin size={11} />{t(job.location)}
              </span>
            </div>
            <div className="space-y-6">
              {job.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="pl-2">
                  <p className="font-medium text-sm" style={{ color: "var(--color-text)" }}>
                    {t(role.role)}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "var(--color-faint)" }}>
                    {t(role.timeline)}
                  </p>
                  <ul className="space-y-2">
                    {role.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm leading-relaxed flex gap-2"
                        style={{ color: "var(--color-muted)" }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-accent)" }}>›</span>
                        {t(r)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeExperience;
