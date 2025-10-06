<script lang="ts">
	import { page } from '$app/stores';

	const props: {
		name: string;
		slug: string;
		role: string;
	} = $props();
</script>

<article
	class="overflow-hidden rounded-md bg-neutral-50 text-primary-100 shadow-lg transition-all duration-200 target:bg-primary-400 hover:-translate-y-2 hover:shadow-xl"
	id={props.slug}
>
	<img
		class="aspect-square w-full bg-gradient-to-tr from-primary-300 to-primary-600"
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
