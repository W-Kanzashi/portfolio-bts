import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

interface DocsData {
  slug: any;
  fields: any[];
}

interface MatterData {
  data: {
    [key: string]: any;
  };
  content: string;
}

interface Items {
  [key: string]: string;
}

interface Date {
  date?: any;
}

// Get the markdown directory
const docsDirectory = join(process.cwd(), "_posts");

export function getDocsSlugs() {
  return fs.readdirSync(docsDirectory);
}

export function getDocsBySlug(slug: string, fields: string[] = []): any {
  const realSlug: any = slug.replace(/\.md$/, ""); // Remove the md in the search bar
  const fullPath: string = join(docsDirectory, `${realSlug}.md`); // Get the file path
  const fileContents: string = fs.readFileSync(fullPath, "utf8");
  const { data, content }: MatterData = matter(fileContents);

  const items: Items = {
    author: "",
    coverImage: "",
    date: "",
    excerpt: "",
    slug: "",
    title: "",
    content: "",
  };

  // // Ensure only the minimal needed data is exposed
  fields.forEach(function (field: any) {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): any[] {
  const slugs = getDocsSlugs();
  const posts = slugs
    .map((slug) => getDocsBySlug(slug, fields))
    // Sort posts by date in descending order
    .sort((post1, post2) =>
      post1.date > post2.date ? 1 : post1.date > post2.date ? -1 : 0
    );

  return posts;
}
