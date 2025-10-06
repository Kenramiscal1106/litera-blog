<script lang="ts">
	import Hamburger from '$lib/icons/hamburger.svelte';
	import { onMount } from 'svelte';
	import Navlinks from './Navlinks.svelte';
	import { modal, nav } from './store.svelte';
	let progPercent = $state(0);
	function scrollFunction() {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		progPercent = winScroll / height;
	}
	onMount(() => {
		window.addEventListener('scroll', scrollFunction);
		return () => {
			window.removeEventListener('scroll', scrollFunction);
		};
	});
	import logo from '$lib/assets/logo.png';
</script>

<nav class="fixed left-0 top-0 z-30 w-full bg-neutral-50 px-5 py-4 shadow-md sm:px-5 sm:py-4">
	<div class="left-0h-full absolute top-0"></div>
	<div class="m-auto flex max-w-3xl items-center justify-between">
		<div>
			<div aria-label="home button">
				<img src={logo} alt="logo" class="h-9 w-auto" />
			</div>
		</div>
		<!-- Menu buttons -->
		<div class="flex gap-4">
			<div class="hidden gap-4 text-lg sm:flex">
				<Navlinks href="/blog">Blog</Navlinks>
				<Navlinks href="/contributors">Contributors</Navlinks>
				<button
					class="duration-175 var-sm rounded-md px-2 py-1 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-600 active:bg-neutral-300 active:text-neutral-700"
					onclick={() => {
						modal.openModal();
					}}>Give Feedback</button
				>
				<Navlinks href="https://github.com/Kenramiscal1106/litera-blog" target="_blank">
					<svg width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12.8067 0C6.05299 0 0.593262 5.49998 0.593262 12.3042C0.593262 17.7432 4.0915 22.3472 8.94448 23.9767C9.55122 24.0991 9.77347 23.7119 9.77347 23.3862C9.77347 23.1009 9.75347 22.1232 9.75347 21.1044C6.35599 21.8379 5.64849 19.6377 5.64849 19.6377C5.10249 18.2117 4.2935 17.8452 4.2935 17.8452C3.1815 17.0914 4.3745 17.0914 4.3745 17.0914C5.60799 17.1729 6.25524 18.3544 6.25524 18.3544C7.34698 20.2284 9.10623 19.6989 9.81397 19.3729C9.91497 18.5784 10.2387 18.0284 10.5825 17.7229C7.87273 17.4377 5.02174 16.3784 5.02174 11.6522C5.02174 10.3077 5.50674 9.20771 6.27524 8.35222C6.15399 8.04672 5.72924 6.78347 6.39674 5.09273C6.39674 5.09273 7.42798 4.76673 9.75322 6.35572C10.7487 6.08639 11.7754 5.94938 12.8067 5.94823C13.838 5.94823 14.8892 6.09097 15.86 6.35572C18.1854 4.76673 19.2167 5.09273 19.2167 5.09273C19.8842 6.78347 19.4592 8.04672 19.3379 8.35222C20.1267 9.20771 20.5917 10.3077 20.5917 11.6522C20.5917 16.3784 17.7407 17.4172 15.0107 17.7229C15.4557 18.1099 15.8397 18.8432 15.8397 20.0044C15.8397 21.6544 15.8197 22.9787 15.8197 23.3859C15.8197 23.7119 16.0422 24.0991 16.6487 23.9769C21.5017 22.3469 24.9999 17.7432 24.9999 12.3042C25.0199 5.49998 19.5402 0 12.8067 0Z"
						/>
					</svg>
				</Navlinks>
			</div>
			<button
				class="duration-175 var-sm rounded-md fill-neutral-500 p-2 transition-colors hover:bg-neutral-200 hover:fill-neutral-600 active:bg-neutral-300 active:fill-neutral-700 sm:hidden"
				onclick={() => nav.openMenu()}
			>
				<Hamburger />
			</button>
		</div>
	</div>
	{#if nav.hasScrollIndicator}
		<div class="absolute bottom-0 left-0 h-2 w-full bg-primary-100">
			<div
				class="absolute left-0 top-0 h-full bg-gradient-to-r from-primary-800 to-primary-500"
				style="width:{progPercent * 100}%"
			></div>
		</div>
	{/if}
</nav>
