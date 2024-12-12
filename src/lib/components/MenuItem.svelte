<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet, SvelteComponent } from 'svelte';
	import { fly } from 'svelte/transition';
	const delayNav = 225;
	const {
		href,
		type = 'link',
		delay = 0,
		onclick,
		children
	}: {
		href?: string;
		type?: 'link' | 'button';
		delay?: number;
		onclick?: () => void;
		children: Snippet;
	} = $props();
</script>

<a
	href={type === 'link' ? href : $page.route.id}
	class={`block rounded-[4px] border-x-4 border-transparent px-3 py-3 transition-colors duration-150 ${$page.route.id === href ? 'border-l-primary-900 bg-primary-400' : ''}`}
	{onclick}
	in:fly={{ delay: (delayNav * 1) / 4 + delay, duration: 225, x: -200 }}
>
	<div
		class={`${$page.route.id === href ? 'fill-primary-900 font-bold text-warm-100' : ''} flex items-center gap-3 fill-primary-500 text-[1rem] text-lg`}
	>
		{@render children()}
	</div>
</a>
