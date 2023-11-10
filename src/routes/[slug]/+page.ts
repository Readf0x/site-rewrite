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

export const load = async({ params }) => {
  try {
    const file = await import(`../../lib/pages/${params.slug}.md?raw`)
    console.log(file)
    let tree = parser.parse(file.default)
    console.log(tree)
    let metadata = null
    if (tree.children.length > 0 && tree.children[0].type == "yaml") {
      metadata = yaml.load(tree.children[0].value)
      console.log(metadata)
      tree.children = tree.children.slice(1, tree.children.length)
      //? metadata.date = dayjs(metadata.date).format("MMM D, YYYY")
    }
    let content = runner.stringify(runner.runSync(tree))
    console.log(content)
    if (!metadata) {
      throw error(404, `Could not find ${params.slug}`)
    }
    return { metadata, content }
  } catch (err) {
    throw error(500, `Unknown error trying to access ${params.slug}`)
  }
}
