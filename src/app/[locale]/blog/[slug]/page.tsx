import { getPost } from "../../../../../lib/blog";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function BlogPost({ params }: Params) {
  const { locale, slug } = await params;

  try {
    const post = await getPost(locale, slug);
    return (
      <section className="bg-light text-darker font-lato min-h-screen p-4 md:p-8 flex flex-col items-center">
        <article className="prose max-w-5xl w-full bg-lighter rounded-lg shadow p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-darker">
            {post.title}
          </h1>
          <p className="text-darker text-lg mb-6">{post.date}</p>
          <div
            className="text-lg leading-relaxed text-darker"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </section>
    );
  } catch {
    return notFound();
  }
}
