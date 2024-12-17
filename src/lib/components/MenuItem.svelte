<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
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
	class={`block rounded-xl px-4 py-2 transition-colors duration-150 ${$page.route.id === href ? ' bg-primary-500' : ''}`}
	{onclick}
	in:fly={{ delay: (delayNav * 1) / 4 + delay, duration: 300, x: -200 }}
>
	<div
		class={`${$page.route.id === href ? 'fill-neutral-50 font-bold text-neutral-100 ' : 'fill-neutral-400 text-neutral-400 hover:fill-neutral-700 hover:text-neutral-700'} flex items-center gap-3 text-[1rem] text-lg transition-colors duration-150`}
	>
		{@render children()}
	</div>
</a>
