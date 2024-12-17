<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { modal } from './store.svelte';
	import Button from './Button.svelte';
	import { enhance } from '$app/forms';
	const { action }: { action: string } = $props();
	let submitting = $state(false);
	let formState: 'unsubmitted' | 'error' | 'success' = $state('unsubmitted');
</script>

{#if modal.open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed left-0 top-0 z-50 flex h-[100vh] w-screen items-center justify-center bg-neutral-900 bg-opacity-25 px-4"
		onclick={() => modal.closeModal()}
		transition:fade={{ duration: 175 }}
	>
		<div
			class=" w-full max-w-md rounded-[.5rem] bg-neutral-50 p-5"
			in:scale={{ duration: 175, start: 0.5 }}
			onclick={(e) => {
				e.stopPropagation();
			}}
		>
			{#key formState}
				<form
					class="flex flex-col gap-4"
					method="POST"
					{action}
					in:scale={{ duration: 200, start: 0.5 }}
					use:enhance={() => {
						submitting = true;
						return async ({ result }) => {
							submitting = false;
							console.log(result);
							if (result.type === 'success') {
								formState = 'success';
							}
						};
					}}
				>
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->

					{#if formState === 'unsubmitted'}
						<div class="flex flex-col gap-2">
							<div class="text-2xl font-bold text-neutral-800">Help us improve!</div>
							<div class="text-neutral-600">How would you rate your website experience?</div>
						</div>
						<div class="flex h-12 justify-around gap-6">
							<div
								class="rounded-md border-2 border-neutral-300 p-1 transition-colors duration-200 has-[:checked]:border-neutral-400"
							>
								<input type="radio" name="satisfaction" id="level-1" value="1" hidden />
								<label for="level-1" class="">
									<svg viewBox="0 0 33 33" class="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
										<circle cx="16.5" cy="16.5" r="15.5" stroke-width="2" fill="none" />
										<ellipse cx="21.6054" cy="14.1581" rx="1.52939" ry="1.52939" stroke="none" />
										<ellipse cx="11.395" cy="14.1581" rx="1.52939" ry="1.52939" stroke="none" />
										<path
											d="M19.5839 10.9103L23.1244 8.70264"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
										/>
										<path
											d="M13.4161 10.9103L9.87557 8.70264"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
										/>
										<path
											d="M24.4435 23.2106C22.9929 21.1321 19.9807 19.7036 16.5 19.7036C13.0193 19.7036 10.0072 21.1321 8.55658 23.2106"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
										/>
									</svg>
								</label>
							</div>
							<div
								class="rounded-md border-2 border-neutral-300 p-1 transition-colors duration-200 has-[:checked]:border-neutral-400"
							>
								<input type="radio" name="satisfaction" id="level-2" value="2" hidden />
								<label for="level-2" class="">
									<svg viewBox="0 0 33 33" class="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
										<circle cx="16.5" cy="16.5" r="15.5" stroke-width="2" fill="none" />
										<path
											d="M9.9375 23.5513C10.7089 20.7731 13.3547 18.726 16.5 18.726C19.6454 18.726 22.2912 20.7731 23.0626 23.5513"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
										/>
										<circle cx="21.7437" cy="12.3667" r="2.03919" />
										<circle cx="11.2564" cy="12.3667" r="2.03919" />
									</svg>
								</label>
							</div>
							<div
								class="rounded-md border-2 border-neutral-300 p-1 transition-colors duration-200 has-[:checked]:border-neutral-400"
							>
								<input type="radio" name="satisfaction" id="level-3" value="3" hidden />
								<label for="level-3" class="">
									<svg class="h-full w-auto" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
										<circle cx="16.5" cy="16.5" r="15.5" stroke-width="2" fill="none" />
										<path
											d="M9.93756 20.4288C10.7089 23.207 13.3548 25.2542 16.5001 25.2542C19.6454 25.2542 22.2913 23.207 23.0626 20.4288"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
										/>
										<circle cx="21.7437" cy="12.3667" r="2.03919" />
										<circle cx="11.2564" cy="12.3667" r="2.03919" />
									</svg>
								</label>
							</div>
							<div
								class="rounded-md border-2 border-neutral-300 p-1 transition-colors duration-200 has-[:checked]:border-neutral-400"
							>
								<input type="radio" name="satisfaction" id="level-4" value="4" hidden />
								<label for="level-4" class="">
									<svg class="h-full w-auto" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
										<circle cx="16.5" cy="16.5" r="15.5" stroke-width="2" fill="none" />
										<path
											d="M9.93744 20.4288C10.7088 23.207 13.3546 25.2542 16.5 25.2542C19.6453 25.2542 22.2911 23.207 23.0625 20.4288"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
										/>
										<path
											d="M20.0574 13.9109L22.0295 11.9011L24.0015 13.9109"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
											stroke-linejoin="round"
										/>
										<path
											d="M8.99854 13.9109L10.9706 11.9011L12.9426 13.9109"
											stroke-width="2"
											stroke-linecap="round"
											fill="none"
											stroke-linejoin="round"
										/>
									</svg>
								</label>
							</div>
						</div>
						<div class="flex flex-col gap-3">
							<div>
								<input
									type="text"
									required
									name="firstName"
									id="first-name"
									placeholder="First Name"
									class="px-4 py-2"
								/>
							</div>
							<div>
								<input
									type="text"
									required
									name="lastName"
									id="last-name"
									placeholder="Last Name"
									class="px-4 py-2"
								/>
							</div>
							<div>
								<textarea
									name="message"
									id="message"
									placeholder="Thoughts that you would like to share"
									rows="4"
								></textarea>
							</div>
						</div>
						<div class="flex flex-col gap-2 sm:flex-row">
							<Button variant="fill" class="block w-full" disabled={submitting}>Submit</Button>
							<Button
								variant="outline"
								class="block w-full"
								type="button"
								onclick={() => modal.closeModal()}>Cancel</Button
							>
						</div>
					{:else if formState === 'success'}
						<div class="flex justify-center">
							<svg
								width="136"
								height="136"
								viewBox="0 0 136 136"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M12.75 68C12.75 37.4863 37.4863 12.75 68 12.75C98.5137 12.75 123.25 37.4863 123.25 68C123.25 98.5137 98.5137 123.25 68 123.25C37.4863 123.25 12.75 98.5137 12.75 68ZM88.4584 57.7203C89.8227 55.8103 89.3803 53.1559 87.4703 51.7916C85.5603 50.4273 82.9059 50.8697 81.5416 52.7797L63.2077 78.4473L54.0052 69.2448C52.3455 67.5851 49.6545 67.5851 47.9948 69.2448C46.3351 70.9045 46.3351 73.5955 47.9948 75.2552L60.7448 88.0052C61.6282 88.8886 62.8555 89.3386 64.1005 89.2355C65.3456 89.1325 66.4822 88.4869 67.2084 87.4703L88.4584 57.7203Z"
									class="fill-green-700"
								/>
							</svg>
						</div>
						<div class="gap-3 text-center">
							<h2>Your response has been recorded</h2>
							<div>
								<a class="underline" href="/feedback-and-suggestions"
									>See what others say about our website</a
								>
							</div>
							<Button variant="fill" class="w-full" onclick={() => modal.closeModal()}
								>Go back to current page</Button
							>
						</div>
					{/if}
				</form>{/key}
		</div>
	</div>
{/if}

<style>
	input[type='text'],
	textarea {
		@apply block w-full rounded-md border-2 border-neutral-200 bg-transparent px-4 py-2 outline-none transition-colors duration-150 hover:border-neutral-300 focus:border-neutral-400;
	}
	input[type='radio'] + label {
		@apply fill-neutral-500 stroke-neutral-500 transition-colors duration-150 hover:fill-neutral-700 hover:stroke-neutral-700;
	}
	input[hidden] {
		dispay: none;
	}
	input[type='radio']:checked + label {
		@apply fill-primary-700 stroke-primary-700;
	}
</style>
