<script lang="ts">
	import BlogDisplay from '$lib/components/BlogDisplay.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog | Critera</title>
</svelte:head>
<div class="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
	{#each data.posts as post}
		<BlogDisplay {...post} />
	{/each}
</div>
<!-- 
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea minus maxime explicabo eum
	praesentium tempore doloribus quae repellat, repellendus ex sapiente, distinctio beatae sed? Sed
	totam accusantium tenetur expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
	veniam accusantium maxime molestiae commodi, harum corporis voluptatum ipsa beatae? Optio tempore
	voluptatem deserunt similique saepe, unde corporis odit asperiores! Obcaecati? Lorem ipsum, dolor
	sit amet consectetur adipisicing elit. Sapiente obcaecati rerum odio, quidem deleniti velit,
	dignissimos perferendis repellat adipisci atque necessitatibus, nesciunt vitae quisquam voluptatem
	vero aperiam enim cum eos.
</p>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias neque quae hic maiores, ullam
	ab deleniti sunt ducimus incidunt porro repellendus distinctio eos, voluptates voluptatum facere
	fugiat esse ea.
</p>
<p>
	Ipsam magnam maxime, necessitatibus pariatur quo eligendi? Ducimus alias quasi necessitatibus
	optio dolorem nam vitae cumque totam animi enim, repellat labore dolorum ipsum consequatur ab
	praesentium. Nam, rem. Nobis, aliquam.
</p>
<p>
	Voluptatem eos ipsam minus harum placeat, accusantium, repudiandae laudantium quaerat alias,
	laborum maiores quidem delectus modi quis. Vel veniam, provident ad rerum dolores deleniti aliquid
	harum voluptas dicta perspiciatis autem.
</p>
<p>
	Recusandae saepe nulla similique velit earum asperiores consequatur, libero blanditiis suscipit
	voluptatibus exercitationem beatae alias aut. Explicabo dolores voluptas ut praesentium. Saepe id
	ab ipsa optio voluptas minima ea corrupti?
</p>
<p>
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolor molestiae laudantium!
	Doloribus hic veniam ipsa nemo, recusandae eum perferendis incidunt vero debitis optio. Eligendi
	culpa accusamus facere possimus nihil ad sint neque quisquam consectetur iure sit velit, cumque
	eaque beatae nulla asperiores, tempore voluptatibus impedit minima repellendus id voluptatem. Aut
	voluptatum minus asperiores consectetur inventore explicabo neque dicta amet quis, magni error
	placeat alias dignissimos nemo deserunt impedit repudiandae voluptate necessitatibus debitis ea
	recusandae optio. Illo est nemo maxime atque facere reiciendis pariatur nisi numquam officia?
	Vitae vel, expedita maiores facere iste optio error in, explicabo, quibusdam ratione architecto.
</p>
<p>
	Cupiditate, illo minus. Eos accusantium harum at fuga magni placeat rerum quaerat illo expedita
	ipsa iste laborum inventore rem, illum quibusdam ab, incidunt velit similique ullam. Recusandae
	tempore corporis in tenetur, suscipit fuga a laudantium sapiente quam voluptatibus? Quae, quis
	asperiores perferendis dicta ipsa officiis assumenda id illum fugit ratione sapiente aperiam
	voluptas cum accusamus voluptatibus reiciendis quas ut labore, saepe esse nisi, molestias iusto?
	Est beatae assumenda at nulla temporibus aspernatur porro autem et cumque repudiandae. Adipisci,
	odit iure quis magnam sed facilis nobis. Architecto quibusdam pariatur non labore ratione culpa
	maiores. Libero enim totam, quas voluptas optio dolore.
</p>
<p>
	Ratione, optio nemo placeat quasi facere nihil minus? Qui illo consequatur asperiores consectetur
	nesciunt saepe laudantium sit numquam adipisci? Explicabo commodi tenetur eius. Cupiditate impedit
	beatae itaque error accusantium molestias tempora reiciendis, fuga culpa delectus, eos odio vero,
	autem rerum! Similique dolore ipsam consequuntur tempore aperiam rem odit ipsum magnam fugit. Quod
	suscipit unde nesciunt iusto, aliquid a adipisci expedita similique quis dolorem nihil nobis
	architecto accusamus alias dolorum, qui sequi recusandae eligendi voluptas distinctio accusantium
	est pariatur saepe inventore! Cumque suscipit autem animi, accusamus, consequuntur ex saepe ut
	esse officia recusandae nobis eum sint? Cumque, reiciendis. Deleniti, ab cum?
</p>
<p>
	Exercitationem veniam error, consequatur delectus ut dolorem animi corrupti accusantium reiciendis
	asperiores fuga quaerat laudantium saepe harum voluptatum voluptas odio, libero non voluptatem
	similique iusto natus labore tenetur est. Illo, sunt iusto enim assumenda aspernatur facere iste
	illum itaque, magnam deserunt et quaerat ducimus accusantium laborum maxime quod repellendus
	molestias dolores! Quis laudantium est voluptas ipsa dolores dolor optio mollitia aut labore odio.
	Necessitatibus est delectus laudantium placeat repellat expedita, inventore officia voluptatem
	mollitia sapiente deserunt harum quidem accusamus quod aperiam similique eveniet? At expedita,
	culpa possimus similique quibusdam, dolore nesciunt inventore aperiam porro, quas sit quaerat
	fugiat ab corrupti?
</p> -->
