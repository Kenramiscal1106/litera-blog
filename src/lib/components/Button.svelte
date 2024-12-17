<script lang="ts">
	import type { EventHandler } from 'svelte/elements';

	const {
		variant,
		children,
		class: className,
		type,
		onclick
	}: {
		class?: string;
		variant: 'outline' | 'fill' | 'text';
		children?: any;
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		onclick?: EventHandler;
	} = $props();
	const variantClasses = {
		outline: 'border-neutral-200 text-primary-800',
		fill: 'bg-primary-500 text-neutral-100',
		text: 'text-primary-800'
	};
</script>

<button
	class={`rounded-[.25rem] px-4 py-2 text-base sm:py-2 ${variantClasses[variant]} ${className}`}
	{onclick}
	{type}
>
	{@render children?.()}
</button>
