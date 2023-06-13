<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="flex flex-1 flex-col items-center">
		<slot />
	</main>

	<footer class="p-2 text-center sm:p-3">
		<p>
			Visit my <a
				href="https://github.com/pranaybajracharya"
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold"
			>
				GitHub</a
			> to check my other projects
		</p>
	</footer>
</div>
