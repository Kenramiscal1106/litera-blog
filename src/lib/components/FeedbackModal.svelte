<script lang="ts">
	import { scale } from 'svelte/transition';
	import { modal } from './store.svelte';
</script>

{#if modal.open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-warm-900 bg-opacity-25 px-4"
		onclick={() => modal.closeModal()}
	>
		<div
			class=" w-full max-w-sm rounded-[.5rem] bg-warm-100 p-5"
			transition:scale={{ duration: 175, start: 0.5 }}
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="text-2xl font-bold text-warm-800"
				onclick={(e) => {
					e.stopPropagation();
				}}
			>
				Help us improve!
			</div>
			<p class="text-warm-600">How would you rate your website experience?</p>
		</div>
	</div>
{/if}
