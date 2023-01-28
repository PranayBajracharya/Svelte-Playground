<script lang="ts">
	import Tile from './Tile.svelte';

	const array = Array.from(Array(30).keys());
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
			{#each array as a}
				<Tile />
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
				<h3 class="">0</h3>
			</div>
		</div>
	</div>
</div>

<style>
</style>
