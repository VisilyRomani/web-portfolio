<script>
	import Project from '$lib/components/Project.svelte';
	import projectData from '$lib/data/data.json';
</script>

<div class="container">
	{#each projectData as project}
		<Project
			description={project.description}
			image={project.image}
			technologies={project.technologies}
			title={project.title}
			link={project.link}
		/>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr;
	}
</style>
