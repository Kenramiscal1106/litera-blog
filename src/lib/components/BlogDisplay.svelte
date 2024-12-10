<script lang="ts">
	import Button from './Button.svelte';
</script>

<article class="my-6 overflow-hidden rounded-md bg-warm-100">
	<a href="/blog/demo">
		<div class="aspect-video w-auto bg-gradient-to-tr from-primary-900 to-primary-600"></div>
		<div class="flex flex-col gap-2 px-5 py-6">
			<h1 class="text-3xl text-primary-800 sm:text-4xl">Blog title</h1>
			<div class="flex text-base text-warm-600">
				<div>December 18, 2024 • 3 mins read</div>
			</div>
			<div class="text-base leading-relaxed text-warm-700">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magni odit perspiciatis
				officiis debitis iusto quam ut accusantium enim et.
			</div>
			<div class="flex items-center gap-2 text-base text-warm-700">
				<div
					class="aspect-square w-8 rounded-sm bg-gradient-to-tr from-primary-900 to-primary-600"
				></div>
				<div>By Ken Ramiscal</div>
			</div>
		</div>
	</a>
	<!-- <img src="" alt="" /> -->
</article>
