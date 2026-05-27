import { useTranslations } from "next-intl";

interface Certificate {
  institution: string;
  name: string;
  date: string;
}

const certificates: Certificate[] = [
  { institution: "certification1-institution", name: "certification1-name", date: "certification1-date" },
  { institution: "certification2-institution", name: "certification2-name", date: "certification2-date" },
  { institution: "certification3-institution", name: "certification3-name", date: "certification3-date" },
];

const ResumeCertifications = () => {
  const t = useTranslations("Resume");

  return (
    <section>
      <h2 className="section-title mb-8">{t("certifications-title")}</h2>

      <div className="space-y-5">
        {certificates.map((cert, index) => (
          <div key={index} className="flex gap-3 items-start">
            <div
              className="flex-shrink-0 w-2 h-2 rounded-none mt-2"
              style={{ background: "var(--color-accent)" }}
            />
            <div>
              <p className="text-sm font-semibold leading-snug" style={{ color: "var(--color-text)" }}>
                {t(cert.name)}
              </p>
              <div className="flex flex-wrap gap-x-2 mt-1">
                <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                  {t(cert.institution)}
                </p>
                <p className="text-xs" style={{ color: "var(--color-faint)" }}>
                  · {t(cert.date)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeCertifications;
