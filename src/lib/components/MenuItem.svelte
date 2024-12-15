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
	class={`block rounded-[4px] px-4 py-2 transition-colors duration-150 ${$page.route.id === href ? 'rounded-xl bg-primary-300' : ''}`}
	{onclick}
	in:fly={{ delay: (delayNav * 1) / 4 + delay, duration: 300, x: -200 }}
>
	<div
		class={`${$page.route.id === href ? 'fill-primary-600 font-bold text-primary-700 ' : 'text-primary-600 hover:fill-primary-600 '} flex items-center gap-3 fill-primary-500 text-[1rem] text-lg transition-colors duration-150 hover:text-primary-900`}
	>
		{@render children()}
	</div>
</a>
