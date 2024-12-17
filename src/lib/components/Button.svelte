<script lang="ts">
	const {
		variant,
		children,
		class: className
	}: { class?: string; variant: 'outline' | 'fill' | 'text'; children?: any } = $props();
	const variantClasses = {
		outline: 'border-neutral-200 text-primary-800',
		fill: 'bg-primary-500 text-neutral-100',
		text: 'text-primary-800'
	};
</script>

<button
	class={`rounded-[.25rem] px-4 py-2 text-base sm:py-2 ${variantClasses[variant]} ${className}`}
>
	{@render children?.()}
</button>
