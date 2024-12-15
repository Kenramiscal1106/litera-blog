<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { nav, modal } from '$lib/components/store.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import FeedbackModal from '$lib/components/FeedbackModal.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	let { children } = $props();
	let loading = $state();
	afterNavigate(() => {
		nav.closeMenu();
		loading = false;
	});
	beforeNavigate(() => {
		loading = true;
	});
	$effect(() => {
		if (nav.menuOpen || modal.open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	});
</script>

{#if loading}
	<Loader />
{/if}
<Navbar />
<main class="mx-auto mt-[4.75rem] px-6 py-3">
	{#key $page.route.id}
		<div in:fly={{ duration: 400, y: 50, easing: quintInOut }}>
			{@render children()}
		</div>
	{/key}
</main>
<Menu />
<FeedbackModal />
