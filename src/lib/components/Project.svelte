<script lang="ts">
	export let description = '';
	export let image = '';
	export let title = '';
	export let link = '';
</script>

<div class="component">
	<div class="container">
		<a target="_blank" href={link} class="overlay">{title}</a>
		<img class="image" src={image} alt="" />
	</div>
	<p>{description}</p>
</div>

<style>
	.component {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 1em;
		margin: 3em;
		border: 1px solid rgba(255, 255, 255, 0.413);
		padding: 1em;
	}
	.component:nth-child(even) {
		flex-direction: row-reverse;
	}
	.container {
		position: relative;
		display: flex;
		flex-direction: row;
		z-index: 4;
	}
	.overlay {
		z-index: 5;

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
		width: 100%;
		max-width: 300px;
		object-fit: contain;
	}
	.container:hover .overlay {
		opacity: 1;
	}
	p {
		font-family: 'StarzyDarzy';
		font-size: xx-large;
		max-width: 700px;
		letter-spacing: 2px;
	}
	@media (max-width: 768px) {
		.component {
			flex-wrap: wrap;
		}
	}
</style>
