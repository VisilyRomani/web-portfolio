<script lang="ts">
	import BurgerButton from '$lib/components/BurgerButton.svelte';
	import '../main.css';
	import { page } from '$app/stores';
	let toggle = false;
	const toggleNav = () => {
		toggle = !toggle;
	};
</script>

<nav class="main-nav">
	<a href="/">
		<h1>MW</h1>
	</a>
	<ul class="main-container">
		<li>
			<a class="link {$page.url.pathname === '/' && 'active'}" href="/">Home</a>
		</li>
		<li>
			<a class="link {$page.url.pathname === '/projects' && 'active'}" href="/projects">Projects</a>
		</li>

		<li>
			<a class="link {$page.url.pathname === '/about' && 'active'}" href="/about">ABOUT</a>
		</li>
		<li>
			<a class="link {$page.url.pathname === '/contact' && 'active'}" href="/contact">CONTACT</a>
		</li>
	</ul>
</nav>
<nav class="mobile-nav">
	<a href="/" class="title">
		<h1>MW</h1>
	</a>
	<div class="burger-container">
		<BurgerButton bind:toggle />
	</div>
	<ul class="mobile-container {toggle ? 'nav-active' : ''}">
		<li class="list">
			<a class="mobile-link" on:click={toggleNav} href="/">Home</a>
		</li>
		<li class="list">
			<a class="mobile-link" on:click={toggleNav} href="/projects">Projects</a>
		</li>
		<li class="list">
			<a class="mobile-link" on:click={toggleNav} href="/about">ABOUT</a>
		</li>
		<li class="list">
			<a class="mobile-link" on:click={toggleNav} href="/contact">CONTACT</a>
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
	@font-face {
		font-family: 'StarzyDarzy';
		src: url('/fonts/StarzyDarzy.ttf');
	}

	li {
		display: flex;
		align-items: center;
	}

	.link {
		font-family: 'HelloEngineer';
		text-align: center;
		padding: 0.2em;
		transition: 0.4s ease;
		margin-bottom: 3px;

		display: inline-block;
		position: relative;
		padding-bottom: 3px;
		margin-right: 10px;
		scale: 1;
	}
	.active,
	.link:hover {
		scale: 1.3;
	}
	.link:hover:after {
		width: 100%;
		background: white;
	}
	.active.link:after {
		width: 100%;
		background: white;
	}

	.link:after {
		content: '';
		display: block;
		margin: auto;
		height: 1px;
		width: 0px;
		background: transparent;
		transition: width 0.5s ease, background-color 0.5s ease;
	}

	.mobile-link {
		font-family: 'HelloEngineer';
		text-align: center;
		border-bottom: 1px solid;
		padding: 0.2em;
		transition: 0.4s;
	}
	.mobile-link:hover {
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.24);
	}
	a {
		color: white;
		font-size: xx-large;
		text-decoration: none;
		display: flex;
	}
	h1 {
		text-align: center;
		padding: 0;
		font-size: 40px;
		font-family: 'PWScratched';
		margin-top: auto;
		margin-bottom: auto;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 1em;
	}

	.main-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
	}
	.mobile-nav {
		margin: 0;
		position: relative;
		z-index: 9;
		padding: 0;
		transition: 0.4s;
	}

	.mobile-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		left: 100%;
		background-color: #35637c;
		box-shadow: 0 0 500px rgba(0, 13, 37, 0.9) inset;
		grid-auto-columns: 1;
		padding: 0;
		margin: 0;
		height: 100%;
		width: 100%;
		transition: 0.4s;
		gap: 2em;
		padding-top: 3em;
	}
	.mobile-nav .nav-active {
		left: 0;
	}

	.burger-container {
		position: absolute;
		right: 1em;
		top: 1em;
		z-index: 999;
	}
	.title {
		display: flex;
		justify-content: center;
		margin: 1em;
		padding-bottom: 10px;
		border-bottom: 1px rgba(255, 255, 255, 0.455) solid;
	}

	.main-nav {
		border-bottom: 1px rgba(255, 255, 255, 0.455) solid;
		margin-left: 1em;
		margin-right: 1em;
		height: 50px;
	}

	@media (max-width: 768px) {
		.main-nav {
			display: none;
		}
	}
	@media (min-width: 768px) {
		.mobile-nav {
			display: none;
		}
	}
</style>
