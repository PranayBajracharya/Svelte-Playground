<script lang="ts">
	import { FLIP_TIME, techArray } from '$lib/data/memory';
	import { formatTime, shuffleArray } from '$lib/utils/common';
	import type { TileSchema } from 'src/schema/interface';
	import Tile from './Tile.svelte';

	const randomisedTechArray = shuffleArray(techArray);
	const pairedTechArray = [...randomisedTechArray, ...randomisedTechArray];
	const randomisedPair = shuffleArray(pairedTechArray);
	let finalTechArray = randomisedPair.map((tech, index) => ({
		name: tech,
		index,
		done: false
	}));

	let stack: TileSchema[] = [];
	let reset = false;
	let score = 0;
	let moves = 0;
	let time = 0;

	const handleFlip = (event: { detail: TileSchema }) => {
		if (stack.length > 0 && stack[0].index === event.detail.index) {
			stack.pop();
			stack = stack;
			return;
		}
		stack = [...stack, event.detail];
	};

	$: if (stack.length > 1) {
		moves += 1;

		/**
		 * Update when match
		 */
		if (stack[0].name === stack[1].name) {
			const newValue0 = {
				...finalTechArray[stack[0].index],
				done: true
			};
			const newValue1 = {
				...finalTechArray[stack[1].index],
				done: true
			};
			finalTechArray[stack[0].index] = newValue0;
			finalTechArray[stack[1].index] = newValue1;

			score += 1;
			finalTechArray = finalTechArray;
		}

		stack = [];
		setTimeout(() => {
			reset = true;
		}, FLIP_TIME);
	} else {
		reset = false;
	}

	const timer = setInterval(() => {
		time += 10;
	}, 10);
</script>

<svelte:head>
	<title>Memory</title>
	<meta name="description" content="Svelte practice" />
</svelte:head>

<div class="flex flex-col m-auto px-6">
	<div class="flex justify-between items-center">
		<h1>Memory</h1>
		<div class="div">
			<button class="bg-amber-300 text-zinc-900 py-2 px-4 rounded-lg">New game</button>
		</div>
	</div>
	<div class="my-6">
		<div class="grid grid-cols-5 sm:grid-cols-6 gap-2 sm:gap-6">
			{#each finalTechArray as tech}
				<Tile {tech} {reset} on:flip={handleFlip} />
			{/each}
		</div>
	</div>
	<div>
		<div class="flex justify-around">
			<div
				class="flex justify-between w-44 max-w-[45%] gap-2 bg-amber-300 text-zinc-900 py-2 px-4 rounded-lg"
			>
				<h3 class="">Time:</h3>
				<h3 class="">{formatTime(time)}</h3>
			</div>
			<div
				class="flex justify-between w-44 max-w-[45%] gap-2 bg-amber-300 text-zinc-900 py-2 px-4 rounded-lg"
			>
				<h3 class="">Moves:</h3>
				<h3 class="">{moves}</h3>
			</div>
		</div>
	</div>
</div>

<style>
</style>
