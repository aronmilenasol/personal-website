import { useTranslations } from "next-intl";
import Image from "next/image";
import homeImage from "@/app/[locale]/assets/home-image.webp";

const Hero = () => {
  const t = useTranslations("Homepage");

  return (
    <section className="min-h-screen bg-light text-dark flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-heading leading-tight">
              {t("welcome")}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-semibold">
              {t("name")}
            </h2>
            <a
              className="text-center bg-base hover:bg-dark text-white font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300 w-full md:w-auto"
              href="mailto:aronmilena.it@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("button")}
            </a>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src={homeImage}
              alt="A laptop on a table in a cozy environment."
              className="w-full h-full object-cover rounded-b-3xl md:rounded-l-none md:rounded-r-3xl"
              priority={true}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
