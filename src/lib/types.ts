export type SubLink = {
  name: string
  value: string
}

export type Link = {
  name: string
  route?: string
  value: string | SubLink[]
}

export type SearchResultItem = {
  route: string
  context: string
}

export type SearchResults = {
  query: string
  results: SearchResultItem[]
}

export type Page = {
  title: string
  date?: string
}
