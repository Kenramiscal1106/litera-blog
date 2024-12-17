<script lang="ts">
	import Feedback from '$lib/components/Feedback.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	console.log(data);
</script>

<div class="m-auto max-w-med">
	<h1>Feedbacks and suggestions</h1>
	<Feedback />
</div>
