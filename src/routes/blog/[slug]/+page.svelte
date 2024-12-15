<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-med">
	<div class="my-4">
		<h1 class="text-warm-900">{data.meta.title}</h1>
		<div class="text-sm text-warm-600">{data.meta.date} • 3 mins read</div>
		<div class="flex gap-3">
			<div>By {data.meta.author}</div>
		</div>
		<hr />
	</div>
	<img
		src="{$page.url.origin}/images/{$page.params.slug}.png"
		alt={data.meta.title}
		class=" aspect-video h-auto w-full rounded-lg bg-gradient-to-tr from-primary-300 to-primary-600"
	/>
	<div class="m-auto max-w-med">
		{@render data.content()}
	</div>
</div>
