import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <section className="font-lato flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-r from-orange-50 to-pink-100 text-pink-800 font-bold text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-pink-800">
        {t("welcome")}
      </h1>
      <h2 className="text-4xl md:text-6xl mb-6 text-pink-700 font-semibold pb-2">
        {t("name")}
      </h2>
      <p className="text-xl md:text-2xl max-w-3xl bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg border-4 border-pink-400 leading-relaxed text-pink-800 relative transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <span className="absolute top-0 left-0 -mt-4 -ml-4 text-pink-500 text-4xl">
          🌸
        </span>
        <span className="absolute bottom-0 right-0 -mb-4 -mr-4 text-pink-500 text-4xl">
          🌸
        </span>
        {t("description")}
      </p>
    </section>
  );
}