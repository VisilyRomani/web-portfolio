<script lang="ts">
	const toggle = () => {
		const html = document.getElementById('html-theme');
		if (html) {
			if (html?.attributes.getNamedItem('data-theme')?.value === 'light') {
				html?.setAttribute('data-theme', 'dark');
			} else {
				html?.setAttribute('data-theme', 'light');
			}
		}
	};
</script>

<button on:click={toggle}>Theme</button>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
