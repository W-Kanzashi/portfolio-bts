import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkHtml, { sanitize: true })
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .process(markdown);
  return result.toString();
}
