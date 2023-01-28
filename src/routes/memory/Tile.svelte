<script lang="ts">
	import svelte from '$lib/icons/svelte.svg';
	import astro from '$lib/icons/astro.svg';

	let frontFaced = true;

	const handleFlipTile = () => {
		frontFaced = !frontFaced;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="aspect-square max-h-[10vh] rounded-full relative select-none" on:click={handleFlipTile}>
	<div
		class="grid place-items-center h-full w-full rounded-full bg-slate-100 tile"
		class:front-face={frontFaced}
		class:back-face={!frontFaced}
	>
		<img class="w-[50%]" src={svelte} alt="Svelte" />
	</div>
	<div
		class="grid place-items-center h-full w-full rounded-full bg-slate-600 tile"
		class:front-face={!frontFaced}
		class:back-face={frontFaced}
	>
		<img class="w-[50%]" src={astro} alt="Svelte" />
	</div>
</div>

<style>
	.tile {
		backface-visibility: hidden;
		transform-style: preserve-3d;
		transition: all 0.5s ease-in-out;
		top: 0;
		left: 0;
	}
	.front-face {
		position: relative;
		transform: rotateY(0deg);
	}
	.back-face {
		position: absolute;
		transform: rotateY(180deg);
	}
</style>
