// TODO: Add shiki support

import { error } from "@sveltejs/kit"
import { unified } from 'unified'
import parse from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import frontmatter from 'remark-frontmatter'
import yaml from 'js-yaml'

// https://github.com/svelteland/svelte-kit-blog-demo/blob/main/src/lib/markdown.js
let parser = unified()
    .use(parse)
    .use(gfm)
    .use(frontmatter, ['yaml'])

let runner = unified()
    .use(remark2rehype)
    .use(rehypeStringify)

// meta should satisfy the Post type but the yaml load method returns with type unknown so fml
export async function load({ params }): Promise<{ meta: any, content: string }> {
  try {
    const file = await import(`../../lib/pages/${params.slug}.md?raw`)
    let tree = parser.parse(file.default)
    // init meta as null so the if statement works
    let meta = null
    if (tree.children.length > 0 && tree.children[0].type == "yaml") {
      meta = yaml.load(tree.children[0].value)
      // remove the yaml from the tree
      tree.children = tree.children.slice(1, tree.children.length)
      // ? meta.date = dayjs(meta.date).format("MMM D, YYYY")
    }
    let content = runner.stringify(runner.runSync(tree))
    if (!meta) {
      throw error(404, `Could not find ${params.slug}`)
    }
    return { meta, content }
  } catch (err) {
    throw error(500, `Unknown error trying to access ${params.slug}`)
  }
}
