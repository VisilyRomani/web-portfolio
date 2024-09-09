<script>
	import Project from '$lib/components/Project.svelte';
	import projectData from '$lib/data/data.json';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="container">
	{#each projectData as project}
		<Project
			description={project.description}
			image={project.image}
			title={project.title}
			link={project.link}
		/>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		/* grid-template-columns: 1fr; */
		/* grid-auto-rows: 1fr; */
	}
</style>
