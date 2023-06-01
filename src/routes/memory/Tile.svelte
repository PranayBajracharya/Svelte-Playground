<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import DefaultLogo from '$icons/svelte.svg';
	import type { TileSchema } from '$schema/interface';

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
<div
	class="relative aspect-square w-[60px] select-none rounded-full sm:w-[85px]"
	on:click={handleFlipTile}
>
	<div
		class="tile grid h-full w-full place-items-center rounded-full bg-slate-700"
		class:front-face={frontFaced}
		class:back-face={!frontFaced}
	>
		<img class="w-[50%] drop-shadow-md grayscale" src={DefaultLogo} alt="Svelte" />
	</div>
	<div
		class="tile grid h-full w-full place-items-center rounded-full bg-slate-100"
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
