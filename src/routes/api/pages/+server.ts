import { error, json } from "@sveltejs/kit"
import { remark } from "remark"
import strip from "strip-markdown"
import gfm from "remark-gfm"
import frontmatter from "remark-frontmatter"
import yaml from "js-yaml"
import GithubSlugger from "github-slugger"
import type { Link, SubLink, Page } from "$lib/types"

const pages = import.meta.glob("$lib/pages/*.md", { as: "raw", eager: true })

const getLinks = async function (): Promise<Link[]> {
  let results: Link[] = new Array()
  for (const page in pages) {
    const route: string = "/" + page.match(/\w+(?=\.md)/)?.[0] || "/"

    const process = remark().use(gfm).use(frontmatter, ["yaml"]).use(strip)

    const tree = process.parse(pages[page])

    let meta: Page
    if (tree.children.length > 0 && tree.children[0].type == "yaml") {
      meta = yaml.load(tree.children[0].value) as Page
      // remove the yaml from the tree
      tree.children = tree.children.slice(1, tree.children.length)
    } else {
      throw error(531, `${page} lacks meta config`)
    }

    let subpages: SubLink[] = new Array()

    // Walk through tree to find headers, which will be linked as subpages
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i]
      if (node.type == "heading" && node.depth == 1 && node.children[0].type == "text") {
        const name: string = node.children[0].value
        subpages.push({
          name,
          value: route + "#" + new GithubSlugger().slug(name),
        })
      }
    }

    let result: Link = {
      name: meta.title,
      value: route,
    }
    if (subpages.length) {
      result.value = subpages
      result.route = route
    }

    results.push(result)
  }
  return results
}

export const GET = async () => {
  return json(await getLinks())
}
