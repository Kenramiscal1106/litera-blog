import type { PageServerLoad } from './$types';
import type { Post } from "$lib";
export const load = (async () => {
    let  posts:Post[] = [];
    const paths = import.meta.glob('/src/posts/*.md', { eager: true })
    for (const key in paths) {
        
        const file = paths[key]
        const slug = key.replace(".md", "").replace("/src/posts/", "")
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			posts.push(post)
		}

    }
    return {posts};
}) satisfies PageServerLoad;