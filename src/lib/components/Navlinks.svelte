<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	const {
		href,
		children,
		target
	}: { href: string; children: Snippet; target?: HTMLAttributeAnchorTarget } = $props();
</script>

<a
	class={`duration-175 var-sm rounded-md px-2 py-1 transition-colors ${
		$page.route.id === href
			? 'bg-primary-100 text-primary-700'
			: 'text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600 active:bg-neutral-300 active:text-neutral-700'
	}`}
	{href}
	{target}
>
	{@render children()}
</a>
