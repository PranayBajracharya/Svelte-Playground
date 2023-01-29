<script lang="ts">
	import { techArray } from '$lib/data/memory';
	import { shuffleArray } from '$lib/utils/common';
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

	const handleFlip = (event: { detail: TileSchema }) => {
		console.log(event.detail);
		stack = [...stack, event.detail];
	};

	$: if (stack.length > 1) {
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
		}, 500);
	} else {
		reset = false;
	}
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
				<h3 class="">0:00</h3>
			</div>
			<div
				class="flex justify-between w-44 max-w-[45%] gap-2 bg-amber-300 text-zinc-900 py-2 px-4 rounded-lg"
			>
				<h3 class="">Score:</h3>
				<h3 class="">{score}</h3>
			</div>
		</div>
	</div>
</div>

<style>
</style>
