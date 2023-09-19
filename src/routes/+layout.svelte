<script lang="ts">
	import '../main.css';

	// unplugin-icons bug https://github.com/unplugin/unplugin-icons/issues/308

	//@ts-ignore
	import BurgerIcon from '~icons/quill/hamburger';

	let mobileToggle = false;
</script>

<nav>
	<a href="/">
		<h1>Michael Wong</h1>
	</a>
	<ul class="nav-container">
		<!-- <BurgerIcon style="font-size: 3em" /> -->

		<li>
			<a class="link" href="/projects">PROJECTS</a>
		</li>
		<li>
			<a class="link" href="/about">RESUME</a>
		</li>
		<li>
			<a class="link" href="/about">ABOUT</a>
		</li>
		<li>
			<a class="link" href="/contact">CONTACT</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	@font-face {
		font-family: 'HelloEngineer';
		src: url('/fonts/HelloEngineer.ttf');
	}
	@font-face {
		font-family: 'PWScratched';
		src: url('/fonts/PWScratchedfont.ttf');
	}

	.nav-container {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: end;
		gap: 1em;
		list-style-type: none;
	}

	@media (min-width: 700px) {
		.nav-container {
			flex-direction: row;
		}
	}
	li {
		display: flex;
		align-items: center;
	}
	.link {
		font-family: 'HelloEngineer';
		text-align: center;
		border: 1px solid;
		padding: 0.2em;
	}
	a {
		color: white;
		font-size: xx-large;
		text-decoration: none;
	}
	h1 {
		text-align: center;
		padding: 0;
		font-size: 40px;
		font-family: 'PWScratched';
		margin: 0;
		margin-top: auto;
		margin-bottom: auto;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1em;
	}
</style>
