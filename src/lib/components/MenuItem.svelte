<script lang="ts">
	import type { Snippet, SvelteComponent } from 'svelte';

	const {
		href,
		// type,
		active,
		children
	}: {
		href: string;
		// type: 'nav' | 'menu';
		active: boolean;
		children: Snippet;
	} = $props();
</script>

<a {href} class={`block px-4 py-3 ${active ? 'bg-primary-500' : ''}`}>
	<div class={`${active ? 'text-warm-100 font-bold' : ''} flex gap-3 text-xl`}>
		{@render children()}
	</div>
</a>
