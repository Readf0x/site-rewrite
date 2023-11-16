import { json } from "@sveltejs/kit"
import { remark } from "remark"
import strip from "strip-markdown"
import gfm from "remark-gfm"

export type SearchResultItem = {
  route: string
  context: string
}

export type SearchResults = {
  query: string
  results: SearchResultItem[]
}

const pages = import.meta.glob("$lib/pages/*.md", { as: "raw", eager: true })

const search = async function(query: string): Promise<SearchResultItem[]> {
  let results: SearchResultItem[] = new Array
  for (const page in pages) {
    const route: string = page.match(/\w+(?=\.md)/)?.[0] || ""

    const plain = await remark()
      .use(gfm)
      .use(strip)
      .process(pages[page])

    const result = { route, context: "Not Implemented" } satisfies SearchResultItem

    results.push(result)
  }
  return results
}

export const GET = async ({ url }) => {
  const query = url.searchParams.get("q") || "No Search"
  return json({ query, results: await search(query) } satisfies SearchResults)
}
