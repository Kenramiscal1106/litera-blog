<script lang="ts">
	import Author from '$lib/components/Author.svelte';

	const authors = [
		{
			name: 'Kierulf Babadilla',
			slug: 'kierulf-babadilla',
			role: 'Author'
		},
		{
			name: 'Ken Ramiscal',
			slug: 'ken-ramiscal',
			role: 'Author, Web Developer'
		},
		{
			name: 'Mark Vincent Ricalde',
			slug: 'mark-ricalde',
			role: 'Author'
		},
		{
			name: 'Kiera Althea Cunanan',
			slug: 'kiera-cunanan',
			role: 'Author'
		},
		{
			name: 'Hannieh Ley Garcia',
			slug: 'hannieh-garcia',
			role: 'Author'
		},
		{
			name: 'Chelsea Maunahan',
			slug: 'chelsea-maunahan',
			role: 'Author'
		},
		{ name: 'Camille Faith Ramilo', slug: 'camille-ramilo', role: 'Author' },
		{ name: 'Xuxa Tiara Sabido', role: 'Author', slug: 'xuxa-sabido' }
	];
</script>

<div class="m-auto flex max-w-3xl flex-col gap-4">
	<h1>Meet the Crew</h1>
	<div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
		{#each authors as author}
			<Author {...author} />
		{/each}
	</div>
</div>
