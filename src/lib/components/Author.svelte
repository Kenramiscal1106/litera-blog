<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	const props: {
		name: string;
		slug: string;
		role: string;
	} = $props();
</script>

<article
	class="overflow-hidden rounded-md bg-neutral-50 shadow-lg transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
>
	<img
		class="bg-gradient-to-tr from-primary-300 to-primary-600"
		src="{$page.url.origin}/images/authors/{props.slug}.png"
		alt={props.name}
	/>
	<div class="flex flex-col gap-2 px-5 py-6">
		<h2 class="var-xs text-xl font-bold text-primary-900 md:text-2xl">{props.name}</h2>
		<div class="text-base text-neutral-600">
			{props.role}
		</div>
	</div>
</article>
