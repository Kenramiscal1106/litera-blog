<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { nav } from './drawer.svelte';
</script>

{#if nav.menuOpen}
	<div
		class="fixed left-0 top-0 z-10 h-full w-full bg-primary-700"
		transition:fly={{ duration: 175 }}
	>
		<button on:click={() => nav.closeMenu()}>Close menu</button>
	</div>
{/if}
