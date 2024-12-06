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

<a {href} class={`block rounded-md px-4 py-3 ${active ? 'bg-primary-500' : ''}`}>
	<div
		class={`${active ? 'fill-primary-900 font-bold text-warm-100' : ''} flex items-center gap-3 fill-primary-500 text-[1rem] text-lg`}
	>
		{@render children()}
	</div>
</a>
