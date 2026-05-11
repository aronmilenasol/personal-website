import { useTranslations } from "next-intl";

interface Certificate {
  institution: string;
  name: string;
}

const certificates: Certificate[] = [
  {
    institution: "certification1-institution",
    name: "certification1-name",
  },
  {
    institution: "certification2-institution",
    name: "certification2-name",
  },
  {
    institution: "certification3-institution",
    name: "certification3-name",
  },
];

const ResumeCertifications = () => {
  const t = useTranslations("Resume");

  return (
    <section className="mt-10">
      <h2 className="text-xl font-medium mb-8 tracking-tight">
        {t("certifications-title")}
      </h2>

      {certificates.map((certificate, index) => (
        <div key={index} className="mb-8">
          <p className="font-medium">{t(certificate.name)}</p>

          <p className="text-sm opacity-70 mt-1">
            {t(certificate.institution)}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ResumeCertifications;
