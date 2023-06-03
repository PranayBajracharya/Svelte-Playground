<script lang="ts">
	import type { SupabaseResponse } from '$schema/types';
	import type { Score } from '$schema/types/memory';

	export let data: SupabaseResponse<Score[]>;

	const { data: scoreList } = data;
</script>

<table>
	<thead>
		<tr>
			<th>Email</th>
			<th>Moves</th>
			<th>Time</th>
		</tr>
	</thead>
	{#each scoreList as score}
		<tr>
			<td>{score.email}</td>
			<td>{score.moves}</td>
			<td>{score.time}</td>
		</tr>
	{/each}
</table>
