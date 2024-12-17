<script lang="ts">
	import BlogDisplay from '$lib/components/BlogDisplay.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog | Critera</title>
</svelte:head>
<div class="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
	{#each data.posts as post}
		<BlogDisplay {...post} />
	{/each}
</div>
