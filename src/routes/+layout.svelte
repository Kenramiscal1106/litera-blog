<script lang="ts">
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { nav, modal } from '$lib/components/store.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	import FeedbackModal from '$lib/components/FeedbackModal.svelte';
	import Loader from '$lib/components/Loader.svelte';
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
		if (nav.menuOpen) {
			console.log(window.scrollY);
		}
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
<main class="mx-auto mt-[4rem] max-w-2xl px-6 py-3">
	{@render children()}
</main>
<Menu />
<FeedbackModal />
