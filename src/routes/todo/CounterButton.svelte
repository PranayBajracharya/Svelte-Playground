<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let ariaLabel: string;

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	class="flex w-16 items-center justify-center text-4xl hover:bg-1"
	aria-label={ariaLabel}
	on:click={handleClick}
>
	<slot />
</button>
