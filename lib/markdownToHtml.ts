import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  // const result = await remark()
  //   .use(remarkHtml, { sanitize: true })
  //   .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
  //   .process(markdown);

  const result = unified()
    .use(remarkParse) // Parse markdown.
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkRehype) // Turn it into HTML.
    .use(rehypeStringify) // Serialize HTML.
    .processSync(markdown);
  return result.toString();
}
