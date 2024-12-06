<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet, SvelteComponent } from 'svelte';
	const {
		href,
		// type,
		children
	}: {
		href: string;
		// type: 'nav' | 'menu';
		children: Snippet;
	} = $props();
</script>

<a {href} class={`block rounded-md px-4 py-3 ${$page.route.id === href ? 'bg-primary-500' : ''}`}>
	<div
		class={`${$page.route.id === href ? 'fill-primary-900 font-bold text-warm-100' : ''} flex items-center gap-3 fill-primary-500 text-[1rem] text-lg`}
	>
		{@render children()}
	</div>
</a>
