<script lang="ts">
	import autoAnimateTS from '@formkit/auto-animate';
	const autoAnimate = autoAnimateTS as any;

	import type { TodoSchema } from 'src/schema/interface';
	import TodoListItem from './TodoListItem.svelte';
	import '../styles.css';

	let text = '';
	let error = '';
	let todoList: TodoSchema[] = [];
	const handleSubmit = () => {
		if (text.trim() === '') {
			error = 'Required!';
			return;
		}

		todoList = [
			...todoList,
			{
				id: Math.random(),
				name: text
			}
		];
		text = '';
	};

	const removeError = () => {
		error = '';
	};

	const handleDelete = (event: CustomEvent) => {
		todoList = todoList.filter((todo) => todo.id !== event.detail.id);
	};
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Svelte practice" />
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="my-4">To do list</h1>
	<div class="max-w-[90vw] w-[24rem]">
		<form on:submit|preventDefault={handleSubmit}>
			<input type="text" class={error ? 'error' : ''} bind:value={text} on:input={removeError} />
		</form>
		<div>
			<ul use:autoAnimate>
				{#each todoList as todo (todo.id)}
					<TodoListItem {todo} on:delete={handleDelete} />
				{/each}
			</ul>
		</div>
	</div>
</div>

<style>
	input {
		outline: none;
		padding: 6px 10px;
		width: 100%;
		border-radius: 4px;
		font-size: 1.17em;
		color: black;
	}

	input.error {
		border: 2px solid red;
	}
</style>
