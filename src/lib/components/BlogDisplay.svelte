<script lang="ts">
	import type { Post } from '$lib';

	const props: Post = $props();
</script>

<article class="my-6 overflow-hidden rounded-md bg-warm-100 shadow-lg">
	<a href="/blog/{props.slug}">
		<div class="aspect-video w-auto bg-gradient-to-tr from-primary-900 to-primary-600"></div>
		<div class="flex flex-col gap-2 px-5 py-6">
			<h1 class="text-3xl text-primary-800 sm:text-4xl">{props.title}</h1>
			<div class="flex text-base text-warm-600">
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
