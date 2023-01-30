<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import astro from '$lib/icons/astro.svg';
	import type { TileSchema } from 'src/schema/interface';

	const dispatch = createEventDispatcher();

	export let tech: TileSchema;
	export let reset: boolean;

	let frontFaced = true;

	$: if (!tech.done && reset) {
		frontFaced = true;
	}

	$: if (tech.done) {
		frontFaced = false;
	}

	const handleFlipTile = () => {
		if (tech.done) return;
		dispatch('flip', tech);
		frontFaced = !frontFaced;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="aspect-square max-h-[10vh] rounded-full relative select-none" on:click={handleFlipTile}>
	<div
		class="grid place-items-center h-full w-full rounded-full bg-slate-700 tile"
		class:front-face={frontFaced}
		class:back-face={!frontFaced}
	>
		<img class="w-[50%]" src={astro} alt="Svelte" />
	</div>
	<div
		class="grid place-items-center h-full w-full rounded-full bg-slate-100 tile"
		class:front-face={!frontFaced}
		class:back-face={frontFaced}
	>
		<img class="w-[50%]" src={`/icons/${tech.name}.svg`} alt="Svelte" />
	</div>
</div>

<style>
	.tile {
		backface-visibility: hidden;
		transform-style: preserve-3d;
		transition: all 0.4s ease-in-out;
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
