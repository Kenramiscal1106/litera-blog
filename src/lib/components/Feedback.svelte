<script lang="ts">
	import type { Feedback } from '$lib/db';

	const props: Feedback = $props();
</script>

<div class="rounded-lg p-3 shadow-md">
	<div>{props.firstName} {props.lastName}</div>
	<div class="text-sm text-neutral-700">{props.message}</div>
</div>
