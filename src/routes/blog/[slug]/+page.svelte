<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { nav } from '$lib/components/store.svelte';
	import { formatDate } from '$lib';

	let { data }: { data: PageData } = $props();
	onMount(() => {
		nav.enableScrollIndicator();
		return () => nav.disableScrollIndicator();
	});
</script>

<svelte:head>
	<title>{data.meta.title} by {data.meta.author} | Critera</title>
</svelte:head>

<div class="mx-auto max-w-med">
	<div class="my-4 flex flex-col gap-2">
		<h1 class="var-lg text-neutral-900">{data.meta.title}</h1>
		<div class="text-sm text-neutral-600">{formatDate(data.meta.date)} • 3 mins read</div>
		<div class="flex items-center gap-3">
			<img
				src="{$page.url.origin}/images/authors/{data.meta.author
					.toLowerCase()
					.split(' ')
					.join('-')}.png"
				class="h-auto w-8 rounded-sm"
				alt={data.meta.author}
			/>
			<div>
				By <a href="/contributors/{data.meta.author.toLowerCase().split(' ').join('-')}"
					>{data.meta.author}</a
				>
			</div>
		</div>
	</div>
	<img
		src="{$page.url.origin}/images/{$page.params.slug}.png"
		alt={data.meta.title}
		class=" aspect-video h-auto w-full rounded-lg bg-gradient-to-tr from-primary-300 to-primary-600"
	/>
	<div class="content m-auto max-w-med">
		{@render data.content()}
	</div>
</div>
