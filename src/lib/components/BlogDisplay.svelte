<script lang="ts">
	import { page } from '$app/stores';
	import { formatDate, type Post } from '$lib';

	const props: Post = $props();
</script>

<a
	href="/blog/{props.slug}"
	class="overflow-hidden rounded-md bg-neutral-100 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
>
	<img
		class="aspect-video w-auto bg-gradient-to-tr from-primary-300 to-primary-600"
		src="{$page.url.origin}/images/{props.slug}.png"
		alt={props.title}
	/>
	<div class="flex flex-col gap-2 px-5 py-6">
		<h1 class="var-xs text-2xl text-primary-700 md:text-3xl">{props.title}</h1>
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
			<div>By {props.author}</div>
		</div>
	</div>
</a>
