<script lang="ts">
	import Down from '$lib/components/icons/Down.svelte';

	let isOpen = false;
</script>

<button class="text-3xl" on:click={() => (isOpen = !isOpen)}>
	<Down />
</button>

{#if isOpen}
	<ul class="absolute top-full right-0 z-10 bg-slate-600">
		<li class="p-4">
			<a href="/memory">The Game</a>
		</li>
		<li>
			<a href="/memory/leaderboard">Leaderboard</a>
		</li>
	</ul>
{/if}
