// TODO: Add line numbers

import { error } from "@sveltejs/kit";
import { unified } from "unified";
import parse from "remark-parse";
import gfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import frontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import yaml from "js-yaml";
import "@catppuccin/highlightjs/sass/catppuccin-mocha.scss";

// https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/lib/markdown.js
const parser = unified().use(parse).use(gfm).use(frontmatter, ["yaml"]);

const runner = unified()
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeExternalLinks)
  .use(rehypeHighlight)
  .use(rehypeStringify);

// meta should satisfy the Post type but the yaml load method returns with type unknown so fml
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ params }): Promise<{ meta: any; content: string }> {
  let file;
  try {
    file = await import(`../../lib/pages/${params.slug}.md?raw`);
  } catch (err) {
    throw error(404, `Could not find ${params.slug}.md`);
  }
  const tree = parser.parse(file.default);
  let meta;
  if (tree.children.length > 0 && tree.children[0].type == "yaml") {
    meta = yaml.load(tree.children[0].value);
    // remove the yaml from the tree
    tree.children = tree.children.slice(1, tree.children.length);
    // ? meta.date = dayjs(meta.date).format("MMM D, YYYY")
  } else {
    throw error(511, `${params.slug}.md lacks meta config`);
  }
  const content = runner.stringify(runner.runSync(tree));
  return { meta, content };
}
