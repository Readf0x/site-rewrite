// TODO: Add line numbers
// TODO: Create meta type

import { error } from "@sveltejs/kit"
import { unified } from "unified"
import parse from "remark-parse"
import gfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import frontmatter from "remark-frontmatter"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeExternalLinks from "rehype-external-links"
import yaml from "js-yaml"
import "@catppuccin/highlightjs/sass/catppuccin-mocha.scss"
import type { Page } from "$lib/types.js"

// https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/lib/markdown.js

const parser = unified().use(parse).use(gfm).use(frontmatter, ["yaml"])

const runner = unified()
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeSlug)
  .use(rehypeExternalLinks, { target: "_blank" })
  .use(rehypeHighlight)
  .use(rehypeStringify, { allowDangerousHtml: true })

// meta should satisfy the Post type but the yaml load method returns with type unknown so fml
export async function load({ params }): Promise<{ meta: Page; content: string }> {
  let file
  try {
    file = await import(`../../lib/pages/${params.slug}.md?raw`)
  } catch (err) {
    throw error(404, `Could not find ${params.slug}.md`)
  }
  let tree
  try {
    tree = parser.parse(file.default)
  } catch (err) {
    throw error(500, `Error parsing ${params.slug}.md`)
  }
  // console.log("[" + JSON.stringify(tree) + "," + JSON.stringify(runner.runSync(tree)) + "]")
  let meta: Page
  if (tree.children.length > 0 && tree.children[0].type == "yaml") {
    meta = yaml.load(tree.children[0].value) as Page
    // remove the yaml from the tree
    tree.children = tree.children.slice(1, tree.children.length)
    // ? meta.date = dayjs(meta.date).format("MMM D, YYYY")
  } else {
    throw error(531, `${params.slug}.md lacks meta config`)
  }
  // pre-rehype tree walking
  for (let i = 0; i < tree.children.length; i++) {
    const node = tree.children[i]
    // check if current iteration is a code block
    if (node.type == "code" && typeof node?.meta == "string") {
      const title = node.meta
      delete node.meta
      // add code title
      tree.children.splice(i, 0, {
        type: "heading",
        depth: 6,
        children: [
          {
            type: "text",
            value: title,
          },
        ],
      })
    }
  }
  let content
  tree = runner.runSync(tree)
  // post-transformer tree walking
  for (let i = 0; i < tree.children.length; i++) {
    const node = tree.children[i]
    // make sure current iteration is a code block
    if (
      node.type == "element" &&
      node.tagName == "pre" &&
      node.children[0].type == "element" &&
      node.children[0].tagName == "code"
    ) {
      // add code title class
      if (i > 1) {
        const prevEl = tree.children[i - 2]
        if (prevEl.type == "element" && prevEl.tagName == "h6") {
          prevEl.properties = {
            className: ["code-title"],
          }
        }
      }
      // ~ add line numbersf
      // const code = el.children[0]
      // if (code.type == "element") {
      //   for (let ii = 0; ii < code.children.length; ii++) {
      //     const token = code.children[ii];
      //     if(token.type == "text" && token.value.match(/\n/)) {
      //       // TODO: Add line number code
      //     }
      //   }
      // }
    }
  }
  try {
    content = runner.stringify(tree)
  } catch (err) {
    throw error(500, `Error rendering ${params.slug}.md`)
  }
  return { meta, content }
}
