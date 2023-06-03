<script>
	import Dropdown from './Dropdown.svelte';
</script>

<div class="flex w-[630px] max-w-[90%] flex-col">
	<div class="mb-5 flex items-center justify-between">
		<div class="relative flex">
			<h1>Memory</h1>
			<Dropdown />
		</div>
		<div>
			<button class="rounded-lg bg-amber-300 py-2 px-4 text-zinc-900">New game</button>
		</div>
	</div>
	<slot />
</div>
