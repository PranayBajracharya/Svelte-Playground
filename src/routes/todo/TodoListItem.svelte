<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { TodoSchema } from '$schema/types/todo';

	export let todo: TodoSchema;

	const dispatch = createEventDispatcher();

	const handleDone = () => {};

	const handleRemove = () => {
		dispatch('delete', { id: todo.id });
	};
</script>

<li>
	<h3 class="m-0">
		{todo.name}
	</h3>
	<div class="flex">
		<!-- <button on:click={handleDone}>✅</button> -->
		<button on:click={handleRemove}>❌</button>
	</div>
</li>

<style>
	li {
		background: radial-gradient(var(--color-text), rgb(208, 208, 255) 160%);
		color: black;
		text-align: left;
		padding: 8px 12px;
		margin: 10px 0px;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
		padding: 0;
		margin-left: 8px;
	}
</style>
