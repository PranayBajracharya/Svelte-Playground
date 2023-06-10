<script lang="ts">
	import { FLIP_TIME, techArray } from '$data/memory';
	import { formatTime, shuffleArray } from '$utils/common';
	import type { TileSchema } from '$schema/types/memory';
	import Tile from './Tile.svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

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
	let hasTimerStarted = false;

	let timer: NodeJS.Timer;

	const startTimer = () => {
		timer = setInterval(() => {
			time += 10;
		}, 10);
	};

	const handleFlip = (event: { detail: TileSchema }) => {
		if (!hasTimerStarted) {
			startTimer();
			hasTimerStarted = true;
		}

		if (stack.length > 0 && stack[0].index === event.detail.index) {
			stack.pop();
			stack = stack;
			return;
		}
		stack.push(event.detail);
		stack = stack;
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

	const handleComplete = async () => {
		clearInterval(timer);
		const { data } = get(page);

		if (!data.session) {
			console.log('Not logged in');
		}
		await fetch('/api/memory', {
			method: 'POST',
			body: JSON.stringify({
				email: data.session?.user?.email,
				// name: data.session?.user?.name,
				moves,
				time
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};

	$: if (score === 15) {
		handleComplete();
	}
</script>

<svelte:head>
	<title>Memory</title>
	<meta name="description" content="Svelte practice" />
</svelte:head>

<div class="mb-6">
	<div class="grid grid-cols-5 gap-2 sm:grid-cols-6 sm:gap-6">
		{#each finalTechArray as tech}
			<Tile {tech} {reset} on:flip={handleFlip} />
		{/each}
	</div>
</div>
<div>
	<div class="flex justify-around">
		<div
			class="flex w-44 max-w-[45%] justify-between gap-2 rounded-lg bg-amber-300 py-2 px-4 text-zinc-900"
		>
			<h3>Time:</h3>
			<h3>{formatTime(time)}</h3>
		</div>
		<div
			class="flex w-44 max-w-[45%] justify-between gap-2 rounded-lg bg-amber-300 py-2 px-4 text-zinc-900"
		>
			<h3>Moves:</h3>
			<h3>{moves}</h3>
		</div>
	</div>
</div>
