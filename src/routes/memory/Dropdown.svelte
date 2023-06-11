<script lang="ts">
	import { page } from '$app/stores';
	import Down from '$lib/components/icons/Down.svelte';
	import { goto } from '$app/navigation';

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

	function handleNavigation(link: string) {
		goto(link);
		isOpen = !isOpen;
	}
</script>

<button class="text-3xl" on:click={() => (isOpen = !isOpen)}>
	<Down />
</button>

{#if isOpen}
	<ul class="absolute top-full right-0 z-10 bg-slate-600">
		{#each dropDownList as dropdown}
			<button
				class="group w-full cursor-pointer p-4"
				class:bg-custom-primary={$page.url.pathname === dropdown.link}
				on:click={() => handleNavigation(dropdown.link)}
			>
				<span class="group-hover:underline" class:text-white={$page.url.pathname === dropdown.link}
					>{dropdown.text}
				</span>
			</button>
		{/each}
	</ul>
{/if}
