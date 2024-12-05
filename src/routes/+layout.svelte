<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Navbar />
<main class="mx-auto mt-[4rem] max-w-2xl px-6">
	{@render children()}
</main>
<Menu />
