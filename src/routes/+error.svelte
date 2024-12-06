<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>404 | Critera</title>
</svelte:head>

<div
	class="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center p-6 text-center"
>
	<div>
		<h1 class="text-6xl">:(</h1>
		{#if $page.status === 404}
			<p class="text-lg">It appears we do not know what you're looking for</p>
			<p class="text-lg">Perhaps it is still a Work in Progress</p>
		{/if}
	</div>
</div>
