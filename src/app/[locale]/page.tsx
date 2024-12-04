import { useTranslations } from "next-intl";
import Image from "next/image";
import homeImage from "./assets/home-image.jpg";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-700 leading-tight">
              {t("welcome")}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-pink-600 font-semibold">
              {t("name")}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-pink-800 mb-8">
              {t("description")}
            </p>
            <a
              className="text-center bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-colors duration-300 w-full md:w-auto"
              href="mailto:aronmilena.it@gmail.com"
              target="_blank"
            >
              {t("button")}
            </a>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src={homeImage}
              alt="A girl sitting with her laptop, wearing pink trousers and holding a coffee on her right hand."
              layout="fill"
              objectFit="cover"
              className="rounded-b-3xl md:rounded-l-none md:rounded-r-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
