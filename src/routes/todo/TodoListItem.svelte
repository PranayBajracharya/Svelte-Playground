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
		background: white;
		color: black;
		text-align: left;
		padding: 5px 10px;
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
