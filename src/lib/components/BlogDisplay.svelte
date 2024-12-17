<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate, type Post } from '$lib';

	const props: Post = $props();
</script>

<article class="relative overflow-hidden rounded-md bg-neutral-100 shadow-lg">
	<div class="aspect-video w-full bg-gradient-to-tr from-primary-300 to-primary-600"></div>
	<img
		class="absolute left-0 top-0 aspect-video w-full"
		src="{$page.url.origin}/images/{props.slug}.png"
		alt={props.title}
	/>
	<div class="flex flex-col gap-2 px-5 py-6">
		<h1
			class="var-xs text-2xl text-primary-600 transition-colors duration-150 hover:text-primary-800 md:text-3xl"
		>
			<a href="/blog/{props.slug}">{props.title}</a>
		</h1>
		<div class="text-base text-neutral-600">
			<div>{formatDate(props.date)} • 3 mins read</div>
		</div>
		<div class="flex items-center gap-2 text-base text-neutral-700">
			<img
				src="{$page.url.origin}/images/authors/{props.author
					.toLowerCase()
					.split(' ')
					.join('-')}.png"
				class="aspect-square w-8 rounded-sm bg-gradient-to-tr from-primary-900 to-primary-600"
				alt={props.author}
			/>
			<div>
				By <a href="/contributors#{props.author.toLowerCase().split(' ').join('-')}"
					>{props.author}</a
				>
			</div>
		</div>
	</div>
</article>
