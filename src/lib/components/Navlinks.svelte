<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	const { href, children }: { href: string; children: Snippet } = $props();
</script>

<a
	class={`duration-175 transition-colors ${
		$page.route.id === href
			? 'font-bold text-primary-900'
			: 'text-primary-500 hover:text-primary-800'
	}`}
	{href}
>
	{@render children()}
</a>
