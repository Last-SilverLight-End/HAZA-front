import { posts } from "../data.js"
import { error } from "@sveltejs/kit"

export function load(param:{params: {slug: string}}) {
  const post = posts.find((post) => post.slug === param.params.slug)

  if (post == null) {
    throw error(404)
  }

  return {
    post,
  }
}