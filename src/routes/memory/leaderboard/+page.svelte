<script lang="ts">
	import type { SupabaseResponse } from '$schema/types';
	import type { Score } from '$schema/types/memory';

	export let data: SupabaseResponse<Score[]>;

	const { data: scoreList } = data;
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Moves</th>
			<th>Time (sec)</th>
		</tr>
	</thead>
	{#each scoreList as score}
		<tr>
			<td>{score.name}</td>
			<td>{score.email}</td>
			<td>{score.moves}</td>
			<td>{score.time / 1000}</td>
		</tr>
	{/each}
</table>
