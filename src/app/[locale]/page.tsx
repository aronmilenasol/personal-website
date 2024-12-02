import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <section className="flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 text-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-pink-700 relative">
          {t("welcome")}
        </h1>
        <h2 className="text-4xl md:text-6xl mb-8 text-pink-600 font-semibold">
          {t("name")}
        </h2>
        <div className="bg-white bg-opacity-90 p-8 rounded-3xl shadow-lg border-2 border-pink-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-pink-400"></div>
          <p className="text-xl md:text-2xl leading-relaxed text-pink-800 relative z-10">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}

