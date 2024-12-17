import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { Snippet } from "svelte";

export const load: PageLoad = async ({params}) => {
  try {
		const post = await import(`../../../posts/${params.slug}.md`) as {
			default:Snippet,
			metadata:{
				title: string,
				author: string,
				date:string
			}
		}

		return {
			content: post.default,
			meta: post.metadata,
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
};