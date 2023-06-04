<script lang="ts">
	import { page } from '$app/stores';
	import Dropdown from './Dropdown.svelte';

	let isGamePage: boolean;
	$: isGamePage = $page.url.pathname === '/memory';
</script>

<div class="flex w-[630px] max-w-[90%] flex-col">
	<div class="mb-5 flex items-center justify-between">
		<div class="relative flex">
			<h1>Memory</h1>
			<Dropdown />
		</div>
		{#if isGamePage}
			<div>
				<button class="rounded-lg bg-amber-300 py-2 px-4 text-zinc-900">New game</button>
			</div>
		{/if}
	</div>
	<slot />
</div>
