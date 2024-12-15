<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	const { href, children }: { href: string; children: Snippet } = $props();
</script>

<a
	class={`duration-175 rounded-md px-2 py-1 transition-colors ${
		$page.route.id === href
			? 'bg-primary-300 font-bold text-primary-900'
			: 'text-primary-600 hover:bg-primary-200 hover:text-primary-800'
	}`}
	{href}
>
	{@render children()}
</a>
