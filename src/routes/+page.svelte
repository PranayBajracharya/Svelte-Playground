<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte practice" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} class="hero-image" type="image/webp" />
				<img src={welcome_fallback} class="hero-image" alt="Welcome" />
			</picture>
		</span>
		Welcome to My <br /><span class="primary-text">SvelteKit</span> <br />Practice Room
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.hero-image {
		/* filter: grayscale(1) contrast(1.2) sepia(1.2) drop-shadow(0px 0px 2px rgb(255, 223, 39)); */
		filter: grayscale(1) contrast(1.4) sepia(0) drop-shadow(0px 0px 2px rgb(20, 22, 39));
	}
</style>
