import Link from "next/link";
import { getAllPostsMeta } from "../../../../lib/blog";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Blog({ params }: Props) {
  const posts = await getAllPostsMeta(params.locale);
  const t = await getTranslations("Blog");

  return (
    <section className="bg-light text-dark font-lato min-h-screen p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-darker leading-tight text-center max-w-3xl">
        {t("title")}
      </h1>
      <h2 className="text-xl md:text-2xl mb-12 text-darker leading-tight text-center max-w-3xl">
        {t("description")}
      </h2>
      <div className="space-y-8 max-w-3xl w-full">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${params.locale}/blog/${post.slug}`}
            className="block"
          >
            <div className="bg-lighter p-6 rounded-2xl mb-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2 text-darker">
                {post.title}
              </h2>
              <p className="text-dark text-sm mb-3">{post.date}</p>
              <p className="text-dark text-lg leading-relaxed">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
