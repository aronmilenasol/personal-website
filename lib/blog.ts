import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "blog");
console.log("Current working directory:", process.cwd());
console.log("Posts directory:", postsDirectory);

export async function getPost(lang: string, slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, lang, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: data.title,
    date: data.date,
    description: data.description,
  };
}

export function getAllPostsMeta(lang: string) {
  const dir = path.join(postsDirectory, lang);
  const fileNames = fs.readdirSync(dir);

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
