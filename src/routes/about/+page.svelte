<svelte:head>
	<title>About</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<div class="container">
	<h1>
		"An individual is the sum of their choices, the echo of their passions, and the silhouette of
		their dreams."
	</h1>

	<div class="text-body">
		<p>
			I'm Michael Wong, a web developer with a Bachelor of Science degree in Computer Science from
			the University of Saskatchewan. My fascination with the fusion of functionality and aesthetics
			in web design led me to specialize in creating user-centric digital experiences. I thrive in
			the dynamic world of web development, where my commitment to lifelong learning and
			adaptability fuels my passion for mastering cutting-edge technologies. Collaboration is
			central to my approach, and I value my role in diverse, cross-functional teams. As a dedicated
			learner and problem solver, my goal is to craft web solutions that not only meet but exceed
			expectations, enhancing both usability and visual appeal. I'm excited to be part of the
			ever-evolving digital landscape and eager to contribute my skills to your projects.
		</p>
		<div class="card">
			<img src="/image/cat.jpg" alt=""/>
			<p>
				cat
			</p>
		</div>
	</div>
</div>

<style>
	.card{
		width: 300px;
		height: 300px;
		background-color: white;
		padding: 1em;
		transform: rotate(-5deg);
	}
	img{
		width:100%
	}
	.text-body {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 4em;
		margin: 3em;
	}
	.container {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		text-align: center;
		padding: 0;
		font-size: 30px;
		font-family: 'PWScratched';
		max-width: 70%;
	}
	p {
		font-family: 'StarzyDarzy';
		font-size: x-large;
		max-width: 70%;
		min-width: 300px;
		letter-spacing: 2px;
	}
</style>
