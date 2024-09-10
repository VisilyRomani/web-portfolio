<svelte:head>
	<title>Michael Wong</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="container">
	<h1>
		<p>Hi, I am</p>
		Michael Wong
	</h1>
	<!-- <h1>PLACEHOLDER</h1> -->
</div>

<style>
	h1 {
		all: unset;
		padding: 0;
		font-size: min(9vw, 7em);
		font-family: 'PWScratched';
		text-align: center;
	}
	.container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-around;
		height: calc(100vh - 83px);
	}

	@media (max-height: 768px) {
		.container {
			height: calc(100vh - 119px);
		}
	}
	p{
		margin-top: 0;
	}

	h1 p {
		font-family: 'HelloEngineer';
	}
</style>
