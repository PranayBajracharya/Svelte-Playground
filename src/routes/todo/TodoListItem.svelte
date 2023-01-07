<script lang="ts">
	export let todo: import('src/schema/interface').TodoSchema;

	const handleDone = () => {};

	const handleRemove = () => {};
</script>

<li>
	<h3>
		{todo.name}
	</h3>
	<div class="buttonGroup">
		<button on:click={handleDone}>✅</button>
		<button on:click={handleRemove}>❌</button>
	</div>
</li>

<style>
	li {
		background: radial-gradient(var(--color-text), rgb(208, 208, 255));
		color: black;
		text-align: left;
		padding: 8px 12px;
		margin: 10px 0px;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h3 {
		margin: 0;
	}
	.buttonGroup {
		display: flex;
	}
	button {
		border: none;
		background: none;
		cursor: pointer;
		padding: 0;
		margin-left: 8px;
	}
</style>
