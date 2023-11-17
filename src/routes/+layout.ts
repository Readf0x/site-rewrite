import type { Link } from "$lib/types"

export const load = async function ({ fetch }) {
  const response = await fetch("api/pages")
  const links: Link[] = await response.json()
  return { links }
}
