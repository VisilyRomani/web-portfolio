<svelte:head>
	<title>Contact</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="container">
	<div class="left">
		<p>Send me a message</p>
		<a class="contact" href="mailto:michael4161@hotmail.com"> Email</a>
	</div>
	<div class="right">
		<p>My history in one pdf</p>
		<a class="contact" target="_blank" href="/Michael Wong Resume.pdf"> Resume</a>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-family: 'HelloEngineer';
		font-size: 4em;
		flex-wrap: wrap;
		height: calc(100vh - 83px);
	}

	@media (max-height: 768px) {
		.container {
			height: calc(100vh - 119px);
		}
	}

	.left {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.right {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.contact {
		all: unset;
		transition: scale 0.4s ease;
		font-family: 'PWScratched';
		border-radius: 20px;
		font-size: 1.5em;
	}
	p {
		font-size: 0.7em;
	}

	.contact:hover {
		scale: 1.2;
	}
</style>
