import { json } from "@sveltejs/kit"

type SearchResults = {
  query: string
  results: Array<{
    page: string
    specifics: string
  }>
}

export const GET = ({ url }) => {
  return json({q: url.searchParams.get("q")})
}
