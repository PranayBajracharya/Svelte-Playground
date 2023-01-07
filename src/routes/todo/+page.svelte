<script lang="ts">
	import autoAnimateTS from '@formkit/auto-animate';
	const autoAnimate = autoAnimateTS as any;

	import type { TodoSchema } from 'src/schema/interface';
	import TodoListItem from './TodoListItem.svelte';
	import '../styles.css';

	let text = '';
	let error = '';
	let todoList: TodoSchema[] = [];
	const handleSubmit = (e: any) => {
		e.preventDefault();

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

<main>
	<h1>To do list</h1>
	<div class="container">
		<form on:submit={handleSubmit}>
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
</main>

<style>
	h1 {
		margin-block: 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 400px;
	}

	input {
		outline: none;
		padding: 6px 10px;
		width: 376px;
		border-radius: 4px;
		font-size: 1.17em;
	}

	input.error {
		border: 2px solid red;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 1200px;
		margin: auto;
	}
</style>
