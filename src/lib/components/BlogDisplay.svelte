<script lang="ts">
	import { page } from '$app/stores';
	import type { Post } from '$lib';

	const props: Post = $props();
</script>

<article class="overflow-hidden rounded-md bg-warm-100 shadow-lg">
	<a href="/blog/{props.slug}">
		<img
			class="aspect-video w-auto bg-gradient-to-tr from-primary-300 to-primary-600"
			src="{$page.url.origin}/images/{props.slug}.png"
			alt={props.title}
		/>
		<div class="flex flex-col gap-2 px-5 py-6">
			<h1 class="text-2xl text-primary-800 md:text-3xl">{props.title}</h1>
			<div class="text-base text-warm-600">
				<div>{props.date} • 3 mins read</div>
			</div>
			<div class="flex items-center gap-2 text-base text-warm-700">
				<div
					class="aspect-square w-8 rounded-sm bg-gradient-to-tr from-primary-900 to-primary-600"
				></div>
				<div>By {props.author}</div>
			</div>
		</div>
	</a>
	<!-- <img src="" alt="" /> -->
</article>
