<script lang="ts">
	import { page } from '$app/stores';
	import Down from '$lib/components/icons/Down.svelte';

	let isOpen = false;

	let dropDownList = [
		{
			link: '/memory',
			text: 'The Game'
		},
		{
			link: '/memory/leaderboard',
			text: 'Leaderboard'
		}
	];

	let currentRoute = $page.url.pathname;
</script>

<button class="text-3xl" on:click={() => (isOpen = !isOpen)}>
	<Down />
</button>

{#if isOpen}
	<ul class="absolute top-full right-0 z-10 bg-slate-600">
		{#each dropDownList as dropdown}
			<li class="group p-4" class:bg-primary={currentRoute === dropdown.link}>
				<a
					class="group-hover:underline"
					class:text-white={currentRoute === dropdown.link}
					href={dropdown.link}>{dropdown.text}</a
				>
			</li>
		{/each}
	</ul>
{/if}
