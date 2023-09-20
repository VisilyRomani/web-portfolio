<script lang="ts">
	export let description = '';
	export let image = '';
	export let title = '';
	export let technologies: string[] = [];
	export let link = '';
</script>

<div class="component">
	<div class="container">
		<a href={link} class="overlay">{title}</a>
		<img class="image" src={image} alt="" />
	</div>
	<p>{description}</p>
</div>

<style>
	.component {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1em;
		margin: 3em;
		border: 1px solid rgba(255, 255, 255, 0.413);
		padding: 1em;
	}
	.component:nth-child(2) {
		flex-direction: row-reverse;
	}
	.container {
		position: relative;
		display: flex;
		flex-direction: row;
	}
	.overlay {
		font-family: 'PWScratched';
		position: absolute;
		font-weight: 600;
		bottom: 0;
		background: rgba(0, 0, 0, 0.685);
		color: #f1f1f1;
		width: 100%;
		height: 100%;
		transition: 0.5s ease;
		opacity: 0;
		color: white;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: xx-large;
		text-align: center;
	}
	.image {
		display: block;
		width: 300px;
		object-fit: contain;
	}
	.container:hover .overlay {
		opacity: 1;
	}
	p {
		font-family: 'StarzyDarzy';
		font-size: xx-large;
		padding-left: 2em;
		padding-right: 2em;
		letter-spacing: 2px;
	}
	@media (max-width: 768px) {
		.component {
			flex-wrap: wrap;
		}
	}
</style>
