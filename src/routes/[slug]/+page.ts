// TODO: Add shiki support

import { error } from "@sveltejs/kit"
import { unified } from 'unified'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import shiki from "shiki"
import rehypeShiki from "@leafac/rehype-shiki"
import rehypeStringify from 'rehype-stringify'
import frontmatter from 'remark-frontmatter'
import yaml from 'js-yaml'
import mocha from "./mocha.json?raw"

// https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/lib/markdown.js
const parser = unified()
    .use(parse)
    .use(gfm)
    .use(frontmatter, ['yaml'])

const runner = unified()
    .use(remarkRehype)
    .use<[{ highlighter: import("shiki").Highlighter }], string, void>(rehypeShiki, {
      highlighter: await shiki.getHighlighter({ theme: JSON.parse(mocha) })
    })
    .use(rehypeStringify)

// meta should satisfy the Post type but the yaml load method returns with type unknown so fml
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ params }): Promise<{ meta: any, content: string }> {
  try {
    const file = await import(`../../lib/pages/${params.slug}.md?raw`)
    const tree = parser.parse(file.default)
    // init meta as null so the if statement works
    let meta = null
    if (tree.children.length > 0 && tree.children[0].type == "yaml") {
      meta = yaml.load(tree.children[0].value)
      // remove the yaml from the tree
      tree.children = tree.children.slice(1, tree.children.length)
      // ? meta.date = dayjs(meta.date).format("MMM D, YYYY")
    }
    const content = runner.stringify(runner.runSync(tree))
    if (!meta) {
      throw error(404, `Could not find ${params.slug}`)
    }
    return { meta, content }
  } catch (err) {
    throw error(500, `Unknown error trying to access ${params.slug}: ${err}`)
  }
}
