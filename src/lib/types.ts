export type Post = {
  title: string
  slug: string
  type: "page" | "post"
  date: string
  allowed: boolean
}
