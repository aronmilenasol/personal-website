import { useTranslations } from "next-intl";

const titleClasses =
  "font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-darker flex items-center";
const nameClasses = "text-lg sm:text-xl text-darker mb-2";
const institutionClasses = "font-bold text-2xl sm:text-2xl text-darker mt-4";

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
    <div>
      <h2 className={titleClasses}>{t("certifications-title")}</h2>
      {certificates.map((certificate, index) => (
        <div key={index}>
          <p className={institutionClasses}>{t(certificate.institution)}</p>
          <p className={`${nameClasses} flex items-center`}>
            {t(certificate.name)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResumeCertifications;
