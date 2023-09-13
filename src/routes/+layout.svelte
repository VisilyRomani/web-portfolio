<script lang="ts">
	const toggle = (e: Event) => {
		const html = document.getElementById('html-theme');
		if (html) {
			if ((e.target as HTMLInputElement).checked) {
				html.setAttribute('data-theme', 'dark');
			} else {
				html.setAttribute('data-theme', 'light');
			}
		}
	};
</script>

<nav style="display:flex; align-items:center; margin:1em">
	<h1 style="padding:0; margin:0">Michael Wong</h1>
	<div style="display: flex; gap:1em;">
		<a href="/projects">PROJECTS</a>
		<a href="/about">RESUME</a>
		<a href="/about">ABOUT</a>
		<a href="/contact">CONTACT</a>
		<input type="checkbox" on:change={toggle} />
	</div>
</nav>

<slot />
