<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { nav } from '$lib/components/drawer.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
	afterNavigate(() => {
		nav.closeMenu();
	});
</script>

<Navbar />
<main class="mx-auto mt-[4rem] min-h-screen max-w-2xl px-6 py-3">
	{@render children()}
</main>
<Menu />
