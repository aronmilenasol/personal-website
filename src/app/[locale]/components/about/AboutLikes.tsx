import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

const likes = [
  "about-likes-1",
  "about-likes-2",
  "about-likes-3",
  "about-likes-4",
];

const AboutLikes = () => {
  const t = useTranslations("About");
  return (
    <div className="mt-6 md:mt-8 max-w-5xl w-full bg-white text-dark rounded-3xl shadow-2xl overflow-hidden">
      <div className="p-8 md:p-12">
        <h3 className="text-darker text-4xl md:text-5xl font-bold mb-6 leading-tight text-center">
          {t("about-likes-title")}
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {likes.map((like) => (
            <li key={like} className="flex items-center space-x-4">
              <Heart className="flex-shrink-0  w-8 h-8" />
              <span className="text-lg sm:text-xl leading-relaxed">
                {t(like)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutLikes;
